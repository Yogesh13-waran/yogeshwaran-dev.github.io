import { useState, useEffect } from 'react';
import './App.css';
import './components.css';
import './animations.css';
import './timeline.css';

function App() {
  const [typingText, setTypingText] = useState('');
  const fullText = "Initializing Agentic Workflow...\\n> Loading System Architecture...\\n> Booting Scalable UIs...\\n> Status: Online.";
  
  // Terminal typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 40); // typing speed
    
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-block">
            <div className="hero-header-row">
              <div className="profile-image-container">
                {/* User can replace profile.jpeg in the public folder */}
                <img src="/profile.jpeg" alt="Yogeshwaran G" className="profile-image" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=YG&background=0a0a0a&color=00f0ff&size=150' }} />
              </div>
              <div>
                <p className="hero-greeting font-mono">Hi, my name is</p>
                <h1 className="hero-title">Yogeshwaran G.</h1>
              </div>
            </div>
            
            <h2 className="hero-subtitle text-gradient">I architect scalable systems & AI workflows.</h2>
            
            <p className="hero-description">
              I'm a Full-Stack Engineering Lead specializing in the MERN stack. I build 
              enterprise-grade SaaS platforms, highly scalable distributed systems, and 
              dynamic rendering engines. Currently focused on agentic AI orchestration.
            </p>

            <div className="hero-actions" style={{ marginTop: '1rem' }}>
              <a href="/Yogeshwaran_Resume.pdf" target="_blank" rel="noreferrer" className="skill-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '0.75rem 1.5rem', background: 'var(--accent-cyan-glow)', borderColor: 'var(--accent-cyan)' }}>
                <span>📄</span> Download Resume
              </a>
            </div>
          </div>

          {/* Terminal Effect */}
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
            </div>
            <div className="terminal-body">
              <span className="prompt-line">yogeshwaran@system:~$</span>
              <span style={{ whiteSpace: 'pre-line' }}>{typingText}</span>
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Box Skills Grid */}
      <section className="skills-section reveal-on-scroll">
        <h2 className="section-title">System Architecture & Skills</h2>
        <div className="bento-grid">
          
          <div className="bento-card glass-panel large">
            <div className="bento-header">
              <span style={{color: 'var(--accent-cyan)'}}>✦</span> Backend & Architecture
            </div>
            <p style={{color: 'var(--text-muted)'}}>Designing horizontally scalable, event-driven distributed systems.</p>
            <div className="skill-pills">
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">Redis / BullMQ</span>
              <span className="skill-pill">RESTful APIs</span>
              <span className="skill-pill">Micro-endpoints</span>
              <span className="skill-pill">Mutex Locking</span>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="bento-header">
              <span style={{color: 'var(--accent-purple)'}}>✦</span> Frontend UI
            </div>
            <p style={{color: 'var(--text-muted)'}}>Building strict 60FPS dynamic rendering engines.</p>
            <div className="skill-pills">
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">Redux Toolkit</span>
              <span className="skill-pill">Material-UI</span>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="bento-header">
              <span style={{color: 'var(--accent-cyan)'}}>✦</span> AI & DevOps
            </div>
            <p style={{color: 'var(--text-muted)'}}>Agentic orchestration and CI/CD pipelines.</p>
            <div className="skill-pills">
              <span className="skill-pill">Agentic Workflows</span>
              <span className="skill-pill">Cursor / Prompting</span>
              <span className="skill-pill">Docker</span>
              <span className="skill-pill">AWS</span>
              <span className="skill-pill">CI/CD Pipelines</span>
            </div>
          </div>

        </div>
      </section>
      
      {/* Projects Showcase */}
      <section className="projects-section reveal-on-scroll">
        <h2 className="section-title">Elite Deployments</h2>
        <div className="projects-container">
          
          <div className="project-card glass-panel">
            <h3 className="project-title">WEJHA - Smart Signage</h3>
            <div className="project-role">Lead Architect @ AICTEC Saudi</div>
            
            <div className="project-metrics">
              <div className="metric">
                <span className="metric-value">500%</span>
                <span className="metric-label">Velocity Increase</span>
              </div>
              <div className="metric">
                <span className="metric-value">2 mo</span>
                <span className="metric-label">Time to Prod</span>
              </div>
            </div>

            <ul className="project-bullets">
              <li><strong>AI Orchestration:</strong> Spearheaded architecture via agent-native workflows while establishing strict architectural guardrails against AI technical debt.</li>
              <li><strong>Distributed Systems:</strong> Architected a horizontally scalable background sync engine with MongoDB cluster-wide mutex locking to eliminate race conditions.</li>
              <li><strong>Advanced DSA:</strong> Engineered an automated recursive tree-traversal data-mapping engine with RegEx fuzzy-matching.</li>
            </ul>
          </div>

          <div className="project-card glass-panel" style={{borderLeftColor: 'var(--accent-cyan)'}}>
            <h3 className="project-title">Digi-Care X & HRMS</h3>
            <div className="project-role">Software Developer @ Kanmalai Technologies</div>
            
            <div className="project-metrics">
              <div className="metric">
                <span className="metric-value" style={{color: 'var(--accent-purple)'}}>30%</span>
                <span className="metric-label">Speed Increase</span>
              </div>
              <div className="metric">
                <span className="metric-value" style={{color: 'var(--accent-purple)'}}>40%</span>
                <span className="metric-label">Less Latency</span>
              </div>
            </div>

            <ul className="project-bullets">
              <li><strong>Performance Engineering:</strong> Decoupled presentation layer via normalized Redux state, accelerating patient appointment processing.</li>
              <li><strong>Microservices Refactoring:</strong> Decreased HR system response latency by 40% by refactoring monolithic Express.js controllers into RESTful micro-endpoints.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience-section reveal-on-scroll">
        <h2 className="section-title">Career Trajectory</h2>
        <div className="timeline-container">
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3>Team Lead / Full Stack Developer</h3>
                <span className="timeline-date font-mono">Mar 2024 - Present</span>
              </div>
              <div className="timeline-company">Transond Systems (AICTEC Saudi)</div>
              <p className="timeline-desc">Leading the architecture and deployment of the WEJHA enterprise smart signage platform. Orchestrating AI-augmented development cycles, engineering distributed synchronization engines, and managing MongoDB cluster-wide mutex locking.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3>Software Developer</h3>
                <span className="timeline-date font-mono">Dec 2022 - Mar 2024</span>
              </div>
              <div className="timeline-company">Kanmalai Technologies</div>
              <p className="timeline-desc">Engineered Digi-Care X (Healthcare) & HRMS platforms. Optimized MySQL databases reducing query execution by 40%, and refactored monolithic controllers into scalable RESTful micro-endpoints.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3>MERN Stack Intern</h3>
                <span className="timeline-date font-mono">Jun 2022 - Nov 2022</span>
              </div>
              <div className="timeline-company">10x Academy</div>
              <p className="timeline-desc">Built a mobile-first Real Estate platform, designing denormalized MongoDB schemas for geospatial aggregations and reducing search latency by 50%.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Connect Section */}
      <footer className="footer-section reveal-on-scroll" style={{ textAlign: 'center', padding: '4rem 0', borderTop: '1px solid var(--border-subtle)' }}>
        <h2 className="section-title" style={{ justifyContent: 'center' }}>Initialize Connection</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Ready to architect scalable systems together?</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="mailto:yogeshwaran130299@gmail.com" className="skill-pill" style={{ fontSize: '1.1rem' }}>Email Me</a>
          <a href="https://www.linkedin.com/in/yogeshwaran-g-46b99b215" target="_blank" rel="noreferrer" className="skill-pill" style={{ fontSize: '1.1rem' }}>LinkedIn</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
