# HDML-Schemas

> Repo-root index. Always loaded — keep small. Open a [docs/](docs/) file for detail.

## What this repo is

The **FlatBuffers (`.fbs`) source of truth** for the HDML document format. It defines the
`HDOMStruct` envelope (HyperData Object Model) plus the tables, unions, and enums that every
other HDML repo serializes and deserializes against.

It is **schema-only**: no Go/TS/Rust code is built here. Consumers (the `@hdml/schemas` npm
package and `HDIO-Server`) run `flatc` against `src/*.fbs` to generate their own bindings —
[docs/integration.md](docs/integration.md). FlatBuffers tool version is pinned to
**v24.3.25** ([.devcontainer/Dockerfile](.devcontainer/Dockerfile)).

For the surrounding system (what HDML is, who else uses these schemas), see the workspace
root [../../CLAUDE.md](../../CLAUDE.md).

## Where to find what

| Looking for… | Open |
|---|---|
| Every table/union and what each field means (Connection, Model, Frame, Field, FilterClause, Include, FilesList, HDOM) | [docs/schemas.md](docs/schemas.md) |
| Every enum and its allowed values (DataType, ConnectorTypes, FilterName, JoinType, TimeZone, …) | [docs/enums.md](docs/enums.md) |
| How downstream repos generate bindings; how a schema change rolls out across the stack | [docs/integration.md](docs/integration.md) |
| How to set up locally, validate a `.fbs` edit, add a new type | [docs/development.md](docs/development.md) |

## Quickstart

```bash
# Inside the devcontainer (flatc 24.3.25 already installed).
flatc --binary --schema src/document.HDOM.fbs              # syntax-check the root schema
flatc --ts --ts-omit-entrypoint -o /tmp/out \
      -I src src/*.fbs                                     # smoke-test TS codegen
flatc --go --go-module-name example.com/probe \
      -o /tmp/out -I src src/*.fbs                         # smoke-test Go codegen
```

See [docs/development.md](docs/development.md) for the full local workflow.

## Repo layout

| Path | What it is |
|---|---|
| [src/](src/) | All `.fbs` schemas. Two namespaces: `document.*.fbs` (tables/unions) and `enum.*.fbs` (enums). One type per file. |
| [scripts/init](scripts/init) | `postAttachCommand`: marks the workspace a safe git directory and points git at `/home/.ssh/hdml.github`. |
| [.devcontainer/](.devcontainer/) | Ubuntu Jammy image with **flatc v24.3.25** (built from source), Node 18, Go 1.22.2. Used for local schema validation only. |
| [README.md](README.md) | High-level prose intro (kept for the public GitHub page). |
| [LICENSE](LICENSE) | Apache-2.0. |

The `lib/ts/*` entries in [.gitignore](.gitignore) are historical: an earlier in-repo TS
wrapper has been removed (see `git log` — `b2809d3 libs removed` and successors). Generated
bindings now live exclusively in the consuming repos.

## External contracts

This repo's **only output** is the `.fbs` source. The contract is the file layout, the
namespaces (`document`, `enum`), and the `HDOMStruct` envelope.

- **HDOM envelope** — `document.HDOMStruct { includes, connections, models, frames }`
  defined in [src/document.HDOM.fbs](src/document.HDOM.fbs). Full per-field reference:
  [docs/schemas.md](docs/schemas.md).
- **flatc version** — schemas must be compiled with **flatc v24.3.25**; mismatched tool
  versions can produce wire-incompatible bindings. Pinned in
  [.devcontainer/Dockerfile](.devcontainer/Dockerfile) and consumer Dockerfiles. Details:
  [docs/integration.md](docs/integration.md).
- **Same FlatBuffers structs serve both wire and on-disk artifact roles** — `HDIO-Server`
  stores compiled artifacts in this format and ships them over HTTP unchanged. A breaking
  change to a `.fbs` is therefore a breaking change to artifacts on disk, not just to API
  payloads.

## Cross-repo dependencies

| Repo | Direction | How it consumes |
|---|---|---|
| `HDML-Utilities-TS` / `@hdml/schemas` | downstream | `flatc --ts --ts-omit-entrypoint -o ./src -I ../../HDML-Schemas/src ../../HDML-Schemas/src/*.fbs` from [packages/schemas/package.json](../HDML-Utilities-TS/packages/schemas/package.json) — generated TS into `src/document/` + `src/enum/` (gitignored), published to npm. |
| `HDIO-Server` | downstream | Vendors this repo as a git submodule; runs [scripts/run_fbs.sh](../HDIO-Server/scripts/run_fbs.sh) (`flatc --go --go-module-name github.com/HDML-Foundation/HDIO-Server/src/schemas …`) into `src/schemas/`. |
| `HDIO-Javy-Plugin`, `HDML-Components` | transitive | Consume FlatBuffers indirectly via the `@hdml/*` npm packages — no direct `flatc` invocation. |

This repo has **no inbound dependencies**: no build script, no `package.json` / `go.mod` /
`Cargo.toml`. The devcontainer ships flatc only for local validation. Schema-change rollout
order is in [docs/integration.md](docs/integration.md).

## Conventions

- **One type per file.** Filenames follow `document.<Type>.fbs` or `enum.<Type>.fbs` and the
  type inside matches: tables/structs end in `Struct` (e.g. `ConnectionStruct`), enums end
  in `Enum` (e.g. `DataTypeEnum`). The dot in the filename is the namespace prefix.
- **Two namespaces only.** `document` (tables, unions, the HDOM envelope) and `enum`
  (enumerations). Cross-file references use the fully qualified name (`document.FieldStruct`,
  `enum.DataTypeEnum`).
- **All cross-file linkage via `include`.** Each `.fbs` `include`s exactly the siblings it
  references — no transitive assumptions; do not add a root index file.
- **Enum stability is a wire contract.** Enums are `byte` (one is `short`: `TimeZoneEnum`).
  Their numeric values are part of the wire format — append new variants at the end; do not
  reorder, renumber, or remove existing variants. Some enums pin `None = 0` explicitly; keep
  it.
- **No generated bindings in this repo.** `lib/ts/*` is `.gitignore`d for historical reasons;
  do not check generated `.ts` / `.go` files in. Bindings live in the consuming repos.
- **flatc version stays pinned at v24.3.25.** Bumping requires a coordinated upgrade across
  every consumer — see [docs/integration.md](docs/integration.md).
- **Commit style.** Recent history uses `feat(schema): …` for additive changes; match it.
  Public repo under the `HDML-Foundation` GitHub org.
