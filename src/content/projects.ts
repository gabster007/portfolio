export type Project = {
  id: string
  title: string
  category: 'Asset Management' | 'Consulting' | 'Data & Analytics' | 'Entrepreneurship' | 'Social Experiences'
  description: string
  highlights?: string[]
  tags?: string[]
  links?: { label: string, href: string }[]
  cover?: string  // optional image path under /public/uploads
  attachments?: { label: string, path: string }[] // files under /public/uploads (pdf, pptx, images)
}

export const PROJECTS: Project[] = [
  {
    id: 'am-competition',
    title: 'Asset Management - FAE (2024)',
    category: 'Asset Management',
    description: 'Constructed a high‑conviction 5‑stock B3 portfolio linking macro trends with fundamentals and technical signals.',
    highlights: [
      'Fundamentalist, Quantitative & technical analysis',
      'DCF Valuation, (GGM), Graham Number',
      'Sharpe / Sortino / Treynor / Alpha',
      'Stress testing, backtesting, rebalancing',
    ],
    tags: ['Valuation','Risk Analysis','Performance Indicators', 'Excel'],
    links: [
      { label: "Professor’s comment", href: "https://www.linkedin.com/posts/david-tavares-13127b20_excelaeanciafinanceira-gestaetoderiscos-performancedecarteiras-activity-7264008034551537665-JAvB" },
      { label: 'Slide Presentation', href: 'https://www.canva.com/design/DAGU9aCj5gM/oF6cr4P0nD1xFQMgVgQ_0g/edit' }
    ],
    attachments: [
      { label: 'Investment Thesis', path: '/uploads/Tese_de_Investimentos_Final.pdf' }
    ]
  },
  {
    id: 'bankofamerica',
    title: 'Bank of America - Global Markets Sales and Trading Analyst (2025)',
    category: 'Asset Management',
    description: 'Completed a sales & trading job simulation analyzing market trends, conducting financial data analysis with Excel, and developing client-centric investment strategies with process optimization',
    highlights: ['Analyzed financial market dynamics and trends','Applied data-driven insights to client objectives','Delivered tailored investment strategy proposal (diversification, sustainability, moderate growth)'],
    tags: ['Sales & Trading','Market Analysis','Investment Strategy'],
    attachments: [{ label: 'Certificate', path: '/uploads/bofa.pdf' }]
  },
    {
  id: 'dcf-graham-valuation',
  title: 'DCF & Graham Valuation – Vallora (2025)',
  category: 'Asset Management',
  description:
    'Built a full-stack engine for fundamental valuation of B3 equities using DCF, (GGM), and Graham Number, with automated data ingestion and portfolio integration.',
  highlights: [
    'Valuation models: DCF, GGM, Graham Number',
    'Automated data ingestion: Yahoo Finance, B3, gov.br',
    'Quality Indicators: ROE/ROIC, margins, leverage, growth',
    'LLM integration, trained on financial data.',
  ],
  tags: ['Valuation','Automation','Python'],
},
{
  id: 'portfolio-analytics',
  title: 'Portfolio Analytics (2025)',
  category: 'Asset Management',
  description:
    'Built a Portfolio Analytics dashboard, integrating with risk metrics and performance indicators.',
  highlights: [
    'stock scraning and rentability analysis',
    'Volatility and risk metrics: Beta, Sharpe, Sortino, Treynor, Alpha',
    'drowndown analysis and stress testing',
    'rebalancing strategies and backtesting',
  ],
  tags: ['Dashboard','Analytics','Python'],
},
  {
    id: 'bdl-logistics',
    title: 'Logistics Cost Reduction - BDL Logistics (2023)',
    category: 'Consulting',
    description: 'Applied DMAIC to design KPIs and optimize processes, reducing reverse‑logistics costs.',
    highlights: ['Six Sigma DMAIC','KPI design','Process optimization'],
    tags: ['Operations','KPIs','Six Sigma', 'Excel'],
    attachments: [{ label: 'Case Summary (PDF)', path: '/uploads/bdl-summary.pdf' }]
  },
  {
    id: 'ivasko-hr',
    title: 'HR Analytics - Grupo Ivasko (2024)',
    category: 'Data & Analytics',
    description: 'Analyzed workforce data to identify ideal profiles and promotion timing to improve retention.',
    highlights: ['Turnover analysis','Promotion strategy','Persona by role'],
    tags: ['People Analytics','Retention','Machine Learning'],
    attachments: [{ label: 'Report (PDF)', path: '/uploads/ivasko-report.pdf' }]
  },
  {
    id: 'festval-change',
    title: 'Change Management - Festval (2023)',
    category: 'Consulting',
    description: 'Data‑driven absenteeism analysis with recommendations to raise attendance and efficiency.',
    highlights: ['CID correlation','Attendance uplift'],
    tags: ['Data Analitics','Strategy','Productivity', 'Excel'],
    attachments: [{ label: 'Report (PDF)', path: '/uploads/festval-summary.pdf' }]
  },
  {
    id: 'hpp-entrepreneurship',
    title: 'Entrepreneurship Project – Pequeno Príncipe Hospital (2022)',
    category: 'Entrepreneurship',
    description: 'Founded and managed a venture for one year; donated 100% of profits (~R$181k) to charity.',
    highlights: ['Business plan','Execution','Social impact'],
    tags: ['Entrepreneurship','Accounting','Social Impact'],
    attachments: [{ label: 'Report (PDF)', path: '/uploads/empreendedorisma.pdf' }]
  },
    {
    id: 'young-interprise',
    title: 'Young Enterprise – Izlit(2017 - 2018)',
    category: 'Entrepreneurship',
    description: 'Led a 7-member team in streetwear resale operations across London, Mexico, and Switzerland, generating CHF 10,500 profit.',
    highlights: ['Business plan','Sales','Accounting'],
    tags: ['Entrepreneurship','Teamwork', 'Sales']
  },
    {
    id: 'fiji',
    title: 'Fiji (2019)',
    category: 'Social Experiences',
    description: 'Contributed to the construction of a women’s shelter as part of an international service project',
    highlights: ['Teamwork','Social Impact','Resilience'],
    tags: ['Community Service','Cross-Cultural', 'Execution'],
  },
    {
    id: 'cambojia',
    title: 'Cambojia (2018)',
    category: 'Social Experiences',
    description: 'Volunteered in a local orphanage community, developing sustainable educational and entrepreneurial initiatives in partnership with NGO AVEC.',
    highlights: ['Initiative','Social Impact','Sustainability'],
    tags: ['Community Service','Education', 'Cross-Cultural']
  }
]
