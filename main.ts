import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I didn't miss that spot — my cliff sensor mistook your dark rug for a cliff and filed it under 'haunted, do not enter.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
