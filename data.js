/**
 * ======================================================
 *  data.js — 内容数据文件
 *  你只需要改这个文件，就能在网站上新增/修改内容
 * ======================================================
 *
 *  ✅ 如何新增一篇文章：
 *     1. 复制下面任意一个 { ... } 数据块
 *     2. 粘贴到对应数组的末尾（注意前面加英文逗号）
 *     3. 修改 title / desc / content / date 字段
 *     4. 保存后上传 GitHub，网站自动更新
 *
 *  ✅ 字段说明：
 *     id      — 唯一编号，不能重复，建议依次+1
 *     title   — 文章标题（中文）
 *     titleEn — 文章标题（英文）
 *     desc    — 简短摘要，显示在列表页（中文）
 *     descEn  — 简短摘要（英文）
 *     date    — 发布日期，格式 YYYY-MM-DD
 *     tag     — 标签，显示在卡片上
 *     content — 正文（中文），支持换行用 \n 表示
 *     contentEn — 正文（英文）
 */

// ─────────────────────────────────────────────
//  📚 "学习AI" 页面 的文章列表
// ─────────────────────────────────────────────
const learnAiArticles = [
  {
    id: 1,
    title: "AI是什么？5分钟搞懂人工智能",
    titleEn: "What is AI? Understand Artificial Intelligence in 5 Minutes",
    desc: "不懂代码也能看懂的AI入门介绍，从基础概念到日常应用一网打尽。",
    descEn: "A beginner-friendly introduction to AI — from basic concepts to everyday applications.",
    date: "2026-06-01",
    tag: "入门",
    content: `人工智能（AI）听起来很高深，其实已经融入了我们的日常生活。\n\n你每天用的输入法联想、刷的短视频推荐、手机的人脸解锁——这些背后都是AI在工作。\n\n简单来说，AI 就是让机器"学会"从数据中找规律，然后用这些规律来做判断或生成内容。\n\n目前最火的是"大语言模型"（LLM），比如 ChatGPT、Claude、Gemini，它们通过阅读海量文本学会了理解和生成人类语言。\n\n学AI不一定要会编程，先从"用好AI工具"开始就很值了。`,
    contentEn: `Artificial Intelligence (AI) sounds complex, but it's already part of our daily lives.\n\nPredictive text on your keyboard, video recommendations, face unlock — AI powers all of these.\n\nIn simple terms, AI enables machines to learn patterns from data and use those patterns to make decisions or generate content.\n\nThe hottest trend right now is Large Language Models (LLMs) like ChatGPT, Claude, and Gemini — they learned to understand and generate human language by reading massive amounts of text.\n\nYou don't need to code to learn AI. Start by learning to use AI tools well.`
  },
  {
    id: 2,
    title: "ChatGPT 入门：第一次用该怎么提问？",
    titleEn: "ChatGPT Basics: How to Ask the Right Questions",
    desc: "掌握提示词技巧，让ChatGPT给你更好的回答，附10个实用提问模板。",
    descEn: "Master prompt techniques to get better answers from ChatGPT, with 10 practical templates.",
    date: "2026-06-10",
    tag: "技巧",
    content: `很多人第一次用 ChatGPT，问出来的效果很一般——不是AI不行，是提问方式需要升级。\n\n核心原则：给AI足够的上下文 + 明确你要什么格式/长度/风格。\n\n几个实用模板：\n\n1. 翻译模板：「请将以下内容翻译成英文，保持口语化风格：【内容】」\n\n2. 总结模板：「请用3句话总结以下文章的核心观点：【文章内容】」\n\n3. 写作模板：「我需要写一封【场景】的邮件，收件人是【谁】，核心要说【什么】，语气要【正式/轻松】」\n\n4. 分析模板：「请分析以下数据的趋势，并给出3条建议：【数据】」\n\n记住：越具体，越好用。`,
    contentEn: `Many first-time ChatGPT users get mediocre results — not because AI isn't capable, but because the prompts need improvement.\n\nCore principle: Give AI enough context + clearly specify the format, length, and tone you want.\n\nPractical templates:\n\n1. Translation: "Please translate the following to English in a conversational tone: [content]"\n\n2. Summary: "Summarize the key points of this article in 3 sentences: [article]"\n\n3. Email writing: "I need to write an email for [situation], to [recipient], about [topic], in a [formal/casual] tone"\n\n4. Analysis: "Analyze the trends in the following data and provide 3 recommendations: [data]"\n\nRemember: the more specific you are, the better the results.`
  }
  // ← 在这里复制粘贴新文章，记得前面加英文逗号
];

