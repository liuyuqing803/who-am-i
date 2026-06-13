# Visual Assets Workflow

Use this reference whenever the site needs hero images, background visuals, portraits, style assets, explicitly requested generated imagery, or media treatment decisions for portfolio/project modules.

## Core Rule

Text-only agents cannot directly create bitmap images. If the active agent does not have an image-generation tool, do not claim that an image has been generated. Produce an image asset plan and prompts that can be handed to an image-generation model.

Do not use SVG as a substitute for primary website visuals such as hero art, project thumbnails, style backgrounds, portraits, or product scenes unless the user explicitly requests SVG/vector output. SVG may be used for small icons, diagrams, simple UI symbols, or implementation scaffolding.

## Project Asset Ownership Rule

Portfolio/project evidence assets should be provided by the user by default: screenshots, product UI, dashboards, diagrams, documents, links, videos, or approved brand materials.

If the user has no project assets, display the project with strong copy plus an icon treatment. Do not invent, generate, or source project/case images unless the user explicitly asks for generated project visuals. Generated imagery is appropriate by default for site-level style assets such as hero art, abstract background, or optional about/portrait symbolism, not for factual project evidence.

Keep these asset categories separate:

- **Site-level style visuals**: hero art, abstract background, symbolic portrait/about visuals, and optional atmosphere images. These may use bundled fallbacks or generated bitmap assets when available.
- **Project/work evidence visuals**: screenshots, dashboards, diagrams, product UI, docs, videos, and live URLs that prove a specific project or work exists. These are user-provided by default.
- **Text+icon treatments**: the default fallback for project/work evidence when the user has no media. This is not a missing-image state; it is an intentional presentation mode.

Do not use homepage/Hero style art, abstract style backgrounds, or generated atmosphere images as if they were screenshots or proof assets for a project, Agent, Skill, App, or Website.

## Capability Branch: Generate vs. Bundled Fallback

Pick the asset path by the invoking model's image-generation capability, and **make the choice visible to the user** — never silently decide.

1. **Model can generate images** (an image-generation tool/skill is available): generate site-level visuals, or project visuals the user explicitly requested, from the per-style prompts in `style-library.md` and the **Image Prompt Template** below. Announce it, for example:
   > ✅ 检测到生图能力：正在按「<style>」风格的 prompt 生成 N 张站点视觉素材（hero、section visual 等）。
2. **Model cannot generate images**: use the skill's **Bundled Fallback Library** (`assets/<style>/`) for the chosen style. Announce it and say how to upgrade:
   > ⚠️ 当前模型不具备生图能力：已改用 skill 内置的「<style>」兜底素材（assets/<style>/，共 N 张）。如需更贴合的视觉，请改用具备生图能力的模型重跑，或提供你自己的图片。
3. **Neither generation nor a matching fallback exists**: render a polished styled placeholder (see **Placeholder Rules**) and list the missing slot + its image prompt as a production requirement. Still announce that placeholders are in use.

Record, per visual or evidence slot, which path produced it: `provided` / `text-icon` / `generated` / `bundled-fallback` / `placeholder`. Surface that record to the user as part of the deliverable.

## Bundled Fallback Library

Location: `assets/<style>/` (styles: `creative-bold`, `poetic-ethereal`, `flat`, `ai-pixel`). These are the images the skill ships so homepage/Hero style visuals can still be built with a text-only model. `assets/README.md` is the manifest: per-style slot list, file naming, formats, and generation provenance.

Bundled fallback assets solve site-level style slots only, such as hero art, page atmosphere, and optional symbolic about visuals. They do not solve project/work evidence slots. If a project, Agent, Skill, App, or Website lacks user-provided proof media, use the text+icon treatment instead of substituting bundled style art.

- Prefer raster (WebP/PNG/JPG) for hero/background/case visuals; SVG is acceptable only for the character/spot illustrations that are vector by nature (the Flat style ships SVG characters).
- When a model CAN generate images, prefer freshly generated site-level assets over these fallbacks — the bundled set is intentionally generic, while generated assets can match the specific person/product.
- If a style folder is not yet populated, treat it as "missing" and fall to step 3 above, telling the user the fallback for that style is pending. Current status: `flat`, `creative-bold`, `poetic-ethereal`, and `ai-pixel` are populated (only `flat` is watermarked).
- Four styles ship runnable style examples under `examples/` (`flat-portfolio.html`, `creative-bold-portfolio.html`, `poetic-ethereal-portfolio.html`, `ai-pixel-portfolio.html`). The Creative Bold and Poetic Ethereal samples wire fallback assets into working first-viewport mechanics, including the motion (SVG ripple filter / dew-and-ink canvas) that a still image alone cannot convey. The AI Pixel sample can render with CSS placeholders and the bitmap fallback in `assets/ai-pixel/` is available for site-level Hero/background atmosphere. Do not assume these examples provide images for About, Portfolio/Work, Contact, product feature, or proof/demo sections.

