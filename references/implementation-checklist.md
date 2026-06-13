# Implementation Review Checklist

Run this before delivering any Who Am I site, brief, or frontend implementation. This is a suggested delivery checklist, not a hard gate: fix practical issues when possible, and clearly report remaining gaps, risks, missing assets, missing links, deployment limits, or compliance concerns in the delivery notes.

## Output Modes

Use the output mode that matches the user's request:

- **Default concise delivery notes**: use for normal site/brief/code delivery. Summarize what is satisfied, what is missing, and the next recommended fixes in a short note.
- **Detailed review report**: use when the user asks for review, audit, validation, acceptance checking, full inspection, or asks whether the site meets quality standards. Cover every section below.

Suggested concise format:

```markdown
Delivery notes:
- Satisfied:
- Needs user input:
- Suggested improvements:
- Risks / deployment notes:
```

Suggested detailed format:

```markdown
Implementation review:
- Content and script fidelity:
- Language consistency:
- Visual style:
- Layout and responsive behavior:
- Assets and media:
- Bugs and performance:
- Interaction and links:
- Security, privacy, and compliance:
- Recommended next fixes:
```

## 10-Second Clarity

- [ ] Within ~10 seconds the visitor can tell **who this is**, **what they build/offer**, **why credible**, and **what to do next**.
- [ ] Hero H1 is concrete (a real identity/offer, not a vague slogan).
- [ ] Primary CTA is visible without scrolling past decorative media.

## Content and Script Fidelity

- [ ] Visible navigation labels, section titles, CTA labels, card titles, and footer copy come from the Website Script or copy pass.
- [ ] Internal layout names (`Hero`, `About`, `Portfolio / Work`, `Contact`) are not blindly exposed as visible page labels.
- [ ] The primary language is consistent across navigation, headings, body copy, buttons, and cards.
- [ ] If the site is bilingual, every intended visible string has both languages and the toggle/switching logic works.
- [ ] No invented company, metric, title, date, education, award, shipped product, link, or result appears in the final site (`copy-framework.md` **Fact Rules**).
- [ ] Sensitive/over-precise facts are generalized while keeping business meaning.
- [ ] Uncertain claims are marked `needs confirmation`, `needs user input`, or omitted rather than polished into facts.

## Structure and Content Groups

- [ ] Layout matches the chosen skeleton: portfolio (Hero → About → Contact) or **Personal Product Page** (Hero → Problem → Features → Proof → CTA). See `layout-framework.md`.
- [ ] Every nav anchor points to a section that exists; no dead anchors.
- [ ] Personal introduction, work experience, project experience, and portfolio works are separated when those materials exist.
- [ ] Portfolio works are grouped as Agent, Skill, App, and/or Website only when the source supports those groups.
- [ ] Work experience and ordinary project experience are not forced to have GitHub/Demo/live-site links.
- [ ] Agent, Skill, App, and Website cards show link actions only when real links are provided.
- [ ] The first visible project/portfolio set shows 3-5 items when enough material exists; extras move to archive, detail pages, or secondary sections.

## Visual Assets

- [ ] Every image has alt text.
- [ ] Portfolio/project assets are user-provided when media is shown; if project media is missing, the module uses text+icon treatment rather than invented imagery.
- [ ] Style reference assets are treated as homepage/Hero-only; any About, Portfolio/Work, Contact, feature, or proof images are user-provided or explicitly generated.
- [ ] Homepage/Hero style art, abstract backgrounds, or generated atmosphere visuals are not reused as project screenshots or proof.
- [ ] Site-level missing images use polished styled placeholders that match the chosen style — no empty gray boxes, no broken image links.
- [ ] No SVG substituted for a primary visual (hero, thumbnail, background, portrait, product scene) unless the user asked for vector (`visual-assets-workflow.md` **Core Rule**).
- [ ] For a text-only agent: image prompts were produced only for site-level visuals or explicitly requested generated project visuals; nothing falsely claimed as "generated".

## Visual Style and Layout

- [ ] Exactly one of the four styles applied; color, type, motion, and spacing are consistent across sections.
- [ ] A Style Implementation Brief from `style-library.md` was created or implicitly followed before frontend work began.
- [ ] Hero, About/proof, Work/Portfolio, Skills, Contact/CTA, and Footer all use the same selected style tokens rather than drifting into generic cards or mixed visual systems.
- [ ] Example files were used for style mechanics and component language, not copied as final structure or sample facts.
- [ ] Style serves the person/product positioning, not just decoration.
- [ ] Text has sufficient contrast against its background everywhere.
- [ ] Typography scale is coherent: hero type is reserved for hero-level content; cards, timelines, and compact panels use appropriately smaller headings.
- [ ] Cards, buttons, icons, tags, and dividers share a consistent visual language.
- [ ] Layout spacing and alignment are consistent across comparable modules.

## Responsive & Motion

- [ ] Mobile order preserved: identity → one-line value → CTA/contact → about → portfolio → contact (`layout-framework.md` **Mobile Priority**).
- [ ] No text overflow or container breakage at narrow widths.
- [ ] Navigation remains usable on mobile; core contact/CTA is not hidden behind decorative or complex interaction.
- [ ] `prefers-reduced-motion` respected; no motion in every section.

## Bugs and Performance

- [ ] No broken image links, empty image wells, or missing background assets.
- [ ] No dead internal anchors or obviously broken external links.
- [ ] No visible page misalignment, overlapping text, clipped cards, or broken section order on desktop or mobile.
- [ ] Critical content does not depend on unavailable third-party scripts, fonts, or remote assets.
- [ ] Non-Hero images are lazy-loaded when implemented in frontend code.
- [ ] Image sizes are reasonable for web delivery; no oversized raw production files are used for small thumbnails.
- [ ] Browser console has no runtime errors that break navigation, rendering, language switching, or interaction.

## Contact & Conversion

- [ ] Contact routes use real links (`mailto:` for email); unknown links left as `needs user input`, not invented.
- [ ] Primary conversion action is reachable from both hero and the final CTA/contact block.
- [ ] Buttons, cards, links, and toggles have visible hover/focus/active feedback.
- [ ] Link buttons are not rendered when the target is missing.

## Security, Privacy, and Compliance

- [ ] Deployment target should use HTTPS when public.
- [ ] No advertising popups, forced redirects, or unknown third-party tracking scripts are added by default.
- [ ] Image, font, icon, and generated asset sources are explainable in delivery notes when relevant.
- [ ] No watermarked or unclear-rights material is presented as production-ready.
- [ ] Private contact details, company names, internal metrics, or confidential project information are not exposed unless the user provided or approved them.

## Delivery Notes

- [ ] State which items are satisfied.
- [ ] State which items are suggestions rather than blockers.
- [ ] List missing user inputs: project screenshots, work links, Agent/App/Website URLs, GitHub/Docs links, portrait, brand assets, contact routes, or deployment details.
- [ ] List any risks: non-HTTPS deployment, unconfirmed copyright, missing source proof, privacy sensitivity, or incomplete mobile/browser verification.
