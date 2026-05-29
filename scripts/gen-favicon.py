"""Generate production favicon set for Prem Arora site.

Outputs:
- app/icon.svg          (vector, primary)
- app/icon.png          (32x32, browser tab fallback)
- app/apple-icon.png    (180x180, iOS home screen)
- app/favicon.ico       (multi-res 16/32/48, legacy)
- public/icon-192.png   (PWA)
- public/icon-512.png   (PWA)
- public/icon-512-maskable.png (PWA maskable, with safe zone)
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "app"
PUB = ROOT / "public"

NAVY = (11, 29, 57, 255)
GOLD = (201, 164, 73, 255)

FONT_BOLD = "C:/Windows/Fonts/georgiab.ttf"


def render(size: int, *, radius_ratio=0.22, ring=True, padding_ratio=0.0, text="PA") -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    pad = int(size * padding_ratio)
    inner = size - 2 * pad
    radius = int(inner * radius_ratio)

    draw.rounded_rectangle(
        [pad, pad, pad + inner - 1, pad + inner - 1],
        radius=radius,
        fill=NAVY,
    )

    if size >= 64:
        highlight = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        hd = ImageDraw.Draw(highlight)
        hd.rounded_rectangle(
            [pad, pad, pad + inner - 1, pad + inner // 2],
            radius=radius,
            fill=(255, 255, 255, 14),
        )
        img.alpha_composite(highlight)

    if ring and size >= 32:
        inset = max(1, int(inner * 0.055))
        ring_w = max(1, int(inner * 0.022))
        rect = [pad + inset, pad + inset, pad + inner - inset - 1, pad + inner - inset - 1]
        draw.rounded_rectangle(
            rect,
            radius=max(1, radius - inset),
            outline=GOLD,
            width=ring_w,
        )

    label = text if size >= 28 else "P"

    target_w = inner * (0.58 if len(label) == 2 else 0.48)
    target_h = inner * 0.58
    fs = inner
    font = ImageFont.truetype(FONT_BOLD, fs)
    while fs > 6:
        font = ImageFont.truetype(FONT_BOLD, fs)
        bbox = draw.textbbox((0, 0), label, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        if w <= target_w and h <= target_h:
            break
        fs -= 1

    bbox = draw.textbbox((0, 0), label, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    x = pad + (inner - w) / 2 - bbox[0]
    y = pad + (inner - h) / 2 - bbox[1] - inner * 0.02
    draw.text((x, y), label, font=font, fill=GOLD)

    return img


def save_png(img: Image.Image, path: Path):
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, format="PNG", optimize=True)
    print(f"  OK {path.relative_to(ROOT)}  ({img.size[0]}x{img.size[1]}, {path.stat().st_size:,} B)")


def save_ico(sizes_imgs, path: Path):
    base = sizes_imgs[-1]
    base.save(
        path,
        format="ICO",
        sizes=[(im.size[0], im.size[1]) for im in sizes_imgs],
        append_images=sizes_imgs[:-1],
    )
    print(f"  OK {path.relative_to(ROOT)}  (multi-res, {path.stat().st_size:,} B)")


def write_svg(path: Path):
    svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Prem Arora">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#13284c"/>
      <stop offset="1" stop-color="#0b1d39"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" ry="112" fill="url(#bg)"/>
  <rect x="28" y="28" width="456" height="456" rx="92" ry="92"
        fill="none" stroke="#c9a449" stroke-width="10" stroke-opacity="0.95"/>
  <text x="256" y="298" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-weight="700" font-size="248" fill="#c9a449"
        letter-spacing="-6">PA</text>
</svg>
"""
    path.write_text(svg, encoding="utf-8")
    print(f"  OK {path.relative_to(ROOT)}  ({path.stat().st_size:,} B)")


def main():
    print("Generating favicon set ...")

    for old in ["favicon.ico", "icon.png", "icon.svg", "apple-icon.png"]:
        p = APP / old
        if p.exists():
            p.unlink()

    write_svg(APP / "icon.svg")

    img_16 = render(16, radius_ratio=0.20)
    img_32 = render(32)
    img_48 = render(48)
    img_180 = render(180)
    img_192 = render(192)
    img_512 = render(512)
    img_512_mask = render(512, padding_ratio=0.10, radius_ratio=0.50)

    save_png(img_32, APP / "icon.png")
    save_png(img_180, APP / "apple-icon.png")
    save_ico([img_16, img_32, img_48], APP / "favicon.ico")
    save_png(img_192, PUB / "icon-192.png")
    save_png(img_512, PUB / "icon-512.png")
    save_png(img_512_mask, PUB / "icon-512-maskable.png")

    print("\nDone.")


if __name__ == "__main__":
    main()
