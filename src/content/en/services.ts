import type { Dictionary } from "../types";

const collabYourTeam = {
  agency: "Your agency keeps running your current markets and channels.",
  dev: "Your developers keep ownership of the website and its codebase.",
  inhouse: "Your in-house team keeps its processes and brand standards.",
};

export const services: Dictionary["services"] = {
  "gcc-market-entry": {
    navLabel: "GCC Market Entry",
    cardTitle: "GCC Market Entry Strategy",
    cardSummary: "Know which GCC countries, customers and offers deserve your investment, and how to go to market, before you spend.",
    metaTitle: "GCC Market Entry Strategy for Thailand & Malaysia Businesses | Wadhah Belhassen",
    metaDescription:
      "Digital market-entry strategy for businesses in Thailand and Malaysia adding GCC customers: opportunity analysis, country prioritization, customer journey and a go-to-market plan.",
    h1: "GCC Market Entry Strategy for Businesses in Thailand and Malaysia",
    valueProp:
      "An evidence-based plan for which GCC markets, customers and offers deserve your investment, and how to take them to market, built before any campaign goes live.",
    problem: {
      title: "The problem: entering the Gulf by guesswork",
      body: [
        "Many Southeast Asian businesses know GCC customers exist but not where to begin. The usual shortcut — translate the website and boost some posts — spends budget without knowing which country, service or search intent is worth pursuing.",
        "Saudi Arabia, the UAE, Kuwait, Qatar and Oman are not one market. Search behavior, competition and the way people make contact differ by country, and so does what each audience needs to see before they enquire.",
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        { title: "Market opportunity analysis", body: "Whether, where and for which offer a GCC opportunity exists, backed by [market intelligence](service:market-intelligence)." },
        { title: "Customer demand and country prioritization", body: "A reasoned ranking of Saudi Arabia, UAE, Kuwait, Qatar and Oman for your specific offer." },
        { title: "Competitor intelligence", body: "Who is already visible for the queries that matter, and where the gaps are." },
        { title: "GCC customer journey", body: "How GCC customers research, compare, trust and prefer to make contact, including WhatsApp-first behavior." },
        { title: "Go-to-market planning", body: "Which mix of [Google Ads](service:google-ads-gcc), [Arabic SEO](service:arabic-seo) and [localized landing pages](service:arabic-landing-pages) to start with, and how success will be measured." },
      ],
    },
    collaboration: {
      title: "How this works with your existing team",
      intro: "Market entry strategy is an advisory layer. It informs what your current team builds; it doesn't replace what they run.",
      yourTeam: [collabYourTeam.agency, collabYourTeam.dev, collabYourTeam.inhouse],
      wadhah: [
        "The GCC market analysis and prioritization.",
        "A written entry plan your team can review, challenge and execute alongside me.",
        "Specifications for the pages, tracking and campaigns the plan requires.",
      ],
    },
    boundary: {
      title: "What market entry means here",
      body: [
        "This is digital market entry: market intelligence, go-to-market strategy, localization, customer acquisition, conversion and measurement.",
        "It does not include company incorporation in Saudi Arabia or the UAE, legal representation, tax advice, licensing, import and export compliance, regulatory approvals or immigration services. Where those are needed, specialist local partners may be involved separately.",
      ],
    },
    process: {
      title: "Process",
      steps: [
        { title: "Discovery", body: "Your services, margins, capacity, current marketing and what you've already tried." },
        { title: "Market intelligence", body: "Demand, competition and search behavior across the five GCC markets." },
        { title: "Entry roadmap", body: "Priority countries, offers, channels, budget logic and measurement plan." },
        { title: "Handover and execution", body: "Briefs for your team, or hands-on execution through the other services." },
      ],
    },
    industriesIntro:
      "Entry strategy matters most where a single customer is high-value and the decision is researched carefully, for example [hair transplant](industry:hair-transplant) and [dental](industry:dental-clinics) clinics, broader [medical tourism](industry:medical-tourism), [restaurants](industry:restaurants), [hotels](industry:hotels) and [real estate](industry:real-estate).",
    marketsIntro: "Country priorities are set from data for your offer, not assumed in advance.",
    faqs: [
      { q: "Do I have to replace my current marketing agency?", a: "No. The strategy is designed to sit alongside your existing agency, developers and in-house team. They continue to run what they run today." },
      { q: "Do you help us set up a company in Saudi Arabia or the UAE?", a: "No. I work on digital market entry. Company incorporation, legal, tax, licensing and regulatory matters need specialist local partners, who can be involved separately where relevant." },
      { q: "Which GCC country should we start with?", a: "It depends on your service, price point and capacity. Prioritization is one of the main outputs of this service, based on demand and competition data rather than assumption." },
      { q: "Do you work in Arabic?", a: "Arabic and English search behavior are both part of the research, and Arabic customer experience is specified and reviewed with native-language support. See [Arabic localization](service:arabic-localization)." },
      { q: "Can you guarantee enquiries or revenue?", a: "No. I can reduce guesswork and build a measurable channel, but outcomes depend on your offer, capacity and market conditions, and are never guaranteed." },
    ],
    ctaTitle: "Find out where your GCC opportunity is",
    ctaBody: "Request a market audit and get an honest view of which markets are worth pursuing, and whether now is the time.",
  },

  "market-intelligence": {
    navLabel: "Market Intelligence",
    cardTitle: "Market Intelligence & Opportunity Analysis",
    cardSummary: "Search demand, competitors, audience behavior and customer intent: validate the GCC opportunity before you commit budget.",
    metaTitle: "GCC Market Intelligence & Opportunity Analysis | Wadhah Belhassen",
    metaDescription:
      "Search demand, competitor analysis, audience behavior and opportunity validation for businesses in Thailand and Malaysia considering GCC markets.",
    h1: "Market Intelligence & Opportunity Analysis for GCC Markets",
    valueProp:
      "Evidence on demand, competition and customer intent, so the decision to enter a GCC market, or not, rests on data rather than enthusiasm.",
    problem: {
      title: "The problem: decisions made on anecdotes",
      body: [
        "GCC expansion is often justified by a single success story, a conference conversation or the size of the region's economy. None of those tell you whether people are searching for your service, who already answers them, or what a customer would cost to acquire.",
        "Opportunity validation is cheap compared with a failed campaign. It is also the step most often skipped.",
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        { title: "Search demand", body: "Arabic and English demand for your services by country, checked in Google Keyword Planner and search results, including cost signals." },
        { title: "Competitor analysis", body: "Who is visible, what they offer, how their landing pages and journeys work, and where they are weak." },
        { title: "Audience behavior", body: "How GCC customers research, compare options and make contact before they buy or book." },
        { title: "Market signals", body: "Tourism and travel patterns, seasonality and other verified sources, always named and dated." },
        { title: "Customer intent and opportunity validation", body: "A clear view of customer value against likely acquisition cost, ending in a go, test-first or not-yet recommendation." },
      ],
    },
    collaboration: {
      title: "How this works with your existing team",
      intro: "Intelligence work needs your commercial knowledge: margins, capacity and what a good customer looks like.",
      yourTeam: [collabYourTeam.agency, "Your sales and management teams define what a qualified customer is.", collabYourTeam.inhouse],
      wadhah: [
        "Demand, competitor and audience research for the GCC.",
        "An opportunity assessment with a plain-language recommendation.",
        "Inputs for [market entry strategy](service:gcc-market-entry) and campaign planning.",
      ],
    },
    process: {
      title: "Process",
      steps: [
        { title: "Frame", body: "Define the offer, target customers and decision the research must support." },
        { title: "Collect", body: "Search, competitor and audience evidence across target countries." },
        { title: "Assess", body: "Compare demand, competition and economics for each country." },
        { title: "Recommend", body: "Go, test first or not yet, with the reasoning shown." },
      ],
    },
    industriesIntro:
      "Validation matters most where acquisition cost is high or seasonality is strong: [medical tourism](industry:medical-tourism), [hotels](industry:hotels), [travel](industry:travel), [real estate](industry:real-estate) and [restaurants](industry:restaurants).",
    marketsIntro: "Each GCC country is assessed separately, so a strong signal in one market is not assumed in another.",
    faqs: [
      { q: "Will you give us market-size numbers?", a: "Only from sources I can name and date. Estimates are labelled as estimates, and nothing is presented as fact without a source." },
      { q: "Is research enough, or do we need a campaign too?", a: "Research tells you whether to proceed. If it is a go, the same evidence shapes [Google Ads](service:google-ads-gcc) and [Arabic SEO](service:arabic-seo) so execution does not start from zero." },
      { q: "What if the research says no?", a: "Then I will say so. A clear \"not yet\" saves more money than a campaign that should not have launched." },
      { q: "How long does it take?", a: "Scope and timing depend on how many countries and services are assessed. It is typically the first stage of the [90-day pilot](page:services)." },
    ],
    ctaTitle: "Validate the opportunity before you spend",
    ctaBody: "Request a market audit for a first view of demand, competition and economics for your offer.",
  },

  "arabic-localization": {
    navLabel: "Arabic Localization",
    cardTitle: "Arabic Localization & Customer Experience",
    cardSummary: "Messaging, journeys and trust signals adapted for GCC customers, so they can understand, trust and act. This is not translation.",
    metaTitle: "Arabic Localization & Customer Experience for GCC Markets | Wadhah Belhassen",
    metaDescription:
      "Arabic market adaptation, messaging, customer journeys and cultural adaptation for businesses in Thailand and Malaysia reaching GCC customers. More than translation.",
    h1: "Arabic Localization & Customer Experience",
    valueProp:
      "Adaptation of what you say, how people reach you and what reassures them, informed by first-hand experience of Gulf business and customer culture.",
    problem: {
      title: "The problem: translated is not understood",
      body: [
        "A translated page keeps the structure, tone and trust cues of the original market. GCC customers evaluate differently: what counts as proof, how formal the tone should be, which contact method feels natural and how quickly a reply is expected all shift by country and audience.",
        "Localization is where market understanding turns into conversions. It is also where machine translation and generic agencies most often fall short.",
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        { title: "Arabic market adaptation", body: "Offers, positioning and messaging adapted by country and audience, not rewritten word for word." },
        { title: "Messaging and tone", body: "Direction for Arabic copy that sounds natural and credible, written or reviewed with native-language support." },
        { title: "Customer journey", body: "The path from first search to first conversation, including WhatsApp-first contact and reply expectations." },
        { title: "Landing-page localization", body: "Right-to-left layout and content specifications, implemented with your team through [landing pages and CRO](service:arabic-landing-pages)." },
        { title: "Cultural adaptation", body: "Imagery, trust signals, offers and etiquette informed by years of living and working in Qatar and the UAE." },
        { title: "Arabic conversion experience", body: "Forms, chat and follow-up designed for how GCC prospects actually make contact." },
      ],
    },
    collaboration: {
      title: "How this works with your existing team",
      intro: "Localization changes what your website and sales team say, so it is built with them rather than around them.",
      yourTeam: ["Your developers implement changes in your CMS or codebase.", "Your sales or coordination team handles enquiries.", "Your brand and compliance owners approve claims and wording."],
      wadhah: [
        "Localization strategy, messaging direction and journey design.",
        "Arabic and RTL specifications for your designers and developers.",
        "Review of replies and follow-up scripts for GCC prospects.",
      ],
    },
    process: {
      title: "Process",
      steps: [
        { title: "Understand", body: "Target countries, audiences and what your current experience assumes." },
        { title: "Adapt", body: "Messaging, offers, trust signals and journey, by country." },
        { title: "Specify", body: "Briefs for copy, design and development, reviewed with native-language support." },
        { title: "Test and refine", body: "Measure behavior and enquiries, then adjust." },
      ],
    },
    industriesIntro:
      "Localization matters most where trust and reassurance drive the decision: [medical tourism](industry:medical-tourism), [hair transplant](industry:hair-transplant) and [dental](industry:dental-clinics) clinics, [hotels](industry:hotels) and [restaurants](industry:restaurants).",
    marketsIntro: "Saudi Arabia, the UAE, Kuwait, Qatar and Oman are adapted separately rather than as one generic Arabic version.",
    faqs: [
      { q: "Is this just translation?", a: "No. Translation converts words. Localization adapts the offer, tone, trust signals, journey and contact flow for the audience." },
      { q: "Do you write the Arabic copy yourself?", a: "I direct and review it with native-language writers or your team, so the Arabic is natural and credible rather than literal." },
      { q: "Will this change our existing website?", a: "Only through changes your developers choose to implement. Localized sections or pages can sit alongside your current site." },
      { q: "Does this cover legal wording?", a: "No. Legal, regulatory and compliance wording stays with your own advisers." },
    ],
    ctaTitle: "See what a localized GCC experience would change",
    ctaBody: "A market audit reviews your current pages and journey through the eyes of a GCC customer.",
  },

  "google-ads-gcc": {
    navLabel: "Google Ads GCC",
    cardTitle: "Google Ads & Customer Acquisition",
    cardSummary: "Capture high-intent Arabic and English search demand from Saudi Arabia, UAE, Kuwait, Qatar and Oman and turn it into qualified customers.",
    metaTitle: "Google Ads & Customer Acquisition for GCC Markets | Wadhah Belhassen",
    metaDescription:
      "Google Ads campaigns for Arabic and English search in Saudi Arabia, UAE, Kuwait, Qatar and Oman, built for businesses in Thailand and Malaysia and measured on qualified enquiries.",
    h1: "Google Ads & Customer Acquisition for GCC Markets",
    valueProp:
      "Search campaigns built around how Gulf customers actually look for your services, measured on qualified enquiries rather than clicks.",
    problem: {
      title: "The problem: running Gulf traffic like a domestic account",
      body: [
        "Copying an existing campaign into Arabic rarely works. Query phrasing, device mix, competition and the expectation of instant WhatsApp contact all change the economics of an account.",
        "Without country-level structure and proper conversion tracking, GCC budgets drift into low-intent clicks and the account never learns what a real enquiry looks like.",
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        { title: "Campaign architecture", body: "Separate campaigns and budgets by country and intent, so you can see what each market actually delivers." },
        { title: "Google Search and high-intent demand capture", body: "Arabic and English search campaigns built from real query research, with search-term and negative-keyword discipline. Performance Max is used where it fits." },
        { title: "Lead generation", body: "Offers, forms and contact paths designed to attract qualified enquiries rather than volume." },
        { title: "Landing-page alignment", body: "Message match between ad, keyword and [localized landing page](service:arabic-landing-pages)." },
        { title: "Qualified customer acquisition", body: "Bidding and budgets steered by qualified enquiries, with [conversion tracking](service:conversion-tracking) feeding the account, and transparent reporting to your team." },
      ],
    },
    collaboration: {
      title: "How this works with your existing team",
      intro: "GCC campaigns live in their own structure, so they don't disturb your current Google Ads or agency accounts.",
      yourTeam: ["Your agency keeps managing your existing Google Ads and other channels.", "Your team keeps brand approvals and creative standards.", collabYourTeam.dev],
      wadhah: [
        "A dedicated GCC campaign structure, in your account or in a linked one.",
        "Arabic and English keyword, ad and audience strategy.",
        "Optimization and reporting for the GCC channel only.",
      ],
    },
    process: {
      title: "Process",
      steps: [
        { title: "Audit and setup", body: "Review of current accounts, tracking and landing pages; GCC account structure and goals." },
        { title: "Launch", body: "Controlled launch by country and intent with conservative budgets." },
        { title: "Learn", body: "Search-term review, negative keywords and enquiry-quality feedback from your team." },
        { title: "Scale what works", body: "Reallocate budget toward the countries and queries producing qualified enquiries." },
      ],
    },
    industriesIntro:
      "Search demand is clearest where people actively look for a service in Thailand or Malaysia: [hair transplant](industry:hair-transplant), [dental](industry:dental-clinics) and [medical tourism](industry:medical-tourism) clinics, [restaurants](industry:restaurants), [travel agencies](industry:travel) and [Muay Thai camps](industry:muay-thai).",
    marketsIntro: "Budgets are split by country and intent, so Saudi Arabia, UAE, Kuwait, Qatar and Oman are each judged on their own results.",
    faqs: [
      { q: "Will you take over our existing Google Ads account?", a: "Not unless you want that. Typically I build a separate GCC structure, and your agency continues to manage your current campaigns." },
      { q: "What budget do we need?", a: "It depends on the markets and competition for your service. The market audit gives a realistic range before you commit; I don't recommend launching without enough budget to learn." },
      { q: "Are medical ads allowed?", a: "Google applies advertising policies to healthcare and some treatments, and they vary by country. Campaigns are built to comply with those policies, and claims stay factual and unexaggerated." },
      { q: "How do you measure success?", a: "By qualified enquiries and what happens after them (consultations, bookings), tracked through [conversion tracking](service:conversion-tracking), not by clicks or impressions alone." },
    ],
    ctaTitle: "Plan your GCC Google Ads channel",
    ctaBody: "Start with a market audit to see realistic demand, competition and budget logic before you spend.",
  },

  "arabic-seo": {
    navLabel: "Arabic SEO",
    cardTitle: "Arabic SEO & AI Search Visibility",
    cardSummary: "Arabic search demand, content architecture and technical discoverability, with readiness for AI-powered discovery.",
    metaTitle: "Arabic SEO & AI Search Visibility for GCC Markets | Wadhah Belhassen",
    metaDescription:
      "Arabic SEO, international SEO and AI search readiness so businesses in Thailand and Malaysia are found by Arabic-speaking customers in GCC markets.",
    h1: "Arabic SEO & AI Search Visibility",
    valueProp:
      "Durable organic visibility among Arabic-speaking customers, built on correct international architecture rather than translated copies, and ready for how search is evolving.",
    problem: {
      title: "The problem: invisible in the language your customers search in",
      body: [
        "An English-only website, or a machine-translated Arabic copy, rarely ranks or persuades. Arabic search has its own phrasing, dialect variation and intent, and technical mistakes such as missing hreflang or duplicate content can hold a site back entirely.",
        "Discovery is also changing: people increasingly ask AI assistants as well as search engines. Clear, well-structured, trustworthy content helps in both.",
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        { title: "Arabic search demand", body: "Keyword and intent research by service, country and journey stage, including dialect-sensitive terms." },
        { title: "International SEO architecture", body: "Language folders, hreflang, canonicals and sitemaps set up so Arabic pages are indexed and served to the right audience." },
        { title: "Content architecture", body: "Briefs for service, destination and treatment pages written for Arabic searchers, planned as a connected structure." },
        { title: "Technical discoverability", body: "Crawlability, rendering, speed and RTL issues, handed to your developers as clear tickets." },
        { title: "Local visibility", body: "Google Business Profile, Maps and local signals for restaurants, hospitality and clinics where relevant." },
        { title: "AI-powered discovery (emerging)", body: "Clear, structured, authoritative Arabic and English content that is easier for AI-driven search and assistants to understand. Visibility there cannot be guaranteed or controlled." },
      ],
    },
    collaboration: {
      title: "How this works with your existing team",
      intro: "Arabic SEO touches your website, so coordination with your developers is built into the plan.",
      yourTeam: ["Your developers implement changes in your codebase and CMS.", "Your existing SEO agency continues its work in your current markets.", "Your team approves content and brand tone."],
      wadhah: [
        "Arabic keyword strategy and content briefs.",
        "International SEO and RTL technical specifications.",
        "Monitoring, reporting and iteration for Arabic visibility.",
      ],
    },
    process: {
      title: "Process",
      steps: [
        { title: "Technical and market audit", body: "Where the site stands for international and Arabic search today." },
        { title: "Architecture plan", body: "URL structure, hreflang, templates and RTL requirements." },
        { title: "Content roadmap", body: "Prioritized Arabic pages mapped to demand and business value." },
        { title: "Implement and monitor", body: "Work with your developers, then track visibility and enquiries over time." },
      ],
    },
    industriesIntro:
      "Organic visibility pays off where research is long and trust matters, or where Maps and local search decide the visit: [restaurants](industry:restaurants), [dental clinics](industry:dental-clinics), [medical tourism](industry:medical-tourism), [hotels](industry:hotels) and [travel](industry:travel) businesses.",
    marketsIntro: "Arabic content is planned with country differences in mind, rather than as a single generic Arabic version.",
    faqs: [
      { q: "Can't we just translate our website into Arabic?", a: "Translation alone is rarely enough. It misses Arabic search phrasing and usually needs layout, RTL and structural changes. [Localized pages](service:arabic-localization) are built for how Arabic speakers search and decide." },
      { q: "How long does SEO take?", a: "SEO compounds over months, not days. Pairing it with [Google Ads](service:google-ads-gcc) captures demand while organic visibility builds." },
      { q: "Can you get us mentioned by ChatGPT or other AI assistants?", a: "No one can guarantee that. What I can do is make your content clear, structured and authoritative, which supports both search engines and AI-driven discovery. AI advertising is an emerging acquisition channel I follow and will test where it makes sense; I do not claim proven results there." },
      { q: "Do we need a separate domain?", a: "Usually not. A language folder such as /ar/ on your existing domain is often the simplest and strongest approach; the audit will confirm what suits your setup." },
    ],
    ctaTitle: "See how visible you are in Arabic search",
    ctaBody: "A market audit shows the Arabic search demand around your services and how you currently compare.",
  },

  "arabic-landing-pages": {
    navLabel: "Landing Pages & CRO",
    cardTitle: "Landing Pages & Conversion Optimization",
    cardSummary: "Localized landing pages, lead funnels and WhatsApp journeys designed to convert GCC visitors into qualified conversations.",
    metaTitle: "Landing Pages & Conversion Optimization for GCC Customers | Wadhah Belhassen",
    metaDescription:
      "Localized landing pages, CRO and lead funnels for businesses in Thailand and Malaysia, designed for GCC visitors, mobile behavior and WhatsApp-first contact.",
    h1: "Landing Pages & Conversion Optimization",
    valueProp:
      "Landing experiences designed around how GCC visitors evaluate and enquire, so paid and organic traffic turn into qualified conversations.",
    problem: {
      title: "The problem: traffic that doesn't convert",
      body: [
        "A translated page placed behind Arabic ads often loses visitors within seconds: right-to-left layout is broken, trust cues are missing, the contact method doesn't match local habit and the offer isn't framed for the audience.",
        "Since [Google Ads](service:google-ads-gcc) spend multiplies every weakness on the page, landing quality is often the cheapest lever for improving results.",
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        { title: "Localized landing pages", body: "Message hierarchy, proof, objections and calls to action for each audience and offer, built on [Arabic localization](service:arabic-localization)." },
        { title: "CRO", body: "Microsoft Clarity and GA4 insight into where visitors hesitate or drop, and a hypothesis-driven testing roadmap." },
        { title: "Lead funnels", body: "Forms and qualification steps that filter for serious interest without adding unnecessary friction." },
        { title: "WhatsApp and contact journeys", body: "WhatsApp, LINE, call and form entry points designed for how GCC prospects make contact." },
        { title: "Conversion-focused UX", body: "Right-to-left, mobile-first layouts handed over as precise specs." },
      ],
    },
    collaboration: {
      title: "How this works with your existing team",
      intro: "I design and specify; your developers or web agency can build, or I can work with them to implement.",
      yourTeam: ["Your developers or web agency keep ownership of the main website.", "Pages can live in your existing CMS or as a dedicated section.", "Your team approves brand, claims and compliance wording."],
      wadhah: [
        "Page strategy, structure and conversion logic.",
        "Arabic and RTL design and content specifications.",
        "Testing, analysis and iteration after launch.",
      ],
    },
    process: {
      title: "Process",
      steps: [
        { title: "Offer and audience", body: "Clarify who the page is for, what they need to believe and what action matters." },
        { title: "Wireframe and copy brief", body: "Structure, proof points and Arabic copy direction." },
        { title: "Build with your team", body: "Implementation by your developers, or collaboratively with me." },
        { title: "Measure and improve", body: "Track behavior and enquiries, then iterate on evidence." },
      ],
    },
    industriesIntro:
      "Landing page quality decides results most when the enquiry is high-value: [hair transplant](industry:hair-transplant) and [dental](industry:dental-clinics) clinics, [restaurants](industry:restaurants), [Muay Thai camps](industry:muay-thai) and [real estate](industry:real-estate).",
    marketsIntro: "Page variants can reflect country-level differences in offer, trust cues and contact preference.",
    faqs: [
      { q: "Do you build the pages or just design them?", a: "Either, depending on your setup. Your developers can build from my specifications, or we can collaborate on implementation. I don't take over your main website." },
      { q: "Do we need a separate website for Arabic?", a: "Not necessarily. Dedicated landing pages or a language section on your current site can be enough to start." },
      { q: "Can pages include before/after images or patient stories?", a: "Only when you have the rights, consent and evidence to do so and local advertising rules allow it. I don't invent testimonials or cases." },
      { q: "How is success measured?", a: "Qualified enquiries and the rate at which visitors become conversations, tracked with [conversion tracking](service:conversion-tracking)." },
    ],
    ctaTitle: "Turn GCC traffic into qualified conversations",
    ctaBody: "A market audit reviews your current pages and shows what a GCC-ready journey would need.",
  },

  "conversion-tracking": {
    navLabel: "Analytics & Tracking",
    cardTitle: "Analytics, Tracking & Measurement",
    cardSummary: "GA4, Google Tag Manager and attribution that show which GCC campaigns create qualified leads, consultations and customers.",
    metaTitle: "GA4, Tracking & Measurement for GCC Campaigns | Wadhah Belhassen",
    metaDescription:
      "GA4, Google Tag Manager, conversion tracking and qualified-lead measurement for businesses in Thailand and Malaysia running GCC campaigns. Measure enquiries, not just clicks.",
    h1: "Analytics, Tracking & Measurement",
    valueProp:
      "End-to-end measurement from Arabic search click to qualified enquiry, consultation or booking, so GCC budget decisions rest on evidence.",
    problem: {
      title: "The problem: spending without knowing what worked",
      body: [
        "Many accounts count any form submission or button click as a conversion. WhatsApp and LINE chats, phone calls and offline consultations often go unmeasured, which means campaigns optimize toward the wrong signal.",
        "Without trustworthy data you can't tell which country, keyword or page is producing genuine customers.",
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        { title: "GA4 and Google Tag Manager", body: "Clean event structure, conversions and audiences for the GCC channel, built on your existing setup." },
        { title: "Conversion tracking", body: "Form, call, WhatsApp and LINE actions tracked where it is technically and legally appropriate." },
        { title: "Qualified lead measurement", body: "A definition of qualified enquiry, consultation, booking and customer for your business, measured stage by stage." },
        { title: "Customer journey measurement", body: "Where GCC prospects drop between first search, page, first reply and consultation." },
        { title: "CRM and offline conversion feedback", body: "Where appropriate, your team's lead statuses flow back so campaigns optimize toward real outcomes." },
      ],
    },
    collaboration: {
      title: "How this works with your existing team",
      intro: "Tracking is designed to coexist with whatever analytics you already run, without breaking it.",
      yourTeam: ["Your developers keep control of the site and approve code changes.", "Your agency's current tracking stays intact.", "Your team handles lead follow-up and shares quality feedback."],
      wadhah: [
        "Measurement strategy and GA4/GTM configuration.",
        "Conversion definitions and attribution logic.",
        "Reporting and data-quality checks.",
      ],
    },
    process: {
      title: "Process",
      steps: [
        { title: "Tracking audit", body: "What is measured today, what is broken and what is missing." },
        { title: "Measurement plan", body: "Events, conversions and definitions agreed with your team." },
        { title: "Implement and validate", body: "GTM and GA4 setup, tested end to end before any budget scales." },
        { title: "Report and refine", body: "Ongoing reporting with data-quality checks." },
      ],
    },
    industriesIntro:
      "Tracking is critical where the sale happens after the click: [hair transplant](industry:hair-transplant) and [medical tourism](industry:medical-tourism) clinics, [restaurants](industry:restaurants) (directions, calls and reservations), [real estate](industry:real-estate) and [hotels](industry:hotels).",
    marketsIntro: "Reporting is structured by country so each GCC market can be compared on cost per qualified enquiry.",
    faqs: [
      { q: "Will this interfere with our existing GA4 or tags?", a: "No. I work with your existing GA4 and GTM setup, auditing first and then extending it, with your developers' approval." },
      { q: "Can you track WhatsApp or LINE enquiries?", a: "Click-to-chat actions can be tracked. Matching them to real outcomes needs lead-status feedback from your team, which I help structure." },
      { q: "What about privacy and consent?", a: "Tracking is configured with consent requirements in mind; legal compliance for your business and markets remains your responsibility, with advice from qualified counsel." },
      { q: "Do I need this before running ads?", a: "Strongly recommended. Without it, [Google Ads](service:google-ads-gcc) cannot learn which clicks matter." },
    ],
    ctaTitle: "Know which GCC campaigns create customers",
    ctaBody: "A market audit includes a review of your current tracking and what's needed to measure the GCC channel properly.",
  },
};
