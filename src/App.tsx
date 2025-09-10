import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, MapPin, ExternalLink, FileDown, ArrowUpRight, Search } from 'lucide-react'
import Button from './components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card'
import Input from './components/ui/Input'
import Separator from './components/ui/Separator'
import ThemeToggle from './components/ThemeToggle'
import { CERTIFICATES } from './content/certificates'
import { PROJECTS, type Project } from './content/projects'

// ---- PROFILE ----
const PROFILE = {
  name: 'Gabriel Vieira',
  title: 'Finance Student · Asset Management & Valuation',
  location: 'Geneva, Switzerland',
  email: 'gabriel.vieira@mail.fae.edu',
  phone: '+55 41 99279-0720',
  photo: '/uploads/profile.png',
  links: {
    linkedin: 'https://www.linkedin.com/in/',
    portfolio: '#projects',
    cv: '/uploads/cv.pdf'
  },
  summary:
    'Finance student with international experience. Focused on asset management, equity valuation, risk analysis, and data-driven decisions. Seeking a finance internship.'
}

// NOTE: Keep this spelling consistent with your PROJECTS data
const CATS = ['All','Asset Management','Consulting','Data & Analytics','Entrepreneurship','Social Experiences'] as const
export type Cat = typeof CATS[number]

function SectionTitle({title, subtitle}:{title:string; subtitle?:string}){
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-gray-600 dark:text-gray-300 mt-1 max-w-2xl">{subtitle}</p> : null}
    </div>
  )
}

