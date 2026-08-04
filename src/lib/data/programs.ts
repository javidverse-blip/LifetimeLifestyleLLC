import type { Program } from "@/lib/types";

/**
 * Mock program data — represents the future `Program` table in the MySQL
 * database. Swap the contents of `lib/programs.ts` for a Prisma-backed
 * repository later; the consumer contract (Program[]) stays identical.
 *
 * Stan Store remains the checkout + delivery layer, so every program carries
 * a `stanStoreUrl` that redirects visitors for the actual purchase.
 */
export const programs: Program[] = [
  {
    id: "prg_5day_water_reset",
    title: "The 5-Day Water Reset",
    slug: "5-day-water-reset",
    category: "challenges",
    tagline: "Test the water first — before you assume the worst.",
    thumbnail: "/images/programs/5day-water-reset.jpg",
    bannerImage: "/images/programs/5day-water-reset-hero.jpg",
    shortDescription:
      "Before you spend thousands on tests, supplements, or another “solution,” give your body the simplest reset of all — five days of structured, intentional hydration.",
    description:
      "You might not be sick. You might be dehydrated.\n\nBefore you spend thousands on tests, supplements, or another “solution”… what if your body simply needs water? Chronic dehydration can show up as fatigue, brain fog, joint pain, headaches, cravings, poor sleep, stubborn inflammation, and low energy.\n\nThe 5-Day Water Reset is designed to help you test hydration first. If dehydration is part of the problem, you could begin to notice changes in as little as 4–5 days. Not weeks. Not months. Certainly not years.\n\nNo guessing. No extremes. No complicated protocols. Just one foundational principle, practiced consistently for five days.",
    duration: "5 Days",
    price: 27,
    compareAtPrice: 37,
    currency: "USD",
    featured: false,
    isNew: false,
    comingSoon: false,
    stanStoreUrl: "https://stan.store/Gnsing/p/the-5day-water-reset",
    ctaLabel: "Enroll Now",
    keywords: [
      "water",
      "hydration",
      "detox",
      "dehydration",
      "reset",
      "energy",
      "headache",
      "fatigue",
      "challenge",
      "5 day",
    ],
    about: [
      "Most women wake up tired, foggy, inflamed, or constantly drained — and reach for another supplement, another test, another expensive “fix.” But what if the answer was far simpler than we've been told?",
      "The 5-Day Water Reset strips everything back to one foundational principle: consistent, structured hydration. Over five days you'll learn exactly how much water your body may actually need, how to structure your intake throughout the day, and how to track real changes in your energy, digestion, focus, and sleep.",
      "This is a simple first step for anyone ready to commit to real change — without extremes, without complicated protocols, and without breaking the bank.",
    ],
    whoItIsFor: [
      "Women who feel tired, foggy, inflamed, or constantly drained",
      "Anyone who wants a simple, affordable first step toward better health",
      "Those tired of wasting money on temporary fixes and quick-fix products",
      "Women who want measurable results in as little as five days",
      "Anyone ready to commit to real, lasting change",
    ],
    learnings: [
      "How much water your body may actually need each day",
      "How to structure hydration throughout the day for steady energy",
      "Common hydration mistakes that may be slowing your progress",
      "What detox symptoms can mean — and how to handle them",
      "How to track real changes in energy, digestion, focus, and sleep",
    ],
    benefits: [
      "A structured, intentional 5-day plan — no guessing required",
      "Reduce brain fog, fatigue, cravings, and headaches",
      "A zero-risk first step before expensive tests or programs",
      "Supportive guidance that fits into your real life",
      "Free invitation to the From Feeble to Fabulous Academy community",
    ],
    outcomes: [
      "Noticeable changes in energy within 4–5 days",
      "Clearer thinking and steadier focus",
      "Improved sleep quality",
      "Fewer cravings and better digestion",
      "Confidence that you can build habits that actually stick",
    ],
    whatsIncluded: [
      "5-day structured hydration plan",
      "Daily hydration tracking guide",
      "Simple how-to instructions",
      "Common mistakes to avoid",
      "Detox symptom guidance",
      "Bonus: invitation to the From Feeble to Fabulous Academy",
    ],
    testimonials: [
      {
        quote:
          "I thought I needed to spend hundreds on another program. Five days of proper water changed my energy more than anything I'd tried in years.",
        name: "Sarah M.",
        detail: "5-Day Water Reset participant",
      },
      {
        quote:
          "Simple, but not simplistic. I stopped guessing and started tracking — and the brain fog lifted.",
        name: "Danielle R.",
        detail: "5-Day Water Reset participant",
      },
    ],
    faqs: [
      {
        question: "Is the 5-Day Water Reset a medical treatment?",
        answer:
          "No. The 5-Day Water Reset is an educational wellness program, not medical advice. If you're managing a health condition or taking medication, please check with your healthcare provider first.",
      },
      {
        question: "Do I need any special equipment or supplements?",
        answer:
          "None at all. Everything you need is water and a willingness to follow a simple daily structure. There are no products to buy.",
      },
      {
        question: "When will I get my downloads?",
        answer:
          "Your 5-Day Water Reset materials are delivered digitally to your inbox right after purchase, so you can start the very same day.",
      },
      {
        question: "How much time does it take each day?",
        answer:
          "The plan is designed to fit into a busy schedule. It takes just a few minutes a day to follow the structure and track your progress.",
      },
    ],
  },
  {
    id: "prg_3day_sugar_reset",
    title: "The 3-Day Sugar Reset",
    slug: "3-day-sugar-reset",
    category: "challenges",
    tagline: "Break the sugar cycle — with support, not shame.",
    thumbnail: "/images/programs/3day-sugar-reset.jpg",
    bannerImage: "/images/programs/3day-sugar-reset-hero.jpg",
    shortDescription:
      "A simple 3-day reset and a supportive community that helps you break the sugar cycle — without the guilt, the hiding, or the judgment.",
    description:
      "You know sugar is hurting you… but somehow you keep going back. The exhaustion. The inflammation. The cravings. The weight gain. The brain fog. The lack of control.\n\nAnd deep down, you know your body wasn't designed to live this way. Yet almost as soon as you reach for the very thing that's wearing you down, the guilt hits. You tell yourself “this is my last time.” You pray about it. You mean it. And then you find yourself right back in the same place.\n\nWhat changed everything was finding a safe group of people — a place where nobody had to pretend to be perfect. “Two are better than one… for if they fall, the one will lift up his fellow.” — Ecclesiastes 4:9–10 KJV.\n\nBecause community is the cure. That's why when you purchase the 3-Day Sugar Reset, you'll also receive the link to the From Feeble to Fabulous Academy — a place for real people, real support, real accountability, and real encouragement.",
    duration: "3 Days",
    price: 17.99,
    currency: "USD",
    featured: false,
    isNew: false,
    comingSoon: false,
    stanStoreUrl: "https://stan.store/Gnsing/p/the-3-day-sugar-reset",
    ctaLabel: "Enroll Now",
    keywords: [
      "sugar",
      "cravings",
      "reset",
      "detox",
      "sugar addiction",
      "inflammation",
      "weight",
      "brain fog",
      "community",
      "3 day",
    ],
    about: [
      "One of the hardest parts about sugar is knowing it's hurting you — and still struggling to stop. Low energy, mood swings, weight struggles, constant hunger, lack of motivation, feeling overwhelmed… For many of us, sugar became the thing keeping the whole cycle going.",
      "For years the creator tried to fight it alone — hiding it, feeling embarrassed, starting over, quitting, and repeating the cycle. Judgment never helped anyone heal; it only made people hide.",
      "The 3-Day Sugar Reset is a simple three-day plan paired with a supportive, faith-based community where you can be honest without shame. This isn't about perfection. It's about learning how to get back up — and stay on track longer each time.",
    ],
    whoItIsFor: [
      "Women stuck in the sugar cycle — start, quit, repeat",
      "Anyone tired of guilt and self-judgment around food",
      "Those dealing with cravings, brain fog, and low energy",
      "Women who want real support and accountability, not lectures",
      "Anyone ready to build patterns that actually last",
    ],
    learnings: [
      "A simple 3-day structure to interrupt the sugar cycle",
      "How to respond to cravings without shame",
      "Why community and accountability change everything",
      "How to get back up and stay on track longer each time",
      "Practical patterns you can keep after the 3 days",
    ],
    benefits: [
      "A judgment-free, shame-free approach to change",
      "Immediate access to a supportive faith-based community",
      "A simple, doable plan that fits your real life",
      "Less hiding, less overwhelm, more honest encouragement",
      "A foundation for patterns that actually last",
    ],
    outcomes: [
      "Interrupted sugar cravings and reduced inflammation",
      "Steadier energy and clearer thinking",
      "Freedom from the guilt cycle",
      "A safe place to share and be encouraged",
      "Confidence to keep going one step at a time",
    ],
    whatsIncluded: [
      "3-day sugar reset plan",
      "Craving-busting strategies",
      "Guided daily encouragement",
      "Community support and accountability",
      "Link to the From Feeble to Fabulous Academy",
      "Practical patterns to continue after the reset",
    ],
    testimonials: [
      {
        quote:
          "For the first time I didn't feel judged. The community kept me going when my willpower ran out.",
        name: "Tamika W.",
        detail: "3-Day Sugar Reset participant",
      },
      {
        quote:
          "Three days was just enough to show me I could actually do this. The cravings got quieter, and so did the guilt.",
        name: "Alana J.",
        detail: "3-Day Sugar Reset participant",
      },
    ],
    faqs: [
      {
        question: "Will I have to give up sugar forever?",
        answer:
          "No. The 3-Day Reset is designed to interrupt the cycle and rebuild your confidence. The goal is learning how to get back up and stay on track longer — not perfection.",
      },
      {
        question: "Do I need to be religious to join the community?",
        answer:
          "The community is faith-based, but it's first and foremost a safe, encouraging place. Everyone is welcome to receive the support — no one has to pretend to be perfect.",
      },
      {
        question: "What if I slip up during the 3 days?",
        answer:
          "That's exactly what the community is for. You don't start over from zero — you get back up with help and keep going. This is about progress, not perfection.",
      },
      {
        question: "How do I get access after purchase?",
        answer:
          "Your reset materials are delivered digitally to your inbox immediately after purchase, along with your link to the community.",
      },
    ],
  },
  {
    id: "prg_hidden_in_plain_sight",
    title: "Hidden in Plain Sight — Discovery Guide",
    slug: "hidden-in-plain-sight-discovery-guide",
    category: "free-resources",
    tagline: "What if the answers have been there all along?",
    thumbnail: "/images/programs/hidden-in-plain-sight.jpg",
    bannerImage: "/images/programs/hidden-in-plain-sight.jpg",
    shortDescription:
      "A free discovery guide and companion audio teaching that invite you to explore biblical patterns most readers overlook — including clues about your health.",
    description:
      "What if some of the most important clues in Scripture have been there all along?\n\nHidden in Plain Sight is a discovery experience designed to help you explore biblical patterns that many readers overlook. This is a Discovery Guide and companion audio teaching — a journey through familiar passages with fresh eyes and a renewed sense of curiosity, discovering even important issues concerning your health.\n\nThis is not about being told what to believe. It is an invitation to investigate. Read the Scriptures. Ask the questions. Follow the clues. Then decide for yourself.",
    duration: "Self-paced",
    price: 0,
    currency: "USD",
    featured: false,
    isNew: false,
    comingSoon: false,
    stanStoreUrl:
      "https://stan.store/Gnsing/p/free-7day-discovery-guide-hidden-in-plain-sight",
    ctaLabel: "Free Download",
    keywords: [
      "free",
      "bible",
      "scripture",
      "discovery",
      "guide",
      "audio",
      "biblical",
      "patterns",
      "health",
      "download",
    ],
    about: [
      "Sometimes the greatest discoveries have been hidden in plain sight. This free resource invites you to slow down and look again at familiar passages of Scripture — this time with fresh eyes.",
      "Hidden in Plain Sight pairs a written Discovery Guide with a companion audio teaching and guided reflection questions, walking you through biblical patterns that connect to even the most important issues concerning your health.",
      "It also offers an introduction to the discoveries that inspired the upcoming book, God Invented Intermittent Fasting.",
    ],
    whoItIsFor: [
      "Women curious about what Scripture really teaches about health",
      "Anyone who wants to study the Bible more deeply, for themselves",
      "Readers who love discovering patterns and connections",
      "Those who appreciate audio teaching alongside written guides",
      "Anyone who wants a meaningful free starting point",
    ],
    learnings: [
      "Biblical patterns many readers pass right over",
      "Guided reflection questions for deeper study",
      "Passages to explore for yourself",
      "An introduction to the discoveries behind God Invented Intermittent Fasting",
    ],
    benefits: [
      "Absolutely free to download",
      "Companion audio teaching included",
      "Self-paced — start whenever you like",
      "Investigate and decide for yourself",
      "A perfect first step into the Lifetime Lifestyle family",
    ],
    outcomes: [
      "Renewed curiosity for the Scriptures",
      "Fresh perspective on familiar passages",
      "Clearer understanding of the health patterns woven through God's Word",
      "A foundation for the upcoming book study",
    ],
    whatsIncluded: [
      "Hidden in Plain Sight Discovery Guide",
      "Companion audio teaching",
      "Guided reflection questions",
      "Biblical passages to explore for yourself",
      "Introduction to God Invented Intermittent Fasting",
    ],
    testimonials: [
      {
        quote:
          "I've read these chapters for years and never saw it. This guide opened my eyes to patterns I'd completely missed.",
        name: "Grace B.",
        detail: "Discovery Guide reader",
      },
      {
        quote:
          "The audio teaching made it feel like a personal Bible study. And it was free? Incredible.",
        name: "Meredith C.",
        detail: "Discovery Guide reader",
      },
    ],
    faqs: [
      {
        question: "Is this really free?",
        answer:
          "Yes — completely free. It's a gift designed to introduce you to deeper study, with no strings attached.",
      },
      {
        question: "How will I receive it?",
        answer:
          "After you complete the download form, the Discovery Guide and audio teaching are delivered digitally to your inbox.",
      },
      {
        question: "Do I need a Bible to use the guide?",
        answer:
          "The guide includes the passages to explore, but having your own Bible open alongside makes the study richer.",
      },
    ],
  },
  {
    id: "prg_gods_healthy_laws_family",
    title: "God's Healthy Laws™ 8-Day Family Reset Challenge",
    slug: "gods-healthy-laws-family-reset",
    category: "courses",
    tagline: "Eight simple habits to help your family grow strong — inside and out.",
    thumbnail: "/images/programs/gods-healthy-laws.jpg",
    bannerImage: "/images/programs/gods-healthy-laws.jpg",
    shortDescription:
      "A faith-based family experience that guides children and parents through God's 8 Laws of Health — one simple, joyful day at a time.",
    description:
      "What if eight simple habits could help your family grow stronger in body, mind, and spirit?\n\nThe God's Healthy Laws™ 8-Day Family Reset Challenge is a faith-based family experience designed to help children and parents discover God's plan for healthy living — one day at a time. Based on the children's book God's Healthy Laws: Mamma, Why Do People Get Sick?, this interactive experience is for everybody, young and old.\n\nEach day includes a simple lesson, a family discussion, a Scripture connection, and a practical challenge that families can complete together — plus lessons from special guests and the Power for the Journey theme song.\n\nThis isn't about perfection. It's about creating healthy habits, meaningful conversations, and lasting memories while learning how God's wisdom applies to everyday life.",
    duration: "8 Days",
    price: 97,
    compareAtPrice: 117,
    currency: "USD",
    featured: false,
    isNew: true,
    comingSoon: false,
    stanStoreUrl:
      "https://stan.store/Gnsing/p/gods-healthy-laws-family-reset-challenge",
    ctaLabel: "Get the Family Reset",
    keywords: [
      "family",
      "kids",
      "children",
      "faith",
      "8 laws of health",
      "habits",
      "biblical",
      "devotion",
      "homeschool",
      "sabbath",
      "challenge",
    ],
    about: [
      "Created for families who want to grow healthy together, the 8-Day Family Reset Challenge turns eight powerful health principles from God's Word into a joyful week of connection.",
      "Each day centers on one of the eight laws — Trust, Water, Fresh Air, Sunshine, Nutrition, Exercise, Temperance, and Rest — with a simple lesson, a family discussion, a Scripture connection, and a hands-on challenge for everyone to do together.",
      "Built on the children's book God's Healthy Laws: Mamma, Why Do People Get Sick?, the experience includes daily downloads, special-guest lessons, and the Power for the Journey theme song — perfect for families, homeschools, ministries, and Sabbath programs.",
    ],
    whoItIsFor: [
      "Christian families ready to build healthy habits together",
      "Homeschool families looking for a faith-filled unit",
      "Parents who want meaningful daily conversations",
      "Children's and health ministries",
      "Sabbath school, schools, and community outreach programs",
    ],
    learnings: [
      "God's 8 Laws of Health — one simple habit per day",
      "Scripture connections for each principle",
      "How to discuss health as a family",
      "Practical challenges families can complete together",
      "The story behind why people get sick — made child-friendly",
    ],
    benefits: [
      "Meaningful conversations around the dinner table",
      "Healthy habits built together, not alone",
      "Scripture-based encouragement every single day",
      "Ready-to-use downloads — no prep work for parents",
      "Memories and connections that last far beyond 8 days",
    ],
    outcomes: [
      "A family that talks about health and faith together",
      "Eight healthy habits your family can keep",
      "Children who understand why health matters God's way",
      "Stronger family connections and shared memories",
      "A lifestyle of wellness rooted in biblical principles",
    ],
    whatsIncluded: [
      "Welcome page and setup guide",
      "8 daily family experience lessons",
      "Family discussion questions",
      "Daily experiences and activities",
      "Scripture-based encouragement",
      "God's Healthy Laws™ 8-Laws Circle Chart",
      "Family health checklist",
      "Audio companion teachings + Power for the Journey theme song",
      "Lessons from special guests",
      "Instant digital downloads",
    ],
    testimonials: [
      {
        quote:
          "Our kids asked for 'the health challenge' every single night. We've never had conversations like these at the dinner table before.",
        name: "Keisha L.",
        detail: "Homeschool mom of three",
      },
      {
        quote:
          "It's rare to find something that's both biblical and practical for kids. This became our family's favorite week of the year.",
        name: "Pastor D.",
        detail: "Children's ministry leader",
      },
    ],
    faqs: [
      {
        question: "What ages is this designed for?",
        answer:
          "The experience is designed for the whole family — children, teens, and adults — with content that works for young kids and can be deepened for older ones.",
      },
      {
        question: "Do I need the children's book to use the challenge?",
        answer:
          "No — everything you need is included as instant digital downloads. The book makes a wonderful companion but isn't required.",
      },
      {
        question: "How much time does each day take?",
        answer:
          "Each day's lesson, discussion, and challenge takes about 15–30 minutes, so it fits easily into busy family schedules.",
      },
      {
        question: "Can I use this in a church or school setting?",
        answer:
          "Yes! It's ideal for children's ministries, Sabbath programs, schools, and community outreach. Reach out if you need multiple-family guidance.",
      },
    ],
  },
  {
    id: "prg_intermittent_fasting",
    title: "God Invented Intermittent Fasting-40-Day Transformation Bundle",
    slug: "god-invented-intermittent-fasting",
    category: "digital-resources",
    tagline: "The pattern for how you eat, rest, and live was hidden in Scripture all along.",
    thumbnail: "/images/programs/intermittent-fasting.jpg",
    bannerImage: "/images/programs/intermittent-fasting.jpg",
    shortDescription:
      "A complete, interactive 40-day experience — book, fillable trackers, and transformation tools — built on the biblical pattern of daily eating, rest, and dependence on God.",
    description:
      "What if the pattern for how you eat, rest, and live was hidden in Scripture all along?\n\nGod Invented Intermittent Fasting walks you through Exodus 16 and the manna in the wilderness, showing you something most readers pass right over: God's original design for daily eating, rest, and dependence on Him — a pattern that looks a lot like what we now call intermittent fasting.\n\nThis isn't just a book. It's a complete, interactive 40-day experience — and every single piece of it is fillable right on your phone, tablet, or laptop. No printing. No downloading, filling in, then scanning back in. Open it, type, tap, click done.\n\nThe bundle includes the book (21 chapters, each ending in a “Stop and Think” reflection), a 40-Day 8 Laws Tracker, a Water Tracker, a 40-Day Transformation Declaration, and a shareable My Win Card for social media.",
    duration: "40 Days",
    price: 47,
    currency: "USD",
    featured: true,
    isNew: false,
    comingSoon: false,
    stanStoreUrl:
      "https://stan.store/Gnsing/p/god-invented-intermittent-fasting-bundle",
    ctaLabel: "Get Your Bundle",
    keywords: [
      "intermittent fasting",
      "biblical",
      "exodus 16",
      "manna",
      "book",
      "40 day",
      "tracker",
      "weight",
      "dependence",
      "fasting",
    ],
    about: [
      "God Invented Intermittent Fasting uncovers the biblical rhythm of daily eating and rest that we now call intermittent fasting — a pattern many readers pass right over in Exodus 16.",
      "This 40-day bundle turns that discovery into a complete, guided experience. Every resource is interactive and fillable on any device, removing every excuse and every barrier between you and transformation.",
      "It's more than a book — it's 40 days of structured Scripture, daily trackers for the 8 Laws of Health, and a clear path from Day 1 to Day 40.",
    ],
    whoItIsFor: [
      "Women who want to understand fasting from a biblical perspective",
      "Anyone ready to go deeper than a “diet” into a rhythm of dependence on God",
      "Those who love guided, interactive workbooks",
      "Readers ready for a full 40-day transformation journey",
      "Anyone who has tried fasting and struggled to stay consistent",
    ],
    learnings: [
      "The biblical pattern of daily eating, rest, and dependence found in Exodus 16",
      "How intermittent fasting connects to Scripture — not just science",
      "21 chapters of “Stop and Think” reflections you answer directly in the book",
      "How to track the 8 Laws of Health for 40 days",
      "How to set and sign a personal transformation declaration",
    ],
    benefits: [
      "Interactive, fillable resources — work on phone, tablet, or laptop",
      "Everything in one bundle: book, trackers, and tools",
      "A clear 40-day structure with daily accountability",
      "Shareable progress card to celebrate wins",
      "A spiritual and practical foundation for lasting change",
    ],
    outcomes: [
      "A transformed relationship with food and rest",
      "40 days of consistent tracking and daily reflection",
      "Deeper understanding of God's design for daily living",
      "A signed Day-1-to-Day-40 transformation record",
      "Momentum and confidence to continue beyond the 40 days",
    ],
    whatsIncluded: [
      "The book — 21 chapters with fillable “Stop and Think” reflections",
      "40-Day 8 Laws Tracker",
      "Daily Water Tracker",
      "My 40-Day Transformation Declaration",
      "My Win Card — shareable progress update",
    ],
    testimonials: [
      {
        quote:
          "I'd read Exodus 16 dozens of times. This bundle showed me the pattern was right there the whole time — and then helped me actually live it for 40 days.",
        name: "Rachel T.",
        detail: "40-Day Transformation participant",
      },
      {
        quote:
          "Everything being fillable on my phone made it effortless. I actually finished the whole 40 days — the first time I've completed anything like this.",
        name: "Ebony F.",
        detail: "40-Day Transformation participant",
      },
    ],
    faqs: [
      {
        question: "Do I need to print anything?",
        answer:
          "No. Every resource in the bundle is fillable directly on your phone, tablet, or laptop. Open it, type, tap, and you're done.",
      },
      {
        question: "Is intermittent fasting biblical?",
        answer:
          "That's exactly what the book explores. Through Exodus 16 and the manna in the wilderness, you'll discover a pattern of daily eating, rest, and dependence on God that looks a lot like intermittent fasting.",
      },
      {
        question: "What if I have a medical condition?",
        answer:
          "Always consult your healthcare provider before making significant changes to your eating patterns, especially if you have a medical condition or take medication.",
      },
      {
        question: "How long does the bundle take to complete?",
        answer:
          "The bundle is designed as a 40-day journey — one day at a time — though you can move at your own pace.",
      },
    ],
  },
  {
    id: "prg_1on1_coaching",
    title: "Book a 1:1 Coaching Call",
    slug: "book-a-1-1-coaching-call",
    category: "coaching",
    tagline: "Relief starts here — one conversation can change an entire season of life.",
    thumbnail: "/images/programs/coaching-call.jpg",
    bannerImage: "/images/programs/coaching-call.jpg",
    shortDescription:
      "A private one-on-one coaching session to get clear on where you are, where you'd like to go, and the practical steps that can help move you forward.",
    description:
      "Sometimes one conversation can bring clarity to an entire season of life.\n\nA private 1:1 coaching session is a focused, judgment-free space to talk about where you are, where you'd like to go, and the practical steps that can help move you forward. No generic advice. No shame. Just honest conversation and a clear path.",
    duration: "60 minutes",
    price: 100,
    currency: "USD",
    featured: false,
    isNew: false,
    comingSoon: false,
    stanStoreUrl: "https://stan.store/Gnsing/p/book-a-11-call-with-me-j4klcmdz",
    ctaLabel: "Book a Call",
    keywords: [
      "coaching",
      "1:1",
      "one-on-one",
      "private",
      "session",
      "call",
      "clarity",
      "goals",
      "support",
      "accountability",
    ],
    about: [
      "Every journey needs a guide. A 1:1 coaching call gives you a private, dedicated hour with someone who has walked the road you're on — without the noise of a group setting.",
      "Whether you're stuck in a health cycle, overwhelmed by competing advice, or simply ready for a fresh perspective, this session is designed around you and your specific situation.",
      "You'll leave with clarity, encouragement, and practical next steps you can actually take.",
    ],
    whoItIsFor: [
      "Women who want personalized guidance, not generic advice",
      "Anyone feeling stuck in a health cycle and unsure where to start",
      "Those who want a safe, judgment-free space to talk honestly",
      "Women ready to take a practical next step toward change",
      "Anyone preparing for a program who wants to ask their own questions",
    ],
    learnings: [
      "Clarity on where you are and where you'd like to go",
      "Practical, personalized steps to move forward",
      "Honest answers to your specific questions",
      "Encouragement rooted in your own story",
    ],
    benefits: [
      "A completely private, one-on-one session",
      "Guidance tailored to your situation",
      "A judgment-free space to be honest",
      "Practical next steps you can start immediately",
      "Clarity that can change an entire season of life",
    ],
    outcomes: [
      "A clear picture of your starting point and destination",
      "A practical action plan for your next steps",
      "Renewed confidence and encouragement",
      "Someone in your corner cheering you on",
    ],
    whatsIncluded: [
      "60-minute private video call",
      "Personalized conversation around your goals",
      "Practical action steps",
      "Follow-up encouragement",
    ],
    testimonials: [
      {
        quote:
          "I came in overwhelmed and left with a clear plan. One conversation truly did change my entire season.",
        name: "Monique S.",
        detail: "1:1 Coaching client",
      },
      {
        quote:
          "No judgment, no pressure — just honest help. I finally felt heard and knew exactly what to do next.",
        name: "Angela K.",
        detail: "1:1 Coaching client",
      },
    ],
    faqs: [
      {
        question: "What happens during the call?",
        answer:
          "You'll have a private, focused conversation about where you are, where you'd like to go, and the practical steps that can help move you forward.",
      },
      {
        question: "How do I book my session?",
        answer:
          "Click the “Book a Call” button to purchase your session on Stan Store. You'll then be able to schedule your call at a time that works for you.",
      },
      {
        question: "How long is the session?",
        answer:
          "Each session is a dedicated 60-minute private call.",
      },
      {
        question: "Can I ask about a specific program?",
        answer:
          "Absolutely. Many women book a call to ask questions about a program before enrolling. Bring whatever is on your heart.",
      },
    ],
  },
  {
    id: "prg_feeble_to_fabulous",
    title: "From Feeble to Fabulous Academy",
    slug: "feeble-to-fabulous-academy",
    category: "coaching",
    tagline: "A faith-based community for women ready to break free from health cycles.",
    thumbnail: "/images/programs/feeble-to-fabulous.jpg",
    bannerImage: "/images/programs/feeble-to-fabulous.jpg",
    shortDescription:
      "Biblical answers for those stuck in health cycles — starting over again and again. We do this together.",
    description:
      "A faith-based community where we find biblical answers for those stuck in health cycles — starting over again and again. We do this together.\n\nInside the Academy you'll find videos, webinars, ongoing inspiration, and a growing family of women who encourage one another through the practical principles of God's original design and His 8 Laws of Health.",
    duration: "Ongoing membership",
    price: 0,
    currency: "USD",
    featured: false,
    isNew: false,
    comingSoon: false,
    stanStoreUrl:
      "https://www.skool.com/from-feeble-to-fabulous5187-4216/about",
    ctaLabel: "Get Started Free",
    keywords: [
      "community",
      "faith",
      "membership",
      "academy",
      "free",
      "biblical",
      "health cycles",
      "support",
      "webinars",
      "videos",
    ],
    about: [
      "The From Feeble to Fabulous Academy is a faith-based community built for women who are tired of starting over again and again in the same health cycles.",
      "Instead of going it alone, members walk through God's 8 Laws of Health together — through videos, webinars, and ongoing inspiration — finding biblical answers that last.",
      "The Academy is included free with purchases like the 5-Day Water Reset and 3-Day Sugar Reset, and it's open for anyone ready to grow alongside a supportive community.",
    ],
    whoItIsFor: [
      "Women stuck in repeating health cycles",
      "Those who want biblical answers, not just trends",
      "Anyone who thrives with community and accountability",
      "Women ready to encourage and be encouraged",
      "Program graduates who want to stay connected",
    ],
    learnings: [
      "God's 8 Laws of Health — practically applied",
      "Biblical answers for breaking health cycles",
      "How to support and be supported in community",
      "Lifestyle principles through videos and webinars",
    ],
    benefits: [
      "A safe, faith-based community of like-minded women",
      "Ongoing inspiration and practical teaching",
      "Accountability that helps you stay on track",
      "Access to videos and webinars",
      "Included free with selected program purchases",
    ],
    outcomes: [
      "No more starting over alone",
      "Biblical foundations for lasting change",
      "Real relationships and real accountability",
      "Confidence that you're not fighting alone",
    ],
    whatsIncluded: [
      "Community access",
      "Video teachings",
      "Webinars",
      "Ongoing encouragement and inspiration",
      "8 Laws of Health guidance",
    ],
    testimonials: [
      {
        quote:
          "For the first time I'm not doing this alone. The community reminds me I can get back up — every single time.",
        name: "Yolanda P.",
        detail: "Academy member",
      },
      {
        quote:
          "Biblical answers, real sisters, and grace when I fall. This community changed how I see my health journey.",
        name: "Nicole B.",
        detail: "Academy member",
      },
    ],
    faqs: [
      {
        question: "Is the Academy really free?",
        answer:
          "Yes — you can get started free. Members who purchase programs like the 5-Day Water Reset or 3-Day Sugar Reset also receive a free invitation to the Academy.",
      },
      {
        question: "What platform is it hosted on?",
        answer:
          "The Academy community lives on Skool, which you can access from your phone or computer.",
      },
      {
        question: "Is this only for program purchasers?",
        answer:
          "No — the Academy is open for anyone who wants a faith-based, supportive place to grow. Purchases simply include a free invitation.",
      },
    ],
  },
  {
    id: "prg_community_is_the_cure",
    title: "Community Is the Cure",
    slug: "community-is-the-cure",
    category: "courses",
    tagline: "A 6-week faith-based health reset — you don't have to fight this battle alone.",
    thumbnail: "/images/programs/community-is-the-cure.jpg",
    bannerImage: "/images/programs/community-is-the-cure.jpg",
    shortDescription:
      "In just 6 weeks, rebuild your body, mind, and spirit — together. Live coaching, tools, and support rooted in God's Healthy Laws.",
    description:
      "You don't have to fight this battle alone.\n\nIn just 6 weeks, you'll learn the simple, faith-filled strategies that took years to discover — rooted in God's Healthy Laws and strengthened through community. With live coaching, tools, and support, this program helps you rebuild your body, mind, and spirit — together.",
    duration: "6 Weeks",
    price: null,
    currency: "USD",
    featured: false,
    isNew: true,
    comingSoon: true,
    stanStoreUrl: "https://community-is-the-cure-34969.gr-site.com/",
    ctaLabel: "Join the Waitlist",
    keywords: [
      "community",
      "6 week",
      "faith-based",
      "reset",
      "live coaching",
      "God's healthy laws",
      "waitlist",
      "coming soon",
      "body mind spirit",
    ],
    about: [
      "Community Is the Cure is a 6-week faith-based health reset built on a simple truth: you don't have to fight this battle alone.",
      "Over six weeks, you'll learn the simple, faith-filled strategies that took years to discover — rooted in God's Healthy Laws and strengthened through community.",
      "With live coaching, practical tools, and real support, this program is designed to help you rebuild your body, mind, and spirit — together.",
    ],
    whoItIsFor: [
      "Women who've tried to change alone and keep falling back",
      "Those who want live coaching, not just self-study",
      "Anyone looking for a faith-based approach to health",
      "Women ready to experience the power of community",
      "Those who want a structured 6-week plan with support",
    ],
    learnings: [
      "God's Healthy Laws applied over a full 6-week journey",
      "Faith-filled strategies that took years to discover",
      "How to rebuild body, mind, and spirit together",
      "How to lean on community for lasting change",
    ],
    benefits: [
      "Live coaching and real-time support",
      "A structured 6-week reset that keeps you on track",
      "Rooted in biblical principles",
      "Community strength — you're never alone",
      "Tools and support designed for real life",
    ],
    outcomes: [
      "A rebuilt body, mind, and spirit",
      "Healthy habits strengthened through community",
      "A supportive network that carries you forward",
      "Confidence rooted in faith, not willpower alone",
    ],
    whatsIncluded: [
      "6-week structured reset",
      "Live coaching sessions",
      "Practical tools and resources",
      "Community support and accountability",
      "Faith-based teaching rooted in God's Healthy Laws",
    ],
    testimonials: [
      {
        quote:
          "Six weeks with real sisters, real coaching, and real biblical grounding. I didn't just learn — I was changed.",
        name: "First Name Here",
        detail: "Waitlist preview",
      },
    ],
    faqs: [
      {
        question: "When does the program launch?",
        answer:
          "Community Is the Cure is coming soon. Join the waitlist to be the first to know when enrollment opens.",
      },
      {
        question: "How is this different from the resets?",
        answer:
          "This is a full 6-week journey with live coaching and community support — a deeper, longer experience than the standalone 3- or 5-day resets.",
      },
      {
        question: "Will there be live calls?",
        answer:
          "Yes — the program includes live coaching sessions and community support throughout the 6 weeks.",
      },
      {
        question: "Is it faith-based?",
        answer:
          "Yes. The entire program is rooted in God's Healthy Laws and biblical principles.",
      },
    ],
  },
];