// ─────────────────────────────────────────────
//  🎯 "AI攻略" 页面 的文章列表
// ─────────────────────────────────────────────
const aiGuideArticles = [
  {
    id: 1,
    title: "2026年最值得用的10个AI工具",
    titleEn: "Top 10 AI Tools Worth Using in 2026",
    desc: "涵盖写作、绘图、编程、办公，这10个工具能让你的效率翻倍。",
    descEn: "Covering writing, image generation, coding, and productivity — these 10 tools can double your efficiency.",
    date: "2026-06-15",
    tag: "推荐",
    content: `AI工具爆炸式增长，但真正好用的就那几个。以下是2026年我认为最值得用的10个：\n\n1. ChatGPT（OpenAI）— 综合能力最强，写作/分析/编程全能\n2. Claude（Anthropic）— 长文本理解最好，适合阅读大量资料\n3. Gemini（Google）— 与Google服务深度整合，搜索+AI\n4. Midjourney — 绘图质量最高，适合做创意图\n5. Cursor — 最好用的AI编程工具，写代码效率翻倍\n6. Notion AI — 笔记+AI结合，适合知识管理\n7. Perplexity — AI搜索引擎，有引用来源，比较可信\n8. ElevenLabs — AI语音合成，做视频配音很好用\n9. Runway — AI视频生成，做短片创作\n10. Gamma — AI做PPT，10秒出一套演示文稿\n\n以上工具大部分有免费额度，可以先体验再决定是否付费。`,
    contentEn: `AI tools are exploding in number, but only a few are truly worth using. Here are my top 10 for 2026:\n\n1. ChatGPT (OpenAI) — Best overall, great for writing/analysis/coding\n2. Claude (Anthropic) — Best for long-form reading and analysis\n3. Gemini (Google) — Deep integration with Google services\n4. Midjourney — Highest quality AI image generation\n5. Cursor — Best AI coding tool, doubles your coding speed\n6. Notion AI — Notes + AI, great for knowledge management\n7. Perplexity — AI search engine with cited sources\n8. ElevenLabs — AI voice synthesis, great for video narration\n9. Runway — AI video generation for short films\n10. Gamma — AI presentation maker, generates slides in seconds\n\nMost of these have free tiers — try before you subscribe.`
  },
  {
    id: 2,
    title: "用AI做副业：普通人能靠AI赚钱吗？",
    titleEn: "AI Side Hustle: Can Regular People Make Money with AI?",
    desc: "盘点几种已经被验证可行的AI副业方向，附入门门槛和收入参考。",
    descEn: "Explore verified AI side hustle ideas with entry barriers and income ranges.",
    date: "2026-06-18",
    tag: "变现",
    content: `普通人靠AI赚钱，已经不是新鲜事了。以下几个方向门槛低、可落地：\n\n1. AI绘图接单\n学会 Midjourney 或 Stable Diffusion，在闲鱼/猪八戒接图标、插图、表情包设计单。每单50-500元，熟练后日接3-5单不难。\n\n2. AI写作/文案\n用 ChatGPT 辅助写小红书文案、产品描述、公众号文章。接单平台：猪八戒、淘宝内容平台。\n\n3. AI视频制作\n用 Runway + ElevenLabs 做短视频，在抖音/视频号发布，靠流量分成或接商单。\n\n4. AI课程/教程\n整理AI工具使用教程，在知识星球、小鹅通卖课，或在B站积累粉丝。\n\n核心逻辑：AI是工具，你的价值是知道用它解决什么问题。`,
    contentEn: `Making money with AI as a regular person is already proven. Here are low-barrier, actionable directions:\n\n1. AI Image Commissions\nLearn Midjourney or Stable Diffusion, take orders for icons, illustrations, and sticker packs. ¥50-500 per order, 3-5 orders per day once skilled.\n\n2. AI Writing/Copywriting\nUse ChatGPT to assist with Xiaohongshu posts, product descriptions, and articles. Freelance platforms abound.\n\n3. AI Video Production\nUse Runway + ElevenLabs for short videos, monetize through platform revenue sharing or brand deals.\n\n4. AI Courses/Tutorials\nCreate tutorials on AI tools and sell them through knowledge platforms or build an audience on Bilibili.\n\nCore logic: AI is a tool. Your value is knowing what problems to solve with it.`
  }
  // ← 在这里复制粘贴新文章，记得前面加英文逗号
];

// ─────────────────────────────────────────────
//  🔧 "AI工具" 页面 的工具卡片列表
// ─────────────────────────────────────────────
const aiToolsList = [
  {
    id: 1,
    name: "ChatGPT",
    nameEn: "ChatGPT",
    desc: "OpenAI 出品，最强综合AI助手，写作/编程/分析全能",
    descEn: "By OpenAI. The most versatile AI assistant for writing, coding, and analysis.",
    url: "https://chat.openai.com",
    tag: "对话AI",
    tagEn: "Chat AI",
    free: true
  },
  {
    id: 2,
    name: "Claude",
    nameEn: "Claude",
    desc: "Anthropic 出品，长文本理解最佳，回答细腻有逻辑",
    descEn: "By Anthropic. Best for long-form reading and nuanced reasoning.",
    url: "https://claude.ai",
    tag: "对话AI",
    tagEn: "Chat AI",
    free: true
  },
  {
    id: 3,
    name: "Midjourney",
    nameEn: "Midjourney",
    desc: "顶级AI绘图工具，生成高质量艺术图像",
    descEn: "Top AI image generator for high-quality artistic visuals.",
    url: "https://www.midjourney.com",
    tag: "AI绘图",
    tagEn: "Image AI",
    free: false
  },
  {
    id: 4,
    name: "Perplexity",
    nameEn: "Perplexity",
    desc: "AI搜索引擎，回答带引用来源，信息更可靠",
    descEn: "AI-powered search engine with cited sources for reliable answers.",
    url: "https://www.perplexity.ai",
    tag: "AI搜索",
    tagEn: "AI Search",
    free: true
  },
  {
    id: 5,
    name: "Cursor",
    nameEn: "Cursor",
    desc: "AI编程神器，写代码效率提升数倍",
    descEn: "AI coding tool that multiplies your programming productivity.",
    url: "https://www.cursor.com",
    tag: "编程",
    tagEn: "Coding",
    free: true
  },
  {
    id: 6,
    name: "Gamma",
    nameEn: "Gamma",
    desc: "AI一键生成演示文稿，10秒出PPT",
    descEn: "Generate professional presentations with AI in seconds.",
    url: "https://gamma.app",
    tag: "效率",
    tagEn: "Productivity",
    free: true
  }
  // ← 在这里复制粘贴新工具，记得前面加英文逗号
];
