# Lore.io architecture

## Current phase

The repository is intentionally loader-neutral. There is no existing Fabric,
NeoForge, Forge, or Quilt build to extend, so the first implementation phase
establishes portable content contracts before adding platform-specific code.

## Planned layers

### Content layer

`data/` stores JSON definitions for:

- Universes and their setup questions
- Myths, lore entries, clues, evidence, timelines, theories, and reveals
- Characters and player roles
- Event rules, event chains, and spawn locations

Content should be loadable from a packaged data resource and should not require
database access, authentication, or an external service at runtime.

### Runtime layer

The future Minecraft implementation in `src/` should provide small services
with clear boundaries:

1. Content loading and schema validation
2. Session setup and creator preferences
3. Player roster and role assignment
4. Rule evaluation and event scheduling
5. Clue and evidence progression
6. Minecraft adapters for entities, locations, effects, and UI

The rule engine should consume definitions rather than contain universe-specific
branches. A new universe should normally require data and assets, not changes
to the engine.

### Resource layer

`assets/` is reserved for namespace-scoped Minecraft resources such as
translations, textures, models, sounds, and UI assets. The namespace should be
`loreio` unless a loader convention requires another name.

## Session lifecycle

1. Select an enabled universe.
2. Present the universe tutorial.
3. Ask whether the creator is making a YouTube video.
4. If yes, ask whether the intended tone is ridiculous or non-ridiculous.
5. Independently ask whether friends should be able to join.
6. Create the event session and assign available roles.
7. Evaluate event rules as players explore, meet conditions, or receive roles.
8. Track clues and evidence toward a reveal or a deliberate unresolved ending.

The friends question must never be gated by the YouTube answer.
