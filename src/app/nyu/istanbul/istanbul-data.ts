/**
 * Content for /nyu/istanbul.
 *
 * The themes come from the post-departure deck ("FINAL OUTCOME.pdf", Session 1,
 * Tülin Erdem) — sixteen cards plus the closing conclusions, transcribed as
 * they appear rather than paraphrased.
 */

export type Theme = { title: string; points: string[] };

export const themes: Theme[] = [
  {
    title: "Agility as Survival",
    points: [
      "Short planning cycles (monthly/quarterly)",
      "Constant repricing & FX adjustments",
      "Decentralized decision-making",
      "Adaptability over optimization",
    ],
  },
  {
    title: "Resilience Through Redundancy",
    points: [
      "Multiple suppliers despite cost",
      "Vertical integration strategies",
      "Balance sheet conservatism",
      "Optionality over efficiency",
    ],
  },
  {
    title: "Conglomerates as Ecosystems",
    points: [
      "Internal capital markets",
      "Talent pipelines",
      "Risk-sharing networks",
      "Firms substitute for weak institutions",
    ],
  },
  {
    title: "Pragmatic AI Adoption",
    points: [
      "ROI-driven implementation",
      "Operational efficiency focus",
      "Fast pilot-to-production cycles",
      "Constraint: talent scarcity",
    ],
  },
  {
    title: "Human Capital Paradox",
    points: [
      "Strong (engineering) talent",
      "High brain drain",
      "Retention via culture & exposure",
      "Talent strategy is critical",
    ],
  },
  {
    title: "Entrepreneurship Dynamics",
    points: [
      "Necessity-driven entrepreneurship",
      "Cash-flow-first mindset",
      "Fast execution",
      "Lower tolerance for long burn models",
    ],
  },
  {
    title: "State-Business Interplay",
    points: [
      "Regulation impacts strategy",
      "Public-private partnerships critical",
      "Geopolitical awareness required",
      "Policy shifts are strategic variables",
    ],
  },
  {
    title: "Global vs Local Tension",
    points: [
      "Dual operating systems",
      "Global standards vs local realities",
      "Adaptation required",
      "Balance is key to success",
    ],
  },
  {
    title: "Export Orientation",
    points: [
      "Hedge domestic volatility",
      "Foreign currency revenues",
      "Global competitiveness",
      "Exports as risk management",
    ],
  },
  {
    title: "Trust & Relationships",
    points: [
      "Informal networks critical",
      "Trust over contracts",
      "Social capital drives business",
      "Long-term relationships matter",
    ],
  },
  {
    title: "Speed as Advantage",
    points: ["Fast decision-making", "Quick pivots", "Trade-off: less structure"],
  },
  {
    title: "Digital Leapfrogging",
    points: [
      "Advanced banking tech",
      "Rapid SME digitalization",
      "Skipping legacy systems",
      "Accelerated modernization",
    ],
  },
  {
    title: "Crisis as Capability",
    points: [
      "Built through repeated shocks",
      "Scenario planning mindset",
      "Leadership resilience",
      "Crisis readiness embedded",
    ],
  },
  {
    title: "Family + Professional Hybrid",
    points: [
      "Long-term orientation",
      "Professional management",
      "Speed + stability",
      "Governance complexity risk",
    ],
  },
  {
    title: "Brand as Trust Anchor",
    points: [
      "Reduces uncertainty",
      "Signals reliability",
      "Critical in volatile environments",
      "Reputation as asset",
    ],
  },
  {
    title: "Key Strategic Conclusions",
    points: [
      "Continuous adaptation is core capability",
      "Redundancy is rational",
      "Volatility builds competitive advantage",
    ],
  },
];

export const learningOutcomes = [
  "Mapped Black Sea/Middle East corridor dynamics and their effect on FDI flows.",
  "Analyzed inflation and FX pass-through for consumer-facing businesses.",
  "Outlined cultural and regulatory considerations for market entry sequencing.",
];

export type Org = { name: string; speakers: string[]; href?: string };

/** Hosts and speakers across the week, in the order they were met. */
export const organisations: Org[] = [
  {
    name: "Boğaziçi University",
    speakers: ["Dr. Ceyhun Elgin — Professor of Economics, macroeconomic lecture"],
    href: "https://bogazici.edu.tr/en_US",
  },
  {
    name: "Rönesans Holding",
    speakers: [
      "Mr. Ömer Yıldız — CEO, Rönesans Concessions",
      "Ms. Handan Saygın — Chief Investor Relations Officer",
      "Ms. Evrim Atalas — Sustainability and Environmental Director",
    ],
    href: "https://www.ronesans.com/en",
  },
  {
    name: "Akbank",
    speakers: [
      "Mr. Hakan Binbaşgil — Vice Chairman and Executive Board Member",
      "Ms. Şebnem Dağ Güven — Executive Vice President, Digital Solutions and Strategy",
    ],
    href: "https://www.akbank.com/en",
  },
  {
    name: "Milteks",
    speakers: ["Belce Bilgingulluoglu — Senior Director of Development"],
    href: "https://www.milteks.com.tr/en",
  },
  {
    name: "The Walt Disney Company Türkiye",
    speakers: ["Onur Kumbracı — Operations Director, News & Sports"],
    href: "https://thewaltdisneycompany.com/",
  },
  {
    name: "Mercedes-Benz Türk",
    speakers: [
      "Volkan Tutal — Director, Bus Production",
      "Emre Kuzucu — Director, Bus Procurement",
    ],
    href: "https://www.mercedes-benz.com.tr/",
  },
  {
    name: "LOGO",
    speakers: ["Mr. Tuğrul Tekbulut — Founder, former CEO, Chair of the Board of Trustees"],
    href: "https://www.logo.com.tr/en",
  },
  {
    name: "Çiya Sofrası",
    speakers: ["Chef Musa Dağdeviren — Chef-Owner"],
    href: "https://maps.app.goo.gl/gu1jb6KrTngmsiU27",
  },
  {
    name: "Koç Holding",
    speakers: [
      "Mr. Arif Emre Keleş — Strategy Executive Director",
      "Ms. Hayriye Karadeniz — Information Technologies Coordinator",
      "Ms. Burçun İmir — Corporate Communications Director",
      "Mr. Halil Şirin — Human Resources Coordinator",
      "Mr. Ömer Meserretçioğlu — Investment & Business Development Coordinator",
    ],
    href: "https://www.kocholding.com.tr/en",
  },
];