function ProjectCard({p}:{p:Project}){
  return (
    <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.25}}>
      <Card className="hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <CardTitle className="text-lg md:text-xl">{p.title}</CardTitle>
              <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{p.description}</p>
            </div>
            <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-xs">{p.category}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {p.cover ? <img src={p.cover} alt={p.title} className="rounded-xl border border-gray-200 dark:border-gray-700" /> : null}
          {p.highlights?.length ? (
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {p.highlights.map((h,i)=>(<li key={i}>{h}</li>))}
            </ul>
          ) : null}
          {p.tags?.length ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {p.tags.map((t)=>(<span key={t} className="rounded-full border border-foreground/20 px-2 py-0.5 text-xs">{t}</span>))}
            </div>
          ) : null}
          {(p.attachments?.length || p.links?.length) ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {p.attachments?.map(a => (
                <a key={a.label} href={a.path} target="_blank" rel="noreferrer" className="text-xs underline flex items-center gap-1"><ExternalLink className="h-3 w-3" />{a.label}</a>
              ))}
              {p.links?.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-xs underline flex items-center gap-1"><ExternalLink className="h-3 w-3" />{l.label}</a>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function App(){
  const [active, setActive] = React.useState<Cat>('All')
  const [query, setQuery] = React.useState('')

  const filtered = PROJECTS.filter(p=>{
    const byCat = active==='All' || p.category===active
    const q = query.trim().toLowerCase()
    const byQ = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.tags||[]).some(t=>t.toLowerCase().includes(q))
    return byCat && byQ
  })

  const scrollTo = (id:string)=>{
    const el = document.querySelector(id)
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'})
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container py-3 flex items-center justify-between">
          {/* Left: University logo */}
          <div className="flex items-center">
            <img
              src={"/uploads/eu.png"}
              alt="EU Business School"
              className="hidden md:block h-10 w-auto mr-4"
            />
          </div>
          {/* Right: Nav */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={()=>scrollTo('#about')}>About</Button>
            <Button variant="ghost" size="sm" onClick={()=>scrollTo('#projects')}>Projects</Button>
            <Button variant="ghost" size="sm" onClick={()=>scrollTo('#contact')}>Contact</Button>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="sm" className="gap-1"><Linkedin className="h-4 w-4"/> LinkedIn</Button>
            </a>
            <a href={`mailto:${PROFILE.email}`}>
              <Button variant="ghost" size="sm" className="gap-1"><Mail className="h-4 w-4"/> Email</Button>
            </a>
            <ThemeToggle/>
          </div>
        </div>
      </div>

      {/* Hero / About */}
      <section id="about" className="container pt-10 md:pt-14">
        <div className="grid md:grid-cols-[1.15fr_.85fr] gap-8 items-start">
          {/* Left column */}
          <div>
            <div className="flex items-start gap-5">
              <img src={PROFILE.photo} alt={PROFILE.name} className="h-20 w-20 rounded-full object-cover ring-2 ring-foreground/10" />
              <div>
                <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.35}} className="text-3xl md:text-5xl font-bold leading-tight">{PROFILE.name}</motion.h1>
                <p className="text-foreground/70 mt-1">{PROFILE.title}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-5 max-w-2xl">{PROFILE.summary}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {['Asset Management','Valuation','Risk Analysis','Data Analytics'].map(tag=>(
                <span key={tag} className="rounded-full bg-foreground/10 px-3 py-1 text-xs">{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a href={PROFILE.links.cv} target="_blank" rel="noreferrer"><Button className="gap-2"><FileDown className="h-4 w-4"/> Download CV</Button></a>
              <Button variant="secondary" className="gap-2" onClick={()=>scrollTo('#projects')}>See Projects <ArrowUpRight className="h-4 w-4"/></Button>
            </div>

            {/* Certificates card fills the left blank space */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Certificates</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  {CERTIFICATES.map(cert => (
                    <li key={cert.title} className="flex items-center justify-between">
                      <span>
                        {cert.title} — <span className="text-foreground/70">{cert.issuer}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="tabular-nums text-xs text-foreground/60">{cert.year}</span>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs underline"
                          >
                            View
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right column: Highlights + Education */}
          <Card className="md:mt-2">
            <CardHeader>
              <CardTitle>Highlights</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-medium">Skills</p>
                  <ul className="mt-3 space-y-2">
                    {['Equity Valuation','Data Analytics','Risk Management','Financial Modeling','Excel / PowerPoint','Python'].map(s=>(
                      <li key={s} className="flex items-center">
                        <span className="mr-2 text-xs">•</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Languages</p>
                  <ul className="mt-3 space-y-2">
                    {['English (B2+/C1)','Portuguese (Native)','Spanish (Beginner)','Italian (Beginner)','French (Learning)'].map(l=>(
                      <li key={l} className="flex items-center">
                        <span className="mr-2 text-xs">•</span>{l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Separator className="my-4" />
              <p className="font-medium mb-2">Education</p>
              <ol className="relative ml-3 border-l border-foreground/10 space-y-3">
                {[
                  ['EU Business School – Geneva, Switzerland','2025 – 2026'],
                  ['FAE Business School – Curitiba, Brazil','2022 – 2025'],
                  ['Hult International Business School – Boston, USA','2019 – 2020'],
                  ['Collège Alpin Beau Soleil – Villars-sur-Ollon, Switzerland','2016 – 2019']
                ].map(([where, years])=>(
                  <li key={where} className="pl-4">
                    <span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-foreground/20" />
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-foreground/90">{where}</span>
                      <span className="tabular-nums text-xs text-foreground/60">{years}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-10 md:py-14">
        <SectionTitle title="Experience & Projects" subtitle="Selected work across asset management, consulting, and analytics." />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <Button key={c} variant={c===active ? 'default':'secondary'} size='sm' onClick={()=>setActive(c)}>{c}</Button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input className="pl-9" placeholder="Search projects, tags, tools…" value={query} onChange={e=>setQuery(e.target.value)} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {filtered.map(p => <ProjectCard key={p.id} p={p} />)}
          {filtered.length===0 && <div className="text-gray-600 dark:text-gray-300">No results. Try a different filter or keyword.</div>}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-16">
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Open to finance internships in asset management, research, or consulting.</p>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/><a className="hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
              <div className="flex items-center gap-2 mt-1"><MapPin className="h-4 w-4"/>{PROFILE.location}</div>
            </div>
            <div className="flex gap-2">
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Button variant="secondary" className="gap-2"><Linkedin className="h-4 w-4"/> LinkedIn</Button></a>
              <Button className="gap-2" onClick={()=>scrollTo('#projects')}>Projects <ExternalLink className="h-4 w-4"/></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t py-6 text-center text-xs text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</footer>
    </div>
  )
}
