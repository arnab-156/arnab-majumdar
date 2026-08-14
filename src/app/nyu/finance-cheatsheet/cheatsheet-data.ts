// Generated from 'TheLotusMahal Website Prompts.docx' — Part I: Formula Reference by Category.
export type FormulaRow = { name: string; formula: string; usedFor: string };
export type FormulaTable = { caption?: string; rows: FormulaRow[] };
export type CheatNote = { label?: string; text: string };
export type CheatSection = {
  id: string;
  number: string;
  title: string;
  notes: CheatNote[];
  tables: FormulaTable[];
};

export const notation =
  "^ = exponent · R = discount or required return · T = number of periods · t = tax rate in cash-flow sections, a time index in discounting sections · b = plow-back (retention) ratio · g = growth rate.";

export const quickNavigator: { given: string; goTo: string }[] = [
  { given: "A lump sum and a rate, moved across time", goTo: "1 Time Value of Money" },
  { given: "A coupon, face value, maturity, or price", goTo: "2 Bond Valuation" },
  { given: "Dividends, EPS, ROE, payout / plow-back, P/E", goTo: "3 Stock Valuation" },
  { given: "A project with an upfront cost and future cash flows", goTo: "4 Capital Budgeting" },
  { given: "An income statement, CapEx, depreciation, working capital", goTo: "5 Building the Cash Flow" },
  { given: "Probabilities and possible outcomes (scenarios)", goTo: "6 Risk & Return" },
  { given: "Two or more assets, weights, correlation", goTo: "7 Portfolios & Diversification" },
  { given: "Beta, market return, risk-free rate", goTo: "8 CAPM & Performance" },
  { given: "Debt-to-equity, WACC, credit rating, cost of debt", goTo: "9 Cost of Capital & Capital Structure" },
  { given: "A bet on direction or on volatility", goTo: "10 Options" },
  { given: "Bid, ask, market order", goTo: "11 Market Mechanics" },
];

export const incomeStatementWalk: string[] = [
  "Revenue",
  "  − COGS            → Gross Profit",
  "  − SG&A",
  "  = EBITDA",
  "  − D&A (depreciation)",
  "  = EBIT (operating profit)",
  "  − Taxes (@ t)",
  "  = Net Income",
];

