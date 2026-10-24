import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, Code2, Github, Linkedin, Mail, Menu, Server, Terminal, X, Download, Cpu, Database, Layers3, ExternalLink, MapPin } from 'lucide-react'

const skills = [
  { name: 'Java', group: 'CORE', icon: Code2 },
  { name: 'Spring Boot', group: 'BACKEND', icon: Server },
  { name: 'REST APIs', group: 'BACKEND', icon: Braces },
  { name: 'Microservices', group: 'ARCHITECTURE', icon: Layers3 },
  { name: 'MySQL', group: 'DATABASE', icon: Database },
  { name: 'Apache Kafka', group: 'MESSAGING', icon: Cpu },
  { name: 'Git & Maven', group: 'TOOLING', icon: Terminal },
  {name: 'AWS & Cloud Services', group: 'CLOUD / INFRASTRUCTURE', icon: Layers3,},
]

const cloudServices = [
  {
    name: 'Amazon EC2',
    group: 'COMPUTE',
    detail: 'Virtual servers and compute',
    icon: Server,
  },
  {
    name: 'Amazon S3',
    group: 'STORAGE',
    detail: 'Object storage',
    icon: Database,
  },
  {
    name: 'AWS IAM',
    group: 'SECURITY',
    detail: 'Identity and access management',
    icon: Check,
  },
  {
    name: 'Amazon RDS',
    group: 'DATABASE',
    detail: 'Managed relational databases',
    icon: Database,
  },
  {
    name: 'Amazon CloudWatch',
    group: 'MONITORING',
    detail: 'Metrics, logs and monitoring',
    icon: Cpu,
  },
  {
    name: 'Amazon ECS / ECR',
    group: 'CONTAINERS',
    detail: 'Container orchestration and registry',
    icon: Layers3,
  },
  {
    name: 'AWS Lambda',
    group: 'SERVERLESS',
    detail: 'Event-driven serverless compute',
    icon: Code2,
  },
]


