# Style Library

This skill supports four visual styles. Use the user's preference when given. If no style is specified, choose based on audience, content density, and brand signal. Style 3 ships with a buildable sample under `examples/`; for the other styles, ask the user for a local example or screenshot when exact fidelity matters.

For missing hero images, portfolio thumbnails, background art, or style assets, follow `visual-assets-workflow.md` — it is authoritative for image-prompt creation and the no-fake-image / no-SVG-substitute rule.

## Style 1: Creative Bold Art

User label: `创意大胆的艺术风格`

Reference look (no full sample site yet — ask the user for a local example or screenshot if exact fidelity matters):

- a full-bleed dark hero with saturated fluid color and luminous accents, ripple/displacement motion, and one calm readable copy zone offset from the visual mass.
- `assets/creative-bold/hero.png` — bundled fallback hero visual (即梦-generated, watermarked, dark cosmic scene). See `assets/README.md`.

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

Required visual assets:

- hero abstract/cinematic bitmap background
- 3-5 portfolio thumbnails with consistent lighting and color treatment
- optional atmospheric background image for secondary sections

Image prompt hint:

```text
Create a luminous cinematic abstract image for a personal portfolio website, expressive AI-native fluid art, saturated cyan magenta orange accents on a near-black base, calm text-safe region on the right, premium editorial composition, no readable text, no logos, 16:9.
```

Avoid:

- unreadable text over busy visual areas
- motion in every section
- generic gradient blobs without a real image or generated visual asset

## Style 2: Poetic Ethereal

User label: `诗意空灵的风格`

Reference look (no bundled sample — ask the user for a local example or screenshot if exact fidelity matters):

- a watercolor/ink full-screen background, sparse copy over a soft scrim, generous negative space, and delicate ambient canvas motion (fine lines, dew/ink motifs).

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

Required visual assets:

- watercolor/ink hero background or symbolic portrait scene
- soft case images or abstract project atmospheres
- optional texture layer for section backgrounds

Image prompt hint:

```text
Create a poetic ethereal watercolor background for a personal portfolio website, mist blue and pale teal, ink-line details, quiet negative space for text, soft light, no readable text, no logos, 16:9.
```

Avoid:

- dense dashboards
- too many metrics in the hero
- loud CTAs that break the atmosphere

## Style 3: Flat Character Whitespace

User label: `扁平人物留白的风格`

Reference example (bundled with this skill):

- `examples/flat-portfolio.html` — a complete bilingual single-page site in this style: pastel bands, flat character illustrations with inline-SVG fallback, placeholder-driven work cards, reduced-motion aware.
- `examples/layout-skeleton.svg` — a wireframe of the universal Hero → About → Work → Contact skeleton this style uses.
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

Required visual assets:

- flat character hero illustration or friendly workspace scene
- 3-5 portfolio thumbnails in matching flat editorial style
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

Status: initial working spec. Ask the user for a visual example if exact style matching is required.

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

Required visual assets:

- pixel-art hero scene or AI console world
- 3-5 pixel-style portfolio cartridge thumbnails
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
