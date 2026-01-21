import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

const SUPPORTED_EXT = new Set([".webp", ".png", ".jpg", ".jpeg"]);
const SKIP_PATTERN = /-\d+w\.webp$/i;

// Keep a fixed "site-wide" width ladder so all components can rely on it.
// We include some small widths for logos/icons and medium/large for photos/backgrounds.
const WIDTHS = [96, 128, 192, 256, 300, 320, 384, 480, 600, 640, 800, 960, 1280, 1600, 1920];

const quality = 78;
const effort = 6;
const alphaQuality = 100;

const entries = await fs.readdir(IMAGES_DIR, { withFileTypes: true });
const sourceFiles = entries
  .filter((e) => e.isFile())
  .map((e) => e.name)
  .filter((filename) => {
    const ext = path.extname(filename).toLowerCase();
    if (!SUPPORTED_EXT.has(ext)) return false;
    if (SKIP_PATTERN.test(filename)) return false;
    if (filename.toLowerCase() === "favicon.png") return false;
    return true;
  });

for (const filename of sourceFiles) {
  const inputPath = path.join(IMAGES_DIR, filename);
  const { name } = path.parse(filename);

  const meta = await sharp(inputPath).metadata();
  if (!meta.width || !meta.height) continue;

  const targetWidths = WIDTHS.filter((w) => w <= meta.width && w >= 96);
  for (const w of targetWidths) {
    const outFilename = `${name}-${w}w.webp`;
    const outputPath = path.join(IMAGES_DIR, outFilename);

    await sharp(inputPath)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality, effort, alphaQuality })
      .toFile(outputPath);
  }
}

console.log("Done. Generated responsive WebP variants in public/images.");
