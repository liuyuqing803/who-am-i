# Layout Framework

Use this reference to design the page structure before writing copy or code. There are two layout families; pick one in the Site Map Decision below:

- **Who Am I / portfolio layout (default)**: Hero → About → Contact, where About contains personal introduction, work experience when relevant, project experience when relevant, and portfolio works such as Agent, Skill, App, or Website artifacts. This is the default for person-centric sites.
- **Personal Product Page layout**: used when the site's main subject is a product rather than a career. See the **Personal Product Page Layout** section below.

Everything in this file that says "About module", "portfolio area", or "3-5 cases" applies to the portfolio layout. The product-page skeleton has its own section order and copy expectations.

## Internal Layout Names vs. Visible Labels

`Hero`, `About`, `Portfolio / Work`, and `Contact` are internal layout slot names. They describe the page structure, not the final navigation labels, page headings, or module titles.

Visible menu labels, section titles, card headings, and CTA copy must come from the user's website script or from the copy pass in `copy-framework.md`. Do not render the internal layout names as user-facing text unless the user explicitly supplied those exact labels.

## Site Map Decision

Choose one structure before designing sections:

| Site Type | When To Use | Required Pages / Anchors | Optional Pages |
| --- | --- | --- | --- |
| Single-page Who Am I | Default for most users | Hero, About, Contact | None |
| Long-form Who Am I | Rich personal story or 3-5 detailed works | Hero, About with expanded portfolio, Contact | Case detail pages |
| Hybrid Who Am I + Product | Person is the brand and also has apps/sites/products | Hero, About with app/site works, Contact | Product detail page, demo page |
| Personal Product Page | The site's main subject is a product, not a career | Hero, Problem/Value, Features, Proof/Demo, CTA | Pricing, FAQ, About-the-builder band |

Default to a single-page or long-form site unless the user explicitly asks for multiple pages or the content needs case detail pages. When the primary subject is a product, use the **Personal Product Page Layout** section below instead of the portfolio skeleton.

## Navigation Model

Default navigation should include destinations for:

- homepage / first viewport
- personal story or profile proof
- portfolio, projects, work, or selected evidence
- contact or conversion action

The visible labels for those destinations should be defined by the website script. If the script has no labels, derive concise labels in the site's primary language and keep them consistent with section headings. If the About section is long, add subanchors for experience, projects, skills/agents, or apps/websites only when those modules are present. Keep navigation short. If a section is not meaningful yet, omit it rather than adding a dead anchor.

## Universal Page Skeleton

See `examples/layout-skeleton.svg` for a wireframe of this skeleton (Hero → About → Work → Contact → Footer) with internal slot labels, placeholder slots, and whitespace annotations. This is the shared structural skeleton for every visual style. It defines section order and content responsibility only; visual treatment, motion density, component shape, and style-specific fallback behavior are defined by the section-level mapping in `style-library.md`.

Use this skeleton before applying a style. Replace visible labels with the user's website copy, then apply one style adapter from `style-library.md` to decide how each section should look and behave.

| Section | Role | Required Inputs | Notes |
| --- | --- | --- | --- |
| Hero | Establish identity, positioning, and first impression | name/product name, one-line positioning, audience, primary CTA, optional hero visual | Keep the H1 concrete. The hero should make the visitor understand who this is and why to keep scrolling. |
| About | Explain the person and show proof | personal intro, experience summary, portfolio modules, skills/apps when relevant | This is the main content container. It must include personal experience plus a portfolio area. |
| Work / Portfolio | Show selected evidence | 3-5 cases when available, work subtype, role, context, action, result, links and media status | Use user-provided media when available. If media is missing, use text+icon treatment instead of empty image wells. |
| Contact | Convert interest into action | email, social links, website links, booking/contact method, CTA copy | Contact links can hyperlink to social media, personal sites, app stores, GitHub, LinkedIn, X/Twitter, Xiaohongshu, WeChat QR, email, or calendar. |
| Footer | Close the page cleanly | concise navigation, contact route, metadata, privacy/disclosure notes when needed | Keep it lightweight and consistent with the chosen style adapter. |

## Required Website Parts

For the **portfolio layout**, every complete brief must define:

