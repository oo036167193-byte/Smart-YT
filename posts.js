/* AI Monday stories. Used by the AI page (/ai) and the home page. */
/* ============================================================
   AI MONDAY POSTS. To add a story, copy one block and edit it.
   Newest first. "featured": true = the big card at the top.
   id      = short name in English, used for the story link
   do_he   = what you can do with it (list of short points)
   full_he = the full story, one paragraph per line (optional).
             If full_he is empty, the card only links to the source.
   ============================================================ */
/* EXAMPLE (copy this block inside the [ ] below and fill it in):
  {
    id: "short-name", date: "2026-11-16", featured: true, tag: "Topic",
    title_en: "", title_he: "",
    text_en: "", text_he: "",
    do_en: ["", ""], do_he: ["", ""],
    full_en: ["paragraph", {h: "sub heading"}, {list: ["point", "point"]}, {img: "assets/stories/picture.png"}], full_he: [],
    icon: "assets/tools/claude.png (optional)", image: "assets/stories/picture.jpg (optional)",
    video: "YouTube video id (optional)",
    link: "https://...", link2: "second link (optional)"
  },
*/
/* The Monday of this week's AI Monday issue */
var ISSUE = "2026-11-09";

var POSTS = [
  {
    id: "claude-personal-finance", date: "2026-11-05", featured: true, tag: "Claude",
    title_en: "Personal Finance: Claude now reads your bank account",
    title_he: "Personal Finance: קלוד נכנס לחשבון הבנק שלך",
    text_en: "Anthropic launched Personal Finance, a tool that connects Claude to your bank and credit cards, looks back up to two years and helps you see where your money goes. Beta, US only for now.",
    text_he: "אנטרופיק השיקה את Personal Finance, כלי שמחבר את Claude לחשבון הבנק ולכרטיסי האשראי, רואה עד שנתיים אחורה ועוזר להבין לאן הולך הכסף. כרגע בטא, רק בארה\"ב.",
    do_en: ["Spot duplicate charges and unexpected fees", "Keep track of subscriptions", "See how much is left until payday"],
    do_he: ["לזהות חיובים כפולים ועמלות לא צפויות", "לעקוב אחרי מנויים ותשלומים קבועים", "לראות כמה כסף נשאר עד המשכורת"],
    icon: "assets/tools/claude.png",
    image: "assets/stories/pf-app.jpg",
    video: "UTubvRLX2j4",
    full_en: [
      "In the AI world, where we’ve already given up much of our privacy, AI is making its way into everything, especially the things people have no time or patience for.",
      "On 5 November Anthropic officially launched a new tool called Personal Finance. It connects to your bank and credit card accounts through Plaid, so Claude never sees your bank password. It can look back up to two years and becomes your personal money assistant.",
      {h: "What you can do with it"},
      {list: ["Ask where your money went", "Build your own dashboard", "Spot duplicate charges and unexpected fees", "Keep track of subscriptions and recurring payments", "See how much is left until your next payday", "Get a spending summary by category"]},
      {img: "assets/stories/pf-chat.png", alt: "Claude answering: where did my money go this month"},
      {h: "What it can’t do"},
      "It can’t move money (read only), and it doesn’t invest for you.",
      "Chats inside Personal Finance are not used by Anthropic to train its models.",
      "Right now it’s a beta, US only, on the Pro, Max and Ultra plans.",
      {h: "How do you get to it?"},
      "Once Personal Finance shows up in Claude’s sidebar, click it, connect your first account and ask a question.",
      "I think this can save a lot of money, but it’s worth asking yourself whether you’re comfortable connecting AI to your bank accounts."
    ],
    full_he: [
      "בעולם ה AI, שבו כבר ויתרנו על הרבה מהפרטיות שלנו, ה AI נכנס לכל מקום, ובמיוחד לדברים שלבני אדם אין כוח או חשק להתעסק איתם.",
      "ב 5 בנובמבר השיקה אנטרופיק באופן רשמי כלי חדש בשם Personal Finance. הכלי מתחבר לחשבון הבנק ולכרטיסי האשראי שלך דרך Plaid, כך שאין לו גישה לסיסמה של הבנק. הוא יכול לראות עד שנתיים אחורה, והוא העוזר הפיננסי האישי שלך.",
      {h: "מה אפשר לעשות איתו"},
      {list: ["לשאול לאן הלך הכסף", "לבנות דשבורד אישי", "לזהות חיובים כפולים ועמלות לא צפויות", "לעקוב אחרי מנויים ותשלומים קבועים", "לראות כמה כסף נשאר עד המשכורת הבאה", "לקבל סיכום הוצאות לפי קטגוריות"]},
      {img: "assets/stories/pf-chat.png", alt: "Claude עונה: לאן הלך הכסף החודש"},
      {h: "מה הוא לא עושה"},
      "הוא לא יכול להזיז כסף (קריאה בלבד), והוא לא משקיע בשבילך.",
      "השיחות בתוך Personal Finance לא משמשות את אנטרופיק לאימון המודלים.",
      "כרגע זו גרסת בטא, רק בארה\"ב, במסלולי Pro, Max ו Ultra.",
      {h: "איך מגיעים לזה?"},
      "כשמופיעה הכניסה Personal Finance בסרגל הצד של Claude, לוחצים, מחברים חשבון ראשון ושואלים שאלה.",
      "לדעתי אפשר לחסוך הרבה כסף עם הכלי הזה, אבל כדאי לחשוב אם אתם מרגישים בנוח לחבר AI לחשבונות הבנק שלכם."
    ],
    link: "https://support.claude.com/en/articles/18185620-use-personal-finance-in-claude",
    link2: "https://www.engadget.com/2307936/now-claude-can-help-with-your-finances-too/"
  },
  {
    id: "claude-dreaming-memory", date: "2026-11-06", tag: "Claude",
    icon: "assets/tools/claude.png",
    image: "assets/stories/agent-memory.jpg",
    title_en: "Claude “dreams”: how AI agents learn from their own mistakes",
    title_he: "קלוד \"חולם\": איך סוכני AI לומדים מהטעויות של עצמם",
    text_en: "Anthropic shared how Claude remembers between sessions, and a process called dreaming where it goes over its notes, fixes mistakes and tidies up its memory.",
    text_he: "אנטרופיק שיתפה איך קלוד זוכר בין שיחה לשיחה, ותהליך שנקרא dreaming שבו הוא עובר על ההערות שלו, מתקן טעויות ומסדר את הזיכרון.",
    do_en: ["Build agents that learn how you work", "Let the agent decide what to remember instead of piling on instructions", "Developers can try it in Claude Managed Agents"],
    do_he: ["לבנות סוכנים שלומדים איך אתם עובדים", "לתת לסוכן להחליט לבד מה לזכור, במקום להעמיס הוראות", "מפתחים יכולים לנסות את זה ב Claude Managed Agents"],
    full_en: [
      "Every time you open a new chat, the AI starts from zero. Memory is what lets an AI agent learn from experience, and Anthropic just shared how it works inside Claude.",
      "On 6 November Anthropic published a research post called “The components of agent memory”. It explains how Claude keeps what it learns between sessions, and a process called dreaming: between sessions Claude goes back over its logs, fixes wrong notes, writes new ones and tidies up its memory. Just like our brain sorts out the day while we sleep.",
      {h: "What they found"},
      {list: [
        "Less is more: in a Pokémon game test, an older model saved 413 memory files and won 1 badge. Claude Fable 5 saved only 9 files and won 4.",
        "Dreaming fixes mistakes: Claude wrote down a wrong location in the game and kept getting stuck. After dreaming it caught the error and moved on.",
        "It builds a wiki: on 350,000 internal company files, the score using the wiki alone went from 13% to 48% after 128 rounds of dreaming.",
        "Don’t over instruct: strong models did better when left to decide for themselves what to remember."
      ]},
      {h: "What it means for us"},
      "The agents we build are getting better at learning how we work, and the longer they run, the smarter they get.",
      {h: "Who can use it?"},
      "Dreaming is available for developers in Claude Managed Agents (introduced as a research preview in May)."
    ],
    full_he: [
      "בכל פעם שפותחים שיחה חדשה, ה AI מתחיל מאפס. הזיכרון הוא מה שמאפשר לסוכן AI ללמוד מניסיון, ועכשיו אנטרופיק שיתפה איך זה עובד אצל קלוד.",
      "ב 6 בנובמבר פרסמה אנטרופיק פוסט מחקר בשם \"The components of agent memory\". הוא מסביר איך קלוד שומר את מה שהוא לומד בין שיחה לשיחה, ותהליך שנקרא dreaming (חלימה): בין שיחה לשיחה קלוד עובר על היומנים שלו, מתקן הערות שגויות, כותב חדשות ומסדר את הזיכרון. בדיוק כמו שהמוח שלנו מסדר את היום בזמן שאנחנו ישנים.",
      {h: "מה הם גילו"},
      {list: [
        "פחות זה יותר: במבחן של משחק פוקימון, מודל ישן שמר 413 קבצי זיכרון וזכה בתג אחד. Claude Fable 5 שמר רק 9 קבצים וזכה ב 4.",
        "ה dreaming מתקן טעויות: קלוד רשם מיקום שגוי במשחק ונתקע שוב ושוב. אחרי תהליך החלימה הוא תפס את הטעות והתקדם.",
        "הוא בונה ויקי: על 350,000 קבצים פנימיים של חברה, הציון מהוויקי בלבד עלה מ 13% ל 48% אחרי 128 סבבים של dreaming.",
        "לא להגזים בהוראות: מודלים חזקים הצליחו יותר כשנתנו להם להחליט לבד מה לזכור."
      ]},
      {h: "מה זה אומר לנו"},
      "הסוכנים שאנחנו בונים משתפרים בללמוד איך אנחנו עובדים, וככל שהם רצים יותר זמן, הם נהיים חכמים יותר.",
      {h: "מי יכול להשתמש בזה?"},
      "ה dreaming זמין למפתחים ב Claude Managed Agents (הוצג כ research preview במאי)."
    ],
    link: "https://anthropic.com/research/components-of-agent-memory"
  },
  {
    id: "tencent-biology-risk", date: "2026-11-07", tag: "AI safety",
    image: "assets/stories/tencent-sign.jpg",
    title_en: "Tencent’s AI chief: biology is the next danger zone",
    title_he: "ראש ה AI של טנסנט: הביולוגיה היא אזור הסכנה הבא",
    text_en: "Tencent’s chief AI scientist warned that AI will soon be able to do real harm in biology, days after Tencent released its new open model Hy4.",
    text_he: "המדען הראשי ל AI בטנסנט הזהיר ש AI יוכל בקרוב לגרום נזק אמיתי בביולוגיה, ימים אחרי שטנסנט שחררה את Hy4, המודל הפתוח החדש שלה.",
    do_en: ["Hy4 is an open model you can download and adapt", "When choosing AI tools for your business, check what the company does about safety"],
    do_he: ["Hy4 הוא מודל פתוח שאפשר להוריד ולהתאים", "כשבוחרים כלי AI לעסק, כדאי לבדוק מה החברה עושה בנושא בטיחות"],
    full_en: [
      "AI is already strong enough to cause real harm in cybersecurity, and now one of China’s top AI scientists says biology is next.",
      "On Shabbos (7 November), Yao Shunyu, Tencent’s chief AI scientist, spoke at a science event in Hong Kong. He warned that AI models will soon reach a point where they can do real harm in biology, and that this may be even harder to control than cyber risks. Yao, 29, joined Tencent last year after a year at OpenAI.",
      {img: "assets/stories/yao-shunyu.jpg", alt: "Yao Shunyu speaking"},
      "He spoke just days after Tencent launched Hy4, its new flagship model, on 4 November:",
      {list: [
        "Tencent says it left hacking material out of the training data and trained it on defensive security data instead",
        "It says Hy4 knows a lot about biology, but is weaker than leading models at designing experiments",
        "Hy4 is an open model, anyone can download it and change it"
      ]},
      "Yao said Chinese companies releasing open models must take safety very seriously. He said US companies like Anthropic make a strong case for keeping top models closed, but he thinks a mix of open and closed models works best, because open models also help the defenders.",
      "We live in such a strange world. Imagine the chairman of Boeing standing up and saying their planes are getting really dangerous. They would be grounded the same day. But the AI world is a different world."
    ],
    full_he: [
      "ה AI כבר חזק מספיק כדי לגרום נזק אמיתי בתחום הסייבר, ועכשיו אחד ממדעני ה AI הבכירים בסין אומר שהביולוגיה היא הבאה בתור.",
      "בשבת (7 בנובמבר) דיבר יאו שונייו, המדען הראשי ל AI בטנסנט, באירוע מדע בהונג קונג. הוא הזהיר שמודלי AI יגיעו בקרוב לנקודה שבה הם יוכלו לגרום נזק אמיתי בביולוגיה, ושזה עלול להיות קשה יותר לשליטה מסיכוני הסייבר. יאו, בן 29, הצטרף לטנסנט בשנה שעברה אחרי שנה ב OpenAI.",
      {img: "assets/stories/yao-shunyu.jpg", alt: "יאו שונייו מדבר"},
      "הדברים נאמרו ימים ספורים אחרי שטנסנט השיקה את Hy4, מודל הדגל החדש שלה, ב 4 בנובמבר:",
      {list: [
        "לפי טנסנט, הם הוציאו מנתוני האימון חומר על פריצה, ואימנו אותו במקום זה על נתוני אבטחה הגנתיים",
        "לדבריהם, ל Hy4 יש ידע רחב בביולוגיה, אבל הוא חלש יותר מהמודלים המובילים בתכנון ניסויים",
        "Hy4 הוא מודל פתוח, כל אחד יכול להוריד אותו ולשנות אותו"
      ]},
      "יאו אמר שחברות סיניות שמשחררות מודלים פתוחים חייבות להתייחס לבטיחות ברצינות רבה. לדבריו, חברות אמריקאיות כמו אנטרופיק מציגות טיעון חזק לשמור את המודלים המובילים סגורים, אבל לדעתו שילוב של מודלים פתוחים וסגורים עובד הכי טוב, כי מודלים פתוחים עוזרים גם למגינים.",
      "אנחנו חיים בעולם כל כך מוזר. תחשבו שהיושב ראש של בואינג היה עומד ואומר שהמטוסים שלהם נהיים מסוכנים מאוד. באותו יום היו מקרקעים אותם. אבל עולם ה AI הוא עולם אחר."
    ],
    link: "https://thenextweb.com/news/tencent-yao-shunyu-ai-biology-risk-hy4",
    link2: "https://www.scmp.com/tech/big-tech/article/3373697/ai-will-soon-master-biology-unleashing-new-safety-risks-tencent-ai-chief-warns"
  },
  {
    id: "monday-q3-ai", date: "2026-11-09", tag: "monday.com",
    icon: "assets/tools/monday-icon.png",
    image: "assets/stories/monday-q3.jpg",
    video: "WUj318KELK8", videoAt: 4,
    title_en: "monday.com goes all in on AI: $36 million and 6 million agent interactions",
    title_he: "monday.com הולכת עד הסוף עם AI: 36 מיליון דולר ו 6 מיליון שיחות עם סוכנים",
    text_en: "monday.com reported $377.5 million in quarterly revenue. Its AI products already bring in $36 million a year, and its agents passed 6 million interactions.",
    text_he: "monday.com דיווחה על הכנסות של 377.5 מיליון דולר ברבעון. מוצרי ה AI שלה כבר מכניסים 36 מיליון דולר בשנה, והסוכנים שלה עברו 6 מיליון אינטראקציות.",
    do_en: ["Start learning monday agents now", "Try vibe and AI credits on your boards"],
    do_he: ["להתחיל ללמוד את הסוכנים של monday כבר עכשיו", "לנסות את vibe וקרדיטי ה AI על הבורדים שלכם"],
    full_en: [
      "monday.com, the work platform many of us use every day, is turning itself into an AI company, and the latest numbers show how fast it’s happening.",
      "On 9 November monday.com reported its third quarter results:",
      {list: [
        "Revenue: $377.5 million, up 19% from last year",
        "AI products (AI credits, agents and vibe) now bring in $36 million a year",
        "monday agents passed 6 million interactions in less than two quarters",
        "Record profit margin"
      ]},
      "The two co CEOs, Roy Mann and Eran Zinman, said the company is going through a fundamental change to become AI first. They admitted that a change this big brings some short term bumps, and the outlook for next quarter shows slower growth of about 14%.",
      {h: "What it means for us"},
      "monday is no longer just boards and columns. Agents, vibe and AI credits are becoming the heart of the product, and anyone working on monday should start learning how to use them now.",
      {h: "My take"},
      "Even a company like monday.com understands where the whole world is heading. To stay relevant, they’re putting AI first."
    ],
    full_he: [
      "monday.com, פלטפורמת העבודה שרבים מאיתנו עובדים איתה כל יום, הופכת את עצמה לחברת AI, והמספרים האחרונים מראים כמה מהר זה קורה.",
      "ב 9 בנובמבר פרסמה monday.com את תוצאות הרבעון השלישי:",
      {list: [
        "הכנסות: 377.5 מיליון דולר, עלייה של 19% מהשנה שעברה",
        "מוצרי ה AI (קרדיטים, סוכנים ו vibe) מכניסים כבר 36 מיליון דולר בשנה",
        "הסוכנים של monday עברו 6 מיליון אינטראקציות בפחות משני רבעונים",
        "שולי רווח שיא"
      ]},
      "שני המנכ\"לים, רועי מן וערן זינמן, אמרו שהחברה עוברת שינוי יסודי כדי להפוך ל AI first. הם הודו ששינוי בגודל כזה מביא קשיים בטווח הקצר, והתחזית לרבעון הבא מראה צמיחה איטית יותר, בערך 14%.",
      {h: "מה זה אומר לנו"},
      "monday היא כבר לא רק בורדים ועמודות. הסוכנים, ה vibe וקרדיטי ה AI הופכים ללב המוצר, ומי שעובד עם monday כדאי שיתחיל ללמוד להשתמש בהם כבר עכשיו.",
      {h: "דעתי"},
      "אפילו חברה כמו monday.com מבינה לאן כל העולם הולך, וכדי להישאר רלוונטיים הם דוחפים את ה AI ראשון."
    ],
    links: [
      {url: "https://www.sec.gov/Archives/edgar/data/0001845338/000117891326005085/exhibit_99-1.htm", en: "Q3 2026 results", he: "תוצאות הרבעון השלישי"},
      {url: "https://www.youtube.com/watch?v=WUj318KELK8", en: "Watch the earnings call", he: "צפו בשיחת המשקיעים"},
      {url: "https://s29.q4cdn.com/881027206/files/content_files/Q3-26-Investor-Slides.pdf", en: "Investor presentation", he: "מצגת למשקיעים"}
    ]
  },
  {
    id: "make-waves-26", date: "2026-10-20", tag: "Make",
    icon: "assets/tools/make-icon.png",
    image: "assets/stories/make-waves26.jpg",
    video: "Ew2Jzsr3kB4", videoAt: 3,
    title_en: "Make Waves ‘26: AI agents inside a “glass box”",
    title_he: "Make Waves ‘26: סוכני AI בתוך \"קופסת זכוכית\"",
    text_en: "At its yearly conference in Prague, Make showed how to keep AI agents visible and under control, and announced MakeOS, an upgraded Maia and more.",
    text_he: "בכנס השנתי שלה בפראג, Make הראתה איך לשמור על סוכני AI גלויים ובשליטה, והכריזה על MakeOS, Maia משודרגת ועוד.",
    do_en: ["Build Make automations straight from Claude or ChatGPT", "Let Maia plan first and build only after you approve", "Join the waitlist for MakeOS and Process Intelligence"],
    do_he: ["לבנות אוטומציות ב Make ישר מתוך Claude או ChatGPT", "לתת ל Maia לתכנן קודם ולבנות רק אחרי שאתם מאשרים", "להירשם לרשימת ההמתנה של MakeOS ו Process Intelligence"],
    full_en: [
      "Almost every company has started using AI, but very few can actually see what it’s doing. That was the main message at Make’s big conference this year.",
      "On 19 to 20 October Make held Waves ‘26, its yearly conference, for the first time in Prague, the city where the company started. Around 700 people came for keynotes, live demos and workshops, all about one question: how do you take AI agents from a test to real everyday work?",
      "The big idea is the “glass box”: instead of AI being a black box, every agent and every action should be visible, controlled and reversible.",
      {h: "What they announced"},
      {list: [
        "MakeOS: a new product where all of a company’s AI agents work in one place. You see every agent, what it’s working on, what it costs and who is responsible for it. If an agent tries to go past its limits, it gets blocked and a person is asked. Waitlist for now.",
        "Maia upgraded: Make’s AI assistant now plans first and only builds after you approve, remembers your preferences, and you can paste a screenshot or diagram straight into the chat",
        "Build with Claude or ChatGPT: you can now build Make automations from the AI you already use",
        "Process Intelligence: shows where your team wastes time on manual work and what’s worth automating next. Waitlist",
        "Agent teams: one agent can split tasks across a team of smaller specialist agents",
        "More control: who can use which apps and AI models, private spaces, and a full log of everything a person or agent changed"
      ]},
      {h: "What it means for us"},
      "The question is no longer whether to use AI agents, but how to keep them under control. Make is betting that whoever gives businesses the clearest view of their agents will win."
    ],
    full_he: [
      "כמעט כל חברה כבר התחילה להשתמש ב AI, אבל מעט מאוד חברות באמת רואות מה הוא עושה. זה היה המסר המרכזי בכנס הגדול של Make השנה.",
      "ב 19 עד 20 באוקטובר ערכה Make את Waves ‘26, הכנס השנתי שלה, לראשונה בפראג, העיר שבה החברה התחילה. כ 700 איש הגיעו להרצאות, הדגמות חיות וסדנאות, כולן סביב שאלה אחת: איך לוקחים סוכני AI מניסוי לעבודה אמיתית ביום יום?",
      "הרעיון הגדול הוא \"קופסת זכוכית\": במקום שה AI יהיה קופסה שחורה, כל סוכן וכל פעולה צריכים להיות גלויים, בשליטה, וניתנים לביטול.",
      {h: "מה הם הכריזו"},
      {list: [
        "MakeOS: מוצר חדש שבו כל סוכני ה AI של החברה עובדים במקום אחד. רואים כל סוכן, על מה הוא עובד, כמה הוא עולה ומי אחראי עליו. אם סוכן מנסה לחרוג מהגבולות שלו, הוא נחסם ושואלים בן אדם. כרגע ברשימת המתנה.",
        "Maia משודרגת: העוזרת החכמה של Make מתכננת קודם ובונה רק אחרי שאתה מאשר, זוכרת את ההעדפות שלך, ואפשר להדביק צילום מסך או תרשים ישר לצ'אט",
        "לבנות עם Claude או ChatGPT: אפשר עכשיו לבנות אוטומציות ב Make מתוך ה AI שאתה כבר עובד איתו",
        "Process Intelligence: מראה איפה הצוות מבזבז זמן על עבודה ידנית ומה כדאי לאטמט הבא. ברשימת המתנה",
        "צוותי סוכנים: סוכן אחד יכול לחלק משימות לצוות של סוכנים קטנים ומתמחים",
        "יותר שליטה: מי יכול להשתמש באילו אפליקציות ומודלים, אזורים פרטיים, ותיעוד מלא של כל שינוי שעשה בן אדם או סוכן"
      ]},
      {h: "מה זה אומר לנו"},
      "השאלה כבר לא אם להשתמש בסוכני AI, אלא איך לשמור עליהם בשליטה. Make מהמרת שמי שייתן לעסקים את התמונה הכי ברורה של הסוכנים שלהם, ינצח."
    ],
    links: [
      {url: "https://www.youtube.com/watch?v=Ew2Jzsr3kB4", en: "Watch the keynote", he: "צפו בהרצאה המרכזית"},
      {url: "https://www.make.com/blog/waves26-the-glass-box-for-the-agentic-era", en: "Everything Make announced", he: "כל מה ש Make הכריזה"}
    ]
  }
];
