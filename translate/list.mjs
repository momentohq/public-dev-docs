import { execFileSync } from "node:child_process";

const listFiles = (base, commit) =>
  execFileSync("git", [
    "diff",
    "--name-only",
    "--diff-filter=ACMRT",
    base,
    commit,
    "docs/",
  ])
    .toString()
    .trim()
    .split("\n")
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

const main = async () => {
  const base = process.argv[2];
  const commit = process.argv[3];
  for (const file of listFiles(base, commit)) {
    console.log(file);
  }
};

main();
