import { readdir, mkdir, stat } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";
import sharp from "sharp";

const assetsRoot = join(process.cwd(), "public", "assets", "apps");
const sourceExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function sourceImages(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const results: string[] = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "web") results.push(...(await sourceImages(path)));
      continue;
    }
    if (entry.isFile() && sourceExtensions.has(extname(entry.name).toLowerCase())) results.push(path);
  }

  return results;
}

function outputPath(source: string): string {
  return join(dirname(source), "web", `${basename(source, extname(source))}.webp`);
}

async function optimize(source: string): Promise<{ sourceBytes: number; outputBytes: number }> {
  const icon = basename(source, extname(source)) === "icon";
  const target = outputPath(source);
  await mkdir(dirname(target), { recursive: true });
  await sharp(source)
    .rotate()
    .resize({
      width: icon ? 256 : 1200,
      height: icon ? 256 : 1200,
      fit: "inside",
      withoutEnlargement: true
    })
    .webp({ quality: icon ? 82 : 80, effort: 5, smartSubsample: true })
    .toFile(target);

  const [input, output] = await Promise.all([stat(source), stat(target)]);
  console.log(`${source.replace(`${process.cwd()}/`, "")} -> ${target.replace(`${process.cwd()}/`, "")}`);
  return { sourceBytes: input.size, outputBytes: output.size };
}

const images = await sourceImages(assetsRoot);
const results = await Promise.all(images.map(optimize));
const total = results.reduce(
  (summary, result) => ({ sourceBytes: summary.sourceBytes + result.sourceBytes, outputBytes: summary.outputBytes + result.outputBytes }),
  { sourceBytes: 0, outputBytes: 0 }
);

console.log(`Optimized ${images.length} images: ${(total.sourceBytes / 1024 / 1024).toFixed(2)} MB -> ${(total.outputBytes / 1024 / 1024).toFixed(2)} MB.`);
