# Style Library

This skill supports four visual styles. Use the user's preference when given. If no style is specified, choose based on audience, content density, and brand signal. All four styles ship runnable style examples under `examples/`; all four also have site-level bundled fallback assets under `assets/` (Flat is watermarked; the other three are clean). Ask the user for a local example or screenshot when exact fidelity matters.

For missing hero images, background art, site-level style assets, or portfolio/project media treatment decisions, follow `visual-assets-workflow.md` — it is authoritative for image-prompt creation, user-provided project evidence, text+icon fallbacks, and the no-fake-image / no-SVG-substitute rule.

## Style Adapter Contract

For a complete site, do not use a style example as the structure authority. First choose the structure in `layout-framework.md`, then apply one style adapter from this file to every required section.

Every complete portfolio output must map the chosen style onto:

- Hero
- About / personal proof
- Work / Portfolio / selected evidence
- Skills / capabilities when present
- Contact / CTA
- Footer

Every complete product-page output must map the chosen style onto:

- Hero
- Problem / Value
- Features / How it works
- Proof / Demo
- CTA / Contact
- Footer or closing metadata

The `examples/` files demonstrate runnable style mechanics and first-viewport composition. They do not replace the universal structure in `layout-framework.md`, and they do not provide project evidence assets. If later sections need visuals, use user-provided media or explicitly generated site-level visuals; otherwise use text+icon treatments.

## Style Implementation Brief

Before writing frontend code or a final visual spec, create a short style implementation brief for the selected style. This brief is the local style lock: every section, module, placeholder, and CTA must follow it.

```markdown
Selected style:
Reference example:
Fallback assets:

Style tokens:
- Base background:
- Accent colors:
- Text colors:
- Type direction:
- Border/radius language:
- Icon language:
- Motion language:

Section application:
- Hero:
- About / proof:
- Work / Portfolio:
- Skills / capabilities:
- Product / feature modules when present:
- Contact / CTA:
- Footer:

Asset rules:
- Site-level visuals:
- Project/work evidence:
- Text+icon fallback:

Consistency guardrails:
- Keep:
- Avoid:
- Must verify:
```

Use the selected style's section mapping below to fill the brief. Do not mix two visual styles in one site unless the user explicitly asks for a hybrid direction. When copying a pattern from an example file, copy the style mechanics and component language, not the sample's placeholder facts.

## Style 1: Creative Bold Art

User label: `创意大胆的艺术风格`

Reference example (bundled with this skill):

- `examples/creative-bold-portfolio.html` — a runnable style example for the first viewport: dark near-black stage, layered fluid hero + low-density page background, an SVG liquid-displacement ripple filter, expanding rings, caustic bloom, pointer-reactive light, and a calm text-safe zone on the right. Reduced-motion aware. For complete sites, keep the structure from `layout-framework.md` and extend the style with the section mapping below.
- `assets/creative-bold/hero.webp` + `hero-mobile.webp`, `background.webp` + `background-mobile.webp` — bundled fallback visuals (clean, no watermark). See `assets/README.md`.

Core feeling:

- expressive, immersive, high-energy, art-forward
- suitable for builders, creators, AI-native brands, experimental portfolios, and product pages that need a strong first impression

Visual language:

- full-bleed or large hero stage
- dark base with saturated fluid color, luminous accents, ripple or displacement motion
- strong contrast between animated visual area and quiet readable copy zone
- layered background image, vignette, caustic/ripple overlays, subtle pointer interaction
- rounded hero container can be used, but avoid stacking many cards inside cards

Palette direction:

- near-black/navy base
- electric cyan, magenta, orange, lime, or vivid blue as controlled accents
- white or near-white text
- avoid letting the whole page become only one dark-blue theme; add warm and cool contrast

Typography:

- modern display sans
- concise hero line
- small technical labels can use tight uppercase treatment

Motion:

- slow liquid drift
- ripple expansion
- pointer-responsive light or distortion
- respect reduced-motion settings

Best layout pairing:

- hero with visual mass on one side and copy in the calm zone
- proof cards below hero
- project/product modules with cinematic thumbnails or generated bitmap assets

Section mapping:

