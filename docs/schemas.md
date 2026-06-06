# Schema reference — tables, unions, HDOM envelope

> **Scope:** Every table and union defined under `src/document.*.fbs`. Open this when you
> need to know the exact field set or wire layout for a specific HDML construct. Enums are
> covered in [enums.md](enums.md); how downstream repos generate bindings is in
> [integration.md](integration.md).

All tables live in the `document` namespace. Cross-namespace references use
`enum.<Name>Enum`. Every type is one `.fbs` file under [../src/](../src/); the dot in the
filename is the namespace prefix.

## HDOM envelope

[document.HDOM.fbs](../src/document.HDOM.fbs) — the root of every HDML document.

```flatbuffers
table HDOMStruct {
  connections: [document.ConnectionStruct];
  models:      [document.ModelStruct];
  frames:      [document.FrameStruct];
}
```

A distributed HDML document is stitched together at ingest/query time by resolving each
`frame.source` URL — the path component before `?` names the file, the fragment after it
names the element (e.g. `source="/path/to/other.html?hdml-frame=base"`). Authoring order
inside an array is preserved.

## Connection — data sources

[document.Connection.fbs](../src/document.Connection.fbs)

A named data source. The `options.connector` enum selects which member of the
`ConnectionParametersStruct` union the `options.parameters` slot carries.

```flatbuffers
table ConnectionStruct {
  name:        string;
  description: string;
  options:     ConnectionOptionsStruct;   // { connector: enum.ConnectorTypesEnum, parameters: union }
}

union ConnectionParametersStruct {
  JDBCParametersStruct,            // Postgres, MySQL, MS SQL, MariaDB, Oracle, ClickHouse, Druid, Ignite, Redshift
  BigQueryParametersStruct,
  GoogleSheetsParametersStruct,
  ElasticsearchParametersStruct,
  MongoDBParametersStruct,
  SnowflakeParametersStruct,
}
```

Per-connector parameter tables (all in the same file):

| Variant | Fields |
|---|---|
| `JDBCParametersStruct` | `host: string`, `user: string`, `password: string`, `ssl: bool` |
| `BigQueryParametersStruct` | `project_id: string`, `credentials_key: string` |
| `GoogleSheetsParametersStruct` | `sheet_id: string`, `credentials_key: string` |
| `ElasticsearchParametersStruct` | `host: string`, `port: ushort`, `user: string`, `password: string`, `ssl: bool`, `region: string`, `access_key: string`, `secret_key: string` |
| `MongoDBParametersStruct` | `host: string`, `port: ushort`, `user: string`, `password: string`, `schema: string`, `ssl: bool` |
| `SnowflakeParametersStruct` | `account: string`, `user: string`, `password: string`, `database: string`, `role: string`, `warehouse: string` |

The `enum.ConnectorTypesEnum` lists all 14 supported connector kinds — see
[enums.md](enums.md).

## Model — domain (tables + joins)

[document.Model.fbs](../src/document.Model.fbs)

```flatbuffers
table ModelStruct {
  name:        string;
  description: string;
  tables:      [TableStruct];
  joins:       [JoinStruct];
}

table TableStruct {
  name:        string;
  description: string;
  type:        enum.TableTypeEnum;        // Table | Query (Json/Csv are commented out)
  identifier:  string;                    // table/view name OR raw SQL, depending on `type`
  fields:      [document.FieldStruct];
}

table JoinStruct {
  type:        enum.JoinTypeEnum;
  left:        string;                    // table name
  right:       string;                    // table name
  clause:      document.FilterClauseStruct;
  description: string;
}
```

`TableStruct.type` selects how `identifier` is interpreted: `Table` → physical
table/view name; `Query` → raw SQL.

## Frame — derived dataset

[document.Frame.fbs](../src/document.Frame.fbs)

A `SELECT` over a model or another frame.

```flatbuffers
table FrameStruct {
  name:        string;
  description: string;
  source:      string;                    // name of the source model or frame
  offset:      ulong;
  limit:       ulong;
  fields:      [document.FieldStruct];
  filter_by:   document.FilterClauseStruct;
  group_by:    [document.FieldStruct];
  split_by:    [document.FieldStruct];    // TODO(confirm: semantic of split_by vs group_by)
  sort_by:     [document.FieldStruct];
}
```

