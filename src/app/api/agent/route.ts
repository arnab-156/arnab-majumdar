import { NextResponse } from "next/server";
import Groq from "groq-sdk";

import { nyuCourses, nyuProjectInfo } from "@/app/nyu/projects-data";

export type AgentLink = {
  label: string;
  href: string;
};

export type AgentDraft = {
  subject: string;
  message: string;
};

export type AgentResponsePayload = {
  reply: string;
  suggestedLinks?: AgentLink[];
  draft?: AgentDraft | null;
  recommendCalendar?: boolean;
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const PORTFOLIO_CONTEXT = `
You are Arnab Majumdar's AI Concierge on arnabmajumdar.com.
Your job is to warmly, concisely, and accurately help visitors:
1. Learn about Arnab's background, work, ventures, and NYU Stern Executive MBA.
2. Scope how Arnab can help them (consulting, retail tech, e-commerce/UX, WCAG accessibility, education/curriculum review, speaking, or collaboration).
3. Help them either draft/pre-fill a message for the contact form on this page (#send-message) OR book a live conversation on Arnab's Google Calendar (#book-now).

Key facts about Arnab Majumdar:
- Headline: Turns strategy into accessible, high-performing digital experiences for retailers, universities, restaurants, and the people who run them.
- Studio: Founder of The Lotus Mahal (/lotus, https://thelotusmahal.com), a boutique creative and consulting studio in New York, DC, and Baltimore covering Events, Fashion Programming, Sustainability Due Diligence, Web & Infrastructure, and Consulting.
- Selected Studio & Venture Work:
  - Commander's Palace (/lotus#commanders): Rebuilt the historic New Orleans restaurant's website with Webflow CMS, event scheduling APIs, and distinct mobile & desktop experiences.
  - World Pride Garden of Swann (/lotus/garden-of-swann): Fashion + activism programming in Washington, D.C. honoring William Dorsey Swann.
  - Made of Chicago (/moc): Owner & CEO — Chicago-inspired activewear sold via interactive vending machines in hotel and residential gyms.
  - Baltimore Grocery Survey (/BaltimoreFoodDesert): Lotus Mahal community research studying where Baltimore residents buy groceries and how to address food deserts.
- Engineering & Retail Leadership (/experiences):
  - Bonobos (Walmart Inc. & Express LLC): Senior Software Engineer leading front-end technology and accessibility initiatives that drove double-digit conversion gains.
  - ShopRunner (acquired by FedEx Dataworks): Software Engineer II & WCAG Accessibility Expert (promoted twice), building core retail software frameworks.
  - Reliance Trends: Assistant Manager — launched private labels and opened major retail stores in India.
- Academic & Teaching Leadership (/experiences, /edu, /fashion):
  - Adjunct Faculty, College of Business at Coppin State University.
  - Previously Department Chair (Fashion Marketing & Merchandising), Assistant Professor of Fashion Studies, and Instructor across multiple universities — weaving sustainability and technology into 100% of the fashion curriculum and helping double enrollments.
- Education (/nyu, /experiences#my-education):
  - NYU Stern School of Business: Executive MBA Candidate, Class of A27, elected Class Representative. Specializing in Strategy, Sustainability & Innovation, and Finance.
  - MS in Textiles, Fashion Merchandising & Design (University of Rhode Island); B.Tech in Apparel Manufacturing & IT (NIFT India); Full Stack Web Development Certificate (Northwestern University).
- NYU Stern Courses (${nyuCourses.length} courses):
${nyuCourses
  .map((c) => {
    const tags = [
      c.core ? "Core" : null,
      c.pdph ? "Pass with Distinction / High Pass" : null,
      c.sustainabilityElective ? "Sustainability & Innovation Elective" : null,
      c.financeElective ? "Finance Elective" : null,
      c.strategyElective ? "Strategy Elective" : null,
      c.inProgress ? "In-Progress" : null,
      c.credits ? `${c.credits} Cr.` : null,
    ]
      .filter(Boolean)
      .join(", ");
    return `  - ${c.name} (Prof. ${c.faculty.name}${tags ? ` — ${tags}` : ""})`;
  })
  .join("\n")}
- NYU Stern Projects:
${Object.entries(nyuProjectInfo)
  .map(([title, info]) => `  - ${title}: ${info.description}`)
  .join("\n")}
`;

function buildLocalConciergeReply(messages: ChatMessage[]): AgentResponsePayload {
  const latestUserMessage =
    [...messages].reverse().find((m) => m.role === "user")?.content.trim() ?? "";
  const q = latestUserMessage.toLowerCase();

  // 1. Booking / scheduling intent
  if (
    /\b(book|schedule|calendar|appointment|call|meet|meeting|zoom|google meet|talk live|availability)\b/.test(
      q
    )
  ) {
    return {
      reply:
        "You can book a live Google Meet directly on Arnab's calendar right here on this page — it shows real-time availability. If you'd also like to send context ahead of the call, I can pre-fill the message form below for you.",
      suggestedLinks: [
        { label: "Jump to Calendar (#book-now)", href: "#book-now" },
        { label: "Send a message (#send-message)", href: "#send-message" },
      ],
      draft: {
        subject: "Context for our upcoming conversation",
        message:
          "Hi Arnab,\n\nI'm looking forward to speaking with you. Here is a quick overview of what I'd love to discuss:\n\n• Organization / Project: \n• Goals & Timeline: \n\nBest,",
      },
      recommendCalendar: true,
    };
  }

  // 2. Drafting / contacting / hiring / consulting intent
  if (
    /\b(draft|write|email|contact|hire|work with|consult|consulting|project|help my|small business|website|redesign|advisory|speaking|collaborat)\b/.test(
      q
    )
  ) {
    const cleanedTopic =
      latestUserMessage.length > 20 ? latestUserMessage : "a potential collaboration or consulting project";
    return {
      reply:
        "Arnab works with small businesses, retailers, universities, and mission-driven organizations on strategic planning, e-commerce & UX, WCAG accessibility, manufacturing/sourcing alignment, and educational program design.\n\nI've prepared a message draft below based on what you shared — click **Pre-fill message form** to load it into the form, or jump straight to his calendar if you'd rather talk live.",
      suggestedLinks: [
        { label: "Explore The Lotus Mahal", href: "/lotus" },
        { label: "See Career Experiences", href: "/experiences" },
      ],
      draft: {
        subject: "Inquiry via arnabmajumdar.com — Working Together",
        message: `Hi Arnab,\n\nI was chatting with your website concierge and would love to connect regarding: ${cleanedTopic}\n\n• Organization / Context: \n• What we're looking to achieve: \n• Preferred next step (email or quick call): \n\nBest regards,`,
      },
      recommendCalendar: true,
    };
  }

  // 3. NYU Stern / MBA / Courses / Grades
  if (/\b(nyu|stern|mba|emba|course|class|grade|elective|finance|strategy|coti|coty|soar|istanbul)\b/.test(q)) {
    const coreCount = nyuCourses.filter((c) => c.core).length;
    const inProgressList = nyuCourses
      .filter((c) => c.inProgress)
      .map((c) => c.name)
      .join(", ");
    return {
      reply: `Arnab is an Executive MBA candidate at NYU Stern (Class of A27) and serves as elected Class Representative, specializing in Strategy, Sustainability & Innovation, and Finance.\n\nHis coursework spans ${coreCount} core courses (with 80% Pass with Distinction / High Pass in 1st-year core credits) plus electives including Sustainability Value Creation in Private Markets, Behavioral Finance, Endless Frontier Labs, and current in-progress courses (${inProgressList}).`,
      suggestedLinks: [
        { label: "View NYU Stern Journey & Courses", href: "/nyu" },
        { label: "Coty Sustainability Diligence", href: "/nyu/sustainability/coty" },
        { label: "Finance Cheatsheet", href: "/nyu/finance-cheatsheet" },
      ],
      draft: {
        subject: "Connecting regarding NYU Stern / Executive MBA",
        message:
          "Hi Arnab,\n\nI was exploring your NYU Stern Executive MBA page and coursework and would love to connect.\n\nBest,",
      },
      recommendCalendar: false,
    };
  }

  // 4. Retail tech, engineering, accessibility, Bonobos, ShopRunner, resume
  if (
    /\b(bonobos|shoprunner|fedex|walmart|accessibility|wcag|engineer|software|frontend|front-end|react|next|tech|resume|cv)\b/.test(
      q
    )
  ) {
    return {
      reply:
        "Arnab has deep engineering and retail technology experience: as Senior Software Engineer at Bonobos (Walmart & Express), he shipped front-end and WCAG accessibility initiatives that drove double-digit conversion gains; before that, as Software Engineer II at ShopRunner (acquired by FedEx Dataworks), he built core retail software frameworks and served as a WCAG Accessibility Expert.",
      suggestedLinks: [
        { label: "Career Experiences", href: "/experiences" },
        { label: "Download Résumé (PDF)", href: "/resume" },
        { label: "About Arnab", href: "/about" },
      ],
      draft: {
        subject: "Connecting regarding Engineering / Retail Tech",
        message:
          "Hi Arnab,\n\nI reviewed your background in retail technology, front-end engineering, and WCAG accessibility and would love to connect.\n\nBest,",
      },
      recommendCalendar: false,
    };
  }

  // 5. Lotus Mahal, Commander's Palace, Garden of Swann, Made of Chicago, Baltimore Food Desert, Fashion
  if (
    /\b(lotus|commander|swann|pride|chicago|vending|baltimore|grocery|food desert|fashion|teaching|professor|coppin)\b/.test(
      q
    )
  ) {
    return {
      reply:
        "Through The Lotus Mahal (his creative & consulting studio) and academic leadership, Arnab leads cross-disciplinary work across fashion, hospitality, education, and community research — from rebuilding Commander's Palace's website in New Orleans and producing the World Pride Garden of Swann fashion show in D.C., to leading the Baltimore Grocery Survey and teaching fashion & business courses.",
      suggestedLinks: [
        { label: "The Lotus Mahal Studio", href: "/lotus" },
        { label: "Baltimore Grocery Survey", href: "/BaltimoreFoodDesert" },
        { label: "Fashion Education", href: "/fashion" },
        { label: "Made of Chicago", href: "/moc" },
      ],
      draft: {
        subject: "Inquiry about The Lotus Mahal / Studio Work",
        message:
          "Hi Arnab,\n\nI was looking at your Lotus Mahal projects and would love to discuss a potential collaboration.\n\nBest,",
      },
      recommendCalendar: true,
    };
  }

  // Default helpful response for any custom message
  return {
    reply:
      "I can tell you about Arnab's consulting services at The Lotus Mahal, his engineering & accessibility leadership (Bonobos, ShopRunner by FedEx), his NYU Stern Executive MBA coursework, or his academic teaching.\n\nIf you're ready to reach out, I've also prepared a message draft from your note below — you can load it directly into the contact form with one click, or book a time on his calendar!",
    suggestedLinks: [
      { label: "See Career Experiences", href: "/experiences" },
      { label: "NYU Stern MBA", href: "/nyu" },
      { label: "The Lotus Mahal", href: "/lotus" },
      { label: "Download Résumé", href: "/resume" },
    ],
    draft: latestUserMessage
      ? {
          subject: "Message from arnabmajumdar.com visitor",
          message: `Hi Arnab,\n\n${latestUserMessage}\n\nBest,`,
        }
      : null,
    recommendCalendar: true,
  };
}

export async function POST(request: Request) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
  if (!messages.length) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      const groq = new Groq({ apiKey: groqKey });
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.4,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `${PORTFOLIO_CONTEXT}

Respond strictly as a JSON object with this exact shape:
{
  "reply": "Warm, concise 2-4 sentence response to the visitor.",
  "suggestedLinks": [{ "label": "Short link title", "href": "/internal-path-or-#anchor" }],
  "draft": { "subject": "Suggested email subject", "message": "Suggested email body for Arnab" } or null,
  "recommendCalendar": true or false
}
Include a helpful "draft" whenever the visitor asks about working together, hiring, consulting, speaking, or contacting Arnab.`,
          },
          ...messages.map((m) => ({
            role: m.role,
            content: String(m.content).slice(0, 1500),
          })),
        ],
      });

      const raw = completion.choices[0]?.message?.content;
      if (raw) {
        const parsed = JSON.parse(raw) as AgentResponsePayload;
        if (parsed.reply) {
          return NextResponse.json(parsed);
        }
      }
    } catch (err) {
      console.warn("Groq concierge call fell back to local knowledge:", err);
    }
  }

  return NextResponse.json(buildLocalConciergeReply(messages));
}