1. **Homepage first viewport**: identity or product, value proposition, core visual, and primary CTA.
2. **About module**: personal background, personal introduction, work experience when relevant, credibility, and portfolio context.
3. **Project and portfolio modules**: project experience when relevant, plus portfolio works grouped as Agent, Skill, App, and/or Website when those materials exist.
4. **Contact module**: email, social links, booking, waitlist, download, collaboration action, or other contact routes.
5. **Footer**: concise navigation, contact, and metadata.

For the **product-page layout**, the required parts are the Hero, Problem/Value, Features/How-it-works, Proof/Demo, and CTA/Contact defined in the **Personal Product Page Layout** section — not the About/Portfolio modules above.

## Who Am I (Portfolio) Layout

Use this as the default layout for person-centric sites.

Recommended order:

1. **Hero**
   - identity/name
   - short positioning line
   - 3-5 tags or signals
   - primary CTA, usually scroll to About or Contact
   - hero image/style asset

2. **About**
   - personal introduction
   - personal experience summary
   - portfolio area
   - optional proof strip, education, credentials, recognition, or writing

3. **Contact**
   - short invitation
   - social/contact link list
   - email or primary contact route
   - optional footer

The featured project area should average 3-5 cases. Fewer than 3 can feel thin unless the work is highly detailed; more than 5 should usually move into an archive or secondary page.

Best for:

- job search or interview support
- independent consultant/founder profile
- builder or creator portfolio
- AI/product/design/engineering professional profile
- personal apps/sites/products where the person remains the main brand

## Personal Product Page Layout

When the site's primary subject is a **product** (a personal app, tool, template, or paid offer) rather than the person's career, the Hero -> About -> Contact portfolio skeleton is too biography-centric. Use this product-page skeleton instead, and pair it with the **Product Explainer Copy** section in `copy-framework.md`.

Recommended order:

1. **Hero** — product name, one-line value proposition, primary CTA (try / buy / join waitlist / download), and a product visual (interface mockup or generated concept scene).
2. **Problem / Value** — the pain the product removes and who feels it. One tight paragraph or 2-3 contrast points.
3. **Features / How it works** — 3-6 capability cards or a 3-step "how it works" flow. Each card: what it does, how, and the user outcome.
4. **Proof / Demo** — screenshots, demo frames, sample outputs, metrics, or testimonials. Use real assets when available, planned placeholders otherwise.
5. **Pricing / FAQ** *(optional)* — plans or a short FAQ when the product is commercial or has adoption friction. Omit if not meaningful.
6. **CTA / Contact** — repeat the primary action plus a secondary contact route (email, social, booking).

Maker note: when the person *and* the product both matter, use the **Hybrid Who Am I + Product** row in the Site Map Decision table — lead with the product skeleton above and fold a compact "About the builder" band into Proof or just above the final CTA.

Required visual slots for a product page are listed under "For a personal product" in `visual-assets-workflow.md`.

Best for:

- a personal app, tool, or SaaS landing page
- a template/kit/course/paid offer page
- a demo or waitlist page for an in-progress build

## Module Copy Lengths

- Hero H1: aim for a concrete, scannable line — roughly 8-18 Chinese characters or 4-10 English words. An expressive two-clause hero may run longer (see `examples/flat-portfolio.html`); keep it readable on one or two lines.
- Hero tagline: 1-2 sentences.
- Proof item label: 2-6 words.
- Capability card: 1 short title + 1 concise paragraph.
- Project card: user-provided media or text+icon treatment + problem/action/result, usually 80-140 Chinese characters or 45-80 English words.
- CTA block: one strong invitation + one practical action.

## About Section Structure

The About section is not just a biography. It contains:

1. **Personal experience introduction**
   - background
   - current identity
   - key domains
   - career or creation through-line

2. **Work experience**
   - professional roles, responsibilities, domains, and career progression
   - use timeline rows, compact role cards, or a short experience band
   - do not force external links unless the source provides public links

3. **Project experience**
   - business, product, or operating cases that show context, action, mechanism, and result
   - keep the first visible project set to 3-5 items
   - use user-provided media when available; otherwise use text+icon treatment

4. **Portfolio works**
   - concrete works grouped as Agent, Skill, App, and/or Website
   - works may support Demo, GitHub, Docs, official page, or case-page links when provided
   - if links are missing, omit the action or mark it in the brief as `needs user input`; do not invent URLs

