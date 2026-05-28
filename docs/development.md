# Development

> **Scope:** Local setup, the `flatc` commands used to validate `.fbs` edits, and the file
> conventions to follow when adding a type. There's no build pipeline here — generated
> bindings live in the consuming repos ([integration.md](integration.md)).

## Two ways to work on this repo

| Mode | When |
|---|---|
| **As a submodule of `HDML-Intelligence`** (`/workspaces/HDML-Intelligence/repos/HDML-Schemas`) | Default. The umbrella devcontainer already has `flatc`, Go, Node, etc. — workspace root [../../../CLAUDE.md §2](../../../CLAUDE.md#2-initial-setup). |
| **Standalone devcontainer** (this repo's own [.devcontainer/](../.devcontainer/)) | When iterating on schemas in isolation. Builds an Ubuntu Jammy image with **flatc v24.3.25** (compiled from source), Node 18, Go 1.22.2. |

Either way, no `npm install` / `go build` is needed inside this repo. Editing `.fbs` and
running `flatc` against them is the whole loop.

## Validating a `.fbs` edit

`flatc` will refuse to compile a syntactically invalid schema, so the cheapest smoke-test is
to run a generator and inspect exit code.

```bash
# 1. Syntax-check against the binary-schema generator (no output files written if you
#    redirect, but errors print to stderr).
flatc --binary --schema -o /tmp/fbs-check src/document.HDOM.fbs

# 2. End-to-end TS codegen smoke (mirrors what @hdml/schemas does):
flatc --ts --ts-omit-entrypoint -o /tmp/fbs-ts -I src src/*.fbs

# 3. End-to-end Go codegen smoke (mirrors what HDIO-Server does):
flatc --go --go-module-name example.com/probe -o /tmp/fbs-go -I src src/*.fbs
```

There are **no in-repo tests** — verification happens in consumer repos against their
generated bindings. If you need round-trip confidence before opening a PR, run
`@hdml/schemas`'s `npm run compile_fbs && npm run test` against your local checkout.

## Repo layout (working detail)

| Path | What's in it |
|---|---|
| [../src/](../src/) | Every schema, one type per file, two filename prefixes (`document.*.fbs`, `enum.*.fbs`). Filenames are case-sensitive — match existing capitalization (`document.HDOM.fbs`, `enum.AggregationType.fbs`). |
| [../scripts/init](../scripts/init) | Run on devcontainer attach: marks the workdir a safe git dir and points `core.sshCommand` at `/home/.ssh/hdml.github`. |
| [../.devcontainer/Dockerfile](../.devcontainer/Dockerfile) | The image. flatc is `git clone --depth 1 --branch v24.3.25` then `cmake … && make`. |
| [../.devcontainer/devcontainer.json](../.devcontainer/devcontainer.json) | Bind-mounts `~/.ssh` read-only; runs `scripts/init` on attach. Includes VS Code extension `gaborv.flatbuffers` for syntax highlighting. |
| [../.devcontainer/devcontainer_ci.json](../.devcontainer/devcontainer_ci.json) | Stripped variant for CI image builds. |
| [../.gitignore](../.gitignore) | Excludes `.token` and an old `lib/ts/*` tree (historical; the in-repo TS wrapper was removed). |

## File and naming conventions

When adding a new type, follow what exists:

- **One type per file.** `document.<Type>.fbs` (tables, unions) or `enum.<Type>.fbs` (enums).
  Supporting parameter tables can sit in the same file as the table they're for —
  [document.Connection.fbs](../src/document.Connection.fbs) and
  [document.Field.fbs](../src/document.Field.fbs) follow this pattern, with the union plus
  all its variant tables in one file.
- **Type suffix.** Tables/unions end in `Struct`. Enums end in `Enum`. Don't drop them — Go
  and TS bindings rely on the suffix for disambiguation.
- **Namespace** — exactly one `namespace document;` or `namespace enum;` per file. Don't
  invent new namespaces.
- **Include only what you reference.** Each file `include`s its direct siblings; no umbrella
  index file.
- **License header.** Every file starts with the four-line `@author / @copyright / @license
  Apache2.0` block. Match existing files verbatim.
- **Enum base type.** Default is `byte`. Only widen (e.g. to `short`) if you're about to
  exceed 127 variants — `TimeZoneEnum` is the precedent.
- **Enum stability.** Numeric values are the wire contract. Append only; never reorder,
  renumber, or remove. Some enums pin `None = 0` explicitly ([AggregationType](../src/enum.AggregationType.fbs),
  [OrderType](../src/enum.OrderType.fbs), [ConnectorTypes](../src/enum.ConnectorTypes.fbs)) — keep it.

## Commit style

From `git log`:

- `feat(schema): …` for additive changes (preferred — see `4a2ecbf`, `aeed53e`).
- Plain `<description>` for early refactors (older commits).

Match the `feat(schema): …` style for anything new.

## Releases

This repo is public on GitHub
([HDML-Foundation/HDML-Schemas](https://github.com/HDML-Foundation/HDML-Schemas)) under
`HDML-Foundation`. No git tags exist; older commit messages reference `v0.0.1-alpha.N`
versions but those weren't tagged in git. Downstreams pin to commit SHAs (Go) or the npm
version of `@hdml/schemas` (TS) — see [integration.md](integration.md).

TODO(confirm: whether to start tagging releases here. The workspace-root pin convention
currently uses `main` for this repo — see workspace [../../../CLAUDE.md §1](../../../CLAUDE.md#sub-projects-vendored-under-repos).)
