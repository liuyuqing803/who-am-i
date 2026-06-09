# Implementation Checklist

Run this before delivering any Who Am I site or brief. It turns the Quality Bar into checkable items. Anything unchecked is either fixed or explicitly flagged to the user.

## 10-Second Clarity

- [ ] Within ~10 seconds the visitor can tell **who this is**, **what they build/offer**, **why credible**, and **what to do next**.
- [ ] Hero H1 is concrete (a real identity/offer, not a vague slogan).
- [ ] Primary CTA is visible without scrolling past decorative media.

## Structure

- [ ] Layout matches the chosen skeleton: portfolio (Hero → About → Contact) or **Personal Product Page** (Hero → Problem → Features → Proof → CTA). See `layout-framework.md`.
- [ ] Every nav anchor points to a section that exists; no dead anchors.
- [ ] Portfolio shows 3-5 items (fewer only if each is highly detailed; extras moved to archive/secondary).

## Copy & Facts

- [ ] No invented company, metric, title, date, education, award, or shipped product (`copy-framework.md` **Fact Rules**).
- [ ] Sensitive/over-precise facts generalized while keeping business meaning.
- [ ] Uncertain claims marked `needs confirmation`, not polished into facts.
- [ ] Bilingual handling consistent: every visible string has both languages if the site is bilingual; toggle works.

## Visual Assets

- [ ] Every image has alt text.
- [ ] Missing images use polished styled placeholders that match the chosen style — no empty gray boxes, no broken image links.
- [ ] No SVG substituted for a primary visual (hero, thumbnail, background, portrait, product scene) unless the user asked for vector (`visual-assets-workflow.md` **Core Rule**).
- [ ] For a text-only agent: image prompts were produced for missing assets; nothing falsely claimed as "generated".

## Style

- [ ] Exactly one of the four styles applied; color, type, motion, and spacing are consistent across sections.
- [ ] Style serves the person/product positioning, not just decoration.
- [ ] Text has sufficient contrast against its background everywhere.

## Responsive & Motion

- [ ] Mobile order preserved: identity → one-line value → CTA/contact → about → portfolio → contact (`layout-framework.md` **Mobile Priority**).
- [ ] No text overflow or container breakage at narrow widths.
- [ ] `prefers-reduced-motion` respected; no motion in every section.

## Contact & Conversion

- [ ] Contact routes use real links (`mailto:` for email); unknown links left as `needs user input`, not invented.
- [ ] Primary conversion action is reachable from both hero and the final CTA/contact block.
