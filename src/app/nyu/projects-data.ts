export type NyuCourse = {
  name: string;
  passWithDistinction?: boolean;
  highPass?: boolean;
  langoneExtraClass?: boolean;
  inProgress?: boolean;
  credits?: number;
  faculty: { name: string; url?: string };
  projects: string[];
};

export type NyuProjectLink = { title?: string; url: string };

export type NyuProjectDetails = {
  description: string;
  outcomes: string[];
  urls?: NyuProjectLink[];
};

export type NyuProject = {
  courseName: string;
  projectName: string;
  description?: string;
  outcomes?: string[];
  urls?: NyuProjectLink[];
};

export const nyuCourses: NyuCourse[] = [
  {
    name: "Firms and Markets",
    passWithDistinction: true,
    credits: 3,
    faculty: { name: "Simon Bowmaker", url: "https://www.simonbowmaker.com/" },
    projects: [],
  },
  {
    name: "Financial Accounting",
    passWithDistinction: true,
    credits: 3,
    faculty: {
      name: "Ilan Guttman",
      url: "https://www.stern.nyu.edu/faculty/bio/ilan-guttman",
    },
    projects: ["Financial Accounting Learnings"],
  },
  {
    name: "The Global Economy",
    passWithDistinction: true,
    credits: 3,
    faculty: { name: "Julen Esteban-Pretel" },
    projects: ["Macroscopic Analysis of Germany", "Analysis of China"],
  },
  {
    name: "Leadership in Organizations",
    credits: 3,
    faculty: {
      name: "Nathan Pettit",
      url: "https://www.stern.nyu.edu/faculty/bio/nathan-pettit",
    },
    projects: ["Leadership Commitments Plan"],
  },
  {
    name: "Strategic Communications",
    credits: 1.5,
    faculty: {
      name: "Brian Hanssen",
      url: "https://www.stern.nyu.edu/faculty/bio/brian-hanssen",
    },
    projects: ["SOAR Student Success"],
  },
  {
    name: "Professional Responsibility",
    credits: 1.5,
    faculty: { name: "Alison Taylor", url: "https://www.alisontaylor.co/" },
    projects: ["What I learned from Whistleblowers?"],
  },
  {
    name: "Business Statistics and Data Analytics",
    highPass: true,
    credits: 3,
    faculty: { name: "Grace Haaf", url: "https://www.stern.nyu.edu/faculty/bio/grace-haaf" },
    projects: [],
  },
  {
    name: "Global Immersion Experience in Turkiye",
    highPass: true,
    credits: 3,
    faculty: {
      name: "Tulin Erdem",
      url: "https://www.stern.nyu.edu/faculty/bio/tulin-erdem",
    },
    projects: ["Geopolitical Analysis of Turkey"],
  },
  {
    name: "The Strategist",
    langoneExtraClass: true,
    credits: 1.5,
    faculty: {
      name: "Adam Brandenburger",
      url: "https://www.adambrandenburger.com/",
    },
    projects: ["What I Learned About the Creative Strategist?"],
  },
  {
    name: "Strategy",
    passWithDistinction: true,
    credits: 3,
    faculty: {
      name: "Sonia Marciano",
      url: "https://www.stern.nyu.edu/faculty/bio/sonia-marciano",
    },
    projects: [],
  },
  {
    name: "Foundations of Finance",
    highPass: true,
    credits: 3,
    faculty: {
      name: "Alexi Savov",
      url: "https://www.stern.nyu.edu/faculty/bio/alexi-savov",
    },
    projects: ["My Finance Cheatsheet"],
  },
  {
    name: "Marketing",
    passWithDistinction: true,
    credits: 3,
    faculty: {
      name: "Thomaï Serdari",
      url: "https://www.stern.nyu.edu/faculty/bio/thomai-serdari",
    },
    projects: ["Chelsea Piers Fitness"],
  },
  {
    name: "Sustainability Value Creation in Private Markets",
    langoneExtraClass: true,
    credits: 3,
    faculty: {
      name: "Angela Jhanji",
      url: "https://www.stern.nyu.edu/faculty/bio/angela-jhanji",
    },
    projects: [],
  },
];

