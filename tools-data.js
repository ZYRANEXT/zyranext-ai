const tools = [
  {
    "name": "ChatGPT",
    "category": "AI Assistant / Research",
    "desc": "General-purpose AI assistant for writing, research, coding help, planning, and image generation.",
    "url": "https://chatgpt.com/",
    "keywords": "openai chatbot writing coding image productivity"
  },
  {
    "name": "Claude",
    "category": "AI Assistant / Research",
    "desc": "AI assistant for long-form writing, analysis, summaries, document work, and coding support.",
    "url": "https://claude.ai/",
    "keywords": "anthropic chatbot writing research coding documents"
  },
  {
    "name": "Gemini",
    "category": "AI Assistant / Research",
    "desc": "Google AI assistant for research, writing, productivity, coding, and multimodal tasks.",
    "url": "https://gemini.google.com/",
    "keywords": "google chatbot research writing productivity"
  },
  {
    "name": "Microsoft Copilot",
    "category": "AI Assistant / Research",
    "desc": "AI assistant connected to Microsoft productivity, web answers, writing, and everyday tasks.",
    "url": "https://copilot.microsoft.com/",
    "keywords": "microsoft assistant office productivity"
  },
  {
    "name": "Perplexity",
    "category": "AI Assistant / Research",
    "desc": "AI answer engine for research, web search, citations, and quick topic exploration.",
    "url": "https://www.perplexity.ai/",
    "keywords": "research search answer engine citations"
  },
  {
    "name": "You.com",
    "category": "AI Assistant / Research",
    "desc": "AI search and assistant platform for research, writing, coding, and productivity.",
    "url": "https://you.com/",
    "keywords": "search assistant research writing"
  },
  {
    "name": "Poe",
    "category": "AI Assistant / Research",
    "desc": "Platform for using multiple AI bots and assistants in one place.",
    "url": "https://poe.com/",
    "keywords": "chatbots multi model assistant"
  },
  {
    "name": "Meta AI",
    "category": "AI Assistant / Research",
    "desc": "AI assistant from Meta for chat, image help, and everyday questions.",
    "url": "https://www.meta.ai/",
    "keywords": "meta assistant chatbot image"
  },
  {
    "name": "Grok",
    "category": "AI Assistant / Research",
    "desc": "AI assistant from xAI for chat, reasoning, and current web-connected answers.",
    "url": "https://x.ai/",
    "keywords": "xai grok assistant search"
  },
  {
    "name": "Phind",
    "category": "AI Assistant / Research",
    "desc": "AI search assistant focused on developers, coding questions, and technical research.",
    "url": "https://www.phind.com/",
    "keywords": "developer search coding technical"
  },
  {
    "name": "Consensus",
    "category": "AI Assistant / Research",
    "desc": "AI research search engine for finding and summarizing scientific papers.",
    "url": "https://consensus.app/",
    "keywords": "research papers science search"
  },
  {
    "name": "Elicit",
    "category": "AI Assistant / Research",
    "desc": "AI research assistant for literature reviews, paper discovery, and research workflows.",
    "url": "https://elicit.com/",
    "keywords": "research papers literature review"
  },
  {
    "name": "Scite",
    "category": "AI Assistant / Research",
    "desc": "Research platform that helps evaluate scientific citations and papers.",
    "url": "https://scite.ai/",
    "keywords": "research citation science papers"
  },
  {
    "name": "Semantic Scholar",
    "category": "AI Assistant / Research",
    "desc": "AI-powered academic search engine for papers and research discovery.",
    "url": "https://www.semanticscholar.org/",
    "keywords": "academic research papers"
  },
  {
    "name": "Explainpaper",
    "category": "AI Assistant / Research",
    "desc": "AI tool that explains research papers and difficult text in simpler language.",
    "url": "https://www.explainpaper.com/",
    "keywords": "research paper explanation"
  },
  {
    "name": "Jasper",
    "category": "Writing / SEO",
    "desc": "AI writing platform for marketing copy, campaigns, blog content, and brand voice.",
    "url": "https://www.jasper.ai/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Copy.ai",
    "category": "Writing / SEO",
    "desc": "AI writing and workflow tool for sales copy, email, marketing, and business content.",
    "url": "https://www.copy.ai/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Writesonic",
    "category": "Writing / SEO",
    "desc": "AI writing assistant for articles, ads, landing pages, and SEO content.",
    "url": "https://writesonic.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Anyword",
    "category": "Writing / SEO",
    "desc": "AI copywriting platform for marketing teams and performance-focused content.",
    "url": "https://www.anyword.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Rytr",
    "category": "Writing / SEO",
    "desc": "AI writing assistant for short-form copy, blog ideas, emails, and social content.",
    "url": "https://rytr.me/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Sudowrite",
    "category": "Writing / SEO",
    "desc": "AI writing tool for fiction writers, story ideas, rewriting, and creative drafts.",
    "url": "https://www.sudowrite.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Grammarly",
    "category": "Writing / SEO",
    "desc": "Writing assistant for grammar, tone, clarity, rewriting, and productivity.",
    "url": "https://www.grammarly.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Wordtune",
    "category": "Writing / SEO",
    "desc": "AI rewriting tool for improving tone, clarity, and sentence structure.",
    "url": "https://www.wordtune.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "QuillBot",
    "category": "Writing / SEO",
    "desc": "Paraphrasing and writing assistant for rewriting, grammar, and summaries.",
    "url": "https://quillbot.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "ProWritingAid",
    "category": "Writing / SEO",
    "desc": "Writing improvement tool for grammar, style, structure, and long-form editing.",
    "url": "https://prowritingaid.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Writer",
    "category": "Writing / SEO",
    "desc": "Enterprise AI writing and brand governance platform for teams.",
    "url": "https://writer.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "HyperWrite",
    "category": "Writing / SEO",
    "desc": "AI writing assistant for emails, documents, rewriting, and browser-based help.",
    "url": "https://www.hyperwriteai.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Typefully",
    "category": "Writing / SEO",
    "desc": "Writing and scheduling platform for social posts with AI assistance.",
    "url": "https://typefully.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Lex",
    "category": "Writing / SEO",
    "desc": "AI writing workspace for drafting, editing, and improving long-form text.",
    "url": "https://lex.page/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Notion AI",
    "category": "Writing / SEO",
    "desc": "AI inside Notion for notes, docs, summaries, planning, and team knowledge work.",
    "url": "https://www.notion.com/product/ai",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Craft AI Assistant",
    "category": "Writing / SEO",
    "desc": "Document workspace with AI writing, summaries, and structured notes.",
    "url": "https://www.craft.do/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Mem",
    "category": "Writing / SEO",
    "desc": "AI notes and knowledge tool for organizing ideas and recalling information.",
    "url": "https://get.mem.ai/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Bearly",
    "category": "Writing / SEO",
    "desc": "AI reading, writing, and summarization app for research and productivity.",
    "url": "https://bearly.ai/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "TextCortex",
    "category": "Writing / SEO",
    "desc": "AI writing assistant for content creation, rewriting, and productivity workflows.",
    "url": "https://textcortex.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Simplified",
    "category": "Writing / SEO",
    "desc": "AI content creation suite for writing, design, video, and social media.",
    "url": "https://simplified.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Frase",
    "category": "Writing / SEO",
    "desc": "SEO content writing and optimization tool for articles and briefs.",
    "url": "https://www.frase.io/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Surfer SEO",
    "category": "Writing / SEO",
    "desc": "SEO content optimization tool for keyword-driven articles and content structure.",
    "url": "https://surferseo.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Clearscope",
    "category": "Writing / SEO",
    "desc": "SEO content optimization platform for improving search-focused writing.",
    "url": "https://www.clearscope.io/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "MarketMuse",
    "category": "Writing / SEO",
    "desc": "AI content planning and optimization platform for SEO strategy.",
    "url": "https://www.marketmuse.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "NeuronWriter",
    "category": "Writing / SEO",
    "desc": "SEO writing assistant for content optimization and competitor analysis.",
    "url": "https://neuronwriter.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "INK",
    "category": "Writing / SEO",
    "desc": "AI writing and SEO tool for content creation and optimization.",
    "url": "https://inkforall.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "ContentShake AI",
    "category": "Writing / SEO",
    "desc": "AI content tool from Semrush for article ideas, drafting, and SEO writing.",
    "url": "https://www.semrush.com/contentshake/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "KoalaWriter",
    "category": "Writing / SEO",
    "desc": "AI SEO writing tool for long-form blog posts and affiliate-style articles.",
    "url": "https://koala.sh/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Scalenut",
    "category": "Writing / SEO",
    "desc": "AI SEO and content marketing platform for planning and writing.",
    "url": "https://www.scalenut.com/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "LongShot AI",
    "category": "Writing / SEO",
    "desc": "AI writing tool for factual content, SEO articles, and content workflows.",
    "url": "https://www.longshot.ai/",
    "keywords": "writing content seo blog copy email marketing"
  },
  {
    "name": "Midjourney",
    "category": "Image / Design",
    "desc": "AI image generator known for artistic, cinematic, and high-quality visual styles.",
    "url": "https://www.midjourney.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Adobe Firefly",
    "category": "Image / Design",
    "desc": "AI image and design tool built for creative and commercial Adobe workflows.",
    "url": "https://firefly.adobe.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Ideogram",
    "category": "Image / Design",
    "desc": "AI image generator useful for text-heavy visuals, posters, logos, and typography.",
    "url": "https://ideogram.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Leonardo AI",
    "category": "Image / Design",
    "desc": "AI image platform for creators, game assets, concept art, and visual production.",
    "url": "https://leonardo.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "DALL·E",
    "category": "Image / Design",
    "desc": "OpenAI image generation system for creating images from text prompts.",
    "url": "https://openai.com/dall-e/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Canva",
    "category": "Image / Design",
    "desc": "Design platform with AI features for graphics, presentations, thumbnails, and social content.",
    "url": "https://www.canva.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Kittl",
    "category": "Image / Design",
    "desc": "Design tool with AI features for logos, typography, merch, and social visuals.",
    "url": "https://www.kittl.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Playground AI",
    "category": "Image / Design",
    "desc": "AI image creation and editing platform for design, art, and social visuals.",
    "url": "https://playground.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "DreamStudio",
    "category": "Image / Design",
    "desc": "Stability AI image generation app for creating visuals from prompts.",
    "url": "https://dreamstudio.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Stable Diffusion",
    "category": "Image / Design",
    "desc": "Open image generation ecosystem used for many creative AI workflows.",
    "url": "https://stability.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Clipdrop",
    "category": "Image / Design",
    "desc": "AI image editing tools for background removal, cleanup, relighting, and upscaling.",
    "url": "https://clipdrop.co/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Remove.bg",
    "category": "Image / Design",
    "desc": "Automatic background remover for product photos, portraits, and design workflows.",
    "url": "https://www.remove.bg/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Photoroom",
    "category": "Image / Design",
    "desc": "AI photo editing tool for product photos, backgrounds, and ecommerce visuals.",
    "url": "https://www.photoroom.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Photopea",
    "category": "Image / Design",
    "desc": "Browser-based image editor with design and editing features.",
    "url": "https://www.photopea.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Pixlr",
    "category": "Image / Design",
    "desc": "Online photo editor and design tool with AI-powered image features.",
    "url": "https://pixlr.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Fotor",
    "category": "Image / Design",
    "desc": "Photo editing and design platform with AI image tools.",
    "url": "https://www.fotor.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Picsart",
    "category": "Image / Design",
    "desc": "Creative design and photo editing platform with AI image tools.",
    "url": "https://picsart.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Hotpot AI",
    "category": "Image / Design",
    "desc": "AI image, design, and writing tools for graphics, icons, and creative assets.",
    "url": "https://hotpot.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Looka",
    "category": "Image / Design",
    "desc": "AI logo maker and brand identity tool for startups and creators.",
    "url": "https://looka.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Brandmark",
    "category": "Image / Design",
    "desc": "AI logo and branding tool for generating visual identity concepts.",
    "url": "https://brandmark.io/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "LogoAI",
    "category": "Image / Design",
    "desc": "AI logo maker for brand kits, logos, and startup design assets.",
    "url": "https://www.logoai.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Uizard",
    "category": "Image / Design",
    "desc": "AI UI design tool for turning ideas, sketches, and prompts into interfaces.",
    "url": "https://uizard.io/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Galileo AI",
    "category": "Image / Design",
    "desc": "AI interface design tool for generating app and website UI concepts.",
    "url": "https://www.usegalileo.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Framer AI",
    "category": "Image / Design",
    "desc": "AI website design and builder features inside Framer.",
    "url": "https://www.framer.com/ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Khroma",
    "category": "Image / Design",
    "desc": "AI color tool for discovering and generating color palettes.",
    "url": "https://www.khroma.co/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "LetsEnhance",
    "category": "Image / Design",
    "desc": "AI image upscaler and enhancer for photos and ecommerce images.",
    "url": "https://letsenhance.io/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Upscale.media",
    "category": "Image / Design",
    "desc": "AI image upscaler for improving image resolution and quality.",
    "url": "https://www.upscale.media/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Topaz Photo AI",
    "category": "Image / Design",
    "desc": "AI photo enhancement app for sharpening, denoising, and upscaling.",
    "url": "https://www.topazlabs.com/topaz-photo-ai",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Magnific AI",
    "category": "Image / Design",
    "desc": "AI image upscaler and enhancer for high-detail creative visuals.",
    "url": "https://magnific.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Recraft",
    "category": "Image / Design",
    "desc": "AI design tool for vector art, brand visuals, icons, and illustrations.",
    "url": "https://www.recraft.ai/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Freepik AI",
    "category": "Image / Design",
    "desc": "AI image and design tools inside the Freepik creative platform.",
    "url": "https://www.freepik.com/ai",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Microsoft Designer",
    "category": "Image / Design",
    "desc": "AI design app for social posts, graphics, invitations, and visual content.",
    "url": "https://designer.microsoft.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Bing Image Creator",
    "category": "Image / Design",
    "desc": "Microsoft image generation tool for creating visuals from prompts.",
    "url": "https://www.bing.com/images/create",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Artbreeder",
    "category": "Image / Design",
    "desc": "AI creative tool for blending and evolving images, portraits, and art styles.",
    "url": "https://www.artbreeder.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "NightCafe",
    "category": "Image / Design",
    "desc": "AI art generator for creating images in many styles.",
    "url": "https://creator.nightcafe.studio/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Mage.space",
    "category": "Image / Design",
    "desc": "AI image generation platform for text-to-image creation.",
    "url": "https://www.mage.space/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Scenario",
    "category": "Image / Design",
    "desc": "AI game asset generation platform for game creators and studios.",
    "url": "https://www.scenario.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Luma Genie",
    "category": "Image / Design",
    "desc": "AI 3D generation tool for creating 3D assets from prompts.",
    "url": "https://lumalabs.ai/genie",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Spline AI",
    "category": "Image / Design",
    "desc": "AI-assisted 3D design features inside Spline.",
    "url": "https://spline.design/ai",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Kaedim",
    "category": "Image / Design",
    "desc": "AI 3D asset creation tool for game and product workflows.",
    "url": "https://www.kaedim3d.com/",
    "keywords": "image design art logo photo editing upscaler generator"
  },
  {
    "name": "Runway",
    "category": "Video / Audio",
    "desc": "AI video generation and editing platform for creative visual workflows.",
    "url": "https://runwayml.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "CapCut",
    "category": "Video / Audio",
    "desc": "Creator-friendly video editor for short-form videos, captions, templates, and social content.",
    "url": "https://www.capcut.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Descript",
    "category": "Video / Audio",
    "desc": "AI video and audio editor that lets users edit media by editing text.",
    "url": "https://www.descript.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Synthesia",
    "category": "Video / Audio",
    "desc": "AI avatar video platform for training, presentations, and business explainers.",
    "url": "https://www.synthesia.io/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Pictory",
    "category": "Video / Audio",
    "desc": "Tool for turning scripts, blog posts, and long content into social videos.",
    "url": "https://pictory.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "HeyGen",
    "category": "Video / Audio",
    "desc": "AI avatar and video translation platform for marketing and business videos.",
    "url": "https://www.heygen.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Veed",
    "category": "Video / Audio",
    "desc": "Online video editor with AI subtitles, cleanup, templates, and social video tools.",
    "url": "https://www.veed.io/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Kapwing",
    "category": "Video / Audio",
    "desc": "Online editor for video, subtitles, memes, repurposing, and AI content workflows.",
    "url": "https://www.kapwing.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "InVideo AI",
    "category": "Video / Audio",
    "desc": "AI video creation platform for turning prompts into videos.",
    "url": "https://invideo.io/ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Fliki",
    "category": "Video / Audio",
    "desc": "Text-to-video and text-to-speech tool for social videos and voiceovers.",
    "url": "https://fliki.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Lumen5",
    "category": "Video / Audio",
    "desc": "Video creation platform for turning blog posts and marketing content into videos.",
    "url": "https://lumen5.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "OpusClip",
    "category": "Video / Audio",
    "desc": "AI clipping tool for turning long videos into short social clips.",
    "url": "https://www.opus.pro/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Klap",
    "category": "Video / Audio",
    "desc": "AI tool for repurposing long videos into short clips for TikTok, Reels, and Shorts.",
    "url": "https://klap.app/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Munch",
    "category": "Video / Audio",
    "desc": "AI video repurposing platform for extracting short clips from long-form content.",
    "url": "https://www.getmunch.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Submagic",
    "category": "Video / Audio",
    "desc": "AI subtitle and short-form video enhancement tool for creators.",
    "url": "https://www.submagic.co/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Captions",
    "category": "Video / Audio",
    "desc": "AI video creation app for captions, dubbing, editing, and creator workflows.",
    "url": "https://www.captions.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Wisecut",
    "category": "Video / Audio",
    "desc": "AI video editor for automatic cuts, subtitles, and background music.",
    "url": "https://www.wisecut.video/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Steve AI",
    "category": "Video / Audio",
    "desc": "AI video maker for animations, explainer videos, and text-to-video content.",
    "url": "https://www.steve.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Elai",
    "category": "Video / Audio",
    "desc": "AI avatar video generation platform for learning and business videos.",
    "url": "https://elai.io/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Colossyan",
    "category": "Video / Audio",
    "desc": "AI video platform for workplace training and avatar-based video creation.",
    "url": "https://www.colossyan.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "D-ID",
    "category": "Video / Audio",
    "desc": "AI talking avatar and digital human video generation platform.",
    "url": "https://www.d-id.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "DeepBrain AI",
    "category": "Video / Audio",
    "desc": "AI avatar video tool for business, news, education, and enterprise content.",
    "url": "https://www.deepbrain.io/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Pika",
    "category": "Video / Audio",
    "desc": "AI video generation tool for creating animated and cinematic clips.",
    "url": "https://pika.art/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Luma Dream Machine",
    "category": "Video / Audio",
    "desc": "AI video generation model for creating video clips from prompts and images.",
    "url": "https://lumalabs.ai/dream-machine",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Kaiber",
    "category": "Video / Audio",
    "desc": "AI video generation tool for music videos, animations, and visual storytelling.",
    "url": "https://kaiber.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Vidyo.ai",
    "category": "Video / Audio",
    "desc": "AI tool for clipping and repurposing videos for social media.",
    "url": "https://vidyo.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Riverside",
    "category": "Video / Audio",
    "desc": "Recording platform with AI tools for podcasts, clips, transcripts, and video content.",
    "url": "https://riverside.fm/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Tella",
    "category": "Video / Audio",
    "desc": "Screen recording and video creation tool with AI-powered editing features.",
    "url": "https://www.tella.tv/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Screen Studio",
    "category": "Video / Audio",
    "desc": "Screen recording app for polished product demos and tutorials.",
    "url": "https://www.screen.studio/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Ssemble",
    "category": "Video / Audio",
    "desc": "Online video editor with AI plugins for creators.",
    "url": "https://www.ssemble.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "ElevenLabs",
    "category": "Video / Audio",
    "desc": "AI voice generation and text-to-speech platform for realistic voiceovers.",
    "url": "https://elevenlabs.io/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Murf",
    "category": "Video / Audio",
    "desc": "AI voiceover platform for presentations, videos, and business content.",
    "url": "https://murf.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "PlayHT",
    "category": "Video / Audio",
    "desc": "AI text-to-speech and voice generation platform.",
    "url": "https://play.ht/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "WellSaid Labs",
    "category": "Video / Audio",
    "desc": "AI voice platform for professional voiceovers and training content.",
    "url": "https://wellsaidlabs.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Resemble AI",
    "category": "Video / Audio",
    "desc": "AI voice generation platform for voiceovers and synthetic speech workflows.",
    "url": "https://www.resemble.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "LOVO",
    "category": "Video / Audio",
    "desc": "AI voice generator and text-to-speech platform for creators and businesses.",
    "url": "https://lovo.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Speechify",
    "category": "Video / Audio",
    "desc": "Text-to-speech app for listening to articles, documents, and study material.",
    "url": "https://speechify.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Suno",
    "category": "Video / Audio",
    "desc": "AI music generation platform for creating songs from prompts.",
    "url": "https://suno.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Udio",
    "category": "Video / Audio",
    "desc": "AI music generation tool for creating songs and instrumental ideas.",
    "url": "https://www.udio.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "AIVA",
    "category": "Video / Audio",
    "desc": "AI music composition platform for soundtracks and creative projects.",
    "url": "https://www.aiva.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Soundraw",
    "category": "Video / Audio",
    "desc": "AI music generator for royalty-free background tracks.",
    "url": "https://soundraw.io/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Beatoven",
    "category": "Video / Audio",
    "desc": "AI music generator for videos, podcasts, and background music.",
    "url": "https://www.beatoven.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Boomy",
    "category": "Video / Audio",
    "desc": "AI music creation platform for generating songs quickly.",
    "url": "https://boomy.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Krisp",
    "category": "Video / Audio",
    "desc": "AI noise cancellation and meeting audio enhancement tool.",
    "url": "https://krisp.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Adobe Podcast",
    "category": "Video / Audio",
    "desc": "AI audio enhancement and podcast recording tools from Adobe.",
    "url": "https://podcast.adobe.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Cleanvoice",
    "category": "Video / Audio",
    "desc": "AI audio editing tool for removing filler words, mouth sounds, and noise.",
    "url": "https://cleanvoice.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Auphonic",
    "category": "Video / Audio",
    "desc": "Audio post-production tool for leveling, noise reduction, and podcast publishing.",
    "url": "https://auphonic.com/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Lalal.ai",
    "category": "Video / Audio",
    "desc": "AI stem separation tool for vocals, instruments, and audio cleanup.",
    "url": "https://www.lalal.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "Moises",
    "category": "Video / Audio",
    "desc": "AI music practice and stem separation app for musicians.",
    "url": "https://moises.ai/",
    "keywords": "video audio voice music subtitles clips editing generation"
  },
  {
    "name": "GitHub Copilot",
    "category": "Coding / No-code",
    "desc": "AI coding assistant for code completion, suggestions, and developer workflows.",
    "url": "https://github.com/features/copilot",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Cursor",
    "category": "Coding / No-code",
    "desc": "AI-powered code editor for building, editing, debugging, and understanding code.",
    "url": "https://cursor.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Windsurf",
    "category": "Coding / No-code",
    "desc": "AI coding environment for building and editing projects with AI assistance.",
    "url": "https://windsurf.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Replit",
    "category": "Coding / No-code",
    "desc": "Browser-based coding platform with AI assistance for building apps and prototypes.",
    "url": "https://replit.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Codeium",
    "category": "Coding / No-code",
    "desc": "AI coding assistant for autocomplete, chat, and developer productivity.",
    "url": "https://codeium.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Tabnine",
    "category": "Coding / No-code",
    "desc": "AI code completion assistant focused on developer productivity and privacy options.",
    "url": "https://www.tabnine.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Sourcegraph Cody",
    "category": "Coding / No-code",
    "desc": "AI coding assistant that understands codebases and helps with developer questions.",
    "url": "https://sourcegraph.com/cody",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Amazon Q Developer",
    "category": "Coding / No-code",
    "desc": "AI assistant for AWS development, coding, cloud workflows, and technical tasks.",
    "url": "https://aws.amazon.com/q/developer/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "JetBrains AI",
    "category": "Coding / No-code",
    "desc": "AI assistance inside JetBrains IDEs for coding, explanation, and refactoring.",
    "url": "https://www.jetbrains.com/ai/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "CodeRabbit",
    "category": "Coding / No-code",
    "desc": "AI code review tool for pull requests and developer teams.",
    "url": "https://www.coderabbit.ai/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Qodo",
    "category": "Coding / No-code",
    "desc": "AI coding platform focused on code quality, testing, and developer workflows.",
    "url": "https://www.qodo.ai/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Mutable AI",
    "category": "Coding / No-code",
    "desc": "AI developer tool for codebase understanding, documentation, and engineering workflows.",
    "url": "https://mutable.ai/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "v0",
    "category": "Coding / No-code",
    "desc": "AI UI generation tool by Vercel for creating frontend components and app interfaces.",
    "url": "https://v0.dev/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Bolt",
    "category": "Coding / No-code",
    "desc": "AI app builder for creating web apps from prompts in the browser.",
    "url": "https://bolt.new/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Lovable",
    "category": "Coding / No-code",
    "desc": "AI app builder for turning ideas into web apps and prototypes.",
    "url": "https://lovable.dev/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Builder.io",
    "category": "Coding / No-code",
    "desc": "Visual development platform with AI features for websites and apps.",
    "url": "https://www.builder.io/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Relume",
    "category": "Coding / No-code",
    "desc": "AI website planning and wireframing tool for sitemaps, copy, and components.",
    "url": "https://www.relume.io/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Durable",
    "category": "Coding / No-code",
    "desc": "AI website builder for small businesses and landing pages.",
    "url": "https://durable.co/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "10Web",
    "category": "Coding / No-code",
    "desc": "AI website builder and WordPress automation platform.",
    "url": "https://10web.io/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Wix AI",
    "category": "Coding / No-code",
    "desc": "Website builder with AI site creation and business tools.",
    "url": "https://www.wix.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Webflow AI",
    "category": "Coding / No-code",
    "desc": "AI features inside Webflow for website creation and content workflows.",
    "url": "https://webflow.com/ai",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Hostinger AI Website Builder",
    "category": "Coding / No-code",
    "desc": "AI website builder for creating simple websites without coding.",
    "url": "https://www.hostinger.com/ai-website-builder",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Bubble",
    "category": "Coding / No-code",
    "desc": "No-code app builder with AI-assisted app creation and automation possibilities.",
    "url": "https://bubble.io/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Glide",
    "category": "Coding / No-code",
    "desc": "No-code app builder with AI features for business apps and internal tools.",
    "url": "https://www.glideapps.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Softr",
    "category": "Coding / No-code",
    "desc": "No-code platform for building portals, directories, and internal apps.",
    "url": "https://www.softr.io/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Airtable AI",
    "category": "Coding / No-code",
    "desc": "AI features inside Airtable for workflows, databases, and business operations.",
    "url": "https://www.airtable.com/platform/ai",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Retool AI",
    "category": "Coding / No-code",
    "desc": "AI and internal tool platform for building business apps.",
    "url": "https://retool.com/products/ai",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Appsmith",
    "category": "Coding / No-code",
    "desc": "Open-source low-code platform for internal tools and dashboards.",
    "url": "https://www.appsmith.com/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "FlutterFlow AI",
    "category": "Coding / No-code",
    "desc": "App builder with AI features for creating mobile and web apps.",
    "url": "https://flutterflow.io/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Locofy",
    "category": "Coding / No-code",
    "desc": "AI tool for converting designs into frontend code.",
    "url": "https://www.locofy.ai/",
    "keywords": "coding developer app builder no code low code code review"
  },
  {
    "name": "Zapier",
    "category": "Productivity / Automation",
    "desc": "Automation platform with AI features for connecting apps and workflows.",
    "url": "https://zapier.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Make",
    "category": "Productivity / Automation",
    "desc": "Visual automation platform for workflows, integrations, and business operations.",
    "url": "https://www.make.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "n8n",
    "category": "Productivity / Automation",
    "desc": "Workflow automation platform for technical and business automations.",
    "url": "https://n8n.io/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Lindy",
    "category": "Productivity / Automation",
    "desc": "AI agent platform for automating sales, support, operations, and business tasks.",
    "url": "https://www.lindy.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Gumloop",
    "category": "Productivity / Automation",
    "desc": "AI automation platform for building workflows without heavy coding.",
    "url": "https://www.gumloop.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Bardeen",
    "category": "Productivity / Automation",
    "desc": "AI browser automation tool for repetitive tasks and workflows.",
    "url": "https://www.bardeen.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Magical",
    "category": "Productivity / Automation",
    "desc": "AI productivity and text expansion tool for repetitive work.",
    "url": "https://www.getmagical.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Motion",
    "category": "Productivity / Automation",
    "desc": "AI calendar and task manager for scheduling work automatically.",
    "url": "https://www.usemotion.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Reclaim",
    "category": "Productivity / Automation",
    "desc": "AI calendar assistant for scheduling tasks, habits, and meetings.",
    "url": "https://reclaim.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Clockwise",
    "category": "Productivity / Automation",
    "desc": "AI scheduling assistant for calendars, focus time, and team productivity.",
    "url": "https://www.getclockwise.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Trevor AI",
    "category": "Productivity / Automation",
    "desc": "AI time-blocking and task planning assistant.",
    "url": "https://www.trevorai.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Todoist AI",
    "category": "Productivity / Automation",
    "desc": "Task management app with AI-assisted productivity features.",
    "url": "https://todoist.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "ClickUp AI",
    "category": "Productivity / Automation",
    "desc": "AI features inside ClickUp for tasks, docs, summaries, and project workflows.",
    "url": "https://clickup.com/ai",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Asana Intelligence",
    "category": "Productivity / Automation",
    "desc": "AI features inside Asana for project management and team workflows.",
    "url": "https://asana.com/product/ai",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Monday AI",
    "category": "Productivity / Automation",
    "desc": "Work management platform with AI features for teams and operations.",
    "url": "https://monday.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Coda AI",
    "category": "Productivity / Automation",
    "desc": "AI inside Coda for docs, tables, workflows, and team knowledge.",
    "url": "https://coda.io/ai",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Taskade",
    "category": "Productivity / Automation",
    "desc": "AI productivity workspace for tasks, mind maps, notes, and team planning.",
    "url": "https://www.taskade.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Otter.ai",
    "category": "Productivity / Automation",
    "desc": "AI meeting transcription and notes tool.",
    "url": "https://otter.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Fireflies.ai",
    "category": "Productivity / Automation",
    "desc": "AI meeting assistant for recording, transcribing, and summarizing calls.",
    "url": "https://fireflies.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Fathom",
    "category": "Productivity / Automation",
    "desc": "AI meeting note taker for Zoom, calls, and follow-ups.",
    "url": "https://fathom.video/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "tl;dv",
    "category": "Productivity / Automation",
    "desc": "AI meeting recorder and summarizer for sales and team calls.",
    "url": "https://tldv.io/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "MeetGeek",
    "category": "Productivity / Automation",
    "desc": "AI meeting assistant for transcripts, summaries, and insights.",
    "url": "https://meetgeek.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Sembly",
    "category": "Productivity / Automation",
    "desc": "AI meeting notes and team conversation intelligence platform.",
    "url": "https://www.sembly.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Avoma",
    "category": "Productivity / Automation",
    "desc": "AI meeting assistant and conversation intelligence tool for teams.",
    "url": "https://www.avoma.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Read AI",
    "category": "Productivity / Automation",
    "desc": "AI meeting summaries, analytics, and productivity insights.",
    "url": "https://www.read.ai/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Superhuman AI",
    "category": "Productivity / Automation",
    "desc": "AI-powered email productivity app for fast inbox workflows.",
    "url": "https://superhuman.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Shortwave",
    "category": "Productivity / Automation",
    "desc": "AI email client for Gmail with summaries, search, and writing help.",
    "url": "https://www.shortwave.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Sanebox",
    "category": "Productivity / Automation",
    "desc": "Email productivity tool for inbox filtering and prioritization.",
    "url": "https://www.sanebox.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Missive",
    "category": "Productivity / Automation",
    "desc": "Team inbox and collaboration app with AI writing and workflow features.",
    "url": "https://missiveapp.com/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Tana",
    "category": "Productivity / Automation",
    "desc": "AI-native notes and knowledge workspace.",
    "url": "https://tana.inc/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "Reflect",
    "category": "Productivity / Automation",
    "desc": "AI note-taking app for connected notes, ideas, and personal knowledge.",
    "url": "https://reflect.app/",
    "keywords": "productivity automation meetings calendar email tasks workflow"
  },
  {
    "name": "HubSpot AI",
    "category": "Marketing / CRM",
    "desc": "AI tools for CRM, marketing, sales, content, and customer workflows.",
    "url": "https://www.hubspot.com/artificial-intelligence",
    "keywords": "marketing sales crm support data presentation analytics social seo business"
  },
  {
    "name": "Semrush",
    "category": "Marketing / SEO",
    "desc": "SEO and marketing platform with AI content and competitive research features.",
    "url": "https://www.semrush.com/",
    "keywords": "marketing sales crm support data presentation analytics social seo business"
  },
  {
    "name": "Ahrefs",
    "category": "Marketing / SEO",
    "desc": "SEO toolset for keyword research, backlinks, content ideas, and competitive analysis.",
    "url": "https://ahrefs.com/",
    "keywords": "marketing sales crm support data presentation analytics social seo business"
  },
  {
    "name": "CanIRank",
    "category": "Marketing / SEO",
    "desc": "AI SEO software for ranking opportunities and content recommendations.",
    "url": "https://www.canirank.com/",
    "keywords": "marketing sales crm support data presentation analytics social seo business"
  },
  {
    "name": "Brand24",
    "category": "Marketing / Social",
    "desc": "AI-powered social listening and brand monitoring platform.",
    "url": "https://brand24.com/",
    "keywords": "marketing sales crm support data presentation analytics social seo business"
  }
];
