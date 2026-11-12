import { resume as r } from './resume'

const nav = [
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

const Section = ({ id, title, children }) => (
  <section id={id}>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
)

const Points = ({ items }) => (
  <ul>
    {items.map((p) => (
      <li key={p}>{p}</li>
    ))}
  </ul>
)

export default function App() {
  return (
    <>
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#top">{r.name}</a>
          <nav aria-label="Sections">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap" id="top">
        <div className="hero">
          <p className="status">{r.status}</p>
          <h1>{r.name}</h1>
          <p className="role">{r.title}</p>
          <p className="lede">{r.summary}</p>
          <div className="actions">
            <a className="btn primary" href={r.cv} download>Download CV</a>
            <a className="btn" href={`mailto:${r.email}`}>Email me</a>
          </div>
        </div>

        <Section id="experience" title="Experience">
          {r.experience.map((e) => (
            <div className="item" key={e.company}>
              <h3>{e.role}, {e.company}</h3>
              <p className="meta">{e.period}</p>
              <Points items={e.points} />
            </div>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          {r.projects.map((p) => (
            <div className="item" key={p.name}>
              <h3>{p.name}</h3>
              <p className="meta">{p.stack}</p>
              <Points items={p.points} />
            </div>
          ))}
        </Section>

        <Section id="skills" title="Technical skills">
          <dl className="skills">
            {r.skills.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education">
          <div className="item">
            <h3>{r.education.degree}</h3>
            <p className="meta">{r.education.school}, {r.education.period}</p>
          </div>
          {r.certifications.map(([name, by, when]) => (
            <div className="item" key={name}>
              <h3>{name}</h3>
              <p className="meta">{by}, {when}</p>
            </div>
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <p className="lede">Looking for a backend or full-stack engineer? Get in touch.</p>
          <p>
            <a href={`mailto:${r.email}`}>{r.email}</a><br />
            <a href={r.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><br />
            <a href={r.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </Section>
      </main>

      <footer>
        <div className="wrap">&copy; {new Date().getFullYear()} {r.name}</div>
      </footer>
    </>
  )
}
