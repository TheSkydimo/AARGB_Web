from pathlib import Path
from PIL import Image, ImageOps

# =========================
# 配置区（按需修改）
# =========================
INPUT_DIR = Path(r"./")                    # 当前目录
OUTPUT_DIR = Path(r"./images_optimized")   # 输出目录（不会覆盖原图）

TARGET_W = 960
TARGET_H = 480  # 2:1，适合卡片图

OUTPUT_FORMAT = "WEBP"  # "WEBP" 或 "JPEG"
WEBP_QUALITY = 92       # 88~95 通常肉眼无感
JPEG_QUALITY = 92

PROCESS_EXTS = {".png"}
EXCLUDE_DIR_NAMES = {OUTPUT_DIR.name, ".git", "node_modules", "dist", "build", ".astro"}  # 避免误扫
OVERWRITE = True

# 强烈建议：不放大（避免小图被硬拉大导致“看起来变糊”）
DONT_UPSCALE = True

# 对哪些文件强制使用“裁剪适配”：
# - 你的产品卡片图建议裁剪（效果最好）
# - logo/图标建议不裁剪
FORCE_CROP_KEYWORDS = {"monitor", "desk", "floor", "lamp", "backlight", "devices", "peripherals"}
FORCE_PAD_KEYWORDS = {"logo", "icon", "favicon"}
# =========================


def ensure_dir(p: Path):
    p.mkdir(parents=True, exist_ok=True)


def should_skip_path(p: Path) -> bool:
    # 跳过被排除的目录
    for part in p.parts:
        if part in EXCLUDE_DIR_NAMES:
            return True
    return False


def resize_crop(img: Image.Image, tw: int, th: int) -> Image.Image:
    """等比缩放 + 居中裁剪（适合卡片图）。"""
    return ImageOps.fit(img, (tw, th), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))


def resize_pad(img: Image.Image, tw: int, th: int) -> Image.Image:
    """等比缩放 + 补边（不裁剪，适合 logo/图标）。"""
    return ImageOps.pad(img, (tw, th), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))


def save_image(img: Image.Image, out_path: Path, fmt: str):
    fmt = fmt.upper()
    if fmt == "WEBP":
        # WebP：高质量
        img.save(out_path, "WEBP", quality=WEBP_QUALITY, method=6, exact=True)
    elif fmt in ("JPG", "JPEG"):
        # JPEG 不支持 alpha，先转 RGB
        if img.mode in ("RGBA", "LA"):
            bg = Image.new("RGB", img.size, (0, 0, 0))
            bg.paste(img, mask=img.split()[-1])
            img = bg
        else:
            img = img.convert("RGB")
        img.save(out_path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
    else:
        raise ValueError(f"Unsupported output format: {fmt}")


def decide_mode_by_name(name: str) -> str:
    """根据文件名决定用 crop 还是 pad。"""
    n = name.lower()
    if any(k in n for k in FORCE_PAD_KEYWORDS):
        return "pad"
    if any(k in n for k in FORCE_CROP_KEYWORDS):
        return "crop"
    # 默认策略：更安全的 pad（避免误裁剪重要元素）
    return "pad"


def main():
    if not INPUT_DIR.exists():
        raise FileNotFoundError(f"Input dir not found: {INPUT_DIR}")

    ensure_dir(OUTPUT_DIR)

    files = []
    for p in INPUT_DIR.rglob("*"):
        if not p.is_file():
            continue
        if p.suffix.lower() not in PROCESS_EXTS:
            continue
        if should_skip_path(p):
            continue
        files.append(p)

    if not files:
        print(f"No images found in {INPUT_DIR}")
        return

    print(f"Found {len(files)} images. Output -> {OUTPUT_DIR}")

    for src in files:
        rel = src.relative_to(INPUT_DIR)
        out_dir = OUTPUT_DIR / rel.parent
        ensure_dir(out_dir)

        out_ext = ".webp" if OUTPUT_FORMAT.upper() == "WEBP" else ".jpg"
        out_path = (out_dir / rel.name).with_suffix(out_ext)

        if out_path.exists() and not OVERWRITE:
            print(f"SKIP (exists): {out_path}")
            continue

        try:
            with Image.open(src) as im:
                # 保留 alpha（对 PNG/logo 更重要）
                if im.mode in ("P", "LA", "RGBA"):
                    im = im.convert("RGBA")
                else:
                    im = im.convert("RGB")

                w, h = im.size

                # 不放大：小图直接按原尺寸输出（只做格式转换/压缩）
                if DONT_UPSCALE and w <= TARGET_W and h <= TARGET_H:
                    out_img = im
                else:
                    mode = decide_mode_by_name(src.name)
                    if mode == "crop":
                        out_img = resize_crop(im, TARGET_W, TARGET_H)
                    else:
                        out_img = resize_pad(im, TARGET_W, TARGET_H)

                save_image(out_img, out_path, OUTPUT_FORMAT)

                src_kb = src.stat().st_size / 1024
                out_kb = out_path.stat().st_size / 1024
                print(f"OK: {src.name}  {w}x{h}  {src_kb:.1f}KB -> {out_path.name}  {out_img.size[0]}x{out_img.size[1]}  {out_kb:.1f}KB")

        except Exception as e:
            print(f"FAIL: {src}  reason: {e}")

    print("Done.")


if __name__ == "__main__":
    main()
