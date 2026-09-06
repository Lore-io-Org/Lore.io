# Lore.io content data

This directory contains loader-neutral JSON content. Keep content separated by
domain so a future Minecraft data loader can validate and register each type
independently.

## Directories

- `universes/` — selectable universe and event-pack definitions
- `myths/` — investigations, clues, evidence, theories, and reveals
- `characters/` — playable characters and role metadata
- `events/` — configurable triggers, conditions, and effects

The files are examples, not a complete production content pack.

Run `npm run validate:content` from the repository root before submitting
content changes. The validator checks JSON syntax, unique IDs, cross-file
references, probability ranges, event-chain steps, and creator setup rules.