- Hero: use the bundled or generated fluid hero as the main site-level visual. Keep the colorful visual mass away from the primary copy and CTA. Motion belongs here first.
- About / proof: use dark content bands, quiet translucent panels, luminous dividers, or compact proof strips. Keep body copy readable; do not put long paragraphs directly over the busy hero image.
- Work / Portfolio: use high-contrast cards, timeline rows, or grouped panels with restrained glow. If project media is missing, use text+icon cards with crisp system/workflow icons; do not reuse abstract hero art as project proof.
- Skills / capabilities: use compact technical labels, thin borders, small icon marks, and short descriptions. Avoid stacking many heavy cards inside other cards.
- Contact / CTA: use a calm dark panel with one strong action, a secondary contact route, and a subtle accent line or halo. Keep it quieter than the Hero.
- Footer: use minimal dark metadata, short links, and low-contrast separators.

Asset boundary:

- Bundled fallback can cover `hero-image-01` and `style-bg-01`.
- Later atmospheric section visuals are optional and must be user-provided or explicitly generated.
- Project/work evidence images must be user-provided or explicitly requested for generation; otherwise use text+icon.

Required visual assets:

- hero abstract/cinematic bitmap background
- portfolio/project media only when user-provided; otherwise text+icon cards with consistent icon color and weight
- optional atmospheric image for later sections only if user-provided or explicitly generated

Image prompt hints (this style needs two coordinated images — a bright hero and a dim companion background):

Hero (`hero.*`):

```text
Create a luminous cinematic abstract hero image for a personal portfolio website, expressive AI-native liquid art, a flowing color field of lime-green, electric blue, magenta, and warm orange accents on a near-black navy base (#040914), soft caustic light and rippling displacement texture, the colorful mass weighted to the left, a calm darker text-safe region on the right third, premium editorial composition, no readable text, no logos, 16:9. Also provide a tighter center-safe crop for mobile.
```

Background (`background.*` — the low-density page backdrop, not the hero):

```text
Create a low-density companion background for the same site, the same lime/blue/magenta/orange-on-near-black palette but much dimmer and sparser, blurred fluid color with large areas of calm dark negative space so body copy stays readable, very low contrast, no focal subject, no readable text, no logos, 16:9. Also provide a mobile crop.
```

Avoid:

- unreadable text over busy visual areas
- motion in every section
- generic gradient blobs without a real image or generated visual asset

## Style 2: Poetic Ethereal

User label: `诗意空灵的风格`

Reference example (bundled with this skill):

- `examples/poetic-ethereal-portfolio.html` — a runnable style example for the first viewport: a full-screen watercolor background with a 42% left intro over a soft scrim, and a right-side canvas "晨露与墨线" (dew & ink) animation where fine ink stems grow glass dew-drops that breathe, tremble, and burst into splash particles. Reduced-motion aware (calm static frame). For complete sites, keep the structure from `layout-framework.md` and extend the style with the section mapping below.
- `assets/poetic-ethereal/hero.jpg` — bundled fallback background (clean, no watermark): layered misty mountains in mist blue and pale teal with faint stars. See `assets/README.md`.

Note: the signature ambient motion lives in the canvas code in the example file — image generation only supplies the still background, so reuse the example's `<canvas>` script when you want the full effect.

Core feeling:

- quiet, poetic, misty, reflective, atmospheric
- suitable for personal identity, writing, creative research, design, art, or a calm intellectual profile

Visual language:

- watercolor or ink-like full-screen background
- sparse copy, generous negative space
- soft scrim behind text for readability
- delicate canvas animation, fine lines, dew/bubble/ink motifs
- fewer sections per viewport; let the page breathe

Palette direction:

- pale teal, mist blue, ink gray, moonlit white
- low saturation and soft contrast
- use dark text overlays only when the background is light enough; otherwise use pale text

Typography:

- elegant sans or restrained serif/sans pairing
- light letter spacing only for tiny labels
- hero can be more lyrical, but still concrete enough to identify the person/product

Motion:

- slow, organic, ambient
- thin lines, particles, droplets, gentle reveal
- no sharp bouncing or aggressive hover effects

Best layout pairing:

- left intro and right immersive animation for first viewport
- later sections as quiet text bands or editorial blocks
- fewer cards; use dividers and whitespace

Section mapping:

- Hero: use watercolor/ink background and optional dew-and-ink canvas motion. The full site must remain scrollable; avoid locking the complete page to a single viewport.
- About / proof: use editorial text bands, gentle scrims, thin ink-like separators, and sparse proof rows. Let the section breathe instead of packing many dense cards.
- Work / Portfolio: use low-density case blocks, text rows, or restrained cards with line icons. If project media is missing, use quiet text+icon treatments; do not invent soft case images or use the watercolor background as proof.
- Skills / capabilities: present capabilities as small annotated notes, paired columns, or fine-line cards with short copy.
- Contact / CTA: use a calm closing band with one invitation and clear contact links. CTA styling can be soft but must remain visible.
- Footer: use small metadata, delicate separators, and minimal links.

