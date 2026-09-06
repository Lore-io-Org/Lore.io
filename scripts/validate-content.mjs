import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const dataRoot = path.join(root, "data");
const errors = [];

async function jsonFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await jsonFiles(entryPath)));
    } else if (entry.name.endsWith(".json")) {
      files.push(entryPath);
    }
  }

  return files;
}

async function readJson(filePath) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    errors.push(`${path.relative(root, filePath)}: invalid JSON (${error.message})`);
    return null;
  }
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    assert(typeof value === "string" && value.length > 0, `${label}: IDs must be non-empty strings`);
    assert(!seen.has(value), `${label}: duplicate ID "${value}"`);
    seen.add(value);
  }
}

const files = await jsonFiles(dataRoot);
const documents = new Map();

for (const filePath of files) {
  const document = await readJson(filePath);
  if (document) {
    documents.set(path.relative(dataRoot, filePath), document);
  }
}

const universes = [...documents.entries()]
  .filter(([file]) => file.startsWith("universes\\") || file.startsWith("universes/"))
  .map(([, document]) => document);
const characterDocuments = [...documents.values()].filter((document) => Array.isArray(document.characters));
const eventDocuments = [...documents.values()].filter((document) => Array.isArray(document.rules));
const locationDocuments = [...documents.values()].filter((document) => Array.isArray(document.locations));
const mythDocuments = [...documents.entries()]
  .filter(([file]) => file.startsWith("myths\\") || file.startsWith("myths/"))
  .map(([, document]) => document);

const universeIds = universes.map((universe) => universe.id);
const characterIds = characterDocuments.flatMap((document) => document.characters.map((character) => character.id));
const eventRuleIds = eventDocuments.flatMap((document) => document.rules.map((rule) => rule.id));
const eventChainIds = eventDocuments.flatMap((document) => (document.chains ?? []).map((chain) => chain.id));
const locationIds = locationDocuments.flatMap((document) => document.locations.map((location) => location.id));
const mythIds = mythDocuments.map((myth) => myth.id);

assertUnique(universeIds, "universes");
assertUnique(characterIds, "characters");
assertUnique(eventRuleIds, "event rules");
assertUnique(eventChainIds, "event chains");
assertUnique(locationIds, "locations");
assertUnique(mythIds, "myths");

for (const universe of universes) {
  const setup = universe.creator_setup;
  assert(typeof universe.id === "string", "universe: missing id");
  assert(typeof universe.name === "string", `${universe.id}: missing name`);
  assert(typeof setup === "object" && setup !== null, `${universe.id}: missing creator_setup`);
  assert(setup?.ask_allow_friends_independently === true, `${universe.id}: friends setup must be independent`);
  assert(
    setup?.ask_ridiculous_mode_only_if_youtube === true,
    `${universe.id}: ridiculous mode must depend on the YouTube answer`
  );

  for (const id of universe.character_ids ?? []) {
    assert(characterIds.includes(id), `${universe.id}: unknown character "${id}"`);
  }
  for (const id of universe.event_rule_ids ?? []) {
    assert(eventRuleIds.includes(id), `${universe.id}: unknown event rule "${id}"`);
  }
  for (const id of universe.spawn_location_ids ?? []) {
    assert(locationIds.includes(id), `${universe.id}: unknown location "${id}"`);
  }
  for (const id of universe.myth_ids ?? []) {
    assert(mythIds.includes(id), `${universe.id}: unknown myth "${id}"`);
  }
}

for (const document of eventDocuments) {
  assert(eventRuleIds.length > 0, `${document.universe_id}: event document has no rules`);
  for (const rule of document.rules) {
    assert(rule.probability === null || (Number.isFinite(rule.probability) && rule.probability >= 0 && rule.probability <= 100),
      `${rule.id}: probability must be null or between 0 and 100`);
  }
  for (const chain of document.chains ?? []) {
    for (const step of chain.steps ?? []) {
      assert(eventRuleIds.includes(step), `${chain.id}: unknown event rule "${step}"`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Content validation passed for ${files.length} JSON file(s).`);
}