export const cheatSections: CheatSection[] = [
  {
    id: "s1-time-value-of-money",
    number: "1",
    title: "Time Value of Money",
    notes: [
      { label: "When to use", text: "any time money moves across dates. This is the engine underneath every other section — bonds, stocks, and NPV are all TVM applied to a particular cash-flow pattern. Reach for it when the question is \"what is this worth today / then?\" or \"what rate, or how many years, does this imply?\"" },
      { label: "Traps", text: "the perpetuity and growing-perpetuity formulas give value ONE PERIOD BEFORE the first cash flow — a perpetuity starting in year 11 is valued at year 10, then discounted 10 more years. Growth formulas break if g ≥ R. Match the rate to the period (semi-annual coupons → semi-annual rate). A nominal rate already contains inflation — do not add it twice." },
    ],
    tables: [
      {
        rows: [
          { name: "Future Value", formula: "FV = PV × (1+R)^T", usedFor: "What a sum today is worth later" },
          { name: "Present Value", formula: "PV = FV / (1+R)^T", usedFor: "What a future sum is worth today" },
          { name: "Implied Rate", formula: "R = (FV/PV)^(1/T) − 1", usedFor: "Back out the interest rate" },
          { name: "Time to Grow", formula: "T = log(FV/PV) / log(1+R)", usedFor: "Years needed to hit a target" },
          { name: "Multiple Cash Flows", formula: "PV = Σ CFt/(1+R)^t", usedFor: "Series of unequal cash flows" },
          { name: "Perpetuity", formula: "PV = CF / R", usedFor: "Infinite stream, no growth" },
          { name: "Growing Perpetuity", formula: "PV = CF / (R − g)", usedFor: "Infinite growing stream (needs g < R)" },
          { name: "Deferred Perpetuity", formula: "PV = [CF / R] / (1+R)^(n−1)", usedFor: "Perpetuity whose first payment is in year n" },
          { name: "Annuity", formula: "PV = (CF/R) × [1 − 1/(1+R)^T]", usedFor: "Fixed payments, finite life" },
          { name: "Annuity Payment", formula: "CF = PV / [(1/R)(1 − 1/(1+R)^T)]", usedFor: "Solve for the withdrawal or installment" },
          { name: "Growing Annuity", formula: "PV = CF/(R−g) × [1 − (1+g)^T/(1+R)^T]", usedFor: "Growing payments, finite life" },
          { name: "EAR (periodic)", formula: "EAR = (1 + APR/m)^m − 1", usedFor: "True annual rate, m compoundings" },
          { name: "EAR (continuous)", formula: "EAR = e^r − 1", usedFor: "True annual rate, continuous" },
          { name: "FV (m compoundings)", formula: "FV = PV × (1 + APR/m)^(m×T)", usedFor: "Compounding m times per year" },
          { name: "FV (continuous)", formula: "FV = PV × e^(r×T)", usedFor: "Continuous compounding" },
          { name: "Fisher Equation", formula: "R_nom ≈ R_real + E(inflation)", usedFor: "Real vs nominal rates" },
        ],
      },
    ],
  },
  {
    id: "s2-bond-valuation",
    number: "2",
    title: "Bond Valuation",
    notes: [
      { label: "When to use", text: "fixed, contractually promised cash flows. Triggered by the words coupon, face or par value, maturity, or yield. The core idea: price and yield are two views of the same thing — given one, solve for the other." },
      { label: "Traps", text: "when a bond is sold before maturity, re-price the REMAINING years at the NEW rate — a 3-year zero held one year is priced as a 2-year zero. Price moves opposite to yield, and long-maturity (high-duration) bonds move most. If YTM > coupon rate the bond trades at a discount; if YTM < coupon, at a premium. Selling early means HPR ≠ YTM unless the yield is unchanged." },
    ],
    tables: [
      {
        rows: [
          { name: "Coupon Bond Price", formula: "P = Σ C/(1+R)^t + F/(1+R)^T", usedFor: "Fair value of a coupon bond" },
          { name: "Yield to Maturity", formula: "Same equation, solve for YTM", usedFor: "The bond's implied return (its IRR)" },
          { name: "Zero-Coupon Price", formula: "PV = F / (1+R)^T", usedFor: "No coupons, one payment at T" },
          { name: "Zero-Coupon YTM", formula: "YTM = (F/P)^(1/T) − 1", usedFor: "Yield on a zero" },
          { name: "Zero-Coupon Maturity", formula: "T = log(F/P) / log(1+YTM)", usedFor: "Back out years to maturity" },
          { name: "Holding Period Return", formula: "HPR = V(T)/V(0) − 1", usedFor: "Total return over the period held" },
          { name: "Annualized HPR", formula: "ann.HPR = (V(T)/V(0))^(1/T) − 1", usedFor: "Per-year equivalent" },
          { name: "Semi-annual coupons", formula: "C/2 per period, YTM/2 per period, 2T periods", usedFor: "Real-world corporate bonds" },
          { name: "Credit Spread", formula: "Spread = Bond YTM − maturity-matched Treasury yield", usedFor: "Compensation for default risk" },
          { name: "Tax-Equivalent Yield", formula: "TEY = Muni yield / (1 − tax rate)", usedFor: "Compare munis to taxable bonds" },
        ],
      },
    ],
  },
  {
    id: "s3-stock-valuation",
    number: "3",
    title: "Stock Valuation",
    notes: [
      { label: "When to use", text: "residual, uncertain cash flows. Triggered by dividends, EPS, ROE, payout or plow-back ratios, or by \"is this stock over- or undervalued?\" Nearly everything here is one growing perpetuity wearing different costumes." },
      { label: "The one-line summary", text: "Firm value = value of assets in place + value of growth opportunities. PVGO is positive only when ROE > R. Raising the plow-back ratio therefore RAISES the price when ROE > R and LOWERS it when ROE < R — growth destroys value if the firm reinvests below the required return. Forward vs trailing P/E differ by (1+g): check which EPS you were handed. If P < V0, the stock is undervalued and E[HPR] > R." },
    ],
    tables: [
      {
        caption: "Core valuation",
        rows: [
          { name: "One-Period Value", formula: "V0 = (E[D1] + E[P1]) / (1+R)", usedFor: "Buy now, sell in a year" },
          { name: "Implied Return", formula: "R = (E[D1] + E[P1])/P0 − 1 = E[HPR]", usedFor: "What return the current price implies" },
          { name: "Dividend Discount Model", formula: "V0 = Σ E[Dt]/(1+R)^t", usedFor: "PV of all future dividends" },
          { name: "Zero-Growth DDM", formula: "V0 = D / R", usedFor: "Flat dividends (e.g. preferred stock)" },
          { name: "Gordon Growth Model", formula: "V0 = D1/(R−g) = D0(1+g)/(R−g)", usedFor: "Constant-growth dividends" },
          { name: "Expected Return (GGM)", formula: "R = D1/P0 + g", usedFor: "Dividend yield + capital gain yield" },
          { name: "Two-Stage DDM", formula: "V0 = PV(stage-1 divs) + PT/(1+R)^T", usedFor: "High growth, then stable growth" },
          { name: "stage 1", formula: "PV = D1/(R−g0) × [1 − (1+g0)^T/(1+R)^T]", usedFor: "The high-growth years (growing annuity)" },
          { name: "terminal value", formula: "PT = DT × (1+g)/(R − g),  DT = D0(1+g0)^T", usedFor: "Value of everything after year T" },
          { name: "Dividend Multiple", formula: "P0 / E[D] = 1/(R − g)", usedFor: "Shorthand version of Gordon" },
        ],
      },
      {
        caption: "Earnings, growth, and multiples",
        rows: [
          { name: "Dividend from EPS", formula: "D = (1 − b) × EPS", usedFor: "Link dividends to earnings" },
          { name: "Plow-back with buybacks", formula: "b = 1 − (Dividends + Repurchases)/Earnings", usedFor: "Real payout when firms repurchase shares" },
          { name: "Sustainable Growth", formula: "g = b × ROE", usedFor: "Growth funded by retained earnings" },
          { name: "Implied ROE", formula: "ROE = g / b", usedFor: "Profitability the market is pricing in" },
          { name: "EPS from Book Value", formula: "EPS = ROE × BV", usedFor: "Earnings from the firm's profitability" },
          { name: "Forward P/E", formula: "P0/E1 = (1 − b)/(R − g)", usedFor: "Relative valuation on next-year EPS" },
          { name: "Trailing P/E", formula: "P0/E0 = (1+g)(1 − b)/(R − g)", usedFor: "Relative valuation on last-year EPS" },
          { name: "Solve P/E for g", formula: "g = [ (P/E)×R − (1−b) ] / [ (P/E) + (1−b) ]", usedFor: "Growth the market is pricing in (trailing)" },
          { name: "Price-to-Book", formula: "P0/BV = (ROE − g)/(R − g)", usedFor: "Why high-ROE firms trade above book" },
          { name: "No-Growth Value", formula: "V0 = E[EPS1] / R", usedFor: "Value if 100% of earnings paid out" },
          { name: "PVGO", formula: "V0 = E[EPS1]/R + PVGO", usedFor: "Split value into assets + growth" },
        ],
      },
    ],
  },
  {
    id: "s4-capital-budgeting-npv-irr",
    number: "4",
    title: "Capital Budgeting: NPV & IRR",
    notes: [
      { label: "When to use", text: "a decision — should we do this project, and if we must choose, which one? Triggered by an upfront outlay plus a stream of future cash flows." },
      { label: "Traps", text: "NPV and IRR agree only for conventional cash flows (one sign change) on independent projects. For mutually exclusive projects differing in scale or timing, NPV wins — a higher IRR on a smaller project can still create less value. If the sign changes more than once, multiple IRRs exist and IRR is meaningless. If the project takes cash in first and pays out later (a borrowing project), the IRR rule flips. Payback ignores everything past the cutoff." },
    ],
    tables: [
      {
        rows: [
          { name: "Net Present Value", formula: "NPV(R) = C0 + C1/(1+R) + C2/(1+R)^2 + … + CT/(1+R)^T", usedFor: "Value created (C0 usually negative)" },
          { name: "Internal Rate of Return", formula: "NPV(IRR) = 0, solve for IRR", usedFor: "Discount rate that zeroes out NPV" },
          { name: "Decision rule (investing)", formula: "Accept if NPV > 0; equivalently IRR > R", usedFor: "Standard go / no-go" },
          { name: "Decision rule (borrowing)", formula: "Cash in first, out later → accept if IRR < R", usedFor: "Reversed rule for net-lender projects" },
          { name: "Payback Period", formula: "Years until cumulative CF turns positive", usedFor: "Crude liquidity screen" },
          { name: "Discounted Payback", formula: "Years until cumulative DISCOUNTED CF turns positive", usedFor: "Payback that respects TVM" },
          { name: "Unequal lives", formula: "Build a replacement chain to a common horizon, then compare NPV", usedFor: "Short machine vs long machine" },
          { name: "IRR algebra shortcut", formula: "Let x = 1/(1+IRR), solve the polynomial, then IRR = 1/x − 1", usedFor: "Two- or three-period projects by hand" },
        ],
      },
    ],
  },
  {
    id: "s5-building-the-cash-flow",
    number: "5",
    title: "Building the Cash Flow",
    notes: [
      { label: "When to use", text: "before you can discount anything in Section 4 you need the right numerator. Triggered by an income statement, or any mention of CapEx, depreciation, or working capital. Discount free cash flow, never accounting profit." },
      { label: "Incremental cash flow test — INCLUDE", text: "direct costs, side benefits to other units, opportunity cost of assets already owned, the depreciation TAX SHIELD, working capital investment (recovered at the end), tax credits, and any cost accelerated by the project. EXCLUDE: sunk costs (R&D or feasibility studies already spent), depreciation itself (non-cash), allocated fixed overhead such as existing management salaries, financing costs (interest lives in the discount rate), and externalities the firm does not capture. An increase in NWC is a cash OUTFLOW." },
      { label: "Why net income gets the wrong answer", text: "it spreads the upfront investment into future periods as depreciation. That understates the cost today and inflates NPV. Free cash flow puts the outlay where it actually occurs." },
    ],
    tables: [
      {
        caption: "Free cash flow — three equivalent routes",
        rows: [
          { name: "From the top", formula: "CF = Op. Revenue − Op. Cost − CapEx − Taxes", usedFor: "Simple projects with no accruals" },
          { name: "From EBITDA", formula: "CF = (1−t)×EBITDA − CapEx + t×Depreciation − ΔNWC", usedFor: "When depreciation is given separately" },
          { name: "From EBIT", formula: "CF = (1−t)×EBIT + Depreciation − CapEx − ΔNWC", usedFor: "The workhorse version" },
          { name: "Working capital", formula: "NWC = Inventory + A/R − A/P (use the CHANGE, ΔNWC)", usedFor: "Cash tied up in operations" },
          { name: "Effective tax rate", formula: "t = Income taxes / Pre-tax income", usedFor: "When reading real financial statements" },
          { name: "Asset sale", formula: "Gain = Sale price − Book value; taxed as income", usedFor: "Salvage or disposal in the final year" },
          { name: "Book value", formula: "Net PP&E = CapEx − Accumulated depreciation", usedFor: "Needed to compute the gain on sale" },
        ],
      },
    ],
  },
  {
    id: "s6-risk-return-single-asset",
    number: "6",
    title: "Risk & Return (Single Asset)",
    notes: [
      { label: "When to use", text: "the question gives scenarios with probabilities, or historical returns, and asks for expected return or risk." },
      { label: "Trap", text: "the possibility of outright failure belongs in the NUMERATOR (lower expected cash flow), not the denominator. Bumping the discount rate to \"offset\" a diversifiable failure risk double-counts it and is wrong." },
    ],
    tables: [
      {
        rows: [
          { name: "Expected Return", formula: "E(R) = Σ p(s) × R(s)", usedFor: "Probability-weighted average outcome" },
          { name: "Variance", formula: "σ² = Σ p(s) × [R(s) − E(R)]²", usedFor: "Dispersion around the mean" },
          { name: "Standard Deviation", formula: "σ = √σ²", usedFor: "Risk in the same units as return" },
          { name: "Multi-stage probability", formula: "E = P(pass) × Σ p(s)×outcome(s)", usedFor: "Trial-then-payoff problems" },
        ],
      },
    ],
  },
  {
    id: "s7-portfolios-diversification",
    number: "7",
    title: "Portfolios & Diversification",
    notes: [
      { label: "When to use", text: "two or more assets combined. The point of the section: expected returns add up linearly, risk does not — and that gap is diversification." },
      { label: "Key insight", text: "as N grows the first term vanishes and σp² → average covariance. Diversification kills firm-specific risk; systematic risk is the floor, and it is the only risk that earns a return. Lower correlation → more benefit; at ρ = 1 there is none. A portfolio is INEFFICIENT if another portfolio offers a higher expected return at the same or lower standard deviation. All investors hold the SAME risky mix and differ only in how much Rf they hold — so a more risk-averse investor scales down A and B in the same proportion, rather than changing their ratio." },
    ],
    tables: [
      {
        rows: [
          { name: "Portfolio Return", formula: "E[Rp] = w1×E[R1] + w2×E[R2]", usedFor: "Weighted average return" },
          { name: "Portfolio Variance", formula: "σp² = w1²σ1² + w2²σ2² + 2×w1×w2×ρ12×σ1×σ2", usedFor: "Risk of a two-asset portfolio" },
          { name: "Covariance", formula: "Cov(R1,R2) = ρ12 × σ1 × σ2", usedFor: "The cross term above" },
          { name: "Portfolio SD", formula: "σp = √σp²", usedFor: "Take the square root — do not forget" },
          { name: "Risky + risk-free", formula: "E[Rp] = Rf + w×(E[Rm] − Rf)", usedFor: "Capital allocation line" },
          { name: "its risk", formula: "σp = w × σm", usedFor: "Risk scales linearly (σ of Rf is zero)" },
          { name: "leverage", formula: "w > 1 means borrowing at Rf; wRf = 1 − w", usedFor: "Doubling risk means w = 2, wRf = −1" },
          { name: "Large-N Diversification", formula: "σp² = (1/N)(avg variance) + (1 − 1/N)(avg covariance)", usedFor: "Why risk falls but never reaches zero" },
        ],
      },
    ],
  },
  {
    id: "s8-capm-the-capital-market-line-performance",
    number: "8",
    title: "CAPM, the Capital Market Line & Performance",
    notes: [
      { label: "When to use", text: "you need a required return or a hurdle rate, or must judge whether an asset is fairly priced for its risk. This is also the source of the R you plug into Section 3 and Section 4." },
      { label: "CML vs SML", text: "the CML prices TOTAL risk (σ) and applies only to efficient portfolios; the SML prices SYSTEMATIC risk (β) and applies to every asset. Do not swap them. β of the market = 1, β of the risk-free asset = 0. Standard deviation does NOT enter the equilibrium expected return of an individual stock. If a stock sits exactly on the SML, adding a little of it leaves your Sharpe ratio unchanged; if it is underpriced (expected return above the SML), adding it raises your Sharpe ratio." },
    ],
    tables: [
      {
        rows: [
          { name: "Market Risk Premium", formula: "MRP = E[Rm] − Rf", usedFor: "Price of one unit of market risk" },
          { name: "Capital Market Line", formula: "E[Rp] = Rf + [(E[Rm] − Rf)/σm] × σp", usedFor: "Efficient portfolios of Rf + market" },
          { name: "CAPM / Security Market Line", formula: "E[Ri] = Rf + βi × (E[Rm] − Rf)", usedFor: "Required return on ANY asset" },
          { name: "Beta", formula: "β = ρim × (σi/σm) = Cov(Ri,Rm)/σm²", usedFor: "Sensitivity to market moves" },
          { name: "Portfolio Beta", formula: "βp = Σ wi × βi", usedFor: "Weighted average of component betas" },
          { name: "Sharpe Ratio", formula: "Sharpe = (E[Rp] − Rf)/σp", usedFor: "Excess return per unit of TOTAL risk" },
          { name: "Alpha test", formula: "α = E[R actual] − E[R from CAPM]", usedFor: "Positive α → adding it raises your Sharpe" },
        ],
      },
    ],
  },
  {
    id: "s9-cost-of-capital-capital-structure",
    number: "9",
    title: "Cost of Capital & Capital Structure",
    notes: [
      { label: "When to use", text: "the question mentions debt-to-equity, WACC, credit ratings, or asks you to value a whole firm or division rather than a single security. This is where Section 8 (cost of equity) and Section 5 (free cash flow) meet." },
      { label: "Traps", text: "using one company-wide cost of capital for every project accepts too many risky projects and rejects too many safe ones — the discount rate must match the RISK OF THE PROJECT, not the identity of the firm. Discount free cash flow to the FIRM at WACC (giving enterprise value); discount dividends or equity cash flow at rE. Keep the numerator and denominator consistent: nominal cash flows with a nominal WACC, and a terminal growth rate that cannot exceed long-run nominal GDP growth. Terminal value usually dominates the answer — check its share before trusting the number." },
    ],
    tables: [
      {
        rows: [
          { name: "Weights from D/E", formula: "wE = 1/(1 + D/E),  wD = (D/E)/(1 + D/E)", usedFor: "Convert a ratio into weights" },
          { name: "Cost of Equity", formula: "rE = Rf + βE × MRP", usedFor: "CAPM applied to the levered equity" },
          { name: "Cost of Debt", formula: "rD = Rf + credit spread", usedFor: "From the rating (e.g. BBB → ~2% spread)" },
          { name: "WACC", formula: "WACC = wE×rE + wD×rD×(1 − t)", usedFor: "Blended hurdle rate for the whole firm" },
          { name: "Unlever (asset beta)", formula: "βU = βE / [1 + (1 − t)×D/E]", usedFor: "Strip leverage out of a comparable" },
          { name: "Relever (equity beta)", formula: "βE = βU × [1 + (1 − t)×D/E]", usedFor: "Apply target leverage to the asset beta" },
          { name: "Asset beta (portfolio form)", formula: "βA = wE×βE + wD×βD", usedFor: "When debt beta is not assumed zero" },
          { name: "M&M I (no taxes)", formula: "VL = VU", usedFor: "Capital structure alone does not create value" },
          { name: "M&M with taxes", formula: "VL = VU + t × D", usedFor: "Value of the interest tax shield" },
          { name: "Enterprise Value (2-stage DCF)", formula: "EV = Σ FCFt/(1+WACC)^t + TV/(1+WACC)^T", usedFor: "Value a firm or division" },
          { name: "terminal value", formula: "TV = FCF_T × (1+g)/(WACC − g)", usedFor: "Everything after the forecast horizon" },
          { name: "Pure-play method", formula: "Unlever comps → average βU → relever at target D/E → WACC", usedFor: "Cost of capital for a private or spun-off unit" },
        ],
      },
    ],
  },
  {
    id: "s10-options-working-vocabulary",
    number: "10",
    title: "Options (working vocabulary)",
    notes: [
      { label: "When to use", text: "the question describes a view on direction versus a view on the SIZE of a move. That distinction is the whole answer to most conceptual option questions." },
      { text: "If you believe volatility will exceed what others expect but you do not know the direction, the answer is a straddle — a single call or put is a directional bet and a short position loses if you are wrong about direction." },
    ],
    tables: [
      {
        rows: [
          { name: "Call payoff", formula: "max(S − K, 0)", usedFor: "Right to buy — bet the price rises" },
          { name: "Put payoff", formula: "max(K − S, 0)", usedFor: "Right to sell — bet the price falls" },
          { name: "Long straddle", formula: "Buy a call AND a put, same strike and expiry", usedFor: "Bet on a LARGE move in either direction" },
          { name: "Short put", formula: "Obligation to buy at K; profits if price rises or is flat", usedFor: "Bet against a fall, capped upside" },
          { name: "Short sale", formula: "Profits if price falls", usedFor: "Directional bearish bet" },
          { name: "Put-call parity", formula: "C + K/(1+r)^T = P + S", usedFor: "Link between calls, puts, and the stock" },
        ],
      },
    ],
  },
  {
    id: "s11-market-mechanics",
    number: "11",
    title: "Market Mechanics",
    notes: [
      { label: "Trap", text: "the midpoint can rise by the full amount you expected while your realised profit is smaller, because you crossed the spread twice." },
    ],
    tables: [
      {
        rows: [
          { name: "Bid-ask spread", formula: "Spread = Ask − Bid", usedFor: "The dealer's compensation" },
          { name: "Midpoint", formula: "Mid = (Bid + Ask)/2", usedFor: "\"True\" price, free of trading frictions" },
          { name: "Market order fills", formula: "You BUY at the ask, you SELL at the bid", usedFor: "Why a round trip costs one full spread" },
          { name: "Round-trip P&L", formula: "P&L = New Bid − Old Ask", usedFor: "Actual profit on a buy-then-sell" },
        ],
      },
    ],
  },
];

export const crossCutting: string[] = [
  "Higher R or lower g always means a lower present value.",
  "Bond prices move opposite to yields, and longer maturity means bigger moves.",
  "If P < V0 the asset is undervalued, so E[HPR] > R and buying it raises your Sharpe ratio.",
  "R is never handed to you by magic: it comes from CAPM (Section 8) or WACC (Section 9), then feeds Section 3 and Section 4.",
  "g = b × ROE ties growth back to reinvestment; growth only creates value when ROE > R.",
  "Everything with (R − g) in the denominator is the same growing perpetuity: Gordon Growth, forward P/E, price-to-book, and terminal value.",
  "Diversifiable risk belongs in the cash flows; only systematic risk belongs in the discount rate.",
];
