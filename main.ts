// The intern apologized — a one-line joke about the demo.
// 108 characters: the demo crashes, the agent blames the intern,
// the intern apologizes, and the room applauds the teamwork.
// Writes the joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The demo crashed, so my agent blamed the intern, the intern apologized, and the room applauded the teamwork.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log("Wrote /output/entry.txt");
