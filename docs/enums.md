# Enum reference

> **Scope:** Every enum defined under `src/enum.*.fbs`, its base type, and its full value
> list. Open this when you need to know whether a value exists, what its ordinal is, or what
> width it serializes to. Tables/unions that reference these enums live in
> [schemas.md](schemas.md).

All enums live in the `enum` namespace. Numeric values are part of the wire format — append
new variants at the **end**, never reorder, renumber, or remove existing ones.

Default base type is **`byte`** (8-bit). `TimeZoneEnum` is the only exception (`short`).

## Data shape

### `DataTypeEnum` — column type tag

[enum.DataType.fbs](../src/enum.DataType.fbs). Used by `FieldTypeStruct.type`.

| Value | | Value | |
|---|---|---|---|
| `Unspecified` (0) | (no payload) | `Float64` | |
| `Int8` | | `Decimal` | needs `DecimalParametersStruct` |
| `Int16` | | `Date` | needs `DateParametersStruct` |
| `Int32` | | `Time` | needs `TimeParametersStruct` |
| `Int64` | | `Timestamp` | needs `TimestampParametersStruct` |
| `Float32` | | `Binary` | |
| | | `Utf8` | |

### `DecimalBitWidthEnum`

[enum.DecimalBitWidth.fbs](../src/enum.DecimalBitWidth.fbs). `_128`, `_256`.

### `DateUnitEnum`

[enum.DateUnit.fbs](../src/enum.DateUnit.fbs). `Second`, `Millisecond`.

### `TimeUnitEnum`

[enum.TimeUnit.fbs](../src/enum.TimeUnit.fbs). `Second`, `Millisecond`, `Microsecond`,
`Nanosecond`.

### `TimeZoneEnum` (base type: `short`)

[enum.TimeZone.fbs](../src/enum.TimeZone.fbs). `UTC`, `GMT`, then `GMT_m_12 … GMT_m_01`
(minus offsets) and `GMT_p_01 … GMT_p_14` (plus offsets). 28 variants. The `m`/`p` prefix
encodes minus/plus because FlatBuffers identifiers cannot contain `-` or `+`.

## Aggregation & ordering

### `AggregationTypeEnum`

[enum.AggregationType.fbs](../src/enum.AggregationType.fbs). Pinned `None = 0`.

`None`, `Count`, `CountDistinct`, `CountDistinctApprox`, `Sum`, `Avg`, `Min`, `Max`.

### `OrderTypeEnum`

[enum.OrderType.fbs](../src/enum.OrderType.fbs). Pinned `None = 0`.

`None`, `Ascending`, `Descending`.

## Tables & joins

### `TableTypeEnum`

[enum.TableType.fbs](../src/enum.TableType.fbs). `Table`, `Query`. `Json` and `Csv` are
commented out — preserved as comments so the ordinal numbering stays stable if they're ever
re-introduced.

### `JoinTypeEnum`

[enum.JoinType.fbs](../src/enum.JoinType.fbs). `Cross`, `Inner`, `Full`, `Left`, `Right`,
`FullOuter`, `LeftOuter`, `RightOuter`.

## Filters

### `FilterOperatorEnum`

[enum.FilterOperator.fbs](../src/enum.FilterOperator.fbs). `Or`, `And`, `None`. `None`
marks a leaf clause (no boolean combination at this level).

### `FilterTypeEnum`

[enum.FilterType.fbs](../src/enum.FilterType.fbs). `Expression`, `Keys`, `Named` — selects
which `FilterOptionsStruct` union variant the filter carries.

### `FilterNameEnum` (for `NamedParametersStruct`)

[enum.FilterName.fbs](../src/enum.FilterName.fbs). 13 named predicates:

`Equals`, `NotEquals`, `Contains`, `NotContains`, `StartsWith`, `EndsWith`, `Greater`,
`GreaterEqual`, `Less`, `LessEqual`, `IsNull`, `IsNotNull`, `Between`.

## Connectors

### `ConnectorTypesEnum`

[enum.ConnectorTypes.fbs](../src/enum.ConnectorTypes.fbs). Pinned `Postgres = 0`.

JDBC-family (all use `JDBCParametersStruct`): `Postgres`, `MySQL`, `MsSQL`, `MariaDB`,
`Oracle`, `Clickhouse`, `Druid`, `Ignite`, `Redshift`.

Specialized parameter structs: `BigQuery` → `BigQueryParametersStruct`,
`GoogleSheets` → `GoogleSheetsParametersStruct`,
`ElasticSearch` → `ElasticsearchParametersStruct`,
`MongoDB` → `MongoDBParametersStruct`,
`Snowflake` → `SnowflakeParametersStruct`.

The connector kind in `ConnectionOptionsStruct.connector` and the union variant in
`.parameters` must agree — see [schemas.md](schemas.md).