const projects = [
  { id: '01', name: 'OFIS — Farmer Information System', type: 'FIELD DATA · MICROSERVICES', description: 'A field operations platform for collecting farmer and farm data, capturing GPS points, coordinating training activities, and tracking transactions.', stack: ['Java', 'Spring Boot', 'MySQL', 'Kafka'], accent: 'violet', icon: MapPin },
  { id: '02', name: 'Spring Boot REST API', type: 'BACKEND · API DESIGN', description: 'A structured REST API demonstrating layered architecture, DTO-based responses, data persistence, and clear separation of controller, service, and repository logic.', stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL'], accent: 'cyan', icon: Braces },
]

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'abhishekwabale01@gamil.com'
  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { window.location.href = `mailto:${email}` }
  }

  return <div className="min-h-screen overflow-hidden bg-ink text-white selection:bg-violet/30">
    <div className="site-grid" aria-hidden="true" />
    <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
    <header className="nav-wrap">
      <nav className="nav container-shell">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">A<span>.</span></span><span className="brand-name">ABHISHEK WABALE<span className="brand-sub">BACKEND ENGINEER</span></span></a>
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#stack" onClick={closeMenu}>Stack</a><a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <main>
      <section id="home" className="hero container-shell">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
          <motion.div variants={fadeUp} className="availability"><span className="pulse-dot"/> OPEN TO BACKEND OPPORTUNITIES <span className="availability-line"/></motion.div>
          <motion.p variants={fadeUp} className="eyebrow">JAVA BACKEND DEVELOPER <span> / </span> INDIA</motion.p>
          <motion.h1 variants={fadeUp}>Building the <span className="gradient-text">logic</span><br/>behind great<br/><span className="outline-text">experiences.</span></motion.h1>
          <motion.p variants={fadeUp} className="hero-description">I’m Abhishek — a backend developer focused on building dependable APIs, clean services, and systems that solve real problems.</motion.p>
          <motion.div variants={fadeUp} className="hero-actions"><a href="#work" className="button-primary">Explore my work <ArrowUpRight size={17}/></a><a href="#contact" className="button-quiet">Get in touch <ArrowDownRight size={16}/></a></motion.div>
          <motion.div variants={fadeUp} className="hero-meta"><span><span className="meta-symbol">⌘</span> Java · Spring Boot</span><span className="meta-separator"/><span>Based in India</span></motion.div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .25 }}>
          <div className="visual-top"><span className="mono-label">SYSTEM.OVERVIEW</span><span className="live-tag"><i/> LIVE PREVIEW</span></div>
          <div className="visual-center">
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
            <div className="core-glow"><div className="core-icon"><Code2 size={42} strokeWidth={1.3}/></div></div>
            <div className="float-chip chip-java"><span className="chip-dot violet-dot"/> Java <b>21</b></div>
            <div className="float-chip chip-spring"><span className="chip-dot green-dot"/> Spring Boot</div>
            <div className="float-chip chip-api"><Braces size={14}/> REST APIs</div>
            <div className="float-chip chip-db"><Database size={14}/> MySQL</div>
          </div>
          <div className="visual-bottom"><div><span className="mini-label">FOCUS</span><strong>Backend systems</strong></div><div><span className="mini-label">APPROACH</span><strong>Build · Test · Improve</strong></div><div className="terminal-status"><span/> READY</div></div>
          <div className="visual-corner corner-tl"/><div className="visual-corner corner-br"/>
        </motion.div>
        <a href="#about" className="scroll-cue"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
        <div className="hero-index mono-label">PORTFOLIO / 2026 <span>—</span> 001</div>
      </section>

      <section id="about" className="section container-shell about-section">
        <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .35 }} variants={fadeUp}><p className="eyebrow">01 / THE DEVELOPER</p><h2>Curious by nature.<br/><span className="muted-heading">Engineer by practice.</span></h2></motion.div>
        <div className="about-grid"><motion.div className="about-lead" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><p>I enjoy turning complex requirements into backend services that are simple to understand, maintain, and scale.</p><p>My work centers on Java and the Spring ecosystem — designing APIs, working with relational data, and understanding how the pieces of a backend application fit together.</p><a href="#contact" className="text-link">Let’s build something useful <ArrowUpRight size={16}/></a></motion.div>
          <motion.div className="principles" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="principle"><span className="principle-num">01</span><div><h3>Clean architecture</h3><p>Readable code, clear responsibilities, maintainable services.</p></div><Braces className="principle-icon"/></div>
            <div className="principle"><span className="principle-num">02</span><div><h3>Reliable APIs</h3><p>Thoughtful endpoints, predictable responses, useful errors.</p></div><Server className="principle-icon"/></div>
            <div className="principle"><span className="principle-num">03</span><div><h3>Continuous learning</h3><p>Improve fundamentals, test ideas, ship better solutions.</p></div><Cpu className="principle-icon"/></div>
          </motion.div>
        </div>
      </section>

      <section id="stack" className="section container-shell stack-section">
        <motion.div className="section-heading heading-row" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><div><p className="eyebrow">02 / TOOLKIT</p><h2>My technical <span className="gradient-text">stack.</span></h2></div><p className="heading-aside">Tools I use to build, connect,<br/>and maintain backend applications.</p></motion.div>
        <div className="skill-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <motion.div key={skill.name} className="skill-card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} whileHover={{ y: -5, borderColor: 'rgba(155,140,255,.55)' }}><div className="skill-card-top"><Icon size={19}/><span>{String(i + 1).padStart(2, '0')}</span></div>
          <h3>{skill.name}</h3>
          <p>{skill.group}</p>

          {skill.name === 'AWS & Cloud Services' && (
              <div className="aws-service-tags">
                {[
                  'EC2',
                  'S3',
                  'IAM',
                  'RDS',
                  'CloudWatch',
                  'ECS / ECR',
                  'Lambda',
                ].map((service) => (
                    <span key={service}>{service}</span>
                ))}
              </div>
          )}

          <div className="skill-card-glow"/>
        </motion.div> })}</div>
        <p className="stack-note"><span className="note-star">✳</span> Also familiar with: GitHub · Maven · Postman · IntelliJ IDEA</p>
      </section>

      <section id="cloud" className="section container-shell stack-section cloud-section">
        <motion.div
            className="section-heading heading-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
          <div>
            <p className="eyebrow">CLOUD / INFRASTRUCTURE</p>
            <h2>
              AWS &amp; <span className="gradient-text">cloud services.</span>
            </h2>
          </div>
          <p className="heading-aside">
            Cloud infrastructure, storage, security,
            <br />
            containers and application monitoring.
          </p>
        </motion.div>

        <div className="skill-grid">
          {cloudServices.map((service, i) => {
            const Icon = service.icon

            return (
                <motion.div
                    key={service.name}
                    className="skill-card cloud-skill-card"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.06 },
                      },
                    }}
                    whileHover={{
                      y: -5,
                      borderColor: 'rgba(155,140,255,.55)',
                    }}
                >
                  <div className="skill-card-top">
                    <Icon size={19} />
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <h3>{service.name}</h3>
                  <p>{service.group}</p>

                  <div className="skill-card-glow" />

                  <span className="cloud-service-detail">
            {service.detail}
          </span>
                </motion.div>
            )
          })}
        </div>

        <p className="stack-note cloud-note">
          <span className="note-star">✳</span>
          Cloud skills · AWS infrastructure · Deployment and monitoring
        </p>
      </section>


      <section id="work" className="section container-shell work-section">
        <motion.div className="section-heading heading-row" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Built with <span className="gradient-text">purpose.</span></h2></div><span className="project-count mono-label">02 PROJECTS / CASE FILES</span></motion.div>
        <div className="project-list">{projects.map((project, i) => { const Icon = project.icon; return <motion.article key={project.id} className={`project-card ${project.accent}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: i * .1 }}><div className="project-main"><div className="project-number mono-label">CASE / {project.id}</div><div className="project-content"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></div><div className="project-art"><div className="project-art-grid"/><div className="project-art-ring ring-one"/><div className="project-art-ring ring-two"/><div className="project-art-icon"><Icon size={38} strokeWidth={1.25}/></div><span className="art-caption">{project.id} / BACKEND MODULE</span></div><div className="project-footer"><span><i/> ARCHITECTURE & IMPLEMENTATION</span><span className="project-arrow"><ArrowUpRight size={19}/></span></div></motion.article> })}</div>
        <p className="project-disclaimer">Project details shown here are a portfolio summary. Add verified repository links, screenshots, and measurable outcomes before publishing.</p>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-glow"/><div className="container-shell contact-inner"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><p className="eyebrow">04 / NEXT STEP</p><h2>Have a problem<br/>worth <span className="gradient-text">solving?</span></h2><p className="contact-copy">I’m interested in backend engineering opportunities and building products with thoughtful teams. Let’s connect.</p><div className="contact-actions"><button className="button-primary" onClick={copyEmail}>{copied ? <Check size={17}/> : <Mail size={17}/>} {copied ? 'Email copied' : 'Copy email'} <ArrowUpRight size={16}/></button><a className="button-quiet" href={`mailto:${email}`}>Open email app <ArrowUpRight size={16}/></a></div></motion.div><motion.div className="contact-side" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span className="contact-side-label mono-label">CURRENT STATUS</span><div className="status-card"><span className="pulse-dot"/><div><strong>Open to opportunities</strong><p>Java Backend · Software Engineer</p></div></div><span className="contact-side-label mono-label social-label">FIND ME ONLINE</span><a href="https://github.com/abhishekwabale01" target="_blank" rel="noreferrer" className="social-row"><span><Github size={17}/> GitHub</span><ArrowUpRight size={16}/></a><a href="https://linkedin.com/in/abhishek-wabale-30a788433/" target="_blank" rel="noreferrer" className="social-row"><span><Linkedin size={17}/> LinkedIn</span><ArrowUpRight size={16}/></a></motion.div></div>
      </section>
    </main>
    <footer className="footer container-shell"><a href="#home" className="footer-brand">A<span>.</span></a><span>DESIGNED & BUILT WITH INTENTION</span><span>© 2026 ABHISHEK WABALE</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>
}

export default App