export type Place = {
  kind: string;
  name: string;
  note: string;
  href: string;
  imageUrl?: string;
  /**
   * Substring of a blob pathname. A photograph of our own outranks the site's
   * logo, and is framed as a photograph rather than padded like a logo. The
   * `imageUrl` below it stays as the fallback for when the store is unreachable.
   */
  imageMatch?: string;
};

/** Images are the sites' own og:image, so they change when those sites do. */
export const places: Place[] = [
  {
    kind: "Restaurant",
    name: "Aheste",
    note: "Meze rethought, plate by plate, on Beyoğlu's back streets.",
    href: "https://ahesterestaurant.com/",
    imageMatch: "aheste",
    imageUrl:
      "https://static1.squarespace.com/static/55214176e4b019d71221d355/t/6523b238919e496206942a2b/1696838200074/AHESTE_NEW_LOGO.png?format=1500w",
  },
  {
    kind: "Restaurant",
    name: "Çiya Sofrası",
    note: "Chef Musa Dağdeviren's Kadıköy kitchen, and an argument that regional Anatolian cooking is worth preserving.",
    href: "https://maps.app.goo.gl/gu1jb6KrTngmsiU27",
    imageMatch: "ciya_1",
  },
  {
    kind: "Television",
    name: "Midnight at the Pera Palace",
    note: "A journalist slips between present-day Istanbul and 1919 through a hotel room door.",
    href: "https://www.netflix.com/title/81212136",
    imageUrl:
      "https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUIwfPttWEqAsXgJFaAtCre5gG3YjyhAdgT8JvO9_rkI6Fs8vmAcaUFEwSFk_yXuPR0ussN44ltj5fsU1HRRE-si8jI9CfU8n3kh.jpg?r=014",
  },
  {
    kind: "Hotel",
    name: "Pera Palace",
    note: "Built in 1892 for passengers off the Orient Express, and the hotel the series is named for.",
    href: "https://perapalace.com/en/",
    imageUrl: "https://perapalace.com/wp-content/uploads/2024/09/Pera-Dis-Gorsel-2.png",
  },
];

export type VideoTile = {
  id: string;
  title: string;
  note: string;
  /**
   * Names this video for a link elsewhere on the page: an anchor of `#slug`
   * opens it in the wall. Only videos something links to need one.
   */
  slug?: string;
};

export const videos: VideoTile[] = [
  {
    id: "7eJg4-j6UOU",
    title: "Istanbul, at street level",
    note: "The short that started the reel.",
  },
  { id: "pZKcuqwnqOQ", title: "Street scenes", note: "Walking the city between sessions." },
  {
    id: "HZj1HyotM2g",
    title: "Professor Tülin Erdem addresses guests",
    note: "Opening the evening in Istanbul.",
  },
  { id: "5VM7AU1lrnw", title: "I dream of İstanbul", note: "A quick collage of the week." },
  { id: "LEODfI8DG0o", title: "With love, İstanbul", note: "A quick bus tour of the city." },
  {
    id: "5Yg78jwC3IY",
    slug: "reading-cup",
    title: "The Reading Cup, New York",
    note: "A world in a cup — the fortune-telling coffee, back home.",
  },
];

export type CompanyPhoto = {
  /** Substring of the blob pathname this caption belongs to. */
  match: string;
  name: string;
  note: string;
};

/**
 * Captions for the photographs taken inside the hosts' own rooms. Any blob
 * whose name ends `_company` shows up in that strip; one listed here is
 * captioned properly, and one that is not falls back to the name read off its
 * filename, so a new photograph needs no code to appear.
 */
export const companyPhotos: CompanyPhoto[] = [
  {
    match: "eczacibasi",
    name: "Eczacıbaşı Group",
    note: "The panel, mid-session.",
  },
];
export type Painting = {
  /** Substring of the blob pathname this shop link belongs to. */
  match: string;
  title: string;
  href: string;
};

/**
 * Shop links for the paintings, paired to blobs by filename fragment rather
 * than by position, so re-uploading in a different order cannot silently point
 * a painting at the wrong product.
 */
export const paintingShop: Painting[] = [
  {
    match: "Painting_set_istanbul_1",
    title: "İstanbul Delight — greeting cards, 5-design set",
    href: "https://lotusmahal.com/products/istanbul-delight-greeting-cards-5-design-set",
  },
  {
    match: "painting_set_islanbul_2",
    title: "A Night in İstanbul — watercolour postcards",
    href: "https://lotusmahal.com/products/a-night-in-istanbul-watercolor-postcards",
  },
  {
    match: "painting_istanbul",
    title: "I Dream of İstanbul — watercolour postcard",
    href: "https://lotusmahal.com/products/i-dream-of-istanbul-watercolor-postcard",
  },
  {
    match: "Painting_4",
    title: "İstanbul Twilight — watercolour postcard",
    href: "https://lotusmahal.com/products/istanbul-twilight-watercolor-postcard",
  },
];
