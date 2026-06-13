---
name: who-am-i
description: >-
  Create or refine "Who Am I" personal portfolio websites, personal brand pages,
  resume-to-website pages, and personal product explainer sites. Use when the
  user asks to turn raw personal materials, Personal Portfolio introductions,
  resumes, project notes, product notes, or positioning drafts into: (1) website
  structure and page/module architecture, (2) portfolio/project modules with
  user-provided asset tracking or text+icon fallbacks, (3) polished website copy in
  Chinese/English, (4) visual style selection among creative bold art, poetic
  ethereal, flat character whitespace, or AI pixel style, (5) image-generation
  prompts for site-level visuals when explicitly needed, or (6) an
  implementation-ready site brief or frontend page.
---

# Who Am I

## Overview

Build a personal website or personal product page from raw materials through three layers: **Website Script**, **Visual & Layout Spec**, and **Implementation Review**. Keep facts anchored to the user's source material, then turn them into a coherent site that can be written as a spec, implemented as frontend code, iterated as a design brief, or handed to an image-generation model for explicitly requested site-level visuals.

## Three-Layer Production Model

Use this model for any complete Who Am I site, full site brief, or frontend implementation:

1. **Website Script**: define what the site says. This includes positioning, visible navigation labels, visible section titles, personal introduction, work experience, project experience, portfolio works, contact routes, language policy, asset status, link status, and privacy/disclosure notes. Internal layout names such as `Hero`, `About`, `Portfolio / Work`, and `Contact` are not visible titles.
2. **Visual & Layout Spec**: define how the script is presented. This maps script content into the structure from `references/layout-framework.md`, applies one section-level style adapter from `references/style-library.md`, and records media slots, user-provided project assets, text+icon fallbacks, and any explicitly requested generated site-level visuals.
3. **Implementation Review**: diagnose the final site or brief before delivery. This is a suggested delivery checklist, not a hard gate: fix practical issues, and clearly report remaining gaps, risks, missing assets, missing links, deployment limits, or compliance concerns.

## Core Workflow

Use this order for full site briefs and frontend implementations: **Website Script -> Layout Framework -> Style Adapter -> Asset Inventory -> Implementation Review**.

1. Read the user's source material first: resume, raw portfolio notes, product notes, existing page, screenshots, or linked local HTML examples. Treat named local files as source of truth.
2. Decide the task depth:
   - **Portfolio intake only**: ask the user for Personal Portfolio content using `references/personal-portfolio-intake.md`.
   - **Structure only**: produce page map, section order, module roles, and content requirements.
   - **Portfolio/modules only**: define 3-5 project/case modules, skill modules, user-provided asset status, and text+icon fallbacks when project media is missing.
   - **Copy only**: rewrite hero, about, capabilities, project/product modules, CTA, and SEO text.
   - **Style only**: choose or refine one of the four supported styles.
   - **Visual assets only**: create a site-level image asset plan and prompts for an image-generation model using `references/visual-assets-workflow.md`; do not generate portfolio/project evidence visuals unless the user explicitly requests that.
   - **Full site brief**: deliver layout, copy, style direction, responsive behavior, and implementation notes.
   - **Frontend implementation**: build or edit the actual site, then verify visual rendering and mobile/desktop fit.
3. Build the **Website Script** before designing or coding. Extract identity, positioning, audience, hero message, visible labels, personal introduction, work experience, project experience, portfolio works, contact/social links, language requirements, asset status, link status, and privacy constraints.
4. Build the **Visual & Layout Spec** from the script: choose a site structure from `references/layout-framework.md`, then create the selected style's **Style Implementation Brief** from `references/style-library.md` and use it to map each required section/component. Do not treat an example file as the structure authority; examples demonstrate runnable style mechanics and must be combined with the layout framework for complete sites.
5. Define portfolio modules and visual treatment using `references/visual-assets-workflow.md`. Project/portfolio evidence assets should come from the user by default; if they are missing, render the project with text and icons. Choose the asset path only for hero/about/background/style visuals, or for project visuals the user explicitly asked to generate, and tell the user which path is in use.
6. Rewrite copy using `references/copy-framework.md`; visible navigation, section headings, CTA labels, and card titles come from the Website Script or this copy pass, not from internal layout slot names.
7. For frontend implementations, build or edit the actual site, then verify visual rendering, links, responsive behavior, and mobile/desktop fit.
8. Run the **Implementation Review** in `references/implementation-checklist.md` before delivery. Default to concise delivery notes; expand into a detailed review report only when the user asks for review, audit, validation, or acceptance checking.

## Required Personal Portfolio Input

When the user's material is incomplete, request a Personal Portfolio introduction before drafting the full site. It must include:

- **项目/经营项目模块**: usually 3-5 past cases or featured projects, each with project name, context, role, actions, result, and any user-provided screenshots, documents, links, or product visuals. If no project material is provided, use text + icon presentation instead of generated project imagery.
- **技能模块介绍**: 3-6 skills/capabilities, each with a short explanation and supporting evidence.
- **相应素材**: user-provided screenshots, product UI, diagrams, portraits, logos, documents, and links. Generated imagery is only for site-level style visuals or project visuals the user explicitly asks to generate.

Use `references/personal-portfolio-intake.md` as the user-facing prompt template.

## Website Brief Contents Within The Three Layers

Every complete website brief must still cover these content parts, but they sit inside the three-layer model above. The Website Script owns the visible labels and copy facts; the Visual & Layout Spec owns structure, modules, style, and asset treatment; the Implementation Review checks the final result.

