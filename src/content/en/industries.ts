import type { Dictionary } from "../types";

const medicalResponsibility = (clinic: string[]): NonNullable<Dictionary["industries"]["dental-clinics"]["responsibility"]> => ({
  title: "Clear roles: acquisition vs. patient care",
  intro: "Marketing and medical responsibilities stay clearly separated.",
  wadhah: ["Acquisition strategy and optimization", "Search campaigns, landing journeys and tracking", "Reporting on enquiries and consultations booked"],
  client: clinic,
  note: "No medical outcomes, treatment results or patient volumes are promised or implied. All clinical decisions belong to your licensed medical team.",
});

export const industries: Dictionary["industries"] = {
  "hair-transplant": {
    navLabel: "Hair Transplant",
    cardTitle: "Hair Transplant Clinics",
    cardSummary: "Acquire prospective patients searching for hair-restoration treatments in Thailand and Bangkok.",
    cardLink: "Hair Transplant GCC Growth",
    model: "Qualified consultation requests",
    metaTitle: "Hair Transplant Clinic Marketing for GCC Patients | Wadhah Belhassen",
    metaDescription:
      "Help Thailand hair transplant clinics reach Arabic-speaking patients with Google Ads, Arabic landing pages and tracking — alongside your existing team.",
    h1: "GCC Patient Acquisition for Hair Transplant Clinics in Thailand",
    intro:
      "A GCC enquiry funnel built for hair-restoration clinics in Bangkok and across Thailand, designed to run alongside your clinic team, agency and website developers.",
    problem: {
      title: "The market problem",
      body: [
        "Hair transplant is a considered decision. Prospects compare destinations, clinics and techniques for weeks, and many begin in Arabic, then move to WhatsApp to ask questions before any booking.",
        "Clinics in Thailand compete for these searches with limited Arabic presence: pages are often translated English, tracking ends at a form submission, and the journey is not designed for a prospect considering travel abroad.",
      ],
    },
    opportunity: {
      title: "The GCC opportunity",
      body: [
        "Arabic-speaking prospects search for hair-restoration treatments abroad and expect information, reassurance and fast contact in their own language. A dedicated acquisition path lets a clinic be present at the moments of research and comparison.",
        "The opportunity is visibility and qualified enquiry, not guaranteed volume: country by country, Saudi Arabia, UAE, Kuwait, Qatar and Oman each behave differently and deserve separate measurement.",
      ],
    },
    funnel: {
      title: "Recommended acquisition funnel",
      intro: "A five-stage path from search to consultation request.",
      steps: [
        { title: "Arabic and English search", body: "Campaigns on treatment, destination and clinic-comparison queries." },
        { title: "Localized landing page", body: "A page that answers common pre-contact questions and presents your clinic factually." },
        { title: "Low-friction contact", body: "A short form plus WhatsApp or LINE entry, with clear expectations on reply time." },
        { title: "Clinic team follow-up", body: "Your coordinators handle the qualified enquiry and consultation booking." },
        { title: "Measurement loop", body: "Enquiry quality fed back to Google Ads so optimization follows real consultations." },
      ],
    },
    servicesIntro: "These services make up the hair transplant acquisition path:",
    serviceNotes: {
      "gcc-market-entry": "Decide which GCC countries and treatment queries deserve budget first.",
      "google-ads-gcc": "Capture active treatment-research searches in Arabic and English.",
      "arabic-landing-pages": "Give prospects the information and trust cues they look for before contacting a clinic abroad.",
      "conversion-tracking": "Track enquiries from form, WhatsApp and LINE through to consultations booked.",
    },
    responsibility: medicalResponsibility(["Medical advice and diagnosis", "Consultations and treatment planning", "Treatment and aftercare", "Patient communication and care"]),
    ctaTitle: "Explore your GCC patient acquisition opportunity",
    ctaBody: "Request a market audit for your clinic and see where Arabic-speaking demand and your offer meet.",
  },

  "dental-clinics": {
    navLabel: "Dental",
    cardTitle: "Dental Clinics",
    cardSummary: "Build GCC acquisition funnels for dental implants, veneers, cosmetic dentistry and Hollywood Smile treatments.",
    cardLink: "Dental Patient Acquisition",
    model: "Booked consultations, by treatment and country",
    metaTitle: "Dental Clinic Marketing for GCC Patients in Thailand | Wadhah Belhassen",
    metaDescription:
      "Arabic SEO, Google Ads and landing pages that help Thailand dental clinics reach GCC patients for implants, veneers and cosmetic dentistry.",
    h1: "GCC Patient Acquisition for Dental Clinics in Thailand",
    intro:
      "Search-led acquisition for implant, veneer and cosmetic dentistry clinics that want a measurable Arabic-speaking patient channel, added to the marketing you already run.",
    problem: {
      title: "The market problem",
      body: [
        "Cosmetic dental treatment abroad is researched through many searches: procedure names, pricing questions, clinic reviews and destination comparisons — frequently in Arabic. Most clinics only appear for English terms.",
        "Where Arabic content exists, it is often generic. It doesn't distinguish between treatments such as implants and veneers, or address what a traveling patient needs to know about visits and timelines.",
      ],
    },
    opportunity: {
      title: "The GCC opportunity",
      body: [
        "Organic and paid visibility on Arabic treatment queries lets a clinic enter the consideration set earlier. Treatment-specific pages let you speak to each decision, from a single implant to a full smile makeover.",
        "Because search intent differs by treatment and by country, structure and measurement make it clear which combinations produce qualified consultations.",
      ],
    },
    funnel: {
      title: "Recommended acquisition funnel",
      intro: "A search-first path that compounds through content.",
      steps: [
        { title: "Treatment-level search presence", body: "[Arabic SEO](service:arabic-seo) pages and ads per treatment: implants, veneers, cosmetic dentistry." },
        { title: "Treatment-specific landing pages", body: "Clear information, process overview and factual clinic details." },
        { title: "Consultation request", body: "Form and messaging options designed for patients planning travel." },
        { title: "Clinic follow-up", body: "Your team qualifies, advises and books consultations." },
        { title: "Measure by treatment and country", body: "See which treatment and market combinations create qualified consultations." },
      ],
    },
    servicesIntro: "The dental acquisition path draws on these services:",
    serviceNotes: {
      "arabic-seo": "Treatment pages that capture long-term Arabic demand for implants, veneers and cosmetic dentistry.",
      "google-ads-gcc": "Immediate visibility on high-intent treatment queries while organic rankings build.",
      "arabic-landing-pages": "Treatment-specific pages that fit how traveling patients evaluate a clinic.",
      "conversion-tracking": "Track which treatments and countries lead to real consultations.",
    },
    responsibility: medicalResponsibility(["Clinical assessment and diagnosis", "Treatment planning and consultation", "Dental treatment and aftercare", "Patient care and communication"]),
    ctaTitle: "Plan your GCC dental patient channel",
    ctaBody: "A market audit shows Arabic demand around your treatments and how to capture it without disrupting your current marketing.",
  },

  "medical-tourism": {
    navLabel: "Medical Tourism",
    cardTitle: "Medical & Aesthetic Clinics",
    cardSummary: "Reach Arabic-speaking international patients through localized search journeys and measurable consultation funnels.",
    cardLink: "Medical Tourism Growth",
    model: "Qualified patient enquiries and consultations",
    metaTitle: "Medical Tourism Marketing for GCC Patients | Wadhah Belhassen",
    metaDescription:
      "Medical and aesthetic clinic marketing in Thailand for Arabic-speaking patients: market entry, Arabic SEO, Google Ads and measurable consultation funnels.",
    h1: "Medical Tourism: GCC Patient Acquisition for Thailand Clinics and Providers",
    intro:
      "Dedicated acquisition journeys for medical, aesthetic and wellness providers and medical-tourism businesses that want to reach Arabic-speaking international patients, with their own teams fully in control.",
    problem: {
      title: "The market problem",
      body: [
        "Medical tourism buyers are cautious. They compare providers across countries, look for trust signals and often prefer to ask questions on messaging apps before committing to travel.",
        "Providers usually market all treatments in one English funnel. That makes it hard to see which Arabic-speaking audiences, services and countries create worthwhile consultations.",
      ],
    },
    opportunity: {
      title: "The GCC opportunity",
      body: [
        "Medical tourism is the strongest current opportunity because high-value, research-heavy decisions suit search-led acquisition. Providers who structure Arabic journeys by service and country gain clarity about what works.",
        "The same approach applies to cosmetic, aesthetic, wellness and intermediary businesses: clear visibility, credible information and a measurable path to consultation.",
      ],
    },
    funnel: {
      title: "Recommended acquisition funnel",
      intro: "A funnel that mirrors how patients research, with the provider in control after enquiry.",
      steps: [
        { title: "Market and service prioritization", body: "Select the specialties and GCC countries to start with." },
        { title: "Search campaigns", body: "Arabic and English campaigns plus [Arabic SEO](service:arabic-seo) for durable visibility." },
        { title: "Localized landing experience", body: "Service-specific pages with factual information and transparent next steps." },
        { title: "Qualified enquiry", body: "Forms and chat entries that capture only what your team needs to respond." },
        { title: "Provider consultation", body: "Your medical and coordination team take over from here." },
      ],
    },
    servicesIntro: "A medical tourism channel typically combines:",
    serviceNotes: {
      "gcc-market-entry": "Choose specialties and countries based on demand rather than assumption.",
      "arabic-seo": "Build durable Arabic visibility around specialties and destinations.",
      "google-ads-gcc": "Capture active research while content and trust build.",
      "conversion-tracking": "Connect marketing activity to consultations booked.",
    },
    responsibility: medicalResponsibility(["Medical advice and diagnosis", "Patient consultation", "Treatment and clinical decisions", "Patient care before, during and after treatment"]),
    ctaTitle: "Map your medical tourism opportunity in the GCC",
    ctaBody: "Request a market audit to see which services and countries offer the clearest route to qualified consultations.",
  },

  restaurants: {
    navLabel: "Restaurants",
    cardTitle: "Restaurants & F&B",
    cardSummary:
      "Help restaurants in Bangkok reach Arabic-speaking and international customers through Google Search, Google Maps, Local SEO, multilingual landing experiences and measurable local acquisition.",
    cardLink: "Restaurant Local Acquisition",
    model: "Directions, calls, reservations and physical visits",
    metaTitle: "Restaurant Marketing in Bangkok: Google Maps, Local SEO & Ads | Wadhah Belhassen",
    metaDescription:
      "Local SEO, Google Maps visibility, Google Ads and multilingual landing pages for Bangkok restaurants targeting Arabic-speaking tourists and international customers.",
    h1: "Arabic & International Customer Acquisition for Bangkok Restaurants",
    intro:
      "Help your restaurant become easier to discover, choose and visit for Arabic-speaking tourists and international customers in Bangkok.",
    problem: {
      title: "The market problem: being chosen in seconds",
      body: [
        "A restaurant visit is decided quickly and locally. A visitor in Bangkok opens Google Maps, compares a handful of places by photos, ratings, distance and opening hours, and chooses. If your listing is incomplete, your menu is hard to read or your reviews don't reflect what you offer, you lose the visit before anyone sees your food.",
        "For international visitors there is an extra gap: menus, descriptions and reviews are often only in Thai or English, and the terms visitors actually search for — halal, family-friendly, premium dining, Arabic food — may not appear on the listing or website at all.",
      ],
    },
    opportunity: {
      title: "The opportunity: be easier to discover, choose and visit",
      body: [
        "Arabic-speaking tourists are one audience among several international visitors in Bangkok. Whether they search in Arabic, English or both depends on the person and the query, so acquisition should follow real search demand rather than assume one language.",
        "Restaurants that keep their Google Business Profile accurate, publish clear multilingual information and track directions, calls and reservations can see which searches and channels bring guests through the door. Rankings and visit volumes are never guaranteed.",
      ],
    },
    journeys: {
      title: "Two ways guests find a Bangkok restaurant",
      intro: "Restaurants win on local discovery. Two journeys matter: guests already in Bangkok, and GCC travelers planning before they arrive.",
      flows: [
        {
          label: "Tourist already in Bangkok",
          steps: ["Tourist in Bangkok", "Google / Google Maps search", "Restaurant discovery", "Menu, reviews, location and trust", "Directions, call, LINE, WhatsApp or reservation", "Restaurant visit"],
        },
        {
          label: "GCC traveler planning a Bangkok trip",
          steps: ["GCC traveler planning a Bangkok trip", "Searches for restaurants, halal food, Arabic food or premium dining", "Discovers the restaurant", "Saves the location or makes contact", "Visits during the Bangkok stay"],
        },
      ],
      note: "Not every GCC visitor searches in Arabic. Campaigns and content use Arabic, English or both, depending on what search data shows for your cuisine, location and audience.",
    },
    channels: {
      title: "Where restaurant guests are won",
      intro: "These surfaces decide whether a guest finds, trusts and reaches your restaurant.",
      items: [
        { title: "Google Business Profile", body: "Accurate hours, categories, photos, menu links, attributes and contact options, kept consistent. This is the foundation of Maps visibility." },
        { title: "Google Maps & Local SEO", body: "Local keyword research and listing signals that help you appear for \"near me\" and area-based searches in Bangkok neighbourhoods." },
        { title: "Google Search in Arabic and English", body: "Demand research across both languages for cuisine, halal, family and premium-dining queries, supported by [Arabic SEO](service:arabic-seo)." },
        { title: "Multilingual landing pages", body: "Fast mobile pages with menu, location, hours and booking in the languages your guests use, built as [Arabic landing pages](service:arabic-landing-pages) where Arabic is relevant." },
        { title: "Google Ads", body: "Search and local campaigns around tourist peaks and events, with budgets you control. See [Google Ads for GCC](service:google-ads-gcc)." },
        { title: "Reviews & reputation", body: "A review strategy built on genuine feedback and consistent replies. No fake reviews and no review gating." },
        { title: "Measurement", body: "Direction requests, calls, reservation clicks and LINE or WhatsApp taps tracked where technically possible with GA4 and GTM. Walk-ins can't be tracked directly, so reporting reads trends instead of claiming exact attribution. See [conversion tracking](service:conversion-tracking)." },
      ],
    },
    funnel: {
      title: "Recommended acquisition approach",
      intro: "Built around local discovery and the visit, not around leads.",
      steps: [
        { title: "Local audit", body: "Review your Google Business Profile, Maps presence, reviews, menu access and competing listings around your location." },
        { title: "Demand research", body: "Arabic and English search demand for your cuisine, area and audience, checked in Google Keyword Planner." },
        { title: "Listing and page foundation", body: "Close profile gaps and build a fast multilingual page with menu, map, hours and contact options." },
        { title: "Campaigns where they make sense", body: "[Google Ads](service:google-ads-gcc) around peak tourist periods, once the foundation converts." },
        { title: "Measure visit signals", body: "Track directions, calls, reservation and chat clicks, and review the trends monthly with your team." },
      ],
    },
    servicesIntro: "A restaurant acquisition setup typically combines:",
    serviceNotes: {
      "arabic-seo": "Arabic and English search visibility, including Google Business Profile and Maps signals.",
      "google-ads-gcc": "Search campaigns timed to tourist demand around your location.",
      "arabic-landing-pages": "Menu, map, hours and booking in a fast, mobile-first page for international guests.",
      "conversion-tracking": "Directions, calls, reservations and chat taps measured where technically possible.",
      "gcc-market-entry": "Check whether GCC visitors are a meaningful audience for your location and cuisine before investing.",
    },
    ctaTitle: "Make your restaurant easier to find, choose and visit",
    ctaBody: "Request a market audit to see how international and Arabic-speaking guests currently find restaurants like yours in Bangkok.",
  },

  hotels: {
    navLabel: "Hotels",
    cardTitle: "Hotels & Hospitality",
    cardSummary: "Increase visibility and direct-booking opportunities among GCC travelers visiting Thailand.",
    cardLink: "Hotel Direct Bookings",
    model: "Direct bookings and booking enquiries",
    metaTitle: "Hotel & Hospitality Marketing for GCC Travelers in Thailand | Wadhah Belhassen",
    metaDescription:
      "Arabic search visibility and direct-booking growth for Thailand hotels and premium hospitality targeting GCC travelers.",
    h1: "GCC Traveler Acquisition for Thailand Hotels and Premium Hospitality",
    intro:
      "Help hotels, resorts and premium hospitality venues be found by Arabic-speaking guests, and give them a reason to book directly — supported by your current revenue and marketing teams.",
    problem: {
      title: "The market problem",
      body: [
        "GCC travelers often discover hotels through online travel platforms, where margins are shared and the relationship is owned elsewhere. Direct channels in Arabic are rarely developed.",
        "Local search presence matters too: Arabic business listings, reviews and menus affect decisions for hotel stays and on-site dining.",
      ],
    },
    opportunity: {
      title: "The GCC opportunity",
      body: [
        "Properties with Arabic visibility, clear information on facilities and straightforward direct-booking paths can capture demand earlier in the research process.",
        "Premium hospitality venues benefit from stronger Arabic local-search profiles that help travelers find them while in Thailand. For stand-alone dining businesses, see the dedicated [restaurants](industry:restaurants) approach.",
      ],
    },
    funnel: {
      title: "Recommended acquisition funnel",
      intro: "From destination search to direct booking enquiry.",
      steps: [
        { title: "Arabic destination and hotel search", body: "Targeting Bangkok, Phuket, Pattaya and other destination queries." },
        { title: "Arabic-language property content", body: "Pages covering facilities, family needs and policies guests look for." },
        { title: "Direct enquiry or booking", body: "Booking engine or enquiry path with a clear reason to book direct." },
        { title: "Revenue team follow-up", body: "Your reservations team handles requests and special arrangements." },
        { title: "Measure by market", body: "Bookings and revenue attributed by GCC country." },
      ],
    },
    servicesIntro: "Hotel and hospitality growth leans on:",
    serviceNotes: {
      "gcc-market-entry": "Understand which GCC source markets suit your property and season.",
      "arabic-seo": "Arabic content and local search presence for hotels and premium venues.",
      "google-ads-gcc": "Reach GCC travelers while they compare destinations and stays.",
    },
    ctaTitle: "Grow direct bookings from GCC travelers",
    ctaBody: "A market audit shows where Arabic-speaking guests find properties like yours today.",
  },

  travel: {
    navLabel: "Travel",
    cardTitle: "Travel Agencies",
    cardSummary: "Reach Arabic-speaking travelers before and during their Thailand journey.",
    cardLink: "Travel Agency Growth",
    model: "Tour enquiries and bookings",
    metaTitle: "Travel Agency Marketing for GCC Travelers to Thailand | Wadhah Belhassen",
    metaDescription:
      "Help Thailand tour operators and travel agencies reach Arabic-speaking travelers with Google Ads and Arabic SEO, from planning to in-destination.",
    h1: "GCC Traveler Acquisition for Thailand Tour Operators and Travel Agencies",
    intro:
      "Reach Arabic-speaking travelers during planning and while they are already in Thailand, with campaigns that complement your existing sales and distribution.",
    problem: {
      title: "The market problem",
      body: [
        "Tour operators and agencies in Thailand often rely on aggregators and English-language search. Arabic-speaking travelers searching for tours, transfers and experiences rarely find tailored offers.",
        "Demand also has two moments — before arrival and in-destination — and each needs a different message and channel.",
      ],
    },
    opportunity: {
      title: "The GCC opportunity",
      body: [
        "Operators who publish Arabic-friendly itineraries and appear on Arabic searches can reach guests earlier, at lower dependency on marketplaces.",
        "In-destination search and messaging-first booking suit Thailand's short-lead experiences, such as day tours and private transport.",
      ],
    },
    funnel: {
      title: "Recommended acquisition funnel",
      intro: "Two entry points, one measurable system.",
      steps: [
        { title: "Pre-trip search", body: "Arabic and English campaigns for itineraries, packages and family travel." },
        { title: "In-destination search", body: "Mobile-first campaigns on tours, transfers and experiences while travelers are in Thailand." },
        { title: "Itinerary pages", body: "Clear pricing logic, inclusions and policies in Arabic." },
        { title: "Messaging-first booking", body: "WhatsApp or LINE enquiry paths for fast confirmation." },
        { title: "Measurement", body: "Bookings by country and moment of search." },
      ],
    },
    servicesIntro: "Travel businesses typically combine:",
    serviceNotes: {
      "gcc-market-entry": "Identify the GCC markets and experiences with the strongest fit.",
      "google-ads-gcc": "Capture both pre-trip and in-destination demand.",
      "arabic-seo": "Build lasting visibility for Arabic destination and itinerary searches.",
    },
    ctaTitle: "Reach GCC travelers earlier",
    ctaBody: "A market audit maps where Arabic-speaking travelers search for Thailand tours and what a campaign could look like.",
  },

  "muay-thai": {
    navLabel: "Muay Thai",
    cardTitle: "Muay Thai & Fitness",
    cardSummary: "Generate international enquiries for training camps, private sessions and fitness experiences.",
    cardLink: "Muay Thai Camp Enquiries",
    model: "Trial sessions, camp enquiries and bookings",
    metaTitle: "Muay Thai Camp Marketing for International Students | Wadhah Belhassen",
    metaDescription:
      "Google Ads and localized landing pages that help Thailand Muay Thai camps and fitness businesses attract Arabic-speaking international enquiries.",
    h1: "International Enquiries for Muay Thai Camps and Fitness Businesses",
    intro:
      "Help Muay Thai camps and fitness experiences in Thailand generate qualified enquiries from Arabic-speaking travelers and students, added to your current social and booking channels.",
    problem: {
      title: "The market problem",
      body: [
        "Most camps rely on Instagram, word of mouth and booking platforms in English. Arabic-speaking prospects searching for training in Thailand find little that speaks to their questions about accommodation, schedule and suitability.",
        "Camps also differ by audience — beginners, families, fighters — yet a single generic page serves them all.",
      ],
    },
    opportunity: {
      title: "The GCC opportunity",
      body: [
        "A focused Arabic page and a small, well-targeted search campaign can open a channel you currently can't measure. Camps can also pair training with travel planning for visitors who are already coming to Thailand.",
        "Because the budget need is modest compared with clinics, small tests give quick evidence.",
      ],
    },
    funnel: {
      title: "Recommended acquisition funnel",
      intro: "A lightweight funnel suited to camp operations.",
      steps: [
        { title: "Targeted search", body: "Arabic and English queries for training camps, private sessions and packages." },
        { title: "Audience-specific page", body: "Content for beginners, families and serious trainees." },
        { title: "WhatsApp or LINE enquiry", body: "Fast conversation about dates, accommodation and goals." },
        { title: "Camp follow-up", body: "Your team confirms suitability and bookings." },
        { title: "Review and refine", body: "Cost per enquiry and booking by country." },
      ],
    },
    servicesIntro: "A Muay Thai enquiry channel needs:",
    serviceNotes: {
      "google-ads-gcc": "Small, targeted campaigns for training and package searches.",
      "arabic-landing-pages": "Pages that answer accommodation, schedule and suitability questions in Arabic.",
      "conversion-tracking": "Measure enquiries from messaging apps as well as forms.",
    },
    ctaTitle: "Test a GCC enquiry channel for your camp",
    ctaBody: "A market audit shows whether Arabic-speaking demand for training in Thailand is worth a focused test.",
  },

  "real-estate": {
    navLabel: "Real Estate",
    cardTitle: "Real Estate",
    cardSummary: "Generate qualified Arabic-speaking enquiries for Thailand property and investment opportunities.",
    cardLink: "Real Estate Enquiries",
    model: "Qualified property enquiries",
    metaTitle: "Real Estate Marketing for GCC Buyers in Thailand | Wadhah Belhassen",
    metaDescription:
      "Qualified Arabic-speaking property enquiries for Thailand developers and agents: market entry, localized landing pages, Google Ads and lead tracking.",
    h1: "Qualified GCC Enquiries for Thailand Real Estate",
    intro:
      "A structured acquisition path for developers and agents who want qualified Arabic-speaking enquiries for Thailand property, supported by your current sales team and website.",
    problem: {
      title: "The market problem",
      body: [
        "Property purchases are slow, high-value and regulated. Foreign buyers need clear information on ownership structures, process and what to expect — something English-only listings rarely provide.",
        "Lead volume also isn't the issue; lead quality is. Without qualification and tracking, sales teams spend time on enquiries that were never serious.",
      ],
    },
    opportunity: {
      title: "The GCC opportunity",
      body: [
        "Arabic-speaking buyers researching investment or lifestyle property in Thailand can be reached with country-specific messaging and a qualification step that respects your sales team's time.",
        "A properly measured channel shows which projects, countries and messages create serious conversations.",
      ],
    },
    funnel: {
      title: "Recommended acquisition funnel",
      intro: "Built around qualification, not just volume.",
      steps: [
        { title: "Market selection", body: "Choose GCC countries and buyer types with real potential." },
        { title: "Search and intent campaigns", body: "Arabic and English campaigns around location, property type and investment queries." },
        { title: "Project landing pages", body: "Factual project information, with ownership guidance reviewed by your legal advisers." },
        { title: "Qualified enquiry", body: "Questions on budget, timeline and purpose to filter serious interest." },
        { title: "Sales follow-up and feedback", body: "Your team's lead statuses flow back to optimize campaigns." },
      ],
    },
    servicesIntro: "A real estate acquisition path uses:",
    serviceNotes: {
      "gcc-market-entry": "Select the buyer markets that suit your inventory and pricing.",
      "arabic-landing-pages": "Project pages that address foreign buyers' questions in Arabic.",
      "google-ads-gcc": "Reach property and investment searchers in target countries.",
      "conversion-tracking": "Link ad spend to qualified leads and sales-team outcomes.",
    },
    ctaTitle: "Build a qualified GCC property enquiry channel",
    ctaBody: "A market audit reviews your inventory and sales process to see where GCC demand could fit.",
  },
};
