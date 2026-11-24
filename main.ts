import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "The toaster popped and for one hot second the kitchen smelled like a house I haven't lived in for thirty years.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exactly one sentence plus a single trailing newline (allowed by the spec).
writeFileSync(join(outDir, "entry.txt"), sentence + "\n", "utf8");
