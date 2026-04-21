import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Trophy, 
  Brain, 
  Rocket, 
  ChevronRight,
  Menu,
  X,
  Layers,
  Zap,
  Terminal,
  Telescope,
  BookOpen,
  Music,
  Dices
} from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.05em' }}
        >
          <span style={{ color: 'black' }}>SV.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>

        {/* Mobile Toggle */}
        <div className="hidden-md" style={{ display: 'none' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'white', borderBottom: '1px solid #eee', overflow: 'hidden' }}
          >
            <div className="flex flex-col" style={{ padding: '24px', gap: '16px' }}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="nav-link"
                  style={{ fontSize: '1.1rem' }}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ justifyContent: 'center' }}>Contact Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={className}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title && (
          <div className="section-title-wrapper">
            <h2 className="section-title" style={{ color: 'black' }}>{title}</h2>
            <div className="section-divider" />
          </div>
        )}
        {children}
      </motion.div>
    </div>
  </section>
);

const App = () => {
  const projects = [
    {
      title: "Orbital Nexus",
      tag: "Web3 Achievement",
      desc: "An achievement-based project exploring decentralized networks and orbital mechanics simulation.",
      link: "https://github.com/0xshobha",
      icon: <Rocket style={{ color: '#6E1A37' }} />
    },
    {
      title: "Rock Paper Scissors",
      tag: "Monad Testnet",
      desc: "Built on Monad testnet using Web3 concepts and blockchain interaction. A decentralized take on a classic game.",
      link: "https://github.com/0xshobha",
      icon: <Layers style={{ color: '#6E1A37' }} />
    },
    {
      title: "SheBTC Platform",
      tag: "HackGear 2.0",
      desc: "Built during HackGear 2.0, a platform focused on empowering women in Web3 through education and resources.",
      link: "https://shebtc.com",
      icon: <Globe style={{ color: '#6E1A37' }} />
    }
  ];

  const skills = [
    { name: "HTML/CSS/JS", icon: <Code2 size={20} /> },
    { name: "Python", icon: <Terminal size={20} /> },
    { name: "Rust (Basic)", icon: <Cpu size={20} /> },
    { name: "Web3 Fundamentals", icon: <Database size={20} /> },
    { name: "GitHub", icon: <Github size={20} /> },
    { name: "Figma", icon: <Layers size={20} /> },
    { name: "Canva", icon: <Globe size={20} /> }
  ];

  return (
    <div className="portfolio-wrapper">
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">
              Student by grade, builder by mindset
            </span>
            <h1 className="hero-title" style={{ color: 'black' }}>
              Shobha Vashishtha
            </h1>

            <p className="hero-subtitle">
              Class 12 PCM student interested in <span style={{ color: '#6E1A37', fontWeight: '600' }}>Web3, Computer Science, and Front Engineering.</span>
              <span style={{ display: 'block', marginTop: '8px', fontWeight: '400' }}>Focused on learning and building real-world projects.</span>
            </p>
            <div className="flex gap-4 justify-center items-center md-flex-col">
              <a href="#projects" className="btn btn-primary" style={{ padding: '16px 32px' }}>
                View Projects <Rocket size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ padding: '16px 32px' }}>
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Particles */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'rgba(110, 26, 55, 0.15)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, (Math.random() - 0.5) * 150, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                delay: i * 1.5
              }}
            />
          ))}
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="About Me" className="bg-secondary">
        <div className="about-grid">
          <div className="flex flex-col gap-6">
            <h3 style={{ fontSize: '1.5rem', color: 'black' }}>I'm a Class 12 PCM student with a passion for innovation.</h3>
            <p style={{ color: '#57534e', fontSize: '1.1rem' }}>
              I am deeply curious about <span style={{ fontWeight: '600' }}>Web3, blockchain, crypto, Computer Science, and Front Engineering.</span> My journey in tech is driven by a desire to understand how decentralized systems and future tech can reshape our world.
            </p>
            <div className="flex gap-4">
              <div className="info-card">
                <Brain style={{ color: '#6E1A37', marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 'bold' }}>Always Learning</h4>
                <p style={{ fontSize: '0.875rem', color: '#78716c' }}>Web3 & Computer Science</p>
              </div>
              <div className="info-card">
                <Rocket style={{ color: '#6E1A37', marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 'bold' }}>Building</h4>
                <p style={{ fontSize: '0.875rem', color: '#78716c' }}>Hackathon projects</p>
              </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card"
            style={{ padding: '32px' }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#d6d3d1' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#e7e5e4' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f5f5f4' }} />
              </div>
              <div style={{ paddingTop: '16px', fontFamily: 'monospace', fontSize: '0.875rem', color: '#57534e' }}>
                <p style={{ color: '#6E1A37', fontWeight: 'bold' }}>const shobha = &#123;</p>
                <p style={{ paddingLeft: '16px' }}>grade: "Class 12 PCM",</p>
                <p style={{ paddingLeft: '16px' }}>interests: ["Web3", "CompSci", "FrontEnd"],</p>
                <p style={{ paddingLeft: '16px' }}>focus: "Building the Future",</p>
                <p style={{ paddingLeft: '16px' }}>status: "Always Coding"</p>
                <p style={{ color: '#6E1A37', fontWeight: 'bold' }}>&#125;;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="glass-card project-card"
              whileHover={{ y: -10 }}
            >
              <div className="project-body">
                <div style={{ marginBottom: '16px', background: '#f2eef0', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {project.icon}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#6E1A37', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.tag}</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '8px', marginBottom: '12px', color: 'black' }}>{project.title}</h3>
                <p style={{ color: '#57534e', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  {project.desc}
                </p>
              </div>
              <div className="project-footer">
                <a href={project.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', color: '#6E1A37' }}>
                  View Project <ExternalLink size={16} />
                </a>
                <ChevronRight size={18} style={{ color: '#d6d3d1' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Stack" className="bg-secondary">
        <div className="flex gap-4 justify-center items-center" style={{ flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}>
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="skill-badge"
            >
              <span style={{ color: '#6E1A37' }}>{skill.icon}</span>
              <span style={{ fontWeight: '600', color: '#1c1917' }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Achievements & Interests */}
      <div className="container grid grid-cols-2 gap-12" style={{ padding: '80px 24px' }}>
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'black' }}>Achievements</h3>
          <div className="flex flex-col gap-4">
            {[
              { text: "Orbital Nexus", sub: "Project Excellence" },
              { text: "Winner – Monad Blitz Hackathon (Delhi)", sub: "Competitive Web3 Dev" },
              { text: "Built and deployed Web3 projects", sub: "Practical Application" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-maroon-100 hover:bg-stone-50 transition-all">
                <div style={{ marginTop: '4px' }}><Trophy style={{ color: '#6E1A37' }} size={20} /></div>
                <div>
                  <p style={{ fontWeight: 'bold', color: '#1c1917' }}>{item.text}</p>
                  <p style={{ fontSize: '0.875rem', color: '#57534e' }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'black' }}>Interests</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Web3, Blockchain, Crypto", 
              "Bitcoin & Decentralized Systems", 
              "Computer Science", 
              "Front Engineering",
              "Future Innovation"
            ].map((interest, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'white', border: '1px solid #f5f5f4', borderRadius: '16px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#57534e' }}>{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What I Enjoy Section */}
      <Section id="enjoy" title="What I Enjoy" className="bg-secondary">
        <div className="grid grid-cols-4 gap-6 md-grid-cols-1">
          {[
            { 
              name: "Chess", 
              desc: "Strategic thinking and planning.", 
              icon: <Dices size={24} />, 
              link: "https://www.chess.com/member/shobha_vashishtha",
              user: "Shobha_Vashishtha"
            },
            { name: "Badminton", desc: "Staying active and focused.", icon: <Zap size={24} /> },
            { name: "Reading", desc: "Physics & Future Tech.", icon: <BookOpen size={24} /> },
            { name: "Problem Solving", desc: "Finding elegant solutions.", icon: <Terminal size={24} /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="glass-card"
              style={{ padding: '24px', textAlign: 'center' }}
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ marginBottom: '16px', color: '#6E1A37', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h4 style={{ marginBottom: '8px', color: 'black' }}>{item.name}</h4>
              <p style={{ fontSize: '0.875rem', color: '#57534e' }}>{item.desc}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" style={{ display: 'block', marginTop: '12px', fontSize: '0.75rem', color: '#6E1A37', fontWeight: '600' }}>
                  @{item.user}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="contact-cta" style={{ background: '#6E1A37' }}>
          <div className="contact-cta-bg">
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '256px', height: '256px', background: 'white', borderRadius: '50%', filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '256px', height: '256px', background: 'white', borderRadius: '50%', filter: 'blur(80px)' }} />
          </div>
          
          <h3 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: 'bold' }}>Let's build something together!</h3>
          <p style={{ color: '#f0f2ee', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities in Web3 and Computer Science.
          </p>
          
          <div className="flex gap-6 justify-center" style={{ flexWrap: 'wrap' }}>
            <a href="mailto:shobhavash09@gmail.com" className="btn" style={{ background: 'white', color: '#6E1A37', padding: '12px 24px' }}>
              <Mail size={18} /> shobhavash09@gmail.com
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/0xshobha" target="_blank" rel="noreferrer" className="glass-card" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'rgba(255,255,255,0.1)' }}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/0xshobha/" target="_blank" rel="noreferrer" className="glass-card" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'rgba(255,255,255,0.1)' }}>
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/0xshobha" target="_blank" rel="noreferrer" className="glass-card" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'rgba(255,255,255,0.1)' }}>
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '48px 0', borderTop: '1px solid #f5f5f4' }}>
        <div className="container flex justify-between items-center md-flex-col gap-6">
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.05em' }}>
            <span style={{ color: 'black' }}>Shobha Vashishtha</span>
          </div>
          <p style={{ color: '#a8a29e', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()}. Student by grade, builder by mindset.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/0xshobha" style={{ color: '#78716c' }}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/0xshobha/" style={{ color: '#78716c' }}><Linkedin size={20} /></a>
            <a href="https://x.com/0xshobha" style={{ color: '#78716c' }}><TwitterIcon size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
