---
name: who-am-i
description: Create or refine "Who Am I" personal portfolio websites, personal brand pages, resume-to-website pages, and personal product explainer sites. Use when the user asks to turn raw personal materials, Personal Portfolio introductions, resumes, project notes, product notes, or positioning drafts into: (1) website structure and page/module architecture, (2) portfolio/project modules with image placeholders and asset requirements, (3) polished website copy in Chinese/English, (4) visual style selection among creative bold art, poetic ethereal, flat character whitespace, or AI pixel style, (5) image-generation prompts and visual asset plans for text-only agents, or (6) an implementation-ready site brief or frontend page.
---

# Who Am I

## Overview

Build a personal website or personal product page from raw materials by separating four decisions: site structure, portfolio/project evidence and assets, public-facing copy, and visual style. Keep facts anchored to the user's source material, then turn them into a coherent site that can be written as a spec, implemented as frontend code, iterated as a design brief, or handed to an image-generation model for visual assets.

## Core Workflow

1. Read the user's source material first: resume, raw portfolio notes, product notes, existing page, screenshots, or linked local HTML examples. Treat named local files as source of truth.
2. Decide the task depth:
   - **Portfolio intake only**: ask the user for Personal Portfolio content using `references/personal-portfolio-intake.md`.
   - **Structure only**: produce page map, section order, module roles, and content requirements.
   - **Portfolio/modules only**: define 3-5 project/case modules, skill modules, image placeholders, and asset status.
   - **Copy only**: rewrite hero, about, capabilities, project/product modules, CTA, and SEO text.
   - **Style only**: choose or refine one of the four supported styles.
   - **Visual assets only**: create an image asset plan and prompts for an image-generation model using `references/visual-assets-workflow.md`.
   - **Full site brief**: deliver layout, copy, style direction, responsive behavior, and implementation notes.
   - **Frontend implementation**: build or edit the actual site, then verify visual rendering and mobile/desktop fit.
3. Extract a source brief before writing: identity, positioning, audience, hero message, personal experience, portfolio type, 3-5 portfolio items, skill/capability modules, app/site works when relevant, required assets, contact/social links, language requirements, and privacy constraints.
4. Choose a site structure from `references/layout-framework.md`.
5. Define portfolio modules and visual asset requirements using `references/visual-assets-workflow.md`. Choose the asset path by the model's image-generation capability — generate from style prompts if able, else use the bundled fallback library — and tell the user which path is in use (see step below).
6. Rewrite copy using `references/copy-framework.md`.
7. Apply one visual style from `references/style-library.md`.

## Required Personal Portfolio Input

When the user's material is incomplete, request a Personal Portfolio introduction before drafting the full site. It must include:

- **项目/经营项目模块**: usually 3-5 past cases or featured projects, each with project name, context, role, actions, result, and image material or image placeholder direction.
- **技能模块介绍**: 3-6 skills/capabilities, each with a short explanation and supporting evidence.
- **相应素材**: screenshots, product UI, diagrams, portraits, logos, documents, links, generated-image direction, or an explicit instruction to use placeholders.

Use `references/personal-portfolio-intake.md` as the user-facing prompt template.

## Four-Part Website SOP

Every complete website brief must cover these four parts. The layout choice (portfolio vs. product page, see `references/layout-framework.md`) determines what fills parts 1-2:

1. **Website structure**: page type, navigation, homepage composition, and the section order for the chosen layout — for portfolio sites that means About/experience, portfolio/case, and skill modules; for product pages that means problem/value, features, and proof/demo sections. Plus contact/CTA, footer, and responsive priority.
2. **Modules, placeholders, and assets**: for portfolio sites, 3-5 cases by default; for product pages, the feature/proof modules. Each module gets an image slot, alt text, source status, and generation/placeholder direction.
3. **Website copy**: hero, positioning, the body sections for the chosen layout, CTA, SEO metadata, and bilingual handling when useful.
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
| Style recommendation (color, type, image, motion, what to avoid, required assets) | `references/style-library.md` (per-style **Required visual assets**) |
| Visual asset plan (slot inventory, status, prompts, alt text, aspect ratio) | `references/visual-assets-workflow.md` (**Asset Inventory**) |
| Final acceptance check before delivery | `references/implementation-checklist.md` |

**Image and asset rule (authoritative source: `references/visual-assets-workflow.md`):** a text-only agent must never claim it generated a bitmap image, and must not substitute SVG for primary visuals (hero, thumbnails, backgrounds, portraits, product scenes) unless the user explicitly asks for vector output. Choose the asset path by capability and **announce it to the user**: if the model can generate images, generate from the per-style prompts; if it cannot, use the bundled fallback library at `assets/<style>/` and tell the user how to upgrade (switch to an image-capable model, or provide their own images); if neither exists, render polished styled placeholders — never broken image links.

For a **frontend implementation**, prefer the existing repository's stack and patterns. For a static site, keep the first screen as the actual portfolio/product experience rather than a marketing placeholder. `references/style-library.md` points to a buildable Flat-style reference at `examples/flat-portfolio.html`.

## References

- `references/layout-framework.md`: section architecture for personal portfolios and personal product pages.
- `references/copy-framework.md`: fact extraction, copy rewriting rules, and reusable copy templates. **Authoritative for Fact Rules.**
- `references/personal-portfolio-intake.md`: prompt template for asking the user to provide project modules, skill modules, and assets.
- `references/visual-assets-workflow.md`: image slot planning, placeholder rules, and prompts for image-generation models. **Authoritative for the image placeholder format and the no-fake-image / no-SVG-substitute rule.**
- `references/style-library.md`: the four supported visual styles and selection rules.
- `references/implementation-checklist.md`: final acceptance checklist before delivering a site.
- `examples/flat-portfolio.html`: buildable bilingual reference site in the Flat Character Whitespace style (placeholder-driven, reduced-motion aware).

## Quality Bar

The final site or brief should make the visitor understand within 10 seconds: who this is, what they build or offer, why they are credible, and what to do next. The page should feel intentional across desktop and mobile, with text that fits its containers, case visuals that are either provided or clearly planned, and a style choice that serves the user's positioning rather than merely decorating it.