Asset boundary:

- Bundled fallback can cover `hero-image-01`.
- Optional texture layers or symbolic later-section visuals must be user-provided or explicitly generated.
- Project/work evidence images must be user-provided or explicitly requested for generation; otherwise use text+icon.

Required visual assets:

- watercolor/ink hero background or symbolic portrait scene
- soft case images only when user-provided or explicitly requested; otherwise restrained text+icon project treatments
- optional texture layer for later sections only if user-provided or explicitly generated

Image prompt hint (the full-screen watercolor background; pair it with the example's canvas motion):

```text
Create a poetic ethereal watercolor background for a personal portfolio website, layered misty mountain silhouettes receding into fog, cool palette of mist blue, pale teal, and ink gray, soft dawn light, a few luminous white stars low in the sky, delicate ink-line details, generous quiet negative space on the left for text, low saturation and soft contrast, dreamy and reflective, no readable text, no logos, tall full-bleed background (portrait or 4:5 works well as a cover).
```

Avoid:

- dense dashboards
- too many metrics in the hero
- loud CTAs that break the atmosphere

## Style 3: Flat Character Whitespace

User label: `扁平人物留白的风格`

Reference example (bundled with this skill):

- `examples/flat-portfolio.html` — a runnable style example in this style: pastel bands, flat character illustration direction, placeholder-driven lower-section examples, reduced-motion aware. Replace the sample facts and placeholders with the user's Website Script; lower-section project media still needs user-provided media, explicit generation, or text+icon treatment.
- `examples/layout-skeleton.svg` — a wireframe of the universal Hero -> About -> Work -> Contact -> Footer skeleton shared by all styles.
- `assets/flat/hero.png`, `assets/flat/about.png` — bundled fallback character illustrations for when the model can't generate images (即梦-generated, watermarked). See `assets/README.md` and the **Capability Branch** in `visual-assets-workflow.md`.

Core feeling:

- friendly, clear, approachable, professional, light
- suitable for product managers, designers, educators, consultants, and portfolio pages that need warmth plus credibility

Visual language:

- white background with pastel bands
- flat character illustrations
- large whitespace and soft section transitions
- rounded but restrained cards
- simple geometric decorations, if used lightly

Palette direction:

- coral `#F0997B`
- sky blue `#85B7EB`
- lavender `#AFA9EC`
- mint `#5DCAA5`
- near-black text `#1a1a1a`
- secondary gray `#6b6b6b`

Typography:

- system sans or Noto Sans SC
- light-weight large headings with strong words in semibold
- compact body text for cards

Motion:

- gentle floating illustration
- hover lift on cards
- minimal scroll effects

Best layout pairing:

- split hero with copy and character illustration
- pastel proof/capability cards
- experience timeline cards
- bilingual toggle if the source supports Chinese and English

Section mapping:

- Hero: use a split layout with copy and a character/workspace illustration. Keep the H1 concrete and leave generous whitespace.
- About / proof: use light pastel bands, friendly illustration or portrait slots when available, stat rows, and readable paragraphs.
- Work / Portfolio: use clean cards or rows with soft colored accents. If project media is missing, use flat text+icon cards; placeholder boxes must be labeled and polished, not empty.
- Skills / capabilities: use pastel cards, simple geometric icons, and short capability descriptions tied to proof.
- Contact / CTA: use a friendly pastel closing band with clear email/social/contact actions.
- Footer: use light metadata and compact links.

Asset boundary:

- Bundled fallback can cover `hero-image-01` and optional `about-image-01`; note the watermark status before production use.
- Small skill icons can be vector or text symbols when they are decorative.
- Project/work evidence images must be user-provided or explicitly requested for generation; otherwise use text+icon.

Required visual assets:

- flat character hero illustration or friendly workspace scene
- portfolio/project media only when user-provided or explicitly requested; otherwise flat text+icon cards
- optional small skill icons or spot illustrations

Image prompt hint:

```text
Create a flat editorial character illustration for a personal portfolio website, friendly professional product builder, pastel coral sky blue lavender mint palette, generous whitespace, clean shapes, no readable text, no logos, 4:3.
```

Avoid:

- over-rounded UI that feels childish
- too many decorative circles
- pastel palette with no strong text contrast

## Style 4: AI Pixel

User label: `AI 像素风`

Status: runnable CSS placeholder sample available; clean procedural bitmap fallback assets available under `assets/ai-pixel/`. Ask the user for a visual example if exact style matching is required.

Reference example (bundled with this skill):

- `examples/ai-pixel-portfolio.html` — a runnable style implementation sample with command panels, pixel hero placeholder, save-slot project cards, inventory capability modules, and contact command panel. It can render without image assets, while production builds may use the bitmap fallbacks below.
- `assets/ai-pixel/hero.png` + `hero-mobile.png`, `background.png` — bundled procedural raster fallbacks (clean, no watermark). See `assets/README.md` and `assets/ai-pixel/README.md`.

Core feeling:

- digital, playful, AI-native, retro-futuristic
- suitable for personal AI tools, maker portfolios, coding projects, experimental products, or a builder identity with a stronger technical signal

Visual language:

- pixel grid, tiled modules, sprite-like icons, low-resolution texture used intentionally
- terminal or system-console references can appear, but the page should still feel like a polished website
- section blocks can resemble panels, cartridges, command windows, or pixel inventory tiles
- use crisp edges and 2-4px borders; avoid soft glassmorphism

Palette direction:

- choose either light or dark base:
  - light base: off-white, ink, electric blue, acid green, warm red
  - dark base: near-black, CRT green, cyan, magenta, amber
- use accent colors sparingly so it does not become visual noise
- avoid a single neon color dominating the full page

Typography:

- headings can use pixel or monospace display font when available
- body text should stay readable in normal sans or mono-sans
- do not use viewport-scaled font sizes

Motion:

- cursor blink
- pixel reveal
- step-based hover transitions
- small sprite movement
- reduced-motion fallback required

Best layout pairing:

- hero as command prompt, game start screen, or AI console
- proof as stat tiles
- capabilities as inventory/system modules
- projects as cartridges or save slots
- CTA as a command/action panel

Section mapping:

- Hero: use a polished AI console, command prompt, pixel world, or game-start composition. Keep real body text crisp and readable; pixel styling should frame the content, not degrade it.
- About / proof: use system panels, stat tiles, changelog rows, or profile cards with crisp borders and restrained accent colors.
- Work / Portfolio: use cartridge cards, save slots, inventory tiles, or command-output rows. If project media is missing, use pixel placeholder panels and text+icon; do not pretend bitmap evidence exists.
- Skills / capabilities: use inventory modules, command cards, or system-status rows with short labels and proof references.
- Contact / CTA: use a command/action panel with one primary action and clear secondary routes.
- Footer: use terminal-style metadata or a compact status bar.

Asset boundary:

- Use `assets/ai-pixel/hero.png`, `hero-mobile.png`, or `background.png` for site-level Hero/background fallback when no generated or user-provided visual exists. A designed CSS pixel placeholder is also acceptable for this style when it fits the implementation better.
- Small sprite-like icons can be drawn as vector, CSS, or text symbols when they are decorative.
- Project/work evidence images must be user-provided or explicitly requested for generation; otherwise use text+icon.

Required visual assets:

- pixel-art hero scene or AI console world
- pixel-style portfolio/project media only when user-provided or explicitly requested; otherwise pixel text+icon save-slot cards
- optional sprite-like skill icons

Image prompt hint:

```text
Create a polished AI pixel-art hero image for a personal portfolio website, retro-futuristic AI console world, crisp pixel grid, cyan magenta amber accents on dark base, clear central focal object, no readable text, no logos, 16:9.
```

Avoid:

- making all text pixelated
- tiny low-contrast body copy
- nostalgia that hides the professional proof
- excessive glitch effects

## Style Selection Rules

Choose **Creative Bold Art** when the user wants a strong visual hook, AI-native feeling, or high-impact product/persona launch.

Choose **Poetic Ethereal** when the user's content is reflective, artful, writing-led, or intentionally quiet.

Choose **Flat Character Whitespace** when the user needs warmth, clarity, professional accessibility, and enough room for career/project details.

Choose **AI Pixel** when the user wants an obviously digital, maker, tool, or AI product identity.

If the user asks for a personal website for job search or broad professional credibility and does not specify style, default to **Flat Character Whitespace** unless the source material strongly signals a more experimental brand.

If the user asks for an AI product or personal tool, default to **Creative Bold Art** or **AI Pixel** based on whether the product should feel premium/immersive or playful/technical.
