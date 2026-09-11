# Lore.io

Lore.io is a data-driven Minecraft mod designed to turn myths, fictional universes, characters, clues, and multiplayer events into meaningful, replayable investigations.

Instead of leaving mysteries as unanswered stories, Lore.io is built around discovery and payoff. Players can investigate clues, encounter events, interact with characters, take on different roles, and uncover explanations as they progress through a mystery.

## What Lore.io includes

Lore.io is designed around several connected systems:

* **Myths** — Minecraft myths and other mysteries that players can investigate.
* **Universes** — Different story settings that can be activated and expanded over time.
* **Characters** — Characters with defined roles that can participate in events and multiplayer experiences.
* **Clues and evidence** — Information players can discover while investigating a mystery.
* **Events** — Dynamic events that can escalate investigations and create different experiences.
* **Multiplayer roles** — Players can participate in different roles depending on the universe or scenario.
* **Creator mode** — Optional settings for creators who want to use Lore.io while making videos, without requiring YouTube integration or promising audience growth.
* **Replayability** — Different players, roles, choices, and event rules can produce different investigations.

## Repository structure

The repository currently contains the foundation for future Minecraft mod development:

* `docs/` describes the architecture, gameplay systems, data model, and lore boundaries.
* `data/` contains portable JSON definitions for universes, myths, characters, clues, and event rules.
* `src/` documents and will eventually contain the Minecraft integration boundary.
* `assets/` reserves the resource-pack, texture, and other Minecraft asset namespaces.
* `config/` contains safe local configuration examples.
* `scripts/` contains development and content-validation tooling.

## Development status

Lore.io is currently in its foundation phase.

The content and data systems are being developed before the final Minecraft mod-loader implementation is selected. No Fabric, NeoForge, or other Java mod-loader build system has been committed to yet.

Keeping the content model loader-neutral allows Lore.io to adopt a supported Minecraft platform later without requiring the data layer to be rewritten.

The project is intended to become an actual Minecraft mod. The current repository provides the data, architecture, and tooling needed to build toward that implementation.

## Design principles

* Mysteries should provide clues, escalation, investigation, and a meaningful reveal.
* Lore should lead somewhere rather than ending with another unanswered question.
* Documented real-world information must remain distinct from fictional or fan-made lore.
* Myths, universes, characters, clues, and event rules should be data-driven where practical.
* New universes and stories should be expandable without redesigning the entire system.
* Multiplayer participation should be independent of creator mode.
* Creator mode changes event flavor and presentation only; it does not interact with YouTube or promise audience growth.
* Lore.io should avoid unnecessary complexity when a simpler system can achieve the same result.
* Content should be portable and independently testable before being connected to Minecraft.

## Universes

Lore.io supports a universe-based approach to its content.

A universe can define its own characters, roles, questions, events, and rules. This allows Lore.io to support Minecraft myths alongside fictional universes and other story scenarios.

Players can select a universe and receive the appropriate setup or tutorial before beginning its experience.

Universes can also support multiplayer scenarios where players receive different roles or where events and characters are introduced dynamically.

The universe system is designed to grow over time rather than being limited to a single mystery or story.

## Multiplayer

Multiplayer is a core part of Lore.io's design.

Depending on the universe and scenario, players may receive different roles, participate in investigations together, encounter different events, or trigger parts of an event chain.

A scenario can also introduce characters or enemies as part of the investigation.

Multiplayer does not depend on creator mode. A player can use Lore.io's multiplayer systems without making a video or connecting a creator account.

## Creator mode

Lore.io includes a creator-oriented mode for scenarios where the player is making a video.

Creator mode can influence the flavor or behavior of an experience, including whether a scenario is designed to be more ridiculous or more serious.

It does not connect to YouTube, automatically grow an audience, or make promises about a video's performance.

Creator mode is also separate from multiplayer. Players can choose whether they want friends to participate regardless of whether creator mode is enabled.

## Lore boundaries

Lore.io distinguishes between documented information and fictional or fan-created material.

For example, the history of a Minecraft myth can be documented separately from later community theories, fictional additions, or Lore.io's own interpretation of that myth.

This separation is important so that players can understand what is documented history, what is community-created lore, and what is part of a Lore.io scenario.

## Working with content

Lore.io's content can be developed and validated independently of a Minecraft installation.

JSON content should follow the examples in `data/` and the conventions documented in `docs/data-model.md`.

Content validation can be run with:

```text
npm run validate:content
```

This allows myths, universes, characters, and event definitions to be checked before they are connected to the future Minecraft implementation.

## Future development

The project will eventually connect the existing content and systems to Minecraft.

Future work can include:

* Minecraft mod-loader integration.
* In-game investigation systems.
* Clue and evidence discovery.
* Dynamic event execution.
* Character and role systems.
* Multiplayer event handling.
* Universe activation and tutorials.
* Minecraft-specific assets and effects.
* Expanded myth and universe content.

The exact Minecraft platform will be selected as development progresses.

See [docs/architecture.md](docs/architecture.md) for the current architecture, [docs/gameplay-systems.md](docs/gameplay-systems.md) for the gameplay flow, and [docs/data-model.md](docs/data-model.md) for the content structure.
