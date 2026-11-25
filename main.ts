import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "My smart fridge texts me 'door left open' at 3 AM — bro, you ARE the door, go close yourself.";

// writeEntry: writes the single roast line to /output/entry.txt as explicit UTF-8.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", "utf8");
}

writeEntry(ENTRY);
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
