# Lore.io

Lore.io is a data-driven Minecraft mod concept for turning myths, fictional
universes, characters, clues, and multiplayer events into meaningful,
replayable investigations.

The repository currently contains the foundation for future mod development:

- `docs/` describes the architecture, gameplay systems, and lore boundaries.
- `data/` contains portable JSON definitions for universes, myths, characters,
  and event rules.
- `src/` documents the future Minecraft integration boundary.
- `assets/` reserves the resource-pack and texture namespace.
- `config/` contains safe local configuration examples.

## Development status

This is the initial foundation phase. No Minecraft mod loader or Java build
system has been selected yet. The content model is intentionally loader-neutral
so the project can adopt Fabric, NeoForge, or another supported platform
without rewriting the data layer.

## Design principles

- Mysteries should provide clues, escalation, and a meaningful reveal.
- Documented real-world information must remain distinct from fictional or
  fan-made lore.
- Universe content, character roles, and event rules should be data-driven.
- Creator mode changes event flavor only; it does not interact with YouTube or
  promise audience growth.
- Multiplayer participation is independent of creator mode.

See [docs/architecture.md](docs/architecture.md) for the current design and
[docs/gameplay-systems.md](docs/gameplay-systems.md) for the gameplay flow.

## Working with content

JSON content can be validated independently of a Minecraft installation. New
universes and myths should follow the examples in `data/` and the conventions
documented in [docs/data-model.md](docs/data-model.md).

Run the content checks with:

```text
npm run validate:content
```