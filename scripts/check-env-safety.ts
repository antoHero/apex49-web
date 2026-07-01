import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const SCAN_DIRS = ["app", "components", "lib"];
const CLIENT_MARKER = /["']use client["']/;
const ADMIN_IMPORT = /from\s+["'].*supabase\/admin["']/;
const BAD_ENV_PREFIX = /NEXT_PUBLIC_.*(SERVICE_ROLE|SECRET_KEY)/i;

const violations: string[] = [];

function scanDir(dir: string) {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return; // dir doesn't exist, skip
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      scanDir(fullPath);
      continue;
    }

    if (![".ts", ".tsx", ".js", ".jsx"].includes(extname(entry))) continue;

    const content = readFileSync(fullPath, "utf-8");

    if (CLIENT_MARKER.test(content) && ADMIN_IMPORT.test(content)) {
      violations.push(
        `${fullPath}: "use client" file imports lib/supabase/admin — service-role key would ship to the browser.`,
      );
    }

    if (BAD_ENV_PREFIX.test(content)) {
      violations.push(
        `${fullPath}: references a NEXT_PUBLIC_*SERVICE_ROLE* variable — never prefix secrets with NEXT_PUBLIC_.`,
      );
    }
  }
}

function scanEnvFiles() {
  const envFiles = [
    ".env",
    ".env.local",
    ".env.example",
    ".dev.vars",
    ".dev.vars.example",
  ];
  for (const file of envFiles) {
    try {
      const content = readFileSync(file, "utf-8");
      const lines = content.split("\n");
      for (const line of lines) {
        if (BAD_ENV_PREFIX.test(line)) {
          violations.push(
            `${file}: "${line.trim()}" — service-role key must not be NEXT_PUBLIC_.`,
          );
        }
      }
    } catch {
      continue; // file doesn't exist, skip
    }
  }
}

SCAN_DIRS.forEach(scanDir);
scanEnvFiles();

if (violations.length > 0) {
  console.error("Env safety check failed:\n");
  violations.forEach((v) => console.error(`  - ${v}`));
  console.error(
    `\n${violations.length} violation(s) found. Fix before deploying.`,
  );
  process.exit(1);
} else {
  console.log(
    "Env safety check passed — no service-role key exposure found.",
  );
}
