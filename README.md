# who-am-i

An Agent **Skill** that turns raw personal materials — resumes, portfolio notes, product notes, positioning drafts — into a coherent personal website: a "Who Am I" portfolio, a personal brand page, or a personal product explainer site.

It separates four decisions so each can be done independently or end-to-end:

1. **Structure** — page map & section order (portfolio layout *or* product-page layout)
2. **Portfolio / modules & assets** — cases, skills, image slots, asset status
3. **Copy** — hero, about, capabilities, cases, CTA, SEO (Chinese / English)
4. **Style adapter** — one of four visual directions mapped onto the shared page structure

For full site briefs and frontend builds, use this sequence:

```text
Website Script -> Layout Framework -> Style Adapter -> Asset Inventory -> Implementation Review
```

## Visual styles

- **Creative Bold Art** — immersive, dark, luminous, art-forward
- **Poetic Ethereal** — quiet, watercolor/ink, generous whitespace
- **Flat Character Whitespace** — friendly pastel + flat character illustrations
- **AI Pixel** — retro-futuristic, maker/AI-native, pixel-console system language

`references/style-library.md` defines how each style maps onto Hero, About, Work/Portfolio, Skills, Contact, and Footer. The runnable files in `examples/` show style mechanics and implementation patterns; they do not replace the shared structure in `references/layout-framework.md`.

## Visual asset strategy

The skill picks the asset path by the invoking model's capability and **announces it to the user**:

- model **can** generate images → generate from each style's prompt;
- model **cannot** → use the bundled fallback library in `assets/<style>/`;
- neither available → polished styled placeholder.

> Note: the bundled Flat-style PNGs under `assets/flat/` are 即梦(jimeng)-generated and carry a visible watermark. Treat them as offline fallbacks; regenerate or replace with clean images for a production site.

Bundled fallback assets cover site-level style visuals such as hero, background, and optional symbolic about images. They do not replace user-provided project or work evidence. When project media is missing, use text+icon treatment.

## File roles

- `references/layout-framework.md` — the authoritative structure for portfolio and product-page skeletons.
- `references/copy-framework.md` — the authoritative user-material schema, fact rules, copy fields, labels, and source discipline.
- `references/style-library.md` — the four visual styles plus section-level style adapters.
- `references/visual-assets-workflow.md` — generated / bundled fallback / placeholder asset routing and media boundaries.
- `examples/` — runnable style references and the shared layout wireframe.

## Layout

```
SKILL.md                      # routing + invariants
references/
  layout-framework.md         # structure (portfolio & product-page skeletons)
  copy-framework.md           # fact rules + copy templates (authoritative: Fact Rules)
  visual-assets-workflow.md   # image slots, capability branch, fallback library (authoritative)
  style-library.md            # the four styles + section-level style adapters
  personal-portfolio-intake.md# intake prompt template
  implementation-checklist.md # final acceptance checklist
examples/
  flat-portfolio.html         # runnable Flat-style reference with placeholder-driven lower sections
  creative-bold-portfolio.html # runnable Creative Bold fluid hero mechanics
  poetic-ethereal-portfolio.html # runnable Poetic Ethereal watercolor/canvas mechanics
  ai-pixel-portfolio.html     # runnable AI Pixel CSS placeholder + module mechanics
  layout-skeleton.svg         # wireframe of the universal page skeleton
assets/                       # bundled fallback images per style (+ manifest)
scripts/
  generate-ai-pixel-assets.mjs # deterministic procedural AI Pixel fallback generator
agents/openai.yaml            # invocation metadata
```

## Install

Clone into your user skills directory. The command uses `$CODEX_HOME/skills` when `CODEX_HOME` is set, and defaults to `~/.codex/skills`:

```bash
SKILLS_DIR="${CODEX_HOME:-$HOME/.codex}/skills"
mkdir -p "$SKILLS_DIR"
git clone https://github.com/liuyuqing803/who-am-i.git "$SKILLS_DIR/who-am-i"
```

Restart your agent/Codex session so it can discover the new skill. Then use `who-am-i` explicitly, or let it trigger implicitly when you ask to build a personal site from your materials.
