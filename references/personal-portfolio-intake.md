# Personal Portfolio Intake

Use this prompt when the user has not yet provided enough material for a full Who Am I website. Ask for the minimum structured input needed to build layout, copy, project modules, skill modules, and visual direction.

## User-Facing Prompt

```markdown
请先提供一份 Personal Portfolio（个人作品集）介绍，最好包含以下内容：

1. 基本定位
- 你的姓名 / 昵称 / 产品名：
- 你希望别人记住你的身份：
- 目标访客是谁：
- 这个网站最希望访客做什么：
- Hero 区你希望突出什么：姓名 / 身份 / 产品 / 一句话定位 / 视觉风格：
- 网站主语言：中文 / 英文 / 中英双语：
- 你希望导航和模块标题如何命名：

2. 工作经验（如果希望展示履历/职业经历）
每段经历请按这个格式提供：
- 公司 / 组织 / 阶段名称：
- 角色或职责：
- 时间范围：
- 负责的业务、产品或领域：
- 关键成果或可信证明：
- 是否可以公开公司名、指标、项目细节：
- 是否有公开链接（没有也没关系，工作经验默认不强制外链）：

3. 项目/经营项目模块（建议 3-5 个过往案例）
每个案例请按这个格式提供：
- 案例名称：
- 所属领域 / 类型：
- 你在其中的角色：
- 背景或问题：
- 你做了什么：
- 使用的方法、系统或关键机制：
- 结果或影响：
- 可公开程度：
- 图片素材：
  - 已有图片 / 截图 / 链接：
  - 如果没有图片，默认会用文字 + icon 展示该项目；如你明确希望生成项目图，请说明生成方向：

4. 作品集（如果有 Agent / Skill / App / Website 这类可展示作品）
每个作品请按这个格式提供：
- 作品名称：
- 类型：Agent / Skill / App / Website
- 一句话介绍：
- 解决的问题：
- 目前状态：已上线 / Demo / 原型 / 内部项目 / 文档化
- 你负责的部分：
- 可访问链接：Demo / GitHub / Docs / 官网 / Case Page / 暂无
- 图片素材：
  - 已有截图 / 产品 UI / 工作流图 / 链接：
  - 如果没有图片，默认会用文字 + icon 展示；如你明确希望生成作品图，请说明生成方向：

5. 技能模块介绍（建议 3-6 个）
每个技能请按这个格式提供：
- 技能名称：
- 你如何使用它：
- 可以证明这个技能的项目或结果：
- 希望网站上呈现得偏专业、偏创意，还是偏产品化：

6. 相应素材
- 头像或个人照片：
- 项目截图 / 产品 UI / 工作流图 / 数据图（原则上由你提供）：
- 品牌色、字体、Logo 或视觉偏好：
- 想参考的网站或本地 HTML：
- 不能公开的信息：

如果没有素材，项目模块会默认使用文字 + icon 展示。若你希望补充站点氛围图或明确生成项目图，请说明：
- 是否允许调用生成图模型：
- 希望生成哪些站点级图片（如 hero / about / background）：
- 是否明确希望生成项目图：
- 不希望出现的视觉元素：

7. 联系方式
- Email：
- LinkedIn：
- GitHub：
- X / Twitter：
- 小红书 / 即刻 / B站 / 公众号等社媒：
- 个人网站或其他链接：
- 是否有微信二维码或日历预约链接：

8. 风格选择
请选择一种，或者让我根据内容推荐：
- 创意大胆的艺术风格
- 诗意空灵的风格
- 扁平人物留白的风格
- AI 像素风
```

## How To Use The Intake

If the user provides partial answers, proceed with available facts and mark missing items as placeholders. Do not block unless the missing information changes the site's positioning, disclosure level, or style choice.

If the user does not specify page structure, default to the fixed Who Am I layout: Hero -> About -> Contact. Put personal experience and portfolio modules inside About.

For every project/case, track whether the user provided media. If not, use the text+icon project treatment in `visual-assets-workflow.md` rather than a generated image or empty placeholder. Never leave broken image links.

Image generation and the no-fake-image / no-SVG-substitute rule are governed by `visual-assets-workflow.md` (**Core Rule**): site-level visuals can be generated when capability exists or prompts can be provided for later generation; project visuals are generated only when the user explicitly asks for them.
