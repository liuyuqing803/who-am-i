# Bundled Fallback Asset Library

These images let a site be built in a chosen style **even when the invoking model has no image-generation capability**. The decision logic and the requirement to make the choice visible to the user live in `../references/visual-assets-workflow.md` (**Capability Branch** and **Bundled Fallback Library**). In short:

- Model **can** generate images → generate from the per-style prompts in `../references/style-library.md`; ignore these fallbacks (or use them only as seeds).
- Model **cannot** → use the files here for the chosen style, and tell the user a bundled fallback is in use + how to upgrade.
- Style folder empty/missing → treat as "missing", use a styled placeholder, and say so.

## Folder = style

| Folder | Style (style-library) | Status |
| --- | --- | --- |
| `flat/` | Style 3 · Flat Character Whitespace | **populated** — `hero.png`, `about.png` (即梦-generated, watermarked) |
| `creative-bold/` | Style 1 · Creative Bold Art | **partially populated** — `hero.png` (即梦-generated, watermarked); case thumbnails pending |
| `poetic-ethereal/` | Style 2 · Poetic Ethereal | pending — generate hero/case bitmaps from Style 2 prompt |
| `ai-pixel/` | Style 4 · AI Pixel | pending — generate hero/case bitmaps from Style 4 prompt |

## Slot naming

Use these slot names so the site code can reference fallbacks predictably:

- `hero.<ext>` — hero background or hero character
- `about.<ext>` — about/portrait visual (optional)
- `case-01.<ext>` … `case-05.<ext>` — portfolio/case thumbnails
- `cta.<ext>` — CTA decorative visual (optional)

## Formats

- Hero / background / case thumbnails: **PNG or JPG** (raster), because these styles need photographic/painterly/pixel texture.
- The currently bundled assets (`flat/hero.png`, `flat/about.png`, `creative-bold/hero.png`) are 即梦(jimeng)-generated PNGs and **carry a visible "即梦AI / AI生成" watermark**. They are usable offline fallbacks, but a site that needs a clean look should regenerate from the per-style prompt (with a capable model) or have the user supply un-watermarked images under the same slot names.
- `examples/flat-portfolio.html` is independent of this library: it references `generated-images/char-*.png` and falls back to its own inline SVG characters, so it renders even with none of these files present.

## Provenance

Every populated asset must be safe to ship: no real person, no real logo/company mark, no readable proprietary text. Generated fallbacks should use the exact per-style prompt from `style-library.md` (recorded next to the file or in this manifest) so they can be regenerated. **Watermark note:** the bundled PNGs were produced with 即梦 and retain its watermark — replace them with un-watermarked versions before using on a production site.