5. **Optional proof/support**
   - metrics
   - education
   - credentials
   - recognition
   - writing/public links

## Content Group Selection

Choose content groups according to the user's actual materials. Do not collapse work experience, project experience, and portfolio works into one generic `Work` section unless the Website Script explicitly asks for a simplified structure.

| Content Group | Use When | Typical Items | Link Behavior | Media / Icon Treatment |
| --- | --- | --- | --- | --- |
| Work Experience | The user has professional history or resume-like roles | roles, organizations, responsibilities, operating scope, career timeline | optional; usually not required | text timeline, role cards, or subtle icons |
| Project Experience | The user wants to show career/product/project achievements | business projects, product launches, case studies, operations systems | optional unless public artifact links exist | user-provided screenshot, workflow diagram, dashboard crop, document/link, or text+icon card |
| Portfolio Works: Agent | The user has AI agents, workflows, automations, or technical systems | Agent, workflow, MCP/tooling, automation, evaluation system | supports Demo, Docs, GitHub, or case page when provided | user-provided system diagram/artifact or text+icon capability card |
| Portfolio Works: Skill | The user has reusable skills, prompts, processes, or capabilities to showcase | Skill, prompt workflow, reusable SOP, evaluation method | supports Docs, repository, or case page when provided | user-provided artifact or text+icon capability card |
| Portfolio Works: App | The user has built apps, tools, demos, or products | app, tool, prototype, demo, productized workflow | supports Demo, app page, GitHub, or case page when provided | user-provided product screenshot, demo link, or text+icon card |
| Portfolio Works: Website | The user has built websites, landing pages, portfolios, or templates | website, landing page, personal site, template | supports live URL, source, or case page when provided | user-provided website preview, live link, or text+icon card |

Do not force all groups or all portfolio work subtypes. Use the groups that match the user's materials. If multiple groups exist, present them as tabs, segmented controls, grouped sections, timeline + grid, or a mixed portfolio grid depending on the chosen style.

## Project / Case Module Requirements

Each case card or case section must include:

- case title
- case type or domain tag
- user's role
- problem/context
- what was built or changed
- measurable or observable result
- user-provided media slot or text+icon treatment
- related skill/capability tags

Every case card or section needs a consistent evidence treatment. Use user-provided media when it exists. If no media exists, use a clean text+icon treatment that matches the chosen style. Do not generate portfolio/project visuals unless the user explicitly asks for generated project images.

If the user provides no assets, keep the project visible as a text+icon card or row. Do not leave empty image wells, gray boxes, or broken image links.

## Portfolio Work Link Requirements

For Agent, Skill, App, and Website works, links are supported but not mandatory. Only render link buttons when the Website Script provides a real target:

```markdown
Work: [name]
Type: [Agent / Skill / App / Website]
Primary link: [Demo / Live site / Docs / GitHub / Case page / none]
Secondary links:
Link status: [provided / needs user input / omit]
```

Work experience and ordinary project experience do not require GitHub, Demo, or live-site links. Avoid making non-public professional history look like a clickable product portfolio.

## Skill Module Requirements

Each skill/capability card must include:

- skill name
- what the person/product can do
- supporting case or proof
- user/business value
- optional visual icon or small image slot

Recommended format:

```markdown
Skill: [capability name]
Role: [what this capability does in the site story]
Proof: [case name / metric / artifact]
Visual slot: [skill-icon-01 or none]
```

## Mobile Priority

On mobile, preserve this order:

1. Identity or product name.
2. One-line value.
3. Primary CTA or contact.
4. About intro.
5. Selected portfolio items.
6. Contact links.

Avoid hiding proof and contact behind complex animation. If the style uses a large visual hero, keep text and CTA readable without requiring scrolling through decorative media first.

## Contact Link Requirements

Each contact item should include:

```markdown
Label: [LinkedIn / GitHub / Email / X / 小红书 / Website / Calendar / WeChat]
URL or action:
Priority: [primary / secondary]
Icon or visual treatment:
```

Use real hyperlinks when URLs are provided. For email, use `mailto:`. For unavailable links, keep the label as `needs user input` instead of inventing URLs.
