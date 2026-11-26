import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Emotional Support Human, Hired by the Office Printer";
const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY + "\n", "utf8");

console.log(`entry: ${ENTRY}`);
console.log(`chars: ${ENTRY.length} (limit 60)`);
