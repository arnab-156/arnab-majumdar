/**
 * Content for /edu, kept as data so resources can be added without touching
 * layout. Every entry starts life as `wip`; give it an `href` and drop the
 * status once something real is on the other end.
 */

export type ResourceStatus = "wip" | "soon";

export type Resource = {
  label: string;
  /** Set once there is somewhere real to send people. */
  href?: string;
  /** Omit when the resource is live. */
  status?: ResourceStatus;
  /** Shown under the label; use it to say what the resource will be. */
  note?: string;
};

export type Audience = {
  id: string;
  /** Who the section is for. */
  label: string;
  /** The question this section exists to answer. */
  question: string;
  /**
   * The response. Left undefined where Arnab has not written one yet — the
   * section then renders a "response coming soon" note rather than an
   * invented position.
   */
  answer?: string;
  resources: Resource[];
};

/** The thesis, in Arnab's own words, drawn from the earlier version of this page. */
export const thesis = {
  poem: [
    "No course is lit,",
    "By light that former burned,",
    "From darkness bit by bit,",
    "The present road is learned.",
  ],
  mission: "Self-empowerment through community.",
  sharedPhilosophy:
    "As a diamond can be polished only by another diamond, a human can be refined only by other human beings. The most important ingredient of learning is patience.",
  vision:
    "Since the 80s, my mom created a work-from-home environment due to unique social and economic challenges, shaping me into a skilled organizer of creative projects. This approach reflects Tagore's grassroots education, emphasising community and parental autonomy over standardised education, as one size does not fit all.",
  technology:
    "Education based on core mathematics and sciences need not be boring, and an economically self-reliant, accessible model exists. AI can be revolutionary in helping people make informed decisions — but the concept of self relies on the essential human aspect of community. Without life, we cannot understand what it means to be life-less.",
};

export const thinkers = [
  {
    name: "John Dewey",
    summary:
      "An educator who held that education is not so much preparation for living, as living in the fullest sense of the word.",
  },
  {
    name: "Rabindranath Tagore",
    summary:
      "A Nobel laureate and independent thinker. Like Dewey, he believed the mentor–disciple relationship was integral to learning.",
  },
];

