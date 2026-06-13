# Copy Framework

Use this reference to convert raw notes, resumes, or product material into public website copy. The goal is to preserve facts while making the page feel concise, credible, and memorable.

## Source Brief Schema

Extract this before writing:

```markdown
## Website Structure
- Layout: portfolio (Hero -> About -> Contact) OR product page (Hero -> Problem -> Features -> Proof -> CTA) — see `layout-framework.md`
- Language policy:
- Navigation:
- About subsections:
- Visible navigation labels:
- Visible section titles:
- Content groups: Work Experience / Project Experience / Portfolio Works
- Portfolio work subtype(s): Agent / Skill / App / Website
- Primary conversion action:
- Secondary actions:

## Identity
- Name:
- Current title/role:
- Core positioning:
- Target audience:
- Primary CTA:

## Signals
- Tags:
- Industries:
- Credentials:
- Languages:

## Proof
- Metrics:
- Launches:
- Users/customers served:
- Business outcomes:
- Sensitive facts to redact/generalize:

## Personal Portfolio
- Personal introduction:
- Work experience modules:
- Project experience modules:
- Portfolio works:
  - Agent works:
  - Skill works:
  - App works:
  - Website works:
- User-provided assets:
- Text+icon fallbacks for projects without assets:
- Link status:

## Featured Cases
- Case 1:
  - Name:
  - Domain:
  - Role:
  - Problem:
  - What the user built:
  - Mechanism:
  - Result:
  - User-provided media:
  - Display treatment:
  - Asset status:
- Case 2:
- Case 3:
- Optional Case 4:
- Optional Case 5:

## Tone
- Language:
- Confidence level:
- Formality:
- Preferred visual style:
```

## Website Script Standard

Create the Website Script before writing final copy or implementation details. The script is the source of truth for visible words on the page and should include:

- site title and SEO description
- language policy: Chinese-only, English-only, or intentionally bilingual
- visible navigation labels, section titles, CTA labels, card/module titles, and footer microcopy
- hero identity, positioning, audience, primary CTA, and supporting tags
- personal introduction and credibility/proof signals
- work experience modules when the user has resume-like professional history
- project experience modules when the user has business/product/project cases
- portfolio works grouped as needed into `Agent`, `Skill`, `App`, and `Website`
- contact routes and whether each route has a real URL/action, needs user input, or should be omitted
- asset status for hero, site-level visuals, user-provided project media, and text+icon fallbacks
- privacy/disclosure notes for sensitive company names, metrics, internal systems, and personal contact details

If the source material does not provide one of these fields, mark it as `needs user input`, `optional`, `text-icon`, or `omit` rather than inventing content. A website can still be delivered with missing items, but the delivery notes must disclose the gap.

## Website Copy Deliverables

For a **portfolio site**, a complete copy pass should include:

- site title and SEO description
- navigation labels
- hero headline, tagline, CTA, and supporting tags
- About section title and paragraph
- personal introduction and work experience copy when applicable
- project experience section title, intro, and cases when applicable
- portfolio works section title, grouping labels, and cards for Agent / Skill / App / Website works when applicable
- skills/capability section title, intro, and cards
- portfolio/project section title, intro, and 3-5 case descriptions
- contact/CTA section
- contact link labels and URL/action text
- footer microcopy
- image alt text for all provided/generated/placeholder visuals
- icon labels or aria labels for text+icon project treatments

For a **product page**, swap the About / personal-experience / 3-5-case blocks for the product blocks defined in **Product Explainer Copy** below (problem/value, features or how-it-works, proof/demo, optional pricing/FAQ). Keep the shared items: title/SEO, nav labels, hero, CTA, contact links, footer, and alt text.

If the site is multi-page, provide page-level descriptions for each page:

```markdown
Page: [Case Detail / App Detail / Optional Product Detail]
Goal:
Audience question answered:
Sections:
Primary CTA:
```

## Fact Rules

- Preserve exact names, dates, titles, and metrics from the source unless the user asks to anonymize them.
- If the source already contains public-safe wording, reuse its disclosure level.
- Mark uncertain claims as `needs confirmation` instead of polishing them into facts.
- Do not turn responsibilities into outcomes without evidence.
- Do not exaggerate AI terms. Use `Agent`, `Workflow`, `RAG`, `evaluation`, or `governance` only when the source supports them.

## Visible Label Rules

Internal layout names such as `Hero`, `About`, `Portfolio / Work`, and `Contact` are planning slots only. Do not use them as final menu labels, section headings, or module titles unless the user's website script explicitly asks for those exact labels.

The website script should define:

- navigation labels
- section titles
- CTA labels
- card/module titles
- footer microcopy

If the script is incomplete, derive labels in the site's primary language and keep the label set consistent. A Chinese-first site should not mix English nav labels with Chinese section copy unless it is intentionally bilingual.

