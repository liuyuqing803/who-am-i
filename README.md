# who-am-i

A Claude Code / Agent **Skill** that turns raw personal materials — resumes, portfolio notes, product notes, positioning drafts — into a coherent personal website: a "Who Am I" portfolio, a personal brand page, or a personal product explainer site.

It separates four decisions so each can be done independently or end-to-end:

1. **Structure** — page map & section order (portfolio layout *or* product-page layout)
2. **Portfolio / modules & assets** — cases, skills, image slots, asset status
3. **Copy** — hero, about, capabilities, cases, CTA, SEO (Chinese / English)
4. **Style** — one of four visual directions

## Visual styles

- **Creative Bold Art** — immersive, dark, luminous, art-forward
- **Poetic Ethereal** — quiet, watercolor/ink, generous whitespace
- **Flat Character Whitespace** — friendly pastel + flat character illustrations (ships a full buildable example)
- **AI Pixel** — retro-futuristic, maker/AI-native (initial spec)

## Visual asset strategy

The skill picks the asset path by the invoking model's capability and **announces it to the user**:

- model **can** generate images → generate from each style's prompt;
- model **cannot** → use the bundled fallback library in `assets/<style>/`;
- neither available → polished styled placeholder.

> Note: the bundled PNGs under `assets/` are 即梦(jimeng)-generated and carry a visible watermark. Treat them as offline fallbacks; regenerate or replace with clean images for a production site.

## Layout

```
SKILL.md                      # routing + invariants
references/
  layout-framework.md         # structure (portfolio & product-page skeletons)
  copy-framework.md           # fact rules + copy templates (authoritative: Fact Rules)
  visual-assets-workflow.md   # image slots, capability branch, fallback library (authoritative)
  style-library.md            # the four styles
  personal-portfolio-intake.md# intake prompt template
  implementation-checklist.md # final acceptance checklist
examples/
  flat-portfolio.html         # complete bilingual Flat-style reference site
  layout-skeleton.svg         # wireframe of the universal page skeleton
assets/                       # bundled fallback images per style (+ manifest)
agents/openai.yaml            # invocation metadata
```

## Install

Clone into your user skills directory:

```bash
git clone https://github.com/<you>/who-am-i.git ~/.claude/skills/who-am-i
```

Then invoke it in Claude Code with `/who-am-i`, or let it trigger implicitly when you ask to build a personal site from your materials.
