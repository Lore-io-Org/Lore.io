# Data model

The JSON files under `data/` are portable content definitions. IDs and keys
are stable identifiers; display text can change without breaking references.

## Conventions

- IDs use lowercase kebab-case.
- References use IDs rather than display names.
- `source_classification` is one of `documented`, `fictional`, or
  `fan-made`.
- Probabilities are percentages from `0` to `100`.
- Conditions and effects are typed objects with a `type` field.
- Content is disabled with `enabled: false` rather than deleted.

## Core relationships

- A universe contains characters, roles, spawn locations, questions, and
  event rules.
- A myth may be associated with a universe and contains investigation content.
- An event rule can reference a character, location, myth, or another event.
- A clue may unlock evidence, a theory, or a reveal.

The examples are deliberately small but represent the intended extension
points. A future loader adapter can validate these documents against formal
JSON Schema files without changing their runtime meaning.
