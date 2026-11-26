// Deadpan Forecasts for Cities That Do Not Exist
// One line, at most 160 characters: a weather forecast for a city
// that does not exist, delivered deadpan, as if read off a map.
// Node 22 standard library only. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// In Blorptown, expect 14°C and sideways rain until 3 p.m.,
// when the fog lifts for nine minutes and residents gather on
// rooftops to confirm the sun still works.
const FORECAST =
  "In Blorptown, expect 14°C and sideways rain until 3 p.m., when the fog lifts for nine minutes and residents gather on rooftops to confirm the sun still works.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