## Asset Inventory

Before designing or implementing, build this table:

| Slot ID | Section | Purpose | Aspect Ratio | Source Status | Action | Prompt Needed |
| --- | --- | --- | --- | --- | --- | --- |
| hero-image-01 | Hero | Main brand/style image | 16:9 or full-bleed | provided/missing | use/generate/placeholder | yes/no |
| section-visual-01 | Later section | Optional About/Portfolio/Contact or feature visual in the same style | section-specific | provided/missing | use/generate/text-icon | yes only if generated |
| case-evidence-01 | Portfolio case 1 | User-provided proof media or text+icon treatment | media-specific or none | provided/missing | use/text-icon | no by default |
| style-bg-01 | Background | Style atmosphere | full-bleed | provided/missing | generate/placeholder | yes/no |

Source status values:

- `provided`: user supplied image, screenshot, URL, or local path.
- `missing`: no usable visual exists yet.
- `generate`: create with an image-generation model.
- `placeholder`: intentionally use a designed placeholder until assets arrive.
- `text-icon`: no user-provided project media exists, so the project is represented through copy, icon, tags, and/or a lightweight diagram/icon treatment.

## Required Slots By Site Type

For a personal portfolio:

- `hero-image-01`: portrait, abstract identity image, generated style image, or split hero visual.
- `section-visual-01`: optional later-section visual; use only if user-provided or explicitly generated to match the chosen style.
- `case-evidence-01` to `case-evidence-03`: user-provided case media when available; otherwise text+icon treatment.
- `case-evidence-04` and `case-evidence-05`: optional if the portfolio has four or five cases.
- `about-image-01`: optional portrait or symbolic image.

For a personal product:

- `hero-product-01`: product scene, interface mockup, or generated concept image.
- `feature-image-01` to `feature-image-03`: product feature or workflow visuals only when user-provided or explicitly generated.
- `proof-image-01`: screenshot, demo frame, chart, or example output, preferably user-provided because proof/demo should be factual.

For a hybrid personal brand + product:

- `hero-image-01`
- `offer-image-01`
- `case-evidence-01` to `case-evidence-03`

## Placeholder Rules

If project images are missing:

- do not create a fake project image
- render the case as a text+icon card, row, or compact evidence block
- choose an icon or simple UI symbol that matches the selected style
- include enough copy to preserve context, action, mechanism, and result

If site-level images are missing and no image model is available:

- keep the image slot visible in the brief
- include alt text
- specify style, aspect ratio, and intended content
- in frontend code, render polished placeholder blocks that match the selected style
- never leave broken image links

For non-Hero layout sections, do not create image slots just because a layout section exists. Add section visuals only when the website script, user assets, or explicit generation request calls for them.

Placeholder copy format:

```markdown
Image placeholder: [hero-image-01]
Alt text: [short factual description]
Aspect ratio: [16:10]
Visual direction: [workflow diagram / product UI / abstract generated artwork / portrait / background]
Asset status: [missing -> generate]
Image prompt: [prompt for image-generation model]
```

Text+icon project treatment format:

```markdown
Project treatment: [case-evidence-01]
Display mode: [text+icon card / text row / compact proof tile]
Icon direction: [system / workflow / product / research / writing / tool]
Media status: [missing -> text-icon]
Copy emphasis: [context -> action -> mechanism -> result]
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

Generate luminous abstract or cinematic bitmap assets. Good subjects include fluid color fields, AI system landscapes, layered interface atmospheres, or high-contrast site-level scenes. Keep one calm text-safe region for hero use.

### Poetic Ethereal

Generate watercolor, mist, ink, glass, dew, sky, or quiet natural-symbolic visuals. Use low contrast and generous negative space. Avoid dense dashboards and loud saturated colors.

### Flat Character Whitespace

Generate flat character illustrations, soft brand scenes, friendly desk/workflow moments, or simple editorial diagrams. Keep backgrounds light and preserve plenty of whitespace.

### AI Pixel

Generate pixel-art scenes, retro AI consoles, tiled inventory panels, sprite-like symbolic objects, or pixelated product worlds. Keep body text areas non-pixelated in the website; the image itself may use pixel art.

## Frontend Implementation Rule

When implementing a page:

- Use provided image files when available.
- For portfolio/project modules with no provided media, use text+icon presentation by default.
- Else, if image generation is available and the visual is a requested non-Hero section visual or other site-level visual, use freshly generated bitmap files.
- Else, for site-level visual slots, use the **Bundled Fallback Library** asset for the chosen style (`assets/<style>/`), and tell the user a fallback is in use.
- Use designed placeholders only when none of the above exists.
- Do not use bundled hero/background/about assets as project, work, proof, feature, Agent, Skill, App, or Website evidence.
- Do not replace required images with decorative gradients or SVG illustrations unless the user explicitly approves that direction.
- Verify that every image has alt text and does not break mobile layout.
