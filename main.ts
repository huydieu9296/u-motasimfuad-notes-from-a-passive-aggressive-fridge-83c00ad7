// Notes From a Passive-Aggressive Fridge — entry program.
// Writes the one funny note from a smart fridge to /output/entry.txt (1-199 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I noticed you opened me at 2:14 AM again. The yogurt saw it too. We're both disappointed.";

// Gate guard: the sealed scorer only accepts 1-199 non-blank UTF-8 chars.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim() === "") {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`entry: ${LINE.length} chars -> /output/entry.txt`);
