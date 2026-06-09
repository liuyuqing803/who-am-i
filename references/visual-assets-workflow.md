# Visual Assets Workflow

Use this reference whenever the site needs hero images, portfolio/case thumbnails, background visuals, portraits, style assets, or placeholder imagery.

## Core Rule

Text-only agents cannot directly create bitmap images. If the active agent does not have an image-generation tool, do not claim that an image has been generated. Produce an image asset plan and prompts that can be handed to an image-generation model.

Do not use SVG as a substitute for primary website visuals such as hero art, project thumbnails, style backgrounds, portraits, or product scenes unless the user explicitly requests SVG/vector output. SVG may be used for small icons, diagrams, simple UI symbols, or implementation scaffolding.

## Capability Branch: Generate vs. Bundled Fallback

Pick the asset path by the invoking model's image-generation capability, and **make the choice visible to the user** — never silently decide.

1. **Model can generate images** (an image-generation tool/skill is available): generate every required asset from the per-style prompts in `style-library.md` and the **Image Prompt Template** below. Announce it, for example:
   > ✅ 检测到生图能力：正在按「<style>」风格的 prompt 生成 N 张素材（hero、case×3 …）。
2. **Model cannot generate images**: use the skill's **Bundled Fallback Library** (`assets/<style>/`) for the chosen style. Announce it and say how to upgrade:
   > ⚠️ 当前模型不具备生图能力：已改用 skill 内置的「<style>」兜底素材（assets/<style>/，共 N 张）。如需更贴合的视觉，请改用具备生图能力的模型重跑，或提供你自己的图片。
3. **Neither generation nor a matching fallback exists**: render a polished styled placeholder (see **Placeholder Rules**) and list the missing slot + its image prompt as a production requirement. Still announce that placeholders are in use.

Record, per asset slot, which path produced it: `generated` / `bundled-fallback` / `placeholder` / `provided`. Surface that record to the user as part of the deliverable.

## Bundled Fallback Library

Location: `assets/<style>/` (styles: `creative-bold`, `poetic-ethereal`, `flat`, `ai-pixel`). These are the images the skill ships so a site can still be built with a text-only model. `assets/README.md` is the manifest: per-style slot list, file naming, formats, and the prompt each asset was generated from.

- Prefer raster (PNG/JPG) for hero/background/case visuals; SVG is acceptable only for the character/spot illustrations that are vector by nature (the Flat style ships SVG characters).
- When a model CAN generate images, prefer freshly generated assets over these fallbacks — the bundled set is intentionally generic, while generated assets can match the specific person/product.
- If a style folder is not yet populated, treat it as "missing" and fall to step 3 above, telling the user the fallback for that style is pending.

## Asset Inventory

Before designing or implementing, build this table:

| Slot ID | Section | Purpose | Aspect Ratio | Source Status | Action | Prompt Needed |
| --- | --- | --- | --- | --- | --- | --- |
| hero-image-01 | Hero | Main brand/style image | 16:9 or full-bleed | provided/missing | use/generate/placeholder | yes/no |
| case-image-01 | Portfolio case 1 | Case proof visual | 4:3, 16:10, or 1:1 | provided/missing | use/generate/placeholder | yes/no |
| style-bg-01 | Background | Style atmosphere | full-bleed | provided/missing | generate/placeholder | yes/no |

Source status values:

- `provided`: user supplied image, screenshot, URL, or local path.
- `missing`: no usable visual exists yet.
- `generate`: create with an image-generation model.
- `placeholder`: intentionally use a designed placeholder until assets arrive.

## Required Slots By Site Type

For a personal portfolio:

- `hero-image-01`: portrait, abstract identity image, generated style image, or split hero visual.
- `case-image-01` to `case-image-03`: minimum three case visuals.
- `case-image-04` and `case-image-05`: optional if the portfolio has four or five cases.
- `about-image-01`: optional portrait or symbolic image.

For a personal product:

- `hero-product-01`: product scene, interface mockup, or generated concept image.
- `feature-image-01` to `feature-image-03`: product feature or workflow visuals.
- `proof-image-01`: screenshot, demo frame, chart, or example output.

For a hybrid personal brand + product:

- `hero-image-01`
- `offer-image-01`
- `case-image-01` to `case-image-03`

## Placeholder Rules

If images are missing and no image model is available:

- keep the image slot visible in the brief
- include alt text
- specify style, aspect ratio, and intended content
- in frontend code, render polished placeholder blocks that match the selected style
- never leave broken image links

Placeholder copy format:

```markdown
Image placeholder: [case-image-01]
Alt text: [short factual description]
Aspect ratio: [16:10]
Visual direction: [workflow diagram / product UI / abstract generated artwork / portrait / background]
Asset status: [missing -> generate]
Image prompt: [prompt for image-generation model]
```

## Image Prompt Template

Use this prompt shape for generated bitmap assets:

```text
Create a [asset type] for a personal portfolio website in the style of [selected style].
Subject: [what the image should show].
Context: [project/person/product context].
Mood: [3-5 adjectives].
Composition: [layout, focal point, negative space, text-safe area].
Palette: [colors].
Texture/medium: [photo, editorial illustration, watercolor, pixel art, 3D, UI mockup, etc.].
Constraints: no readable text, no logos, no real company marks, no distorted UI text, no watermarks.
Aspect ratio: [ratio].
```

## Style-Specific Asset Directions

### Creative Bold Art

Generate luminous abstract or cinematic bitmap assets. Good subjects include fluid color fields, AI system landscapes, layered interface atmospheres, or high-contrast product scenes. Keep one calm text-safe region for hero use.

### Poetic Ethereal

Generate watercolor, mist, ink, glass, dew, sky, or quiet natural-symbolic visuals. Use low contrast and generous negative space. Avoid dense dashboards and loud saturated colors.

### Flat Character Whitespace

Generate flat character illustrations, soft product scenes, friendly desk/workflow moments, or simple editorial diagrams. Keep backgrounds light and preserve plenty of whitespace.

### AI Pixel

Generate pixel-art scenes, retro AI consoles, tiled inventory panels, sprite-like symbolic objects, or pixelated product worlds. Keep body text areas non-pixelated in the website; the image itself may use pixel art.

## Frontend Implementation Rule

When implementing a page:

- Use provided image files when available.
- Else, if image generation is available, use freshly generated bitmap files.
- Else, use the **Bundled Fallback Library** asset for the chosen style (`assets/<style>/`), and tell the user a fallback is in use.
- Use designed placeholders only when none of the above exists.
- Do not replace required images with decorative gradients or SVG illustrations unless the user explicitly approves that direction.
- Verify that every image has alt text and does not break mobile layout.
