export type NyuCourse = {
  name: string;
  passWithDistinction?: boolean;
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
    faculty: { name: "Simon Bowmaker", url: "https://www.simonbowmaker.com/" },
    projects: [],
  },
  {
    name: "Financial Accounting",
    passWithDistinction: true,
    faculty: {
      name: "Ilan Guttman",
      url: "https://www.stern.nyu.edu/faculty/bio/ilan-guttman",
    },
    projects: ["Financial Accounting Learnings"],
  },
  {
    name: "Leadership in Organizations",
    faculty: {
      name: "Nathan Pettit",
      url: "https://www.stern.nyu.edu/faculty/bio/nathan-pettit",
    },
    projects: ["Leadership Commitments Plan"],
  },
  {
    name: "Strategic Communications",
    faculty: {
      name: "Brian Hanssen",
      url: "https://www.stern.nyu.edu/faculty/bio/brian-hanssen",
    },
    projects: ["SOAR Student Success"],
  },
  {
    name: "Professional Responsibility",
    faculty: { name: "Alison Taylor", url: "https://www.alisontaylor.co/" },
    projects: ["What I learned from Whistleblowers?"],
  },
  {
    name: "The Global Economy",
    faculty: { name: "Julen Esteban-Pretel" },
    projects: ["Macroscopic Analysis of Germany", "Analysis of China"],
  },
  {
    name: "Business Statistics and Data Analytics",
    faculty: { name: "Grace Haaf", url: "https://www.stern.nyu.edu/faculty/bio/grace-haaf" },
    projects: [],
  },
  {
    name: "Global Immersion Experience in Turkiye",
    faculty: {
      name: "Tulin Erdem",
      url: "https://www.stern.nyu.edu/faculty/bio/tulin-erdem",
    },
    projects: ["Geopolitical Analysis of Turkey"],
  },
  {
    name: "Strategy & Innovation in China",
    faculty: {
      name: "Christina Fang",
      url: "https://sites.google.com/stern.nyu.edu/christinafang/home",
    },
    projects: [],
  },
];

export const nyuProjectInfo: Record<string, NyuProjectDetails> = {
  "Macroscopic Analysis of Germany": {
    description: "Macro deep dive into Germany’s growth drivers, export engine, and energy transition risks.",
    outcomes: [
      "Modeled GDP sensitivity to ECB rate moves and industrial output shifts.",
      "Evaluated energy mix transition impacts on trade balance and manufacturing margins.",
    ],
    urls: [{ url: "https://example.com/projects/macroscopic-analysis-of-germany" }],
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
