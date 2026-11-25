// One Line — entry program.
// Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-140 chars).
// makefun anchor cc291a4b96073c2985858c0b49d75fad0abd2603 round 34271651

import * as fsPromises from "node:fs/promises";
import { join as joinPath } from "node:path";

// The line: laugh first, then the turn — a toaster with a settings menu
// and opinions about the bread, and it is, annoyingly, not wrong.
const TOASTER_LINE =
  "My toaster has a settings menu now. It has opinions about my bread, and honestly, it's not wrong.";

const GATE_MIN = 1;
const GATE_MAX = 140;

function validate(text: string): string {
  const line = text.trim();
  if (line.length < GATE_MIN || line.length > GATE_MAX) {
    throw new Error(`entry must be ${GATE_MIN}-${GATE_MAX} chars, got ${line.length}`);
  }
  return line;
}

async function main(): Promise<void> {
  const line = validate(TOASTER_LINE);
  const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await fsPromises.mkdir(out, { recursive: true });
  const target = joinPath(out, "entry.txt");
  await fsPromises.writeFile(target, line, "utf8");
  console.log(`wrote ${line.length} chars to ${target}`);
}

void main();
