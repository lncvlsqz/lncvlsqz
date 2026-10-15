import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Mail, MapPin, Phone } from "lucide-react";
import { about, education, profile } from "./data";
import FadeIn from "./components/FadeIn";
import Particles from "./components/Particles";
import PixelSwap from "./components/PixelSwap";
import ProjectExperience from "./components/ProjectExperience";
import SiteHeader from "./components/SiteHeader";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Timeline from "./components/Timeline";

function savedTheme() {
  try {
    return localStorage.getItem("lance-theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function App() {
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#000000" : "#f5f7f4");
    try {
      localStorage.setItem("lance-theme", theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-particles-bg" aria-hidden="true">
        <Particles
          particleColors={
            theme === "light"
              ? ["#2d5a4c", "#367b63", "#536960"]
              : ["#ffffff", "#9bd5c2", "#ffffff"]
          }
          particleCount={220}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          glow={0.5}
          twinkle={0.3}
          moveParticlesOnHover
          hoverEffect="parallax"
          sizeRandomness={1}
          shape="circle"
          depthOfField={0}
          connections={false}
          connectionDistance={110}
          particleHoverFactor={1}
          hoverRadius={140}
          drift="none"
          driftSpeed={1}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={20}
          variation={0}
          opacity={theme === "light" ? 0.75 : 0.95}
          clickBurst
          intro
          lightMode={theme === "light"}
        />
      </div>
      <SiteHeader theme={theme} setTheme={setTheme} />
      <main id="main" className="portfolio">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid">
            <FadeIn className="hero-profile-wrap">
              <div className="hero-profile">
                <PixelSwap
                  firstContent={
                    <img
                      className="profile-pixel-img"
                      src="/images/profile-light.jpg"
                      alt={profile.name}
                      width="300"
                      height="375"
                      loading="eager"
                    />
                  }
                  secondContent={
                    <img
                      className="profile-pixel-img"
                      src="/images/profile-dark.jpg"
                      alt={profile.name}
                      width="300"
                      height="375"
                      loading="eager"
                    />
                  }
                  pixelSize={16}
                  gap={0}
                  pixelRadius={10}
                  pixelSpin={0}
                  pixelScale={0.38}
                  duration={800}
                  pixelDuration={380}
                  pattern="random"
                  randomness={0.15}
                  fade
                  trigger="custom"
                  active={theme === "dark"}
                  aspectRatio="4 / 5"
                />
              </div>
            </FadeIn>

            <FadeIn className="hero-identity">
              <p className="location">
                <span className="status-dot" />
                Cabuyao, Laguna · Philippines
              </p>
              <h1 id="hero-title">
                {profile.name}
                <span className="name-period">.</span>
              </h1>
              <p className="hero-role">{profile.role} Student</p>
            </FadeIn>
            <FadeIn className="hero-details">
              <p className="hero-description">{profile.bio}</p>
              <div className="hero-actions">
                <div className="hero-buttons">
                  <a
                    className="button button-primary"
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View resume <FileText size={18} aria-hidden="true" />
                    <span className="sr-only"> (PDF, opens in a new tab)</span>
                  </a>
                </div>
                <SocialLinks />
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn
          as="section"
          className="section about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2 id="about-title">A little about me</h2>
          </div>
          <div className="about-layout">
            <p className="section-lead">
              Curiosity is where
              <br />
              everything starts<span className="name-period">.</span>
            </p>
            <div className="about-copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </FadeIn>

        <ProjectExperience />
        <Timeline id="education" title="Education" entries={education} />
        <Skills />

        <FadeIn
          as="section"
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2 id="contact-title">Contacts</h2>
          </div>
          <p className="contact-title">
            Let’s build something
            <br />
            worth sharing<span className="name-period">.</span>
          </p>
          <p className="muted">
            Interested in collaborating or have any questions? Feel free to
            reach out.
          </p>
          <a
            className="button button-primary contact-email"
            href={`mailto:${profile.email}`}
          >
            <Mail size={18} aria-hidden="true" />
            {profile.email}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="contact-meta">
            <span>
              <MapPin size={15} aria-hidden="true" />
              {profile.address}
            </span>
            <a href={`tel:${profile.phone.replaceAll("-", "")}`}>
              <Phone size={15} aria-hidden="true" />
              {profile.phone}
            </a>
          </div>
        </FadeIn>
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Learning. Building. Moving forward.</span>
        </footer>
      </main>
    </div>
  );
}