export const nyuProjectInfo: Record<string, NyuProjectDetails> = {
  "Macroscopic Analysis of Germany": {
    description:
      "Germany is the largest economy in Europe — a compelling case study of a highly developed economy navigating cyclical weakness, demographic headwinds, and structural transformation. This analysis examines Germany through four connected lenses: measurement and labor markets, long-run growth, fiscal policy, and monetary policy.",
    outcomes: [
      "Modeled GDP sensitivity to ECB rate moves and industrial output shifts.",
      "Evaluated energy mix transition impacts on trade balance and manufacturing margins.",
    ],
    urls: [{ title: "Open project", url: "https://germany-macroecon-analys-bnflv4z.gamma.site/" }],
  },
  "Analysis of China": {
    description: "Scenario analysis of China’s post‑COVID demand, property deleveraging, and supply-chain reshoring.",
    outcomes: [
      "Built upside/base/downside scenarios for property, exports, and domestic consumption.",
      "Assessed how export controls and friend-shoring reshape sector winners/losers.",
    ],
    urls: [{ url: "https://example.com/projects/analysis-of-china" }],
  },
  "Geopolitical Analysis of Turkey": {
    description: "Geopolitical risk brief ahead of the Türkiye immersion, focusing on energy corridors and currency stability.",
    outcomes: [
      "Mapped Black Sea/Middle East corridor dynamics and their effect on FDI flows.",
      "Analyzed inflation and FX pass-through for consumer-facing businesses.",
      "Outlined cultural and regulatory considerations for market entry sequencing.",
    ],
    urls: [{ title: "Open project", url: "https://turkey-geopolitics-xmuj88c.gamma.site/" }],
  },
  "SOAR Student Success": {
    description:
      "Proposal to replace traditional DEI office functions with SOAR across NYC school districts, using the STEP model (Social Context, Tenets, Engagement, Perception) to craft a communications plan.",
    outcomes: [
      "Framing: formal yet relatable, invigorating, and student-success focused; repeated SOAR branding.",
      "Audience & cadence: whole student body, single auditorium assembly with supporting slides and assistant.",
      "Channel & owner: principal as Speaker Four delivering message; live vocal acknowledgments and engagement prompts.",
      "Perception checks: student participation during assembly plus follow-up engagement to validate resonance.",
    ],
    urls: [
      { title: "SOAR proposal site", url: "https://soar-highschool-4bl2cj6.gamma.site/" },
      { title: "Principal SOAR presentation", url: "https://gamma.app/docs/Ready-to-SOAR-This-Year--18usn6851cipr7g" },
    ],
  },
  "What I learned from Whistleblowers?": {
    description:
      "Course reflection on Professional Responsibility: how whistleblowers surface hidden risk, shape governance, and influence culture.",
    outcomes: [
      "Apply stakeholder and human-rights lenses to evaluate business models and market failures.",
      "Spot ethical fading early and practice intentional speak-up with documentation and escalation paths.",
      "Link ethics to systems: incentives, procurement, metrics, and board oversight.",
      "Translate whistleblower insights into safeguards that reduce risk across industries.",
    ],
    urls: [{ title: "Project page", url: "/nyu/professional-responsibility" }],
  },
  "Leadership Commitments Plan": {
    description:
      "A one-year leadership plan that translates values into repeatable rituals, with congruence-model alignment across strategy, operations, and outcomes.",
    outcomes: [
      "Defined short-term and long-term commitments anchored in health, learning, and collaboration.",
      "Built an operating cadence for no-blame learning, resilience, and measurable performance.",
      "Mapped leadership expectations into practical behaviors that support teams and stakeholders.",
    ],
    urls: [{ title: "Project page", url: "/nyu/LeadershipCommitmentPlan" }],
  },
  "Financial Accounting Learnings": {
    description:
      "A practical reflection on financial accounting: statement linkages, accrual mechanics, cash flow checks, and decision-oriented red flags.",
    outcomes: [
      "Connected transactions, journal mechanics, and statement outputs as one operating system.",
      "Built a repeatable indirect-cash-flow checklist to test earnings quality and liquidity reality.",
      "Applied ratio and working-capital analysis to spot timing risk, estimate concentration, and potential distortions.",
    ],
    urls: [{ title: "Project page", url: "/nyu/financial-accounting" }],
  },
  "Chelsea Piers Fitness": {
    description:
      "CP Fitness is the fitness club arm of Chelsea Piers, the sports and entertainment complex on Manhattan's West Side. It sits in a crowded NYC premium fitness market with a brand identity tied to the larger Chelsea Piers name — known for multi-sport facilities and youth athletics — rather than a distinct luxury-fitness position of its own. The main ask: decide whether CP Fitness should lean into Chelsea Piers heritage, break out as a standalone luxury brand, or take a middle path — with the recommendation grounded in Millennial and Gen Z consumer analysis.",
    outcomes: [
      "Brand architecture is a positioning trade-off, not a naming exercise. Deciding between heritage, standalone luxury, and a hybrid path forced us to weigh the equity Chelsea Piers already owns against the premium associations it can't credibly claim — and the middle path only works if each sub-brand has a distinct job.",
      "Consumer segmentation should drive strategy, not decorate it. Millennial and Gen Z fitness behaviors diverge enough (community vs. performance, price sensitivity vs. experience-seeking) that a single message dilutes both; the segment analysis is what disqualified the “one brand for everyone” option.",
      "CLV discipline separates ambition from viability. Building the model on an incremental rather than fully loaded margin, and holding to a 3× LTV:CAC threshold, turned “should we expand?” into a defensible sequencing question about which five markets and in what order.",
      "Partnerships extend a brand faster than advertising can. The Standard High Line × Malin+Goetz × Tracksmith concept borrowed credibility CP Fitness would take years and significant spend to build organically — the lesson being that the right collaborator is a positioning shortcut.",
    ],
    urls: [{ title: "Open project", url: "https://canva.link/l22n6v28cnf4n69" }],
  },
  "My Finance Cheatsheet": {
    description:
      "Combining every formula from the course — TVM, bonds, stocks, capital budgeting, free cash flow, portfolio theory, CAPM, WACC and capital structure, options, and market mechanics — organized into 11 categories with a note on when each applies.",
    outcomes: [
      "Value is the present value of future cash flows. Everything in the course is PV = Σ CF/(1+R)^t wearing a different costume: a bond with contractual coupons, a stock with dividends, a project called NPV, a company called enterprise value.",
      "Get the numerator right — incremental cash flow, not accounting profit. Sunk R&D doesn't change with the decision; the depreciation tax shield does, even though depreciation itself is never a cash cost.",
      "Get the denominator right — only systematic risk is priced. Diversification eliminates firm-specific risk for free, so the market refuses to pay you for bearing it; beta alone sets the required return.",
    ],
    urls: [{ title: "Project page", url: "/nyu/finance-cheatsheet" }],
  },
  "What I Learned About the Creative Strategist?": {
    description:
      "The Strategist rests on a single premise: creativity in strategy is not a gift but a craft, made up of four moves — Constraint, Combination, Contrast, and Context — that anyone can learn to apply to any problem.",
    outcomes: [
      "Turn a constraint into a starting point. Read a limit — budget, access, credentials, infrastructure — as the brief for a strategy rather than the reason there isn’t one.",
      "Create value by recombining what already exists. Recognize that most novelty comes from assembling inherited parts in a new configuration, not from inventing at zero.",
      "Name the assumption everyone treats as fixed — then test it. Surface the conventional wisdom holding an industry in place, and ask what becomes possible if it turns out to be false.",
      "Move an idea across fields by analogy. Borrow a solved problem from one context as the lead for an unsolved one in another, and learn from outsiders, extreme users, and non-customers.",
    ],
    urls: [{ title: "Project page", url: "/nyu/the-strategist" }],
  },
};

export const nyuProjects: NyuProject[] = nyuCourses.flatMap((course) =>
  course.projects.map((projectName) => ({
    courseName: course.name,
    projectName,
    description: nyuProjectInfo[projectName]?.description,
    outcomes: nyuProjectInfo[projectName]?.outcomes,
    urls: nyuProjectInfo[projectName]?.urls,
  }))
);
