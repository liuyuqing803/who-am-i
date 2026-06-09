# Copy Framework

Use this reference to convert raw notes, resumes, or product material into public website copy. The goal is to preserve facts while making the page feel concise, credible, and memorable.

## Source Brief Schema

Extract this before writing:

```markdown
## Website Structure
- Layout: portfolio (Hero -> About -> Contact) OR product page (Hero -> Problem -> Features -> Proof -> CTA) — see `layout-framework.md`
- Navigation:
- About subsections:
- Portfolio type(s): Project Experience / Skill and Agent / App or Website Works
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
- Project experience modules:
- Skill and Agent modules:
- App or website works:
- Corresponding assets:

## Featured Cases
- Case 1:
  - Name:
  - Domain:
  - Role:
  - Problem:
  - What the user built:
  - Mechanism:
  - Result:
  - Image placeholder:
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

## Website Copy Deliverables

For a **portfolio site**, a complete copy pass should include:

- site title and SEO description
- navigation labels
- hero headline, tagline, CTA, and supporting tags
- About section title and paragraph
- personal experience introduction
- skills/capability section title, intro, and cards
- portfolio/project section title, intro, and 3-5 case descriptions
- contact/CTA section
- contact link labels and URL/action text
- footer microcopy
- image alt text for all provided/generated/placeholder visuals

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

For portfolio project/case modules, write 3-5 cases by default. Each case must retain an image placeholder even when no real image is available. Inside a copy draft, keep it minimal:

```markdown
### [Case title]
Image placeholder: [case-image-01]
Alt text: [what the image should show]
[Context]. [Action]. [Mechanism]. [Result].
```

For the full placeholder fields (visual direction, aspect ratio, asset status, image prompt) use the authoritative format in `visual-assets-workflow.md`. If the source has no image, write the placeholder as a production requirement rather than omitting visuals.

## Missing Detail Handling

If a required detail is missing, do not silently fill it with invented content. Use one of:

- `needs user input`: needed before meaningful progress.
- `placeholder`: can proceed with a visible placeholder.
- `generate`: should be sent to an image-generation model.
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
