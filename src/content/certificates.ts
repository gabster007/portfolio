export type Certificate = {
  title: string
  issuer: string
  year: string
  link?: string // optional link to PDF or credential
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "Six Sigma Green Belt",
    issuer: "Ivankio Consulting",
    year: "2023",
    link: "/uploads/six-sigma.pdf"
  },
    {
    title: "CrewAi Multi-Agent Systems.",
    issuer: "Jõao Moura",
    year: "2024",
    link: "/uploads/crewai.pdf"
  },
  {
    title: "UNCTAD Empretec Student Ideas Challenge 2018",
    issuer: "United Nations",
    year: "2018",
    link: "/uploads/un.pdf"
  }
]