export const audiences: Audience[] = [
  {
    id: "for-students",
    label: "For students",
    question: "How do I choose a college, pay for it, and arrive ready?",
    resources: [
      { label: "Choosing where to apply", status: "wip", note: "How to build a shortlist that fits you, not a ranking." },
      { label: "What can I afford?", status: "wip", note: "Sticker price versus what families actually pay." },
      { label: "Financial aid", status: "wip", note: "Where aid comes from and when to ask." },
      { label: "Health and accessibility", status: "wip", note: "Knowing your rights and the supports on offer." },
      { label: "Grades and what they measure", status: "wip" },
      { label: "Activities that actually count", status: "wip" },
      { label: "First-year experience", status: "wip", note: "The gap between arriving and belonging." },
      {
        label: "An Executive MBA, from the inside",
        href: "/nyu",
        note: "Coursework, projects and reflections from NYU Stern.",
      },
    ],
  },
  {
    id: "for-parents",
    label: "For parents",
    question: "How do I prepare — financially and otherwise — for my children's education?",
    resources: [
      { label: "Planning and paying over time", status: "wip", note: "Starting earlier, with smaller numbers." },
      { label: "Reading a financial aid offer", status: "wip", note: "Comparing offers that are not written to be compared." },
      { label: "Supporting learning at home", status: "wip", note: "Grassroots education, in the Tagore sense." },
      { label: "Home schooling as a serious option", status: "soon" },
      { label: "Health, accessibility and advocacy", status: "wip" },
      { label: "When one size does not fit", status: "wip", note: "Recognising it early, and what to do next." },
    ],
  },
  {
    id: "for-teachers",
    label: "For teachers and educators",
    question: "From early childhood to home schooling to higher and adult education — what carries across?",
    resources: [
      { label: "Teaching at any age", status: "wip" },
      { label: "Concepts and ideas of teaching", status: "wip" },
      { label: "Experiential learning", status: "wip", note: "Dewey, applied." },
      { label: "Celebrating success and failure", status: "wip" },
      { label: "Design a course", status: "wip", note: "A working method, not a template." },
      { label: "Make a rubric for anything", status: "wip" },
      { label: "Economic profitability of education", status: "wip" },
      { label: "Certification", status: "wip" },
      { label: "Language", status: "wip" },
      {
        label: "Fabric Futures: sustainability in the curriculum",
        href: "/lotus/eye-on-india",
        note: "A programme built around fashion, education and sustainability.",
      },
      {
        label: "Technology in the design process",
        href: "/lotus/samsung",
        note: "The AT&T Samsung project, run as a teaching exercise.",
      },
    ],
  },
  {
    id: "for-advisors",
    label: "For advisors and counsellors",
    question: "How do I guide someone through decisions I cannot make for them?",
    resources: [
      { label: "Mapping a path with a student, not for them", status: "wip" },
      { label: "Programme review and strategic planning", status: "wip", note: "What worked across several universities." },
      { label: "Career-ready initiatives", status: "wip" },
      { label: "Talking about money without shutting the conversation down", status: "wip" },
      { label: "Referral and escalation", status: "soon" },
      {
        label: "Ask me directly",
        href: "/help",
        note: "Book a conversation if a case does not fit any of the above.",
      },
    ],
  },
  {
    id: "jobs-career-roi",
    label: "Jobs, career and ROI",
    question: "Does this pay off, and what does it actually lead to?",
    resources: [
      { label: "Does the degree pay for itself?", status: "wip", note: "Payback period, not just starting salary." },
      { label: "Debt measured against first-year earnings", status: "wip" },
      { label: "Earnings by field, and what the averages hide", status: "wip" },
      { label: "Certification versus degree", status: "wip", note: "When the shorter route is the better one." },
      { label: "Internships and the first job", status: "wip" },
      { label: "Portfolios, interviews, and what employers actually read", status: "wip" },
      { label: "Changing career in the middle of one", status: "wip" },
      { label: "Upskilling without starting over", status: "soon" },
      {
        label: "A career across four industries",
        href: "/experiences",
        note: "Fashion, retail, technology and education \u2014 and the moves between them.",
      },
      {
        label: "A r\u00e9sum\u00e9 to work from",
        href: "/resume",
        note: "Downloads a PDF.",
      },
      {
        label: "Talk a decision through",
        href: "/help",
        note: "Useful when the numbers alone do not settle it.",
      },
    ],
  },
  {
    id: "technology-education",
    label: "Technology education",
    question: "What is STEM, once you stop treating it as an acronym?",
    resources: [
      { label: "Textiles and apparel", status: "wip" },
      { label: "Arts", status: "wip" },
      { label: "Engineering — automotive", status: "wip" },
      { label: "Engineering — computer science", status: "wip" },
      { label: "Agriculture", status: "wip" },
      { label: "Design", status: "wip" },
      {
        label: "Made of Chicago",
        href: "/moc",
        note: "Retail technology as a live teaching case.",
      },
    ],
  },
  {
    id: "for-policy-makers",
    label: "For policy makers",
    question: "How do we prepare citizens for the future?",
    answer:
      "Like modern medicine, modern schooling — not education — has operated largely on a pathological model. It is built to evaluate what is wrong with the learner rather than what is right.",
    resources: [
      { label: "Financial aid as policy", status: "wip" },
      { label: "Health and accessibility", status: "wip" },
      { label: "Measuring what is right with a learner", status: "wip", note: "Alternatives to the deficit model." },
    ],
  },
  {
    id: "for-community",
    label: "For community",
    question: "How does any of this matter to me?",
    resources: [
      { label: "Where taxpayer money lands", status: "wip" },
      { label: "Community as the unit of learning", status: "wip", note: "The mission, in practice." },
      {
        label: "Volunteering as teaching",
        href: "/experiences/lincolnpark",
        note: "Docent work at the Lincoln Park Conservatory.",
      },
    ],
  },
];
