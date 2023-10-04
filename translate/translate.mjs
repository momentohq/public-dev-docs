import { createWriteStream } from "node:fs";
import { readFile } from "node:fs/promises";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";

const { SIMPLEEN_AUTH_KEY, SIMPLEEN_TRANSLATOR_ID, TARGET_LANG } = process.env;
if (!SIMPLEEN_AUTH_KEY) throw new Error("SIMPLEEN_AUTH_KEY is not defined.");
if (!SIMPLEEN_TRANSLATOR_ID)
  throw new Error("SIMPLEEN_TRANSLATOR_ID is not defined.");
if (!TARGET_LANG) throw new Error("TARGET_LANG is not defined.");

// TODO: Handle frontmatter separately.
const translate = async (src) => {
  if (!src.startsWith("docs/"))
    throw new Error(`File must starts with "docs/": ${src}`);
  const text = (await readFile(src)).toString();
  const dest = src.replace(
    /^docs/,
    `i18n/${TARGET_LANG}/docusaurus-plugin-content-docs/current`
  );
  const stream = createWriteStream(dest);
  console.log(`Translating ${src} => ${dest}`);
  const url = new URL(
    `https://api.simpleen.io/translators/${SIMPLEEN_TRANSLATOR_ID}/translate`
  );
  url.searchParams.set("auth_key", SIMPLEEN_AUTH_KEY);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(res.statusText);
  await finished(Readable.fromWeb(res.body).pipe(stream));
};

const main = async () => {
  const files = process.argv.slice(2);
  for (const file of files) {
    try {
      await translate(file);
    } catch (error) {
      console.log(`Failed to translate ${file} (${error})`);
    }
  }
};

main();
