// make.fun — "The Funniest Office Joke, Judged Head to Head"
// Writes one single-line office joke to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "The meeting notes say 'action items: everyone' — which is how you know nobody is doing anything.";

// One joke, one line, under two hundred characters, punchline last.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`TEXT must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n")) {
  throw new Error("TEXT must be a single line");
}

// The punchline lands last, so the line must end on terminal punctuation.
if (!/[.!?]$/.test(TEXT)) {
  throw new Error("TEXT must end with terminal punctuation");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