1. **Website structure**: page type, navigation destinations, homepage composition, and the section order for the chosen layout — for portfolio sites that means About/experience, portfolio/case, and skill modules; for product pages that means problem/value, features, and proof/demo sections. Plus contact/CTA, footer, and responsive priority. Internal layout names such as Hero, About, Portfolio/Work, and Contact are not visible titles; visible navigation and section titles must come from the user's website script or generated copy.
2. **Modules, placeholders, and assets**: for portfolio sites, 3-5 cases by default; for product pages, the feature/proof modules. Portfolio/project modules use user-provided media when available; otherwise they use text + icon presentation. Site-level hero/about/background visuals follow the asset workflow.
3. **Website copy**: user-facing navigation labels, section titles, hero, positioning, the body sections for the chosen layout, CTA, SEO metadata, and bilingual handling when useful.
4. **Website style**: one of the four supported visual directions, with color, typography, layout behavior, motion, and asset style requirements.

## Source Discipline

Do not invent companies, metrics, titles, dates, education, awards, or shipped products. Generalize sensitive or over-precise facts while keeping their business meaning (exact user counts to scale ranges, exact daily volume to order-of-magnitude). The full fact-handling rules live in `references/copy-framework.md` (**Fact Rules**) — treat that as authoritative.

When a source mixes Chinese and English, default to bilingual support, keeping Chinese primary if the user writes in Chinese. Add English only when useful for a portfolio audience or explicitly requested.

Ask a short clarification only when a decision changes the website materially and cannot be inferred: target audience, disclosure level, preferred style, or whether the output should be a document/spec or actual code.

## Deliverable Patterns

Each deliverable is defined in full in one authoritative reference. Do not restate the field lists here — route to the source:

| Deliverable | Authoritative reference |
| --- | --- |
| Website layout brief (page map, section order, module roles, mobile priority) | `references/layout-framework.md` |
| Website copy (hero options, about, capabilities, 3-5 case modules, CTA, SEO) | `references/copy-framework.md` (**Website Copy Deliverables**) |
| Style recommendation and implementation brief (color, type, image, motion, section mapping, consistency guardrails, what to avoid, required assets) | `references/style-library.md` (**Style Adapter Contract**, **Style Implementation Brief**, and per-style **Section mapping**) |
| Visual asset plan (slot inventory, status, prompts, alt text, aspect ratio) | `references/visual-assets-workflow.md` (**Asset Inventory**) |
| Implementation review and delivery notes | `references/implementation-checklist.md` |

**Image and asset rule (authoritative source: `references/visual-assets-workflow.md`):** portfolio/project evidence assets are user-provided by default. If they are missing, present the project with text and icons rather than inventing or generating project visuals. For hero/about/background/style visuals, a text-only agent must never claim it generated a bitmap image, and must not substitute SVG for primary visuals unless the user explicitly asks for vector output. Choose the asset path by capability and **announce it to the user**: if the model can generate images and the visual is site-level or explicitly requested, generate from the per-style prompts; if it cannot, use the bundled fallback library at `assets/<style>/` and tell the user how to upgrade; if neither exists, render polished styled placeholders — never broken image links.

For a **frontend implementation**, prefer the existing repository's stack and patterns. For a static site, keep the first screen as the actual portfolio/product experience rather than a marketing placeholder. Use `examples/` as runnable style references, not as the full-site structure authority. A complete site must still follow `references/layout-framework.md` and the chosen style's section mapping in `references/style-library.md`; it must not stop at a Hero-only reference. Non-Hero section imagery must be user-provided, explicitly generated, or represented through text+icon treatments according to `references/visual-assets-workflow.md`.

**Delivery review rule:** by default, finish with concise delivery notes that summarize what is satisfied, what is missing, and what risks remain. When the user asks for a review, audit, validation, acceptance check, or full inspection, use the detailed report mode in `references/implementation-checklist.md`.

## References

- `references/layout-framework.md`: section architecture for personal portfolios and personal product pages.
- `references/copy-framework.md`: fact extraction, copy rewriting rules, and reusable copy templates. **Authoritative for Fact Rules.**
- `references/personal-portfolio-intake.md`: prompt template for asking the user to provide project modules, skill modules, and assets.
- `references/visual-assets-workflow.md`: image slot planning, placeholder rules, and prompts for image-generation models. **Authoritative for the image placeholder format and the no-fake-image / no-SVG-substitute rule.**
- `references/style-library.md`: the four supported visual styles, selection rules, and section-level style adapters.
- `references/implementation-checklist.md`: implementation review checklist and delivery notes before delivering a site.
- `examples/flat-portfolio.html`: runnable Flat Character Whitespace style reference with placeholder-driven lower sections.
- `examples/creative-bold-portfolio.html`: runnable Creative Bold Art style reference for fluid hero mechanics (layered hero + background, SVG liquid-ripple filter, reduced-motion aware) using the `assets/creative-bold/` fallbacks.
- `examples/poetic-ethereal-portfolio.html`: runnable Poetic Ethereal style reference for watercolor + dew-and-ink canvas mechanics (reduced-motion aware) using the `assets/poetic-ethereal/` fallback.
- `examples/ai-pixel-portfolio.html`: runnable AI Pixel style reference with CSS pixel placeholders, command panels, inventory cards, and contact command panel.

## Quality Bar

The final site or brief should make the visitor understand within 10 seconds: who this is, what they build or offer, why they are credible, and what to do next. The page should feel intentional across desktop and mobile, with text that fits its containers, project evidence shown as provided media or clean text+icon cards, visible labels defined by the website copy rather than internal layout names, and a style choice that serves the user's positioning rather than merely decorating it.
