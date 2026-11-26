/* AI Monday stories. Used by the AI page (/ai) and the home page. */
/* ============================================================
   AI MONDAY POSTS. To add a story, copy one block and edit it.
   Newest first. The newest story (by date) is always the big card at the top.
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
    id: "claude-riemann-hypothesis", date: "2026-11-20", tag: "Claude",
    icon: "assets/apps/claude.png",
    image: "assets/stories/riemann-hypothesis.jpg",
    title_en: "Did Claude help solve the most famous problem in math?",
    title_he: "האם קלוד עזר לפתור את הבעיה המפורסמת ביותר במתמטיקה?",
    text_en: "For 167 years the best mathematicians in the world tried to prove the Riemann Hypothesis and failed. Now a mathematician says he did it, together with Claude.",
    text_he: "במשך 167 שנה טובי המתמטיקאים בעולם ניסו להוכיח את השערת רימן ונכשלו. עכשיו מתמטיקאי אומר שהוא עשה את זה, יחד עם קלוד.",
    do_en: ["The proof was published as Lean code a computer can check", "The Lean community says it has full confidence it’s correct", "Mathematicians still need to understand why it works"],
    do_he: ["ההוכחה פורסמה כקוד Lean שמחשב יכול לבדוק", "קהילת Lean אומרת שיש לה ביטחון מלא שהיא נכונה", "המתמטיקאים עוד צריכים להבין למה היא עובדת"],
    do_title_en: "What happened",
    do_title_he: "מה קרה",
    full_en: [
      "For 167 years, the best mathematicians in the world tried to prove the Riemann Hypothesis and failed. It’s about the hidden pattern of prime numbers, and there’s a $1 million prize for solving it. Now a mathematician says he did it, together with Claude.",
      {h: "What happened"},
      {list: [
        "On 20 November, Levent Alpöge, a mathematician at Anthropic, wrote: “I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis.”",
        "He published the proof as code in Lean, a language a computer can check step by step.",
        "The next day, the Lean community said they have full confidence the proof is correct.",
        "Andrew Sutherland from MIT ran his own checks too."
      ]},
      {h: "But it’s not the end of the story"},
      {list: [
        "Right now the proof is mostly computer code that is very hard for people to read.",
        "Mathematicians still need to understand what the proof shows and why it works.",
        "It hasn’t been officially accepted yet, and there’s no full paper."
      ]},
      {h: "What it means for us"},
      "If this holds up, it’s the first time AI helped crack one of the biggest problems in human history. A year ago this sounded like science fiction.",
      {h: "My take"},
      "AI that solves problems humans couldn’t is amazing, and scary. It could help find cures we’ve waited decades for. But the same power can also be used for harm. What happens next depends on the choices people make now."
    ],
    full_he: [
      "במשך 167 שנה, טובי המתמטיקאים בעולם ניסו להוכיח את השערת רימן ונכשלו. היא עוסקת בסדר הנסתר של המספרים הראשוניים, ויש פרס של מיליון דולר למי שיפתור אותה. עכשיו מתמטיקאי אומר שהוא עשה את זה, יחד עם קלוד.",
      {h: "מה קרה"},
      {list: [
        "ב 20 בנובמבר כתב לבנט אלפוגה, מתמטיקאי באנטרופיק: \"אני מאמין שגיליתי, יחד עם קלוד, הוכחה להשערת רימן.\"",
        "הוא פרסם את ההוכחה כקוד ב Lean, שפה שמחשב יכול לבדוק צעד אחרי צעד.",
        "יום אחרי, קהילת Lean אמרה שיש לה ביטחון מלא שההוכחה נכונה.",
        "אנדרו סאתרלנד מ MIT הריץ גם בדיקות משלו."
      ]},
      {h: "אבל זה לא סוף הסיפור"},
      {list: [
        "כרגע ההוכחה היא בעיקר קוד מחשב שקשה מאוד לבני אדם לקרוא.",
        "המתמטיקאים עוד צריכים להבין מה ההוכחה מראה ולמה היא עובדת.",
        "היא עוד לא התקבלה רשמית, ואין עדיין מאמר מלא."
      ]},
      {h: "מה זה אומר לנו"},
      "אם זה יחזיק, זו הפעם הראשונה ש AI עזר לפצח את אחת הבעיות הגדולות בהיסטוריה האנושית. לפני שנה זה נשמע כמו מדע בדיוני.",
      {h: "דעתי"},
      "AI שפותר בעיות שבני אדם לא הצליחו לפתור זה מדהים, וגם מפחיד. הוא יכול לעזור למצוא תרופות שחיכינו להן עשרות שנים. אבל אותו כוח יכול לשמש גם לנזק. מה שיקרה הלאה תלוי בהחלטות שבני אדם מקבלים עכשיו."
    ],
    links: [
      {url: "https://www.nature.com/articles/d41586-026-03812-7", en: "Read on Nature", he: "לקריאה ב Nature"},
      {url: "https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypothesis-most-famous-problem-in-all-of-math/", en: "Read on Scientific American", he: "לקריאה ב Scientific American"},
      {url: "https://leanprover-community.github.io/blog/posts/riemann-hypothesis/", en: "The Lean community statement", he: "ההודעה של קהילת Lean"}
    ]
  },
  {
    id: "amazon-decart", date: "2026-11-23", tag: "Amazon",
    icon: "assets/tools/israel-chip.png",
    image: "assets/stories/decart-founders.jpg",
    title_en: "A 3 year old Israeli AI company just made one of Israel’s biggest exits ever",
    title_he: "חברת AI ישראלית בת 3 שנים עשתה אחד האקזיטים הגדולים בתולדות ישראל",
    text_en: "Amazon agreed to buy Decart’s main technology and its team, in a deal reported at about $7.5 billion. Decart was founded in 2023 and has about 120 workers.",
    text_he: "אמזון הסכימה לקנות את הטכנולוגיה המרכזית של דקארט ואת הצוות, בעסקה שדווחה בשווי של כ 7.5 מיליארד דולר. דקארט הוקמה ב 2023, ויש בה כ 120 עובדים.",
    do_en: ["About $7.5 billion for the technology and the team", "The three founders join Amazon for 5 years", "The team joins Annapurna Labs, Amazon’s chip company in Israel"],
    do_he: ["כ 7.5 מיליארד דולר על הטכנולוגיה והצוות", "שלושת המייסדים מצטרפים לאמזון ל 5 שנים", "הצוות מצטרף ל Annapurna Labs, חברת השבבים של אמזון בישראל"],
    do_title_en: "The deal",
    do_title_he: "העסקה",
    full_en: [
      "Decart was founded in 2023 and has about 120 workers. Yesterday Amazon agreed to buy its main technology and its team, in a deal reported at about $7.5 billion. That makes it one of the biggest exits in Israeli tech history.",
      {h: "What did Amazon buy?"},
      "Decart built software that makes AI run faster and cheaper, on many kinds of computer chips. Amazon wants this to make its own AI chips stronger, so companies use them instead of Nvidia’s chips.",
      {h: "Good to know"},
      {list: [
        "Amazon is buying the technology and the team, not the whole company and not Decart’s AI video models.",
        "The three founders, Dean Leitersdorf, Orian Leitersdorf and Moshe Shalev, are joining Amazon. According to the Israeli paper Globes, they must stay 5 years to get the full payment.",
        "The team joins Annapurna Labs, Amazon’s chip company in Israel.",
        "Earlier this year, Anthropic (the company behind Claude) was in talks to buy Decart for about $6 billion, but walked away.",
        "The deal still needs approval from regulators."
      ]},
      {h: "What it means for us"},
      "The big fight in AI is not only about smart chatbots. It’s about who controls the chips that run them. And an Israeli team just became a key part of that fight."
    ],
    full_he: [
      "דקארט הוקמה ב 2023, ויש בה כ 120 עובדים. אתמול אמזון הסכימה לקנות את הטכנולוגיה המרכזית שלה ואת הצוות, בעסקה שדווחה בשווי של כ 7.5 מיליארד דולר. זה אחד האקזיטים הגדולים בהיסטוריה של ההייטק הישראלי.",
      {h: "מה אמזון קנתה?"},
      "דקארט בנתה תוכנה שגורמת ל AI לרוץ מהר יותר וזול יותר, על הרבה סוגים של שבבי מחשב. אמזון רוצה את זה כדי לחזק את שבבי ה AI שלה, כך שחברות ישתמשו בהם במקום בשבבים של נבידיה.",
      {h: "חשוב לדעת"},
      {list: [
        "אמזון קונה את הטכנולוגיה ואת הצוות, לא את כל החברה ולא את מודלי הווידאו של דקארט.",
        "שלושת המייסדים, דין לייטרסדורף, אוריין לייטרסדורף ומשה שלו, מצטרפים לאמזון. לפי \"גלובס\", הם צריכים להישאר 5 שנים כדי לקבל את כל התשלום.",
        "הצוות מצטרף ל Annapurna Labs, חברת השבבים של אמזון בישראל.",
        "מוקדם יותר השנה אנטרופיק (החברה שמאחורי קלוד) ניהלה מגעים לקנות את דקארט בכ 6 מיליארד דולר, אבל ויתרה.",
        "העסקה עדיין צריכה אישור של הרגולטורים."
      ]},
      {h: "מה זה אומר לנו"},
      "המלחמה הגדולה ב AI היא לא רק על צ'טבוטים חכמים. היא על מי שולט בשבבים שמריצים אותם. וצוות ישראלי הפך עכשיו לחלק מרכזי במלחמה הזאת."
    ],
    links: [
      {url: "https://thenextweb.com/news/amazon-decart-7-5bn-optimization-stack-founders-trainium", en: "Read on The Next Web", he: "לקריאה ב The Next Web"}
    ]
  },
  {
    id: "lovable-apps-exposed", date: "2026-11-21", tag: "Security",
    icon: "assets/tools/lovable.png",
    image: "assets/stories/lovable-exposed-data.jpg",
    title_en: "Built an app with AI? Your customers’ data might be open to everyone",
    title_he: "בניתם אפליקציה עם AI? ייתכן שהמידע של הלקוחות שלכם פתוח לכולם",
    text_en: "Researchers checked about 159,000 apps built with Lovable. In around 7,400 of them, they could see people’s email addresses without logging in.",
    text_he: "חוקרים בדקו כ 159,000 אפליקציות שנבנו ב Lovable. בכ 7,400 מהן הם יכלו לראות כתובות מייל של אנשים, בלי להתחבר בכלל.",
    do_en: ["Open your app in a private window, without logging in", "Make two test accounts and check one can’t see the other", "Run Lovable’s built-in security scan and click Fix"],
    do_he: ["לפתוח את האפליקציה בחלון פרטי, בלי להתחבר", "לפתוח שני חשבונות לבדיקה ולוודא שאחד לא רואה את השני", "להריץ את סריקת האבטחה של Lovable וללחוץ Fix"],
    do_title_en: "3 checks to do today",
    do_title_he: "3 בדיקות לעשות היום",
    full_en: [
      "AI tools like Lovable let anyone build a website or an app just by describing it. No coding needed. But there’s one thing the AI doesn’t always do for you: lock the doors.",
      "Security company Crissy Field from Hamburg, together with the German newspaper Handelsblatt, checked about 159,000 apps built with Lovable. In around 7,400 of them, they could see records with people’s email addresses without logging in.",
      {h: "What they found open to anyone"},
      {list: [
        "A forum with over 80,000 profiles: names, emails and birthdays.",
        "Event and restaurant apps with tens of thousands of orders, including phone numbers, addresses and payment details.",
        "Over 1,000 passport details.",
        "Contracts, invoices, private photos and WhatsApp messages."
      ]},
      {img: "assets/stories/lovable-app.jpg", alt: "Lovable app on a phone"},
      {h: "What Lovable said"},
      "Lovable confirmed the findings, and said this is a known setup problem across the industry. Its head of security said the cause was a missing lock on the database, which is exactly what Lovable’s security scan is built to catch. But its terms are clear: the person who builds the app is responsible for keeping the data safe.",
      {h: "3 simple checks you can do today"},
      {list: [
        "Open your app like a stranger. Open it in a private window (incognito), without logging in. Can you see anything that should be private, like customer names, orders or messages? If yes, stop and fix it.",
        "Make two test accounts. Log in as the first one and try to find the second one’s details. One customer should never see another customer’s data.",
        "Run Lovable’s security scan. Lovable has a built-in security check. Run it, and if it finds a problem, click “Fix”. Then ask: “Check that every table in my database is locked so each user can only see their own data.”"
      ]},
      "But this is only a first check. Before you put real customer data in your app, have someone who really knows security look at it. A quick check can catch the big holes, but it can’t replace an expert.",
      {h: "What it means for us"},
      "AI makes building easy. Keeping your customers’ data safe is still your job."
    ],
    full_he: [
      "כלי AI כמו Lovable מאפשרים לכל אחד לבנות אתר או אפליקציה רק על ידי תיאור במילים. בלי לכתוב קוד. אבל יש דבר אחד שה AI לא תמיד עושה בשבילכם: לנעול את הדלתות.",
      "חברת האבטחה Crissy Field מהמבורג, יחד עם העיתון הגרמני Handelsblatt, בדקה כ 159,000 אפליקציות שנבנו ב Lovable. בכ 7,400 מהן הם יכלו לראות רשומות עם כתובות מייל של אנשים, בלי להתחבר בכלל.",
      {h: "מה הם מצאו פתוח לכל אחד"},
      {list: [
        "פורום עם יותר מ 80,000 פרופילים: שמות, מיילים ותאריכי לידה.",
        "אפליקציות של אירועים ומסעדות עם עשרות אלפי הזמנות, כולל טלפונים, כתובות ופרטי תשלום.",
        "יותר מ 1,000 פרטי דרכונים.",
        "חוזים, חשבוניות, תמונות פרטיות והודעות וואטסאפ."
      ]},
      {img: "assets/stories/lovable-app.jpg", alt: "אפליקציית Lovable בטלפון"},
      {h: "מה Lovable אמרו"},
      "Lovable אישרו את הממצאים, ואמרו שמדובר בבעיית הגדרות מוכרת בכל התעשייה. ראש האבטחה שלהם אמר שהסיבה הייתה מנעול חסר במאגר הנתונים, וזה בדיוק מה שסריקת האבטחה של Lovable נועדה לתפוס. אבל בתנאי השימוש שלהם כתוב ברור: מי שבונה את האפליקציה אחראי לשמור על המידע.",
      {h: "3 בדיקות פשוטות שאפשר לעשות כבר היום"},
      {list: [
        "תפתחו את האפליקציה כמו זר. פותחים אותה בחלון פרטי (גלישה בסתר), בלי להתחבר. רואים משהו שאמור להיות פרטי, כמו שמות לקוחות, הזמנות או הודעות? אם כן, עוצרים ומתקנים.",
        "תפתחו שני חשבונות לבדיקה. מתחברים עם הראשון ומנסים למצוא את הפרטים של השני. לקוח אחד אף פעם לא אמור לראות מידע של לקוח אחר.",
        "תריצו את סריקת האבטחה של Lovable. ב Lovable יש בדיקת אבטחה מובנית. מריצים אותה, ואם היא מוצאת בעיה, לוחצים \"Fix\". ואחר כך כותבים: \"תבדוק שכל טבלה במאגר הנתונים שלי נעולה, כך שכל משתמש רואה רק את המידע שלו.\""
      ]},
      "אבל זו רק בדיקה ראשונית. לפני שמכניסים מידע אמיתי של לקוחות לאפליקציה, צריך לתת למישהו שבאמת מבין באבטחה לבדוק אותה. בדיקה מהירה יכולה לתפוס את החורים הגדולים, אבל היא לא מחליפה מומחה.",
      {h: "מה זה אומר לנו"},
      "AI הופך את הבנייה לקלה. לשמור על המידע של הלקוחות זה עדיין התפקיד שלכם."
    ],
    links: [
      {url: "https://cybernews.com/security/lovable-ai-apps-expose-personal-information/", en: "Read on Cybernews", he: "לקריאה ב Cybernews"}
    ]
  },
  {
    id: "anthropic-ipo", date: "2026-11-19", tag: "Claude",
    icon: "assets/apps/claude.png",
    image: "assets/stories/anthropic-ipo.jpg",
    title_en: "The biggest stock market debut ever: the company behind Claude goes public today",
    title_he: "ההנפקה הגדולה בהיסטוריה: החברה שמאחורי קלוד נכנסת היום לבורסה",
    text_en: "No company has ever raised this much money on Wall Street. Today Anthropic, the company that makes Claude, starts trading on the Nasdaq under the name ANT.",
    text_he: "אף חברה לא גייסה אי פעם כל כך הרבה כסף בוול סטריט. היום אנטרופיק, החברה שמייצרת את קלוד, מתחילה להיסחר בנאסד\"ק תחת השם ANT.",
    do_en: ["$83 a share, above the planned $70 to $78", "$81.3 billion raised, more than SpaceX’s $75 billion, the record until now", "Worth about $1.5 trillion"],
    do_he: ["83 דולר למניה, מעל הטווח המתוכנן של 70 עד 78", "81.3 מיליארד דולר גויסו, יותר מ 75 המיליארד של ספייס אקס, שהיה השיא עד עכשיו", "שווי של כ 1.5 טריליון דולר"],
    do_title_en: "The numbers",
    do_title_he: "המספרים",
    full_en: [
      "No company has ever raised this much money on Wall Street. Today Anthropic, the company that makes Claude, starts trading on the Nasdaq under the name ANT.",
      {h: "The numbers"},
      {list: [
        "$83 a share, higher than the $70 to $78 it planned.",
        "$81.3 billion raised, more than SpaceX’s $75 billion from June, the record until now.",
        "Worth about $1.5 trillion.",
        "It’s the first of the big AI model companies to go public."
      ]},
      {h: "Why investors want in"},
      {list: [
        "Anthropic earns money at a pace of about $81 billion a year, $10 billion more than just a month earlier.",
        "Companies paying it over $100,000 a year jumped from about 1,500 to more than 11,900 in less than a year.",
        "Much of the growth comes from Claude Code, its AI tool for writing software."
      ]},
      {h: "But it’s not all easy"},
      {list: [
        "It still loses money, because it spends billions on the huge computers that run AI.",
        "It has promised to spend about $900 billion on computing power in the coming years."
      ]},
      {h: "My take"},
      "I think that now that Anthropic is a public company, with investors watching every three months, we may start to see more limits on the models it lets us use, and maybe higher prices. We’ll keep an eye on it."
    ],
    full_he: [
      "אף חברה לא גייסה אי פעם כל כך הרבה כסף בוול סטריט. היום אנטרופיק, החברה שמייצרת את קלוד, מתחילה להיסחר בנאסד\"ק תחת השם ANT.",
      {h: "המספרים"},
      {list: [
        "83 דולר למניה, יותר מהטווח של 70 עד 78 שתכננה.",
        "81.3 מיליארד דולר גויסו, יותר מ 75 המיליארד של ספייס אקס מיוני, שהיה השיא עד עכשיו.",
        "שווי של כ 1.5 טריליון דולר.",
        "זו הראשונה מבין חברות מודלי ה AI הגדולות שנכנסת לבורסה."
      ]},
      {h: "למה המשקיעים רוצים להיכנס"},
      {list: [
        "אנטרופיק מכניסה כסף בקצב של כ 81 מיליארד דולר בשנה, 10 מיליארד יותר מחודש לפני כן.",
        "מספר החברות שמשלמות לה יותר מ 100 אלף דולר בשנה קפץ מכ 1,500 ליותר מ 11,900 בפחות משנה.",
        "הרבה מהצמיחה מגיעה מ Claude Code, כלי ה AI שלה לכתיבת תוכנה."
      ]},
      {h: "אבל זה לא הכל פשוט"},
      {list: [
        "היא עדיין מפסידה כסף, כי היא מוציאה מיליארדים על המחשבים הענקיים שמריצים את ה AI.",
        "היא התחייבה להוציא כ 900 מיליארד דולר על כוח מחשוב בשנים הקרובות."
      ]},
      {h: "דעתי"},
      "אני חושב שעכשיו, כשאנטרופיק היא חברה ציבורית והמשקיעים בודקים אותה כל שלושה חודשים, ייתכן שנתחיל לראות יותר הגבלות על המודלים שהיא מאפשרת לנו להשתמש בהם, ואולי גם מחירים גבוהים יותר. נעקוב אחרי זה."
    ],
    links: [
      {url: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html", en: "Read on CNBC", he: "לקריאה ב CNBC"}
    ]
  },
  {
    id: "modern-web-guidance", date: "2026-11-10", tag: "Google",
    icon: "assets/tools/chrome.png",
    image: "assets/stories/modern-web-guidance.jpg",
    video: "bo3i0FzDUYo", videoAt: 4,
    title_en: "Big news for anyone building websites with AI",
    title_he: "בשורה ענקית לבוני אתרים ודפי נחיתה עם AI",
    text_en: "AI builds websites the old way, because it learned from pages written 5 to 15 years ago. Modern Web Guidance is a free skill from the Chrome team that teaches it how websites are built today.",
    text_he: "ה AI בונה אתרים בשיטות ישנות, כי הוא למד מדפים שנכתבו לפני 5 עד 15 שנה. Modern Web Guidance הוא סקיל חינמי של צוות Chrome שמלמד אותו איך בונים אתרים היום.",
    do_en: ["Install it in your AI coding tool with one command", "Get faster, smoother websites on mobile", "Get less bloated code, with accessibility and security built in"],
    do_he: ["להתקין אותו בכלי ה AI שלכם בפקודה אחת", "לקבל אתרים מהירים וחלקים יותר בנייד", "לקבל פחות קוד מנופח, עם נגישות ואבטחה מובנות"],
    full_en: [
      "Here’s the most annoying thing about building a website with AI: the design and code often feel old. That’s because AI learned from billions of web pages, and most of them were written 5 to 15 years ago.",
      "Now the Chrome team, together with Edge, Firefox and MDN, released Modern Web Guidance. It’s a free skill you install in your AI coding tool, and it teaches the AI how websites are built today.",
      {h: "What you get"},
      {list: [
        "More up to date websites: the AI uses today’s methods, not old tricks.",
        "Fast and smooth on mobile: instead of heavy code that lags on the phone, it uses what the browser can already do.",
        "Fewer bugs in different browsers: the code fits the browsers you need, with a backup for older ones.",
        "Less bloated code: no heavy extra libraries just for a popup.",
        "Accessibility and security built in: in Google’s tests, the AI followed modern best practices 37 points more often."
      ]},
      {h: "What it means for us"},
      "If you build websites or landing pages with AI, install this before your next project. One command and your AI is up to date.",
      {h: "How to install"},
      {install: [{"name": "Any AI coding tool", "cmds": ["npx modern-web-guidance@latest install"], "note": "One command, and it updates itself.", "rec": true}, {"name": "Claude Code", "cmds": ["claude plugin marketplace add GoogleChrome/modern-web-guidance\nclaude plugin install modern-web-guidance@googlechrome"]}, {"name": "Codex", "cmds": ["codex plugin marketplace add GoogleChrome/modern-web-guidance\ncodex plugin add modern-web-guidance@googlechrome"]}, {"name": "Gemini CLI", "cmds": ["gemini extensions install https://github.com/GoogleChrome/modern-web-guidance --auto-update"]}, {"name": "Antigravity CLI", "cmds": ["agy plugin install https://github.com/GoogleChrome/modern-web-guidance"], "note": "In the Antigravity app: Settings, Customizations, Build with Google Plugins."}, {"name": "GitHub Copilot CLI", "cmds": ["/plugin marketplace add GoogleChrome/modern-web-guidance", "/plugin install modern-web-guidance@googlechrome"], "note": "Two steps, one after the other."}, {"name": "GitHub CLI", "cmds": ["gh skill install GoogleChrome/modern-web-guidance"]}, {"name": "npx skills", "cmds": ["npx skills add GoogleChrome/modern-web-guidance"]}, {"name": "Grok", "cmds": ["grok plugin install https://github.com/GoogleChrome/modern-web-guidance --trust"]}, {"name": "Goose", "cmds": ["goose plugin install https://github.com/GoogleChrome/modern-web-guidance --auto-update"]}, {"name": "Kimi Code", "cmds": ["/plugins install https://github.com/GoogleChrome/modern-web-guidance"]}, {"name": "JetBrains WebStorm", "cmds": [], "note": "No command needed: Settings, AI Assistant, Skills, pick Modern Web Guidance and click Install."}]}
    ],
    full_he: [
      "הבעיה הכי מעצבנת כשבונים אתר עם AI: העיצוב והקוד מרגישים ישנים. הסיבה היא שה AI למד ממיליארדי דפים באינטרנט, ורובם נכתבו לפני 5 עד 15 שנה.",
      "עכשיו צוות Chrome, יחד עם Edge, Firefox ו MDN, הוציא את Modern Web Guidance. זה סקיל חינמי שמתקינים בכלי ה AI שבונה לכם קוד, והוא מלמד את ה AI איך בונים אתרים היום.",
      {h: "מה מקבלים"},
      {list: [
        "אתרים מעודכנים יותר: ה AI משתמש בשיטות של היום, לא בטריקים ישנים.",
        "מהיר וחלק בנייד: במקום קוד כבד שמקרטע בטלפון, הוא משתמש ביכולות שכבר קיימות בדפדפן.",
        "פחות באגים בדפדפנים שונים: הקוד מותאם לדפדפנים שצריך, עם גיבוי לדפדפנים ישנים.",
        "פחות קוד מנופח: בלי ספריות חיצוניות כבדות רק בשביל חלון קופץ.",
        "נגישות ואבטחה מובנות: בבדיקות של גוגל, ה AI עמד בכללי העבודה המודרניים ב 37 נקודות אחוז יותר."
      ]},
      {h: "מה זה אומר לנו"},
      "אם אתם בונים אתרים או דפי נחיתה עם AI, תתקינו את זה לפני הפרויקט הבא. פקודה אחת, וה AI שלכם מעודכן.",
      {h: "איך מתקינים"},
      {install: [{"name": "כל כלי AI לבניית קוד", "cmds": ["npx modern-web-guidance@latest install"], "note": "פקודה אחת, והיא מתעדכנת לבד.", "rec": true}, {"name": "Claude Code", "cmds": ["claude plugin marketplace add GoogleChrome/modern-web-guidance\nclaude plugin install modern-web-guidance@googlechrome"]}, {"name": "Codex", "cmds": ["codex plugin marketplace add GoogleChrome/modern-web-guidance\ncodex plugin add modern-web-guidance@googlechrome"]}, {"name": "Gemini CLI", "cmds": ["gemini extensions install https://github.com/GoogleChrome/modern-web-guidance --auto-update"]}, {"name": "Antigravity CLI", "cmds": ["agy plugin install https://github.com/GoogleChrome/modern-web-guidance"], "note": "אפשר גם בתוך אפליקציית Antigravity, דרך Settings, Customizations ו Build with Google Plugins, בלי פקודה."}, {"name": "GitHub Copilot CLI", "cmds": ["/plugin marketplace add GoogleChrome/modern-web-guidance", "/plugin install modern-web-guidance@googlechrome"], "note": "שני שלבים, אחד אחרי השני."}, {"name": "GitHub CLI", "cmds": ["gh skill install GoogleChrome/modern-web-guidance"]}, {"name": "npx skills", "cmds": ["npx skills add GoogleChrome/modern-web-guidance"]}, {"name": "Grok", "cmds": ["grok plugin install https://github.com/GoogleChrome/modern-web-guidance --trust"]}, {"name": "Goose", "cmds": ["goose plugin install https://github.com/GoogleChrome/modern-web-guidance --auto-update"]}, {"name": "Kimi Code", "cmds": ["/plugins install https://github.com/GoogleChrome/modern-web-guidance"]}, {"name": "JetBrains WebStorm", "cmds": [], "note": "בלי פקודה: נכנסים ל Settings, AI Assistant, Skills, בוחרים Modern Web Guidance ולוחצים על Install להתקנה."}]}
    ],
    links: [
      {url: "https://developer.chrome.com/docs/modern-web-guidance/get-started#installation", en: "How to install", he: "איך מתקינים"},
      {url: "https://developer.chrome.com/blog/modern-web-guidance-v1", en: "Chrome blog", he: "הבלוג של Chrome"}
    ]
  },
  {
    id: "gpt-6-2-astra-sol", date: "2026-11-17", tag: "ChatGPT",
    icon: "assets/tools/chatgpt.png",
    image: "assets/stories/gpt-6-2-astra-sol.jpg",
    video: "tKoDPOrLMX0", videoAt: 3,
    title_en: "OpenAI’s new models make work that looks less like AI",
    title_he: "המודלים החדשים של OpenAI עושים עבודה שנראית פחות כמו AI",
    text_en: "You know when a document or a slide deck screams “AI made this”? OpenAI says its new models, GPT‑6.2 Astra and Sol, fix that.",
    text_he: "מכירים את זה שמסמך או מצגת צועקים \"AI עשה את זה\"? OpenAI אומרת שהמודלים החדשים שלה, GPT‑6.2 Astra ו Sol, מתקנים את זה.",
    do_en: ["Give it your template or a screenshot of a slide and it copies your layout, colours and fonts", "Get shorter, clearer writing with less waffle", "Do more within your plan before you hit the limit"],
    do_he: ["לתת לו את התבנית שלכם או צילום מסך של שקופית, והוא מעתיק את הפריסה, הצבעים והגופנים", "לקבל כתיבה קצרה וברורה יותר, עם פחות מילים מיותרות", "לעשות יותר במסגרת המנוי לפני שמגיעים למגבלה"],
    full_en: [
      "You know when a document or a slide deck screams “AI made this”? OpenAI says its new models fix that.",
      "OpenAI has launched two new models:",
      {list: [
        "GPT‑6.2 Astra: its strongest model, for the hardest projects.",
        "GPT‑6.2 Sol: faster and cheaper, for everyday work. Many people at OpenAI use it as their main model."
      ]},
      {h: "What’s better"},
      {list: [
        "Slides, spreadsheets and documents look more professional and less like AI. Give it your template, or even just a screenshot of a slide, and it copies your layout, colours and fonts.",
        "Shorter, clearer writing, with less waffle.",
        "Better websites and 3D, even small games you can play in the browser.",
        "Uses less, so you can do more within your plan before you hit the limit."
      ]},
      "OpenAI says Astra beat Claude Fable 5.2 on a test of real professional work, at a small part of the cost. Keep in mind: these are OpenAI’s own tests.",
      {h: "Who can use it"},
      "From today, for ChatGPT Plus, Pro, Enterprise and Edu users, in ChatGPT Work and Codex.",
      {h: "What it means for us"},
      "The race between OpenAI, Anthropic and Google is now about who makes work that looks like a human made it. Good for all of us."
    ],
    full_he: [
      "מכירים את זה שמסמך או מצגת צועקים \"AI עשה את זה\"? OpenAI אומרת שהמודלים החדשים שלה מתקנים את זה.",
      "OpenAI השיקה שני מודלים חדשים:",
      {list: [
        "GPT‑6.2 Astra: המודל הכי חזק שלה, לפרויקטים הכי קשים.",
        "GPT‑6.2 Sol: מהיר וזול יותר, לעבודה יומיומית. הרבה עובדים ב OpenAI משתמשים בו כמודל הראשי שלהם."
      ]},
      {h: "מה השתפר"},
      {list: [
        "מצגות, גיליונות ומסמכים נראים מקצועיים יותר ופחות כמו AI. נותנים לו את התבנית שלכם, או אפילו רק צילום מסך של שקופית, והוא מעתיק את הפריסה, הצבעים והגופנים.",
        "כתיבה קצרה וברורה יותר, עם פחות מילים מיותרות.",
        "אתרים ותלת ממד טובים יותר, אפילו משחקים קטנים שאפשר לשחק בדפדפן.",
        "משתמש בפחות, אז אפשר לעשות יותר במסגרת המנוי לפני שמגיעים למגבלה."
      ]},
      "OpenAI אומרת ש Astra ניצח את Claude Fable 5.2 במבחן של עבודה מקצועית אמיתית, בחלק קטן מהמחיר. חשוב לזכור: אלה מבחנים של OpenAI עצמה.",
      {h: "למי זה זמין"},
      "מהיום, למשתמשי ChatGPT Plus, Pro, Enterprise ו Edu, ב ChatGPT Work וב Codex.",
      {h: "מה זה אומר לנו"},
      "המירוץ בין OpenAI, אנטרופיק וגוגל הוא עכשיו על מי עושה עבודה שנראית כאילו בן אדם עשה אותה. טוב לכולנו."
    ],
    links: [
      {url: "https://openai.com/index/introducing-gpt-6-2-astra-sol/", en: "OpenAI announcement", he: "ההודעה של OpenAI"}
    ]
  },
  {
    id: "apple-health-ai-study", date: "2026-11-15", tag: "Apple",
    icon: "assets/tools/health-heart.png",
    image: "assets/stories/apple-health-ai-study.jpg",
    title_en: "Apple tests AI that answers health questions, using real medical sources",
    title_he: "אפל בודקת AI שעונה על שאלות בריאות, ממקורות רפואיים אמיתיים",
    text_en: "Apple has launched a new study app with OpenEvidence. You ask a health question, and the answer comes from trusted medical journals, written in simple words.",
    text_he: "אפל השיקה אפליקציית מחקר חדשה יחד עם OpenEvidence. שואלים שאלה על בריאות, והתשובה מגיעה מכתבי עת רפואיים אמינים, במילים פשוטות.",
    do_en: ["Ask a health question and get an answer from trusted medical journals", "Share sleep, activity or heart rate data for more personal answers", "Get ready for a doctor’s visit"],
    do_he: ["לשאול שאלה על בריאות ולקבל תשובה מכתבי עת רפואיים אמינים", "לשתף נתוני שינה, פעילות או דופק כדי לקבל תשובות אישיות יותר", "להתכונן לביקור אצל רופא"],
    full_en: [
      "Millions of people already ask ChatGPT and Claude about their health. OpenAI says people ask it over 300 million health questions every week. Now Apple wants to find out how to do this the right way.",
      "Apple has launched a new study app, together with OpenEvidence, a company that builds AI for doctors. You ask a health question, and the answer comes from trusted medical journals, written in simple words.",
      {h: "How it works"},
      {list: [
        "You can rate each answer and fill in a short survey every month.",
        "If you want, you can share data from your Apple Health app, like sleep, activity or heart rate, to get more personal answers.",
        "It can help you get ready for a doctor’s visit, and points you to a doctor if something sounds worrying."
      ]},
      {h: "Privacy"},
      "Apple says the data is made anonymous, is not used to train AI, and the questions and answers are deleted after 24 hours.",
      {h: "Who can join"},
      "Only in the US, aged 21 and over, with iPhone 15 or newer. Apple wants up to 200,000 people, for more than a year.",
      {h: "What it means for us"},
      "Everyone else rushed out health chatbots. Apple is doing it slowly, with a study first. When it comes to health, being careful matters."
    ],
    full_he: [
      "מיליוני אנשים כבר שואלים את ChatGPT וקלוד על הבריאות שלהם. OpenAI אומרת שאנשים שואלים אותה יותר מ 300 מיליון שאלות בריאות בכל שבוע. עכשיו אפל רוצה לבדוק איך עושים את זה נכון.",
      "אפל השיקה אפליקציית מחקר חדשה, יחד עם OpenEvidence, חברה שבונה AI לרופאים. שואלים שאלה על בריאות, והתשובה מגיעה מכתבי עת רפואיים אמינים, במילים פשוטות.",
      {h: "איך זה עובד"},
      {list: [
        "אפשר לדרג כל תשובה ולמלא סקר קצר כל חודש.",
        "אם רוצים, אפשר לשתף נתונים מאפליקציית הבריאות של אפל, כמו שינה, פעילות או דופק, כדי לקבל תשובות אישיות יותר.",
        "היא עוזרת להתכונן לביקור אצל רופא, ומפנה לרופא אם משהו נשמע מדאיג."
      ]},
      {h: "פרטיות"},
      "אפל אומרת שהמידע הופך לאנונימי, לא משמש לאימון AI, והשאלות והתשובות נמחקות אחרי 24 שעות.",
      {h: "מי יכול להצטרף"},
      "רק בארה\"ב, מגיל 21, עם אייפון 15 ומעלה. אפל רוצה עד 200,000 משתתפים, ליותר משנה.",
      {h: "מה זה אומר לנו"},
      "כולם מיהרו להוציא צ'טבוטים לבריאות. אפל עושה את זה לאט, קודם עם מחקר. כשמדובר בבריאות, זהירות זה דבר חשוב."
    ],
    links: [
      {url: "https://techcrunch.com/2026/11/15/apple-launches-new-app-to-study-how-people-use-ai-for-health/", en: "Read on TechCrunch", he: "לקריאה ב TechCrunch"}
    ]
  },
  {
    id: "google-search-hydrogen", date: "2026-11-12", tag: "Google",
    icon: "assets/apps/gemini.png",
    image: "assets/stories/google-hydrogen-search.jpg",
    title_en: "Google now understands you even when you ask in a mess",
    title_he: "גוגל מבין אותך עכשיו גם כשאתה שואל בבלגן",
    text_en: "You don’t need to write the “right” words in Google anymore. Just ask the way you think, with all the details, and even with spelling mistakes.",
    text_he: "כבר לא צריך לכתוב בגוגל את המילים \"הנכונות\". פשוט שואלים כמו שחושבים, עם כל הפרטים, ואפילו עם שגיאות כתיב.",
    do_en: ["Ask a long question with a few parts and get an answer to each part", "Type badly, it still understands you", "Get clearer answers with pictures, tables and comparisons"],
    do_he: ["לשאול שאלה ארוכה עם כמה חלקים ולקבל תשובה על כל חלק", "להקליד לא טוב, והוא עדיין מבין", "לקבל תשובות ברורות עם תמונות, טבלאות והשוואות"],
    full_en: [
      "You don’t need to write the “right” words in Google anymore. Just ask the way you think, with all the details, and even with spelling mistakes.",
      "On 12 November Google added its new AI model, Gemini 4 Hydrogen, to Google Search. Google calls it the biggest model upgrade to Search ever. It’s free, for everyone, all over the world.",
      {h: "What gets better"},
      {list: [
        "Long questions: you can ask a question with a few parts and very exact needs, and it answers each part.",
        "Typing mistakes: it understands you even when you type badly.",
        "More websites: it breaks your question into smaller searches, so it finds good sites you would have missed.",
        "Clearer answers: more pictures, tables and side by side comparisons."
      ]},
      {h: "How to try it"},
      "Open Google, tap AI Mode, and ask a long question, like you would ask a friend.",
      {h: "What it means for us"},
      "Searching is changing. Instead of guessing short keywords, you just talk to Google."
    ],
    full_he: [
      "כבר לא צריך לכתוב בגוגל את המילים \"הנכונות\". פשוט שואלים כמו שחושבים, עם כל הפרטים, ואפילו עם שגיאות כתיב.",
      "ב 12 בנובמבר הכניסה גוגל את מודל ה AI החדש שלה, Gemini 4 Hydrogen, לחיפוש של גוגל. גוגל קוראת לזה שדרוג המודל הגדול ביותר בחיפוש אי פעם. זה חינם, לכולם, בכל העולם.",
      {h: "מה משתפר"},
      {list: [
        "שאלות ארוכות: אפשר לשאול שאלה עם כמה חלקים ודרישות מדויקות, והוא עונה על כל חלק.",
        "שגיאות הקלדה: הוא מבין אותך גם כשאתה מקליד לא טוב.",
        "יותר אתרים: הוא מפרק את השאלה לכמה חיפושים קטנים, וכך מוצא אתרים טובים שהיית מפספס.",
        "תשובות ברורות יותר: יותר תמונות, טבלאות והשוואות זו לצד זו."
      ]},
      {h: "איך לנסות"},
      "פותחים את גוגל, לוחצים על AI Mode, ושואלים שאלה ארוכה, כמו ששואלים חבר.",
      {h: "מה זה אומר לנו"},
      "החיפוש משתנה. במקום לנחש מילות מפתח קצרות, פשוט מדברים עם גוגל."
    ],
    links: [
      {url: "https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/", en: "Read on the Google blog", he: "לקריאה בבלוג של גוגל"}
    ]
  },
  {
    id: "nvidia-without-huang", date: "2026-11-17", tag: "Nvidia",
    icon: "assets/tools/nvidia-chip.png",
    image: "assets/stories/nvidia-huang.jpg",
    title_en: "Nvidia without Jensen Huang: tonight we find out what happens next",
    title_he: "נבידיה בלי ג'נסן הואנג: הלילה נדע מה הלאה",
    text_en: "Jensen Huang, who started Nvidia 33 years ago, resigned last Thursday. Tonight Nvidia shares its results for the first time without him at the top.",
    text_he: "ג'נסן הואנג, שהקים את נבידיה לפני 33 שנה, התפטר ביום חמישי שעבר. הלילה נבידיה מפרסמת תוצאות בפעם הראשונה בלי הואנג בראשה.",
    do_en: ["Colette Kress, head of finance, is now the temporary CEO", "The board is looking for a permanent CEO", "The results come out tonight, at about 10pm UK time"],
    do_he: ["קולט קרס, סמנכ\"לית הכספים, היא עכשיו המנכ\"לית הזמנית", "הדירקטוריון מחפש מנכ\"ל קבוע", "התוצאות יוצאות הלילה, בערך ב 22:00 שעון בריטניה"],
    do_title_en: "What happened",
    do_title_he: "מה קרה",
    full_en: [
      "After a stormy week of news reports, Jensen Huang, who started Nvidia 33 years ago and ran it ever since, resigned last Thursday.",
      "Nvidia makes the chips that almost the whole AI world runs on. ChatGPT, Claude, Gemini, they all need Nvidia’s chips. So when its leader suddenly leaves, everyone pays attention.",
      {h: "What happened"},
      {list: [
        "Colette Kress, Nvidia’s head of finance, is now the temporary CEO.",
        "The board is looking for a permanent CEO, from inside or outside the company.",
        "Nvidia’s share price dropped after the news."
      ]},
      "Today Nvidia shares its results for the last three months, the first time without Huang at the top. The numbers come out tonight, at about 10pm UK time.",
      {h: "What it means for us"},
      "The whole AI industry depends on one company. Tonight we’ll see if Nvidia can keep going strong without the man who built it."
    ],
    full_he: [
      "אחרי שבוע סוער של דיווחים בתקשורת, ג'נסן הואנג, שהקים את נבידיה לפני 33 שנה וניהל אותה מאז, התפטר ביום חמישי שעבר.",
      "נבידיה מייצרת את השבבים שעליהם עובד כמעט כל עולם ה AI. ChatGPT, קלוד, Gemini, כולם צריכים את השבבים של נבידיה. אז כשהמנהיג שלה עוזב פתאום, כולם שמים לב.",
      {h: "מה קרה"},
      {list: [
        "קולט קרס, סמנכ\"לית הכספים של נבידיה, היא עכשיו המנכ\"לית הזמנית.",
        "הדירקטוריון מחפש מנכ\"ל קבוע, מתוך החברה או מבחוץ.",
        "מניית נבידיה ירדה אחרי החדשות."
      ]},
      "היום נבידיה מפרסמת את התוצאות של שלושת החודשים האחרונים, הפעם הראשונה בלי הואנג בראשה. המספרים יוצאים הלילה, בערך ב 22:00 שעון בריטניה.",
      {h: "מה זה אומר לנו"},
      "כל תעשיית ה AI תלויה בחברה אחת. הלילה נראה אם נבידיה יכולה להמשיך חזק בלי האיש שבנה אותה."
    ],
    links: []
  },
  {
    id: "google-ask-maps-uk", date: "2026-11-16", tag: "Google",
    icon: "assets/apps/gemini.png",
    image: "assets/stories/google-ask-maps.jpg",
    video: "5PPiXyAV-Ro",
    title_en: "The biggest Google Maps update in 10 years just arrived in the UK",
    title_he: "העדכון הכי גדול של גוגל מפות ב 10 שנים הגיע לבריטניה",
    text_en: "Ask Maps is a smart chat inside Google Maps, powered by Gemini. It answers questions a normal map never could, plans trips for you, and is now coming to the UK.",
    text_he: "Ask Maps הוא צ'אט חכם בתוך גוגל מפות, שעובד עם Gemini. הוא עונה על שאלות שמפה רגילה לא ידעה, מתכנן לך טיולים, ועכשיו הוא מגיע לבריטניה.",
    do_en: ["Ask anything about anywhere, like where to charge your phone right now", "Get a day by day trip plan with numbered pins on the map", "Search your saved places just by asking"],
    do_he: ["לשאול כל דבר על כל מקום, למשל איפה להטעין את הטלפון עכשיו", "לקבל תוכנית טיול יום אחרי יום עם סיכות ממוספרות על המפה", "לחפש במקומות השמורים שלך פשוט בשאלה"],
    full_en: [
      "Google calls Ask Maps the biggest update to Google Maps in over ten years. It’s a smart chat inside Maps, powered by Gemini, and it can answer questions a normal map never could. It started in the US, and now it’s coming to the UK and more than 30 countries across Europe.",
      "Ask Maps knows over 300 million places, with reviews from more than 500 million people, and it learns what you like.",
      {h: "What you can ask"},
      {list: [
        "Anything about anywhere: “Where can I charge my phone right now?” or “Find me a park near me that’s open tonight”.",
        "Plan a trip for you: ask for a day out or a three day trip, and you get a plan day by day, with numbered pins on the map and tips about weather and parking for each stop. You can share it with family, or send it to Google Docs on a computer.",
        "Search your saved places: no more scrolling through hundreds of saved spots. Just ask “Which of my saved places has room for five people in the next 30 minutes?”"
      ]},
      {h: "Good to know"},
      "It’s rolling out slowly, so if you don’t see it yet, update the Google Maps app and give it a few days. In the US it can even find appointments and call businesses for you, but that part is not in the UK yet.",
      {h: "What it means for us"},
      "Google Maps is turning from a map into an assistant. Next time you plan a day out, try asking Maps first."
    ],
    full_he: [
      "גוגל קוראת ל Ask Maps העדכון הכי גדול של גוגל מפות ביותר מעשר שנים. זה צ'אט חכם בתוך המפות, שעובד עם Gemini, והוא יודע לענות על שאלות שמפה רגילה אף פעם לא ידעה. הוא התחיל בארה\"ב, ועכשיו הוא מגיע לבריטניה וליותר מ 30 מדינות באירופה.",
      "Ask Maps מכיר יותר מ 300 מיליון מקומות, עם ביקורות מיותר מ 500 מיליון אנשים, והוא לומד מה אתה אוהב.",
      {h: "מה אפשר לשאול"},
      {list: [
        "כל דבר על כל מקום: \"איפה אפשר להטעין את הטלפון עכשיו?\" או \"תמצא לי פארק קרוב שפתוח הערב\".",
        "לתכנן טיול בשבילך: מבקשים יום טיול או טיול של שלושה ימים, ומקבלים תוכנית יום אחרי יום, עם סיכות ממוספרות על המפה וטיפים על מזג אוויר וחניה לכל עצירה. אפשר לשתף עם המשפחה, או להעביר ל Google Docs במחשב.",
        "לחפש במקומות השמורים שלך: בלי לגלול בין מאות מקומות. פשוט שואלים \"איזה מהמקומות ששמרתי יש בו מקום לחמישה אנשים בחצי השעה הקרובה?\""
      ]},
      {h: "חשוב לדעת"},
      "זה נפתח בהדרגה, אז אם עוד לא רואים את זה, כדאי לעדכן את אפליקציית גוגל מפות ולחכות כמה ימים. בארה\"ב הוא אפילו מוצא תורים ומתקשר לעסקים בשבילך, אבל החלק הזה עוד לא הגיע לבריטניה.",
      {h: "מה זה אומר לנו"},
      "גוגל מפות הופך ממפה לעוזר. בפעם הבאה שאתם מתכננים יום טיול, תנסו לשאול את המפות קודם."
    ],
    links: [
      {url: "https://blog.google/products-and-platforms/products/maps/ask-maps-holiday-travel-features-2026/", en: "Read on the Google blog", he: "לקריאה בבלוג של גוגל"},
      {url: "https://www.youtube.com/watch?v=5PPiXyAV-Ro", en: "Watch on YouTube", he: "לצפייה ביוטיוב"}
    ]
  },
  {
    id: "chatgpt-wallet", date: "2026-11-13", tag: "ChatGPT",
    icon: "assets/tools/chatgpt.png",
    image: "assets/stories/chatgpt-wallet-cover.jpg",
    title_en: "ChatGPT Wallet: your AI agent can now pay for you",
    title_he: "ChatGPT Wallet: הסוכן של OpenAI יכול עכשיו לשלם בשבילך",
    text_en: "You add your credit card once. Then your AI agent finds the product, fills the cart and gets the payment ready. You approve every purchase with your fingerprint or Face ID.",
    text_he: "מוסיפים כרטיס אשראי פעם אחת, והסוכן מוצא את המוצר, ממלא את העגלה ומכין את התשלום. כל קנייה מאשרים בטביעת אצבע או Face ID.",
    do_en: ["Let the agent find the product and fill the cart for you", "Check the items, price and card, then approve with your fingerprint or Face ID", "Keep your card’s points and rewards, and still dispute a charge if needed"],
    do_he: ["לתת לסוכן למצוא את המוצר ולמלא את העגלה", "לבדוק פריטים, סכום וכרטיס, ולאשר בטביעת אצבע או Face ID", "לשמור על הנקודות וההטבות של הכרטיס, ועדיין לבטל עסקה אם צריך"],
    full_en: [
      "On 13 November OpenAI announced ChatGPT Wallet. You add your credit card once. Then your AI agent finds the product, fills the cart and gets the payment ready.",
      "Before every purchase you check the items, the price and the card, and you approve with your fingerprint or Face ID. The agent and the shop never see your real card number.",
      {img: "assets/stories/chatgpt-wallet-approve.jpg", alt: "Approving a purchase with ChatGPT Wallet"},
      {h: "Good to know"},
      {list: [
        "You keep your card’s points and rewards, and you can still dispute a charge if something goes wrong.",
        "Credit cards only, not debit cards.",
        "It won’t work on sites that block AI agents, like Amazon."
      ]},
      {h: "Who can use it"},
      "Right now it’s only for Pro users in the US, with an American card. You need to be 18 or over, and it works through OpenAI’s “dots” agents. It was built with American Express, Mastercard and Visa.",
      {h: "What it means for us"},
      "Last week we saw that AI agents booked only 4 Uber rides. Now the big card companies are building the payment side. Agents that shop for us are coming, step by step."
    ],
    full_he: [
      "ב 13 בנובמבר הכריזה OpenAI על ChatGPT Wallet. מוסיפים כרטיס אשראי פעם אחת, והסוכן מוצא את המוצר, ממלא את העגלה ומכין את התשלום.",
      "לפני כל קנייה אתה בודק את הפריטים, הסכום והכרטיס, ומאשר בטביעת אצבע או Face ID. הסוכן והחנות לא רואים את מספר הכרטיס האמיתי.",
      {img: "assets/stories/chatgpt-wallet-approve.jpg", alt: "אישור קנייה ב ChatGPT Wallet"},
      {h: "חשוב לדעת"},
      {list: [
        "הנקודות וההטבות של הכרטיס נשארות, ואפשר עדיין לבטל עסקה אם משהו לא בסדר.",
        "רק כרטיסי אשראי, לא דביט.",
        "זה לא יעבוד באתרים שחוסמים סוכני AI, כמו אמזון."
      ]},
      {h: "למי זה זמין"},
      "כרגע זה רק למנויי Pro בארה\"ב, עם כרטיס אמריקאי. צריך להיות מגיל 18, וזה עובד דרך סוכני ה dots של OpenAI. נבנה בשיתוף American Express, Mastercard ו Visa.",
      {h: "מה זה אומר לנו"},
      "בשבוע שעבר ראינו שסוכני AI הזמינו רק 4 נסיעות באובר. עכשיו חברות האשראי הגדולות בונות את צד התשלום. סוכנים שקונים בשבילנו בדרך, צעד אחרי צעד."
    ],
    links: [
      {url: "https://thefederal.com/category/business/explained-chatgpt-wallet-open-ai-262931", en: "Read on The Federal", he: "לקריאה ב The Federal"}
    ]
  },
  {
    id: "chatgpt-claim-business", date: "2026-11-10", tag: "ChatGPT",
    icon: "assets/tools/chatgpt.png",
    image: "assets/stories/chatgpt-business-claim.jpg",
    video: "zwBsACDrgM4", video_he: "tJb5PKp5Epg", videoAt: 9,
    title_en: "ChatGPT now lets you claim your business, with a blue tick",
    title_he: "ChatGPT מאפשר עכשיו לרשום את העסק שלך, עם וי כחול",
    text_en: "More and more people ask ChatGPT which shop or service to choose. Now businesses can claim a verified profile inside ChatGPT, so it knows the real facts about them.",
    text_he: "יותר ויותר אנשים שואלים את ChatGPT איזו חנות או איזה שירות לבחור. עכשיו עסקים יכולים לתבוע פרופיל מאומת בתוך ChatGPT, כדי שהוא יידע את העובדות האמיתיות עליהם.",
    do_en: ["Claim your business and get a verified profile with a blue tick", "Keep your details, prices and stock up to date", "See how often ChatGPT mentions you and how many people click to your site"],
    do_he: ["לתבוע את העסק ולקבל פרופיל מאומת עם וי כחול", "לעדכן פרטים, מחירים ומה יש במלאי", "לראות כמה פעמים ChatGPT מזכיר אותך וכמה אנשים נכנסים לאתר שלך"],
    full_en: [
      "More and more people ask ChatGPT things like \"Which shop do you recommend?\" or \"Who is good for this job?\". So you want ChatGPT to know the real facts about your business, not guesses.",
      "On 10 November OpenAI launched a beta called Businesses in ChatGPT. ChatGPT has about 1.2 billion users every week, and now businesses can have their own place inside it.",
      {h: "What you can do"},
      {list: [
        "Claim your business: get a verified profile with a blue tick. It’s free.",
        "Keep it up to date: add your details, prices and what’s in stock.",
        "See the numbers: how often ChatGPT mentions you, and how many people click to your website.",
        "Business Agent: your own AI helper inside ChatGPT that answers customers’ questions about your products, using your own information."
      ]},
      {img: "assets/stories/chatgpt-business-insights.jpg", alt: "Business insights in ChatGPT: mentions, profile views and website clicks"},
      {h: "Good to know"},
      {list: [
        "Any business where ChatGPT is available can claim a profile, so UK businesses too.",
        "The Business Agent is only for online shops and online services in the US for now.",
        "Your business does not see people’s private chats.",
        "You can pay to promote your agent as an ad, but OpenAI says paying does not change how often ChatGPT recommends you."
      ]},
      {h: "How to claim your business"},
      "Go to the Business Hub in ChatGPT, using the link below, and claim your business. This video shows you how, step by step.",
      {h: "What it means for us"},
      "Just like you made sure your business shows up on Google, now it’s time to make sure ChatGPT knows the right things about you."
    ],
    full_he: [
      "יותר ויותר אנשים שואלים את ChatGPT שאלות כמו \"איזו חנות אתה ממליץ?\" או \"מי טוב לעבודה הזאת?\". אז אתה רוצה ש ChatGPT יידע את העובדות האמיתיות על העסק שלך, לא ניחושים.",
      "ב 10 בנובמבר השיקה OpenAI בטא בשם Businesses in ChatGPT. ל ChatGPT יש כ 1.2 מיליארד משתמשים בכל שבוע, ועכשיו לעסקים יש מקום משלהם בתוכו.",
      {h: "מה אפשר לעשות"},
      {list: [
        "לתבוע את העסק: לקבל פרופיל מאומת עם וי כחול. זה חינם.",
        "לעדכן: להוסיף פרטים, מחירים ומה יש במלאי.",
        "לראות מספרים: כמה פעמים ChatGPT מזכיר אותך, וכמה אנשים נכנסים לאתר שלך.",
        "Business Agent: עוזר AI משלך בתוך ChatGPT, שעונה ללקוחות על שאלות לגבי המוצרים שלך, לפי המידע שאתה נותן."
      ]},
      {img: "assets/stories/chatgpt-business-insights.jpg", alt: "נתוני העסק ב ChatGPT: אזכורים, צפיות בפרופיל וכניסות לאתר"},
      {h: "חשוב לדעת"},
      {list: [
        "כל עסק במקום שבו ChatGPT זמין יכול לתבוע פרופיל, כלומר גם עסקים בבריטניה.",
        "ה Business Agent בינתיים רק לחנויות ושירותים אונליין בארה\"ב.",
        "העסק לא רואה את השיחות הפרטיות של האנשים.",
        "אפשר לשלם כדי לקדם את הסוכן כפרסומת, אבל OpenAI אומרת שתשלום לא משנה כמה פעמים ChatGPT ממליץ עליך."
      ]},
      {h: "איך רושמים את העסק"},
      "נכנסים ל Business Hub של ChatGPT בקישור למטה, ותובעים את העסק. בסרטון הזה רואים צעד אחר צעד איך עושים את זה.",
      {h: "מה זה אומר לנו"},
      "בדיוק כמו שדאגת שהעסק שלך יופיע בגוגל, עכשיו הגיע הזמן לדאוג ש ChatGPT יידע עליך את הדברים הנכונים."
    ],
    links: [
      {url: "https://chatgpt.com/business-hub", en: "Claim your business on ChatGPT", he: "לרשום את העסק ב ChatGPT"},
      {url: "https://thenextweb.com/news/openai-businesses-in-chatgpt-business-agents", en: "Read on The Next Web", he: "לקריאה ב The Next Web"},
      {url: "https://openai.com/index/introducing-businesses-chatgpt/", en: "OpenAI announcement", he: "ההודעה של OpenAI"}
    ]
  },
  {
    id: "claude-new-work-tools", date: "2026-11-10", tag: "Claude",
    icon: "assets/tools/claude.png",
    image: "assets/stories/claude-new-tools.jpg",
    storyImage: false,
    video: "YewAJPawE7I", videoAt: 4,
    title_en: "Anthropic doesn’t sleep: four new tools in one day",
    title_he: "אנטרופיק לא ישנים בלילה: ארבעה כלים חדשים ביום אחד",
    text_en: "Just before going public on Wall Street, Anthropic launched a whole set of work tools: meetings, spreadsheets, whiteboards and business data, all inside Claude.",
    text_he: "רגע לפני הכניסה לבורסה, אנטרופיק השיקה סדרה שלמה של כלי עבודה: פגישות, טבלאות, לוחות רעיונות ונתונים עסקיים, הכל בתוך קלוד.",
    do_en: ["Dump a messy project plan into Whiteboards and get a clean plan to send a client", "Ask Sheets for a budget or tracker and send it on to monday.com, Airtable or Excel", "Let Claude join your Google Meet calls and give you notes and action items"],
    do_he: ["לזרוק אפיון פרויקט מבולגן ל Whiteboards ולקבל אפיון מסודר לשלוח ללקוח", "לבקש מ Sheets תקציב או טבלת מעקב ולהעביר ל monday.com, Airtable או אקסל", "לתת לקלוד להצטרף לפגישות Google Meet ולקבל סיכום ומשימות"],
    full_en: [
      "Anthropic is about to go public on Wall Street, with shares expected to start trading on 19 or 20 November. And yesterday they launched a whole set of work tools. This time it’s not just another chat. It’s meetings, spreadsheets, whiteboards and business data, all inside Claude.",
      {h: "What you can make in Claude now"},
      "In Claude’s Artifacts area you now see six types: Docs, Slides, Sheets (beta), Design, Data and Whiteboard (beta).",
      {img: "assets/stories/claude-new-tools-strip.png", alt: "Docs, Slides, Sheets, Design, Data and Whiteboard in Claude Artifacts"},
      {h: "1. Claude Whiteboards: a shared board for ideas"},
      "Throw in all your messy ideas, and Claude sorts them into a clear board with timelines and who does what. Your team can work on it together, then turn it into a document or a slide deck, or move it to Miro or Lucid.",
      "For automation people: when you plan a project for a client, just dump everything in (where Airtable sits, which webhook catches the data, how it all moves in Make), and Claude turns it into a clean plan you can send.",
      "Available: beta, all paid plans.",
      {h: "2. Claude Meetings: Claude joins your Google Meet calls"},
      "Claude joins the call as a visible participant and posts a message in the chat so everyone knows. It follows the talk, answers questions, pulls info from your connected apps, and at the end gives you notes and action items. Guests from outside your company need admin approval.",
      "Available: beta, Team and Enterprise only. For now it works only with Google Meet, not with Zoom.",
      {h: "3. Claude Sheets: smart spreadsheets"},
      "Ask for a budget or a tracker, and Claude builds the spreadsheet with you: tabs, formulas and formatting. You can export it to Excel or CSV, or keep working on it in Airtable, Asana, Smartsheet or monday.com.",
      "Available: beta, all paid plans.",
      {h: "4. Claude Data: business data and dashboards"},
      "This is the new name for Claude Dashboards, and it’s now fully launched. It connects to systems like Snowflake and Salesforce, so you can ask questions about your company’s numbers and get reports and dashboards, without writing code.",
      "Available: all paid plans.",
      {h: "What it means for us"},
      "Claude is turning into a full office suite, and it’s going straight at Microsoft and Google. They’re here to stay, and they’re only going to grow."
    ],
    full_he: [
      "אנטרופיק עומדת להיכנס לבורסה בוול סטריט, והמניות צפויות להתחיל להיסחר ב 19 או 20 בנובמבר. ואתמול הם השיקו סדרה שלמה של כלי עבודה. הפעם זה לא עוד צ'אט בצד, אלא פגישות, טבלאות, לוחות רעיונות ונתונים עסקיים, הכל בתוך קלוד.",
      {h: "מה אפשר ליצור בקלוד עכשיו"},
      "בקלוד, באזור ה Artifacts יש עכשיו שישה סוגים: Docs, Slides, Sheets (בטא), Design, Data ו Whiteboard (בטא).",
      {img: "assets/stories/claude-new-tools-strip.png", alt: "Docs, Slides, Sheets, Design, Data ו Whiteboard ב Artifacts של קלוד"},
      {h: "1. Claude Whiteboards: לוח משותף לרעיונות"},
      "זורקים את כל הרעיונות המבולגנים, וקלוד מסדר אותם בלוח ברור עם לוחות זמנים ומי אחראי על מה. הצוות יכול לעבוד עליו ביחד, ובסוף להפוך אותו למסמך או מצגת, או להעביר ל Miro או Lucid.",
      "לאנשי אוטומציה: כשאתה בונה אפיון פרויקט ללקוח, פשוט זורק הכל (איפה יושב Airtable, איזה Webhook תופס את המידע, ואיך הכל זז ב Make), וקלוד בונה לך אפיון מסודר שאפשר לשלוח.",
      "זמינות: בטא, כל המסלולים בתשלום.",
      {h: "2. Claude Meetings: קלוד מצטרף לפגישות Google Meet"},
      "קלוד נכנס לשיחה כמשתתף גלוי ומודיע על עצמו בצ'אט, כדי שכולם יידעו. הוא עוקב אחרי השיחה, עונה על שאלות, שולף מידע מהמערכות המחוברות, ובסוף נותן סיכום ומשימות להמשך. אורחים מחוץ לחברה דורשים אישור של מנהל.",
      "זמינות: בטא, רק Team ו Enterprise. בשלב הזה זה עובד רק דרך Google Meet, לא דרך Zoom.",
      {h: "3. Claude Sheets: טבלאות חכמות"},
      "מבקשים תקציב או טבלת מעקב, וקלוד בונה איתך את הגיליון: טאבים, נוסחאות ועיצוב. אפשר לייצא לאקסל או CSV, או להמשיך לעבוד עליו ב Airtable, Asana, Smartsheet או monday.com.",
      "זמינות: בטא, כל המסלולים בתשלום.",
      {h: "4. Claude Data: נתונים עסקיים ודשבורדים"},
      "זה השם החדש של Claude Dashboards, ועכשיו הוא הושק באופן מלא. הוא מתחבר למערכות כמו Snowflake ו Salesforce, כך שאפשר לשאול שאלות על המספרים של החברה ולקבל דוחות ודשבורדים, בלי לכתוב קוד.",
      "זמינות: כל המסלולים בתשלום.",
      {h: "מה זה אומר לנו"},
      "קלוד הופך לחבילת משרד מלאה, והוא הולך ישר מול מיקרוסופט וגוגל. הם כאן כדי להישאר, ורק לגדול."
    ],
    links: [
      {url: "https://claude.com/resources/articles/sheets-whiteboards-data", en: "Read on Claude.com", he: "לקריאה ב Claude.com"},
      {url: "https://www.unite.ai/anthropic-announces-claude-meetings-with-a-google-meet-whiteboard-beta/", en: "Read on Unite.AI", he: "לקריאה ב Unite.AI"}
    ]
  },
  {
    id: "claude-personal-finance", date: "2026-11-05", tag: "Claude",
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
  },
  {
    id: "prompt-motion", date: "2026-11-10", tag: "Claude",
    icon: "assets/tools/claude.png",
    image: "assets/stories/prompt-motion.jpg",
    title_en: "Anyone can now make animations that took video editors hours",
    title_he: "כל אחד יכול היום ליצור אנימציה שלקחה לעורך וידאו שעות",
    text_en: "Claude can make short animated videos from code. Prompt Motion is a free site with hundreds of them, each with the exact prompt that made it.",
    text_he: "קלוד יודע ליצור סרטוני אנימציה קצרים מקוד. Prompt Motion הוא אתר חינמי עם מאות כאלה, וליד כל אחד הפרומפט המדויק שיצר אותו.",
    do_en: ["Find a video you like and copy its prompt", "Ask Claude to change the colours, text and style for your business", "Save hours of trying and fixing"],
    do_he: ["למצוא סרטון שאוהבים ולהעתיק את הפרומפט", "לבקש מקלוד להתאים צבעים, ניסוח וסגנון לעסק", "לחסוך שעות של ניסיונות ותיקונים"],
    full_en: [
      "Claude can make beautiful animations and short videos. It does not film anything. It writes code that draws every frame, and the computer turns it into a video. This works great for ads, product videos and explainers.",
      {h: "A video I made with Claude"},
      {embed: "https://drive.google.com/file/d/1KjQFpSdjX_5DqUHWQHTzMlxyKnawekm5/preview"},
      "But there is a problem. When you start an animation from nothing, it can take hours. You ask, you look, you change, you ask again. Every change costs time and tokens.",
      "So I found a very useful website: Prompt Motion. It’s free, and it has hundreds of short videos made with Claude, with the exact prompt next to each one.",
      {h: "How to use it"},
      {list: ["Look through the videos and find one you like", "Copy its prompt", "Take it to Claude and ask it to change the colours, the text and the style to fit your business"]},
      "You start from something that already works, so you skip most of the trying and fixing.",
      {h: "Good to know"},
      "The videos on the site were made with Claude Opus 5.5. If you use the free plan or a different AI model, your result may look different.",
      {h: "What it means for us"},
      "You see the result before you start. This saves a lot of time and a lot of tokens."
    ],
    full_he: [
      "קלוד יודע לעשות אנימציות וסרטונים קצרים יפים מאוד. הוא לא מצלם כלום, אלא כותב קוד שמצייר כל פריים, והמחשב הופך את זה לסרטון. זה עובד מצוין לפרסומות, סרטוני מוצר והסברים.",
      {h: "סרטון שעשיתי עם קלוד"},
      {embed: "https://drive.google.com/file/d/1KjQFpSdjX_5DqUHWQHTzMlxyKnawekm5/preview"},
      "אבל יש בעיה. כשמתחילים אנימציה מאפס, זה יכול לקחת שעות. מבקשים, מסתכלים, משנים, מבקשים שוב, וכל שינוי עולה זמן וטוקנים.",
      "לכן מצאתי אתר מאוד שימושי: Prompt Motion. האתר חינמי, ויש בו מאות סרטונים קצרים שנעשו עם קלוד, וליד כל אחד מופיע בדיוק הפרומפט שיצר אותו.",
      {h: "איך משתמשים"},
      {list: ["עוברים על הסרטונים ומוצאים אחד שאוהבים", "מעתיקים את הפרומפט", "לוקחים אותו לקלוד ומבקשים להתאים את הצבעים, הניסוח והסגנון לעסק שלך"]},
      "מתחילים ממשהו שכבר עובד, וככה מדלגים על רוב הניסיונות והתיקונים.",
      {h: "חשוב לדעת"},
      "הסרטונים באתר נעשו עם Claude Opus 5.5. מי שמשתמש בגרסה החינמית או במודל אחר, יכול לקבל תוצאה שונה.",
      {h: "מה זה אומר לנו"},
      "רואים את התוצאה עוד לפני שמתחילים. זה חוסך הרבה מאוד זמן והרבה מאוד טוקנים."
    ],
    links: [
      {url: "https://prompt-motion.com/", en: "Prompt Motion", he: "Prompt Motion"},
      {url: "https://drive.google.com/file/d/1KjQFpSdjX_5DqUHWQHTzMlxyKnawekm5/view", en: "My video on Google Drive", he: "הסרטון שלי ב Google Drive"}
    ]
  },
  {
    id: "binance-hack", date: "2026-11-03", tag: "Security",
    image: "assets/stories/binance-hack.jpg",
    title_en: "$6.3 billion stolen from Binance, and it started with a Google search",
    title_he: "6.3 מיליארד דולר נגנבו מבינאנס, והכל התחיל בחיפוש בגוגל",
    text_en: "Hackers stole about $6.34 billion from Binance. It did not start with clever hacking, but with a fake download and a fake job interview.",
    text_he: "האקרים גנבו כ 6.34 מיליארד דולר מבינאנס. זה לא התחיל בפריצה מתוחכמת, אלא בהורדה מזויפת ובראיון עבודה מזויף.",
    do_en: ["Only download apps from the official website, not from a Google result", "If a \"job interview\" asks you to download something, stop"],
    do_he: ["להוריד אפליקציות רק מהאתר הרשמי, לא מתוצאה בגוגל", "אם \"ראיון עבודה\" מבקש להוריד משהו, לעצור"],
    full_en: [
      "The biggest crypto theft ever did not start with clever hacking. It started with a download and a fake job interview.",
      "On 29 October, hackers stole about $6.34 billion from Binance, the biggest crypto exchange in the world. The FBI says North Korea was behind it. On 3 November Binance shared how it happened:",
      {list: [
        "June: An engineer searched Google for a popular AI coding tool and downloaded a fake version. Binance caught it and changed his computer, but the hackers already knew who was on his team.",
        "September: Another engineer got a job offer on a real job website. After two video interviews, he was asked to download a \"test task\" to his work computer. It had a hidden virus inside.",
        "20 October: From that computer, the hackers used Binance’s own internal AI tool to get into two more engineers’ computers. On one of them they found a key that could control the money system.",
        "29 October: They used that key to send out the money. One wallet was emptied in under four minutes."
      ]},
      "The good news: Binance says it will cover the loss itself, not its customers. About $2.85 billion has already been frozen or stopped.",
      {h: "What it means for us"},
      "You don’t need to be a big company to learn from this. Only download apps from the official website, not from a Google result. And if a \"job interview\" asks you to download something, stop."
    ],
    full_he: [
      "הגניבה הגדולה ביותר בעולם הקריפטו לא התחילה בפריצה מתוחכמת. היא התחילה בהורדה של קובץ ובראיון עבודה מזויף.",
      "ב 29 באוקטובר האקרים גנבו כ 6.34 מיליארד דולר מבינאנס, בורסת הקריפטו הגדולה בעולם. לפי ה FBI, צפון קוריאה עומדת מאחורי זה. ב 3 בנובמבר בינאנס פרסמה איך זה קרה:",
      {list: [
        "יוני: מהנדס חיפש בגוגל כלי AI פופולרי לכתיבת קוד, והוריד גרסה מזויפת. בינאנס תפסה את זה והחליפה לו את המחשב, אבל ההאקרים כבר ידעו מי נמצא בצוות שלו.",
        "ספטמבר: מהנדס אחר קיבל הצעת עבודה באתר דרושים אמיתי. אחרי שני ראיונות בווידאו, ביקשו ממנו להוריד \"משימת מבחן\" למחשב העבודה שלו. בתוכה הסתתר וירוס.",
        "20 באוקטובר: מהמחשב הזה ההאקרים השתמשו בכלי ה AI הפנימי של בינאנס עצמה, ונכנסו למחשבים של עוד שני מהנדסים. באחד מהם הם מצאו מפתח שיכול לשלוט במערכת הכספים.",
        "29 באוקטובר: הם השתמשו במפתח כדי להוציא את הכסף. ארנק אחד התרוקן בפחות מארבע דקות."
      ]},
      "החדשות הטובות: בינאנס אומרת שהיא תכסה את ההפסד בעצמה, ולא הלקוחות שלה. כ 2.85 מיליארד דולר כבר הוקפאו או נעצרו.",
      {h: "מה זה אומר לנו"},
      "לא צריך להיות חברה גדולה כדי ללמוד מזה. תורידו אפליקציות רק מהאתר הרשמי, לא מתוצאה בגוגל. ואם \"ראיון עבודה\" מבקש מכם להוריד משהו, תעצרו."
    ],
    links: [
      {url: "https://www.gncrypto.news/news/binance-traces-6-34b-hack-six-month-cyber-campaign/", en: "How the hack happened", he: "איך הפריצה קרתה"},
      {url: "https://www.theblock.co/news/business/2026-10-30-binance-hack-largest-crypto-hack-north-korea-432225", en: "Full timeline", he: "ציר הזמן המלא"}
    ]
  },
  {
    id: "uber-ai-agents", date: "2026-11-04", tag: "AI agents",
    image: "assets/stories/uber-agents.jpg",
    title_en: "Uber: AI agents booked only 4 rides out of 320 million",
    title_he: "אובר: סוכני AI הזמינו רק 4 נסיעות מתוך 320 מיליון",
    text_en: "Everyone talks about AI agents that will do everything for us. Uber just shared the real numbers, and they are tiny.",
    text_he: "כולם מדברים על סוכני AI שיעשו הכל בשבילנו. אובר פרסמה עכשיו את המספרים האמיתיים, והם זעירים.",
    do_en: ["Use AI agents for long, boring jobs", "For quick things you already do in a few taps, keep using the app"],
    do_he: ["להשתמש בסוכני AI לעבודות ארוכות ומשעממות", "לדברים מהירים של כמה לחיצות, להמשיך עם האפליקציה"],
    full_en: [
      "Everyone talks about AI agents that will do everything for us. Uber just shared the real numbers.",
      "In its busiest week of October, Uber and Uber Eats handled about 320 million rides and orders. How many came from AI agents?",
      {list: ["Rides: 4", "Food orders: about 500"]},
      "DoorDash had the same story: only a few hundred orders from AI agents, out of about a billion in three months.",
      "Why so few? Uber’s CEO explained: booking a ride in the app takes about 50 seconds, and ordering your usual food takes about 90 seconds. An AI agent does not really save time here.",
      "Uber still believes agents will grow, and says every big AI company is talking to them.",
      {h: "What it means for us"},
      "AI agents are great for long, boring jobs. For quick things you already do in a few taps, the app still wins."
    ],
    full_he: [
      "כולם מדברים על סוכני AI שיעשו הכל בשבילנו. אובר פרסמה עכשיו את המספרים האמיתיים.",
      "בשבוע העמוס ביותר שלה באוקטובר, אובר ו Uber Eats טיפלו בכ 320 מיליון נסיעות והזמנות. כמה מהן הגיעו מסוכני AI?",
      {list: ["נסיעות: 4", "הזמנות אוכל: כ 500"]},
      "גם ב DoorDash אותו סיפור: רק כמה מאות הזמנות מסוכני AI, מתוך כמיליארד בשלושה חודשים.",
      "למה כל כך מעט? המנכ\"ל של אובר הסביר: להזמין נסיעה באפליקציה לוקח כ 50 שניות, ולהזמין את האוכל הקבוע כ 90 שניות. סוכן AI לא באמת חוסך כאן זמן.",
      "אובר עדיין מאמינה שהסוכנים יגדלו, ואומרת שכל חברות ה AI הגדולות מדברות איתה.",
      {h: "מה זה אומר לנו"},
      "סוכני AI מצוינים לעבודות ארוכות ומשעממות. לדברים מהירים שאתה כבר עושה בכמה לחיצות, האפליקציה עדיין מנצחת."
    ],
    links: [
      {url: "https://tech.yahoo.com/transportation/articles/almost-no-one-uses-ai-215601578.html", en: "TechCrunch via Yahoo", he: "TechCrunch דרך Yahoo"}
    ]
  },
  {
    id: "claude-fable-5-2", date: "2026-11-09", tag: "Claude",
    icon: "assets/tools/claude.png",
    image: "assets/stories/fable-5-2.jpg",
    video: "FMbXUxn_nBw", videoAt: 1,
    title_en: "Anthropic launches Claude Fable 5.2: strong, but not for every job",
    title_he: "Anthropic משיקה את Claude Fable 5.2: חזק, אבל לא לכל משימה",
    text_en: "Anthropic released Claude Fable 5.2, its most powerful public AI model. It can build a whole game from one prompt, but for everyday work Opus 5.5 is often just as good.",
    text_he: "Anthropic השיקה את Claude Fable 5.2, מודל ה־AI הכי חזק שלה שפתוח לציבור. הוא יכול לבנות משחק שלם מפרומפט אחד, אבל לעבודה היומיומית Opus 5.5 לרוב טוב באותה מידה.",
    do_en: ["Use Fable for big jobs: a project plan, a full website, a game or a design", "Use Opus 5.5 for everyday work, to save your limit", "On Pro? Try it at no extra cost until 16 November"],
    do_he: ["להשתמש ב־Fable לעבודות גדולות: תכנון פרויקט, אתר שלם, משחק או עיצוב", "להשתמש ב־Opus 5.5 לעבודה היומיומית, כדי לשמור על המכסה", "במנוי Pro? לנסות בלי תוספת תשלום עד 16 בנובמבר"],
    full_en: [
      "On 9 November, Anthropic released Claude Fable 5.2, its most powerful public AI model. It is for paid users only (Pro, Max, Ultra, Team and Enterprise).",
      {h: "What users are showing"},
      {list: [
        "A full game from one prompt. An Anthropic engineer gave it one short prompt. It worked alone for about 8 hours and built a 3D shooting game, with its own models, sounds and textures. The cost was about $550 in API prices.",
        "It started a business. Ethan Mollick, a professor at Wharton, asked it to start a business that makes $20,000 a year. It looked at 22 ideas and chose one.",
        "It hacked a keyboard. It turned a small USB keyboard into a game console with six games. There were no instructions online. It read the code and worked it out by itself.",
        "Big maths. Anthropic says 1,000 Fable agents put the proof of Fermat’s Last Theorem into a form a computer can check, in 30 hours."
      ]},
      {h: "But it is not for everything"},
      {list: [
        "For normal coding, many users see little difference from Opus 5.5. One tester ran 30 coding tasks. Both models solved 26.",
        "Where it is much better: planning, design, drawing and 3D.",
        "It uses your limit fast. Fable can use only up to half of your weekly limit."
      ]},
      {h: "What can you do with it?"},
      {list: [
        "On the Pro plan? You can try it at no extra cost until 16 November.",
        "Use Fable for big jobs: planning a project, a full website, a game or a design.",
        "Use Opus 5.5 for everyday work, to save your limit.",
        "Tip: tell it clearly what “finished” looks like."
      ]}
    ],
    full_he: [
      "ב־9 בנובמבר Anthropic השיקה את Claude Fable 5.2, מודל ה־AI הכי חזק שלה שפתוח לציבור. הוא זמין רק למנויים בתשלום (Pro, Max, Ultra, Team ו־Enterprise).",
      {h: "מה משתמשים מראים"},
      {list: [
        "משחק שלם מפרומפט אחד. מהנדס ב־Anthropic נתן לו פרומפט קצר אחד. המודל עבד לבד בערך 8 שעות ובנה משחק יריות בתלת־ממד, כולל המודלים, הצלילים והטקסטורות. העלות הייתה בערך 550 דולר לפי מחירי API.",
        "הוא הקים עסק. הפרופסור Ethan Mollick מוורטון ביקש ממנו להקים עסק שיכניס 20,000 דולר בשנה. המודל בדק 22 רעיונות ובחר אחד.",
        "הוא \"פרץ\" מקלדת. הוא הפך מקלדת USB קטנה לקונסולת משחקים עם שישה משחקים. לא היו הוראות ברשת, הוא קרא את הקוד והבין לבד.",
        "מתמטיקה גדולה. לפי Anthropic, 1,000 סוכני Fable העבירו את ההוכחה של המשפט האחרון של פרמה לצורה שמחשב יכול לבדוק, תוך 30 שעות."
      ]},
      {h: "אבל הוא לא לכל דבר"},
      {list: [
        "בקוד רגיל, הרבה משתמשים כמעט לא רואים הבדל מול Opus 5.5. בודק אחד הריץ 30 משימות קוד, ושני המודלים פתרו 26.",
        "איפה הוא באמת טוב יותר: תכנון, עיצוב, ציור ותלת־ממד.",
        "הוא גומר את המכסה מהר. Fable יכול לנצל לכל היותר חצי מהמכסה השבועית."
      ]},
      {h: "מה אפשר לעשות עם זה?"},
      {list: [
        "במנוי Pro? אפשר לנסות אותו בלי תוספת תשלום עד 16 בנובמבר.",
        "להשתמש ב־Fable לעבודות גדולות: תכנון פרויקט, אתר שלם, משחק או עיצוב.",
        "להשתמש ב־Opus 5.5 לעבודה היומיומית, כדי לשמור על המכסה.",
        "טיפ: להגיד לו בבירור איך נראית העבודה כשהיא גמורה."
      ]}
    ],
    links: [
      {url: "https://www.anthropic.com/claude-fable-and-mythos-5-2", en: "anthropic.com", he: "anthropic.com"},
      {url: "https://www.youtube.com/watch?v=FMbXUxn_nBw", en: "Watch the video", he: "צפו בסרטון"}
    ]
  }
];
