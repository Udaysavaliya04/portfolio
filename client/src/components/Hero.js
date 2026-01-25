import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import Reveal from './Reveal';

const DYNAMIC_TEXTS = ["I ship fast", "I build at scale", "I deliver quality"];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % DYNAMIC_TEXTS.length);
        setFade(true);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-text">
              <Reveal delay={100}>
                <div className="hero-greeting">
                  <span className="greeting-text" style={{ fontFamily: 'Instrument' }}>Hi! I'm</span>
                  <h1 className="hero-name">
                    <span className="section-title" style={{color: "white", letterSpacing: "+0.01em" }}>Uday Savaliya</span>
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="hero-dynamic-text">
                  <h2 className="hero-tagline">
                    <span className={`dynamic-word gradient-text ${fade ? 'fade-in' : 'fade-out'}`}>
                      {DYNAMIC_TEXTS[currentTextIndex]}
                    </span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={500}>
                <p className="hero-description">
                  Building high-performance microservices, event-driven architectures, and distributed systems that scale gracefully under load. I care about clean architecture, performance and distributed design.
                </p>
              </Reveal>

              <Reveal delay={700}>
                <div className="hero-actions">
                  <a href="#portfolio-showcase" className="btn btn-primary">
                    View My Work
                  </a>
                  <a
                    href= "https://drive.google.com/file/d/1ksm_bWhMd0-8r2-hkoIrjEwNoGksTgSg/view?usp=sharing"
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={18} />
                    Resume
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={600} variant="reveal-scale" className="hero-right">
            <div>
              <div className="glass-carousel-container">
                <div className="glass-reflection-layer"></div>
                <div className="glass-noise-overlay"></div>
                
                <div className="inner-glass-content">
                  <div className="image-carousel">
                    <div
                      className={`carousel-item ${
                        currentImageIndex === 0 ? "active" : ""
                      }`}
                    >
                      <div className="tech-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                      </div>
                    </div>
                    <div
                      className={`carousel-item ${
                        currentImageIndex === 1 ? "active" : ""
                      }`}
                    >
                      <div className="tech-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                      </div>
                    </div>
                    <div
                      className={`carousel-item ${
                        currentImageIndex === 2 ? "active" : ""
                      }`}
                    >
                      <div className="tech-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                      </div>
                    </div>
                    <div
                      className={`carousel-item ${
                        currentImageIndex === 3 ? "active" : ""
                      }`}
                    >
                      <div className="tech-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                      </div>
                    </div>
                    <div
                      className={`carousel-item ${
                        currentImageIndex === 4 ? "active" : ""
                      }`}
                    >
                      <div className="tech-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                      </div>
                    </div>
                    <div
                      className={`carousel-item ${
                        currentImageIndex === 5 ? "active" : ""
                      }`}
                    >
                      <div className="tech-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                      </div>
                    </div>
                    <div
                      className={`carousel-item ${
                        currentImageIndex === 6 ? "active" : ""
                      }`}
                    >
                      <div className="tech-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                      </div>
                    </div>
                  </div>

                  {/* Image indicators */}
                  <div className="carousel-indicators">
                    {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                      <button
                        key={index}
                        className={`indicator ${
                          currentImageIndex === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="floating-badges">
                <div className="badge badge-1">Available for Hire!</div>
                <div className="badge badge-2">Available for Projects!</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