The implementation should never expose internal labels as a fallback just because a script field is missing. If a visible label is missing and cannot be safely derived, mark it `needs user input` or omit that navigation item.

## Positioning Patterns

For a personal portfolio:

```text
I build [type of systems/products] for [business context], turning [technical capability] into [operational/business outcome].
```

For a personal product:

```text
[Product name] helps [audience] do [job] by [mechanism], so they can [outcome].
```

For a hybrid service:

```text
I help [audience] move from [pain/current state] to [desired result] through [method or productized approach].
```

## Hero Copy

Generate 2-3 options, then recommend one.

Strong hero copy should:

- make the person/product identifiable immediately
- include the core domain or offer
- carry one memorable contrast or promise
- avoid inflated adjectives like `颠覆式`, `革命性`, `极致`, unless the brand intentionally wants that tone

Chinese hero examples:

```text
把想法做成可被看见的作品。
用项目、技能和作品说明我是谁。
让经历变成清晰可信的个人网站。
```

English hero examples:

```text
Selected work, skills, and stories in one place.
A personal portfolio shaped around real proof.
Who I am, what I build, and how to reach me.
```

## About Copy

Use 1 paragraph for most sites. Use 2 paragraphs only when the career through-line is complex.

Structure:

1. who the person/product is
2. what domain they operate in
3. what method or belief drives the work
4. what kind of result they create

Avoid retelling the whole resume. The experience section can carry details.

## Capability Copy

Each capability should answer:

- What does this person/product repeatedly do?
- What inputs does it work with?
- What business/user outcome does it create?
- Which portfolio case proves it?

Good capability titles:

- AI Agent 与 Workflow 设计
- 业务流程 Agent 化
- 评测、治理与稳定性建设
- 实时决策辅助
- Productized Operating System

Avoid vague titles:

- 创新能力
- 沟通协作
- 端到端负责
- 深度赋能

## Project / Experience Copy

Use the `context -> action -> mechanism -> result` pattern.

```markdown
**Project / Role | Date**
**Outcome:** [public-safe result]
[Context]. [Action]. [Mechanism]. [Result or lasting capability].
```

When writing portfolio cards, compress details into cards. When writing a resume-like page, use a timeline and preserve dates.

Keep these content categories distinct:

- **Work experience**: resume-like roles, organizations, responsibilities, scope, and career through-line. External links are optional and usually not required.
- **Project experience**: business/product/project cases that explain context, action, mechanism, and result. Links are optional unless the source includes public artifacts.
- **Portfolio works**: concrete works that can be shown, visited, or explained as artifacts, grouped as `Agent`, `Skill`, `App`, or `Website`. These may support links such as Demo, GitHub, Docs, official page, or case page when provided.

For portfolio project/case modules, write 3-5 cases by default. Project media is user-provided by default. If no real project media is available, use a text+icon treatment rather than an image placeholder. Inside a copy draft, keep it minimal:

```markdown
### [Case title]
Media: [provided screenshot/link/document OR missing -> text-icon]
Icon direction: [what the icon should suggest]
[Context]. [Action]. [Mechanism]. [Result].
```

For the full text+icon fields, use the authoritative format in `visual-assets-workflow.md`. If the user explicitly requests generated project visuals, then use the image placeholder/prompt format there; otherwise do not create project image prompts.

## Missing Detail Handling

If a required detail is missing, do not silently fill it with invented content. Use one of:

- `needs user input`: needed before meaningful progress.
- `placeholder`: can proceed with a visible placeholder.
- `generate`: should be sent to an image-generation model.
- `text-icon`: project media is missing, so the module should be implemented with copy, tags, and icon treatment.
- `optional`: can be omitted without harming the site.

Common missing details:

- target visitor
- CTA/contact method
- disclosure level for companies or metrics
- portfolio case result
- image material for project modules
- preferred style

## Product Explainer Copy

For a personal product page, use:

```markdown
### [Feature or use case]
[Audience] often struggles with [problem]. [Product] solves this by [mechanism]. The result is [outcome].
```

Then add:

- `What it does`
- `How it works`
- `Why it is different`
- `Who it is for`
- `What to do next`

## CTA Copy

Match the ask:

- Hiring: `如果你正在寻找一个能把 AI 想法拆成可上线系统的人，欢迎联系我。`
- Collaboration: `有具体流程想做成 AI 系统，我们可以从一个真实场景聊起。`
- Product waitlist: `加入内测，先用一个真实项目验证它。`
- Newsletter/follow: `关注后续实践笔记。`

## SEO Metadata

For personal sites:

```markdown
Title: [Name] - [Role / Positioning]
Description: [Name] is a [role] focused on [domains], building [systems/products] that [outcome].
```

For Chinese-first bilingual sites, include both name forms if available.