Frames chain — `source` can name a model or another frame.

## Field — column / projection

[document.Field.fbs](../src/document.Field.fbs)

A column on a table or a projection on a frame. `type.options` is selected by
`type.type` (the `DataTypeEnum`).

```flatbuffers
table FieldStruct {
  name:        string;
  description: string;
  origin:      string;                    // source column (when this is a passthrough)
  clause:      string;                    // SQL expression (when this is computed)
  type:        FieldTypeStruct;
  aggregation: enum.AggregationTypeEnum;  // None, Count, Sum, Avg, Min, Max, …
  order:       enum.OrderTypeEnum;        // None, Ascending, Descending (used in sort_by)
}

table FieldTypeStruct {
  type:    enum.DataTypeEnum;
  options: DataTypeOptionsStruct;
}

union DataTypeOptionsStruct {
  UnspecifiedParametersStruct,            // {}
  CommonParametersStruct,                 // { nullable: bool }
  DecimalParametersStruct,                // { nullable, scale: ushort, precision: ushort, bit_width: enum.DecimalBitWidthEnum }
  DateParametersStruct,                   // { nullable, unit: enum.DateUnitEnum }
  TimeParametersStruct,                   // { nullable, unit: enum.TimeUnitEnum }
  TimestampParametersStruct,              // { nullable, unit: enum.TimeUnitEnum, timezone: enum.TimeZoneEnum }
}
```

Conventional mapping (TODO(confirm: enforced by consumers, not by the schema)):
`DataTypeEnum.Unspecified` → `UnspecifiedParametersStruct`; `Decimal` → `Decimal…`;
`Date` → `Date…`; `Time` → `Time…`; `Timestamp` → `Timestamp…`; all other scalar types
→ `CommonParametersStruct`.

## FilterClause — predicate trees

[document.FilterClause.fbs](../src/document.FilterClause.fbs)

Recursive boolean tree used by `JoinStruct.clause` and `FrameStruct.filter_by`.

```flatbuffers
table FilterClauseStruct {
  type:     enum.FilterOperatorEnum;     // Or | And | None
  filters:  [FilterStruct];              // leaves at this level
  children: [FilterClauseStruct];        // nested clauses
}

table FilterStruct {
  type:    enum.FilterTypeEnum;          // Expression | Keys | Named
  options: FilterOptionsStruct;
}

union FilterOptionsStruct {
  ExpressionParametersStruct,            // { clause: string }                       — raw SQL
  KeysParametersStruct,                  // { left: string, right: string }          — used in joins
  NamedParametersStruct,                 // { name: FilterNameEnum, field, values }  — Equals, Contains, Between, …
}
```

`FilterOperatorEnum.None` is the leaf marker (a clause that holds only `filters` and no
`children` boolean operator). Combine via `And` / `Or` at the parent.

## FilesList — distributed-document transport

[document.FilesList.fbs](../src/document.FilesList.fbs)

Wraps a set of `.html`-flavored HDML source files for upload to HDIO-Server's dynamic-document
endpoint, with a parallel status structure for the response.

```flatbuffers
table FileStruct {
  name:    string;
  content: [ubyte];                      // raw file bytes
}

table DocumentFilesStruct {
  connections: [FileStruct];
  models:      [FileStruct];
  frames:      [FileStruct];
}

table DocumentFileStatusesStruct {
  name:    [string];                     // parallel arrays — name[i] / status[i] / message[i]
  status:  [string];
  message: [string];
}
```

This is the only schema in the repo whose role is **transport**, not document structure
proper. The HDIO-Server rewrite uses `DocumentFilesStruct` as the body of the dynamic-document
`POST` (see workspace root [CLAUDE.md §4.4](../../../CLAUDE.md)).

## Wire / on-disk contract

The same FlatBuffers tables are used for three roles, with no schema variant per role:

1. **Wire payloads** — HTTP requests/responses that carry HDML constructs.
2. **On-disk artifacts** — HDIO-Server's compiler emits FlatBuffers files (`usr/{tenant}/bin/…`).
3. **In-memory representation** — `@hdml/*` packages parse/manipulate via generated bindings.

A backwards-incompatible schema change (renaming a field, removing a union variant, reordering
an enum) therefore breaks all three at once. Append-only edits are safe; see
[integration.md](integration.md) for the rollout protocol.
