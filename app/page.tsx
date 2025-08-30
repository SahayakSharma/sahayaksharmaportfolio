'use client';

import React, { useEffect } from 'react';

export default function Page() {
  // IntersectionObserver for reveal effects

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .section, .card, .project');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mobile menu toggle
  useEffect(() => {
    const toggle = document.querySelector<HTMLButtonElement>('.nav__toggle');
    const links = document.querySelector<HTMLDivElement>('.nav__links');
    if (!toggle || !links) return;
    const onClick = () => {
      links.classList.toggle('open');
      toggle.classList.toggle('open');
    };
    toggle.addEventListener('click', onClick);
    return () => toggle.removeEventListener('click', onClick);
  }, []);

  return (
    <main className="text-[--text] bg-[--bg] selection:bg-purple-500/30 selection:text-white" style={rootVars as React.CSSProperties}>
      {/* Navbar */}
      <header className="nav sticky top-0 z-50 backdrop-blur-md bg-[linear-gradient(to_right,rgba(15,22,37,.6),rgba(15,22,37,.2))] border-b border-[rgba(124,58,237,.25)]">
        <div className="container mx-auto w-[min(1120px,92%)] flex items-center justify-between py-[.9rem]">
          <a href="#home" className="brand no-underline font-extrabold tracking-wide text-white text-[1.1rem]">
            Sahayak<span className="text-[--accent]">Sharma</span>
          </a>

          <nav className="nav__links hidden gap-3 md:flex">
            <a className="navlink" href="#about">About</a>
            <a className="navlink" href="#experience">Experience</a>
            <a className="navlink" href="#projects">Projects</a>
            <a className="navlink" href="#skills">Skills</a>
            <a className="navlink" href="#contact">Contact</a>
          </nav>

          <button className="nav__toggle md:hidden" aria-label="Open menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        {/* mobile dropdown */}
        <div className="nav__links md:hidden absolute inset-x-0 top-[64px] grid gap-2 bg-[rgba(11,15,23,.95)] border-b border-[rgba(124,58,237,.25)] p-4 translate-y-[-120%] opacity-0 pointer-events-none transition-all duration-300">
          <a className="navlink block" href="#about">About</a>
          <a className="navlink block" href="#experience">Experience</a>
          <a className="navlink block" href="#projects">Projects</a>
          <a className="navlink block" href="#skills">Skills</a>
          <a className="navlink block" href="#contact">Contact</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero min-h-[92vh] grid place-items-center relative overflow-hidden">
        <div className="container w-[min(1120px,92%)] mx-auto grid grid-cols-1 gap-8 items-center lg:grid-cols-[1.2fr_.8fr]">
          <div className="hero__content">
            <h1 className="reveal font-extrabold text-white text-[clamp(2.2rem,5.4vw,4rem)] leading-[1.05] mt-[.2rem] mb-[.6rem]">
              {`Hi, I’m`} <span className="accent bg-clip-text text-transparent" style={accentGradient as React.CSSProperties}>Sahayak</span>
            </h1>
            <p className="reveal lead text-[#c0c0c0] text-[clamp(1.02rem,2.2vw,1.25rem)] max-w-[58ch]">
              Full‑stack developer crafting scalable web and mobile apps with Next.js, React Native, Node.js, and AWS.
            </p>
            <div className="reveal cta flex gap-2 my-5">
              <a className="btn btn--primary" href="#projects">View Projects</a>
              <a className="btn btn--ghost" href="#contact">Get in touch</a>
            </div>
            <div className="reveal quick flex flex-wrap items-center gap-2 text-[--muted]">
              <a className="link" href="">sahayaksharma6@gmail.com</a>
              <span className='text-[#c0c0c0]'>{`|`}</span>
              <a className="link" href="https://www.linkedin.com/in/sahayak-sharma/" target="_blank" rel="noopener">LinkedIn</a>
              <span className='text-[#c0c0c0]'>{`|`}</span>
              <a className="link" href="https://github.com/SahayakSharma" target="_blank" rel="noopener">GitHub</a>
              <span className='text-[#c0c0c0]'>{`|`}</span>
              <a className="link" href="">+91 9625594187</a>
            </div>
          </div>

          {/* Hero Art */}
          <div className="hero__art relative min-h-[320px]">
            <div className="orb orb--1" />
            <div className="orb orb--2" />
            <div className="orb orb--3" />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className="section__text">
          B.Tech Computer Science student at DIT University (CGPA 8.98) focused on building reliable, performant, and user‑centric products. Experienced across frontend (React/Next.js, React Native), backend (Node/Express), and cloud (AWS, Docker, Vercel). Comfortable with modern tooling, analytics, and real‑time systems.
        </p>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="cards grid gap-[18px] md:grid-cols-2">
          <article className="card">
            <div className="card__head">
              <h3 className="m-0 text-white">Software Development Intern</h3>
              <span className="pill">May 2025 – Present</span>
            </div>
            <p className="muted">GigzGenie</p>
            <ul className="list">
              <li>Implemented geofencing for location‑based features and improved targeting.</li>
              <li>Enhanced cross‑platform app UX with Expo and performant UI flows.</li>
              <li>Integrated Firebase Analytics for monitoring with structured logs.</li>
              <li>Automated notifications via Cloud Functions + FCM to specific users.</li>
            </ul>
          </article>

          <article className="card">
            <div className="card__head">
              <h3 className="m-0 text-white">Software Development Intern</h3>
              <span className="pill">Mar 2024 – Jul 2024</span>
            </div>
            <p className="muted">Artific Studio</p>
            <ul className="list">
              <li>Built a React Native app with robust auth and navigation layers.</li>
              <li>Developed a Next.js admin portal for real‑time client monitoring.</li>
              <li>Contributed to microservice architecture, workflows, and API design.</li>
            </ul>
          </article>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          <Project
            title="Niyokta"
            stack="Next.js • Express • PostgreSQL • Docker • AWS • Prisma"
            desc="Full‑stack freelance marketplace using microservices for scalable, maintainable deployment, secure auth with access/refresh tokens (HS256) and deployed frontend on Vercel and backend on AWS."
            links={[
              { href: 'https://youtu.be/te5NTWEaW4g', label: 'Video Demo' },
              { href: 'https://github.com/orgs/Niyokta/repositories', label: 'Source Code' },
              { href: 'https://niyokta.vercel.app/', label: 'Live Preview' },
            ]}
            accent="cyan"
          />
          <Project
            title="Zink"
            stack="Next.js • Socket.io • Node.js • WebRTC • Firebase • AWS"
            desc="Real‑time video conferencing with optimized signaling and media handling for low latency, plus social features such as friend requests and one‑to‑one chat."
            links={[
              { href: 'https://youtu.be/GLfXjE1CQCY', label: 'Video Demo' },
              { href: 'https://github.com/SahayakSharma/videocallingapp', label: 'Source Code' },
              { href: 'https://zink-video.vercel.app', label: 'Live Preview' },
            ]}
            accent="cyan"
          />
          <Project
            title="Geo‑Fenced Time & Attendance"
            stack="Next.js • Auth0 • Firestore • shadcn/ui • Tailwind • Vercel"
            desc="Staff clock‑in/out with real‑time geolocation validation and 24‑hour window; RBAC with Auth0; admin portal for last‑24h and WoW attendance analytics."
            links={[
              { href: 'https://github.com/SahayakSharma/auth0lief/blob/main/README.md', label: 'Project Docs' },
              { href: 'https://github.com/SahayakSharma/auth0lief', label: 'Source Code' },
              { href: 'https://auth0lief.vercel.app/', label: 'Live Preview' },
            ]}
            accent="cyan"
          />
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="skills flex flex-wrap gap-2">
          {[
            'TypeScript','Python','React.js','React Native','Expo','Next.js','Tailwind CSS',
            'Node.js','Express.js','PostgreSQL','MongoDB','MySQL','Firebase Firestore',
            'AWS','Vercel','Nginx','Kubernetes','Docker','WebRTC','WebSocket','REST APIs',
            'EC2','Route53','FCM','Cloud Functions','Analytics','Git','Jira'
          ].map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="contact flex items-center gap-3">
          <a className="btn btn--primary px-3 py-1 rounded-md" href="">Email Me</a>
          <a className="btn btn--ghost px-3 py-1  rounded-md" href="https://www.linkedin.com/in/sahayak-sharma/" target="_blank" rel="noopener">LinkedIn</a>
          <a className="btn btn--ghost px-3 py-1 rounded-md" href="https://github.com/SahayakSharma" target="_blank" rel="noopener">GitHub</a>
        </div>
        <p className="tiny muted mt-3">B.Tech CSE @ DIT University • CGPA 8.98 • Dehradun • Aug 2022 – Feb 2026</p>
      </Section>

      {/* Footer */}
      <footer className="footer border-t border-[rgba(124,58,237,.25)] bg-[rgba(15,22,37,.6)] backdrop-blur">
        <div className="container w-[min(1120px,92%)] mx-auto flex items-center justify-between py-4">
          <p>© 2025 Sahayak Sharma</p>
          <a className="to-top" href="#home" aria-label="Back to top">↑</a>
        </div>
      </footer>

      {/* Global extra styles to replicate exact look */}
      <style jsx global>{`
        :root{
          --bg:#0b0f17;
          --panel:#0f1625;
          --glass:rgba(255,255,255,0.06);
          --text:#e6ebf2;
          --muted:#9aa3b2;
          --accent:#7c3aed;
          --accent2:#06b6d4;
          --ring:rgba(124,58,237,.35);
          --card:#111827;
        }
        body{
          background:
            radial-gradient(1200px 900px at 85% -10%, rgba(124,58,237,.25), transparent 60%),
            radial-gradient(800px 600px at -10% 20%, rgba(6,182,212,.18), transparent 60%),
            linear-gradient(180deg, #0a0f18 0%, #0b0f17 100%);
        }
        .navlink{
          color:var(--muted);
          font-weight:600;
          font-size:.95rem;
          padding:.5rem .7rem;
          border-radius:.6rem;
          text-decoration:none;
          transition:all .25s ease;
        }
        .navlink:hover{ color:#fff; background:var(--glass); box-shadow:0 0 0 4px var(--ring) inset }
        .nav__toggle .bar{ display:block; width:22px; height:2px; background:#fff; margin:4px 0; transition:.3s }
        .nav__toggle.open .bar:nth-child(1){ transform: translateY(6px) rotate(45deg) }
        .nav__toggle.open .bar:nth-child(2){ opacity:0 }
        .nav__toggle.open .bar:nth-child(3){ transform: translateY(-6px) rotate(-45deg) }
        .nav__links.open{ transform:translateY(0)!important; opacity:1!important; pointer-events:auto!important }

        .hero__content .btn{
          display:inline-flex; align-items:center; justify-content:center; gap:.4rem;
          padding:.8rem 1.1rem; border-radius:.8rem; text-decoration:none; font-weight:700; letter-spacing:.2px;
          transition:transform .1s ease, box-shadow .25s ease, background .25s ease, color .25s ease;
        }
        .btn--primary{ background:linear-gradient(135deg, var(--accent), var(--accent2)); color:#0b0f17; box-shadow:0 6px 18px rgba(124,58,237,.35) }
        .btn--primary:hover{ transform:translateY(-2px) }
        .btn--ghost{ border:1px solid rgba(124,58,237,.35); color:#fff; background:transparent }
        .btn--ghost:hover{ background:var(--glass) }
        .quick a{ color:#cfe3ff; text-decoration:none; opacity:.9 }
        .quick a:hover{ opacity:1 }

        .hero__art{ position:relative }
        .orb{
          position:absolute; border-radius:50%; filter: blur(22px); opacity:.7; mix-blend-mode: screen;
          animation: float 10s ease-in-out infinite;
        }
        .orb--1{ width:220px; height:220px; background:radial-gradient(circle at 30% 30%, #7c3aed, transparent); top:5%; left:5%}
        .orb--2{ width:160px; height:160px; background:radial-gradient(circle at 30% 30%, #06b6d4, transparent); bottom:10%; right:10%; animation-delay:-2s}
        .orb--3{ width:120px; height:120px; background:radial-gradient(circle at 30% 30%, #22d3ee, transparent); top:45%; right:35%; animation-delay:-5s}
        @keyframes float{
          0%,100%{ transform: translateY(0) translateX(0) }
          50%{ transform: translateY(-14px) translateX(10px) }
        }

        .section{ padding:80px 0; opacity:0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease }
        .section.in{ opacity:1; transform:none }
        .section__title{ font-size: clamp(1.6rem, 3.2vw, 2.2rem); margin:0 0 22px; position:relative }
        .section__title::after{
          content:""; display:block; width:64px; height:3px; margin-top:10px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
        }
        .section__text{ color:var(--muted); max-width:70ch }

        .card{
          background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
          border:1px solid rgba(124,58,237,.22);
          border-radius:14px; padding:18px 18px 8px;
          transition: box-shadow .25s ease, transform .15s ease, border-color .25s ease;
        }
        .card:hover{ transform: translateY(-4px); box-shadow: 0 10px 30px rgba(124,58,237,.18); border-color: rgba(124,58,237,.45) }
        .card__head{ display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:2px }
        .pill{
          background: rgba(124,58,237,.16); color:#d9c6ff; border:1px solid rgba(124,58,237,.35);
          padding:.25rem .55rem; border-radius:999px; font-size:.8rem; white-space:nowrap;
        }
        .muted{ color:var(--muted); margin-top:4px }
        .list{ margin:10px 0 8px; padding-left:18px }
        .list li{ margin:8px 0; color:#dbe2ee }

        .project{
          position:relative; overflow:hidden; border-radius:16px; padding:18px;
          background: radial-gradient(600px 300px at 0% 0%, rgba(6,182,212,.18), transparent 60%), var(--card);
          border:1px solid rgba(6,182,212,.25);
          transition: transform .18s ease, border-color .25s ease, box-shadow .25s ease;
        }
        .project:hover{ transform: translateY(-6px); border-color: rgba(6,182,212,.5); box-shadow: 0 12px 32px rgba(6,182,212,.16) }
        .project__header{ display:flex; flex-direction:column; gap:3px }
        .project h3{ margin:0; font-size:1.15rem }
        .stack{ color:#a7f3d0; font-size:.86rem }
        .project__desc{ color:#d8e3f7; margin:10px 0 12px }
        .project__actions{ display:flex; flex-wrap:wrap; gap:8px }
        .chip{
          text-decoration:none; color:#06121c; font-weight:800; letter-spacing:.2px; font-size:.85rem;
          background: linear-gradient(135deg, #67e8f9, #22d3ee); padding:.5rem .7rem; border-radius:.6rem;
          box-shadow:0 6px 16px rgba(34,211,238,.32); transition: transform .12s ease, filter .2s ease;
        }
        .chip:hover{ transform: translateY(-2px); filter: saturate(1.08) }

        .tag{
          color:#dbeafe; border:1px solid rgba(59,130,246,.45);
          background: linear-gradient(180deg, rgba(59,130,246,.18), rgba(59,130,246,.08));
          padding:.45rem .6rem; border-radius:.6rem; font-weight:700; font-size:.85rem;
          transition: transform .15s ease, box-shadow .25s ease;
        }
        .tag:hover{ transform: translateY(-2px); box-shadow:0 10px 18px rgba(59,130,246,.18) }

        .to-top{
          display:inline-flex; width:36px; height:36px; align-items:center; justify-content:center;
          border-radius:999px; text-decoration:none; color:#fff; border:1px solid rgba(255,255,255,.25)
        }
        .to-top:hover{ background:var(--glass) }

        .reveal{ opacity:0; transform: translateY(12px); transition: opacity .6s ease, transform .6s ease }
        .reveal.in{ opacity:1; transform:none }
      `}</style>
    </main>
  );
}

/* Inline CSS variables and gradients to ensure exact look */
const rootVars = {
  // same background layering as CSS version
  background:
    'radial-gradient(1200px 900px at 85% -10%, rgba(124,58,237,.25), transparent 60%), ' +
    'radial-gradient(800px 600px at -10% 20%, rgba(6,182,212,.18), transparent 60%), ' +
    'linear-gradient(180deg, #0a0f18 0%, #0b0f17 100%)',
} as const;

const accentGradient = {
  backgroundImage: 'linear-gradient(45deg, var(--accent), var(--accent2))',
} as const;

/* Small section and project components to keep JSX tidy */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container w-[min(1120px,92%)] mx-auto">
        <h2 className="section__title text-white">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Project({
  title,
  stack,
  desc,
  links,
}: {
  title: string;
  stack: string;
  desc: string;
  links: { href: string; label: string }[];
  accent?: 'cyan' | 'violet';
}) {
  return (
    <article className="project">
      <div className="project__header">
        <h3 className="text-white">{title}</h3>
        <span className="stack">{stack}</span>
      </div>
      <p className="project__desc">{desc}</p>
      <div className="project__actions">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener" className="chip">
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}
