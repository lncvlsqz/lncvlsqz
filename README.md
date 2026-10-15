# Lance Velasquez — Portfolio

A modern, high-performance personal portfolio website built with **React 19**, **Vite**, **Tailwind CSS**, and **WebGL2**. Designed with sleek typography, smooth animations, interactive particles, and a responsive light/dark theme.

---

## 🚀 Features

- **Interactive Fullscreen Particles Background:**
  - Dynamic particle field powered by WebGL2 with mouse parallax tracking and click burst wave effects.
  - Adaptive theme palette: glowing white and mint accents in dark mode, deep emerald and forest slate in light mode.
  - Bulletproof fail-safe: automatically falls back to an HTML5 Canvas 2D engine if WebGL context is unavailable.
- **PixelSwap Profile Avatar:**
  - Seamless pixelation transition that switches avatars dynamically when toggling between light and dark modes.
  - Responsive layout: left-aligned profile card for desktop, optimized inline presentation on mobile.
- **Official Social Links with Reveal Tooltips:**
  - Exact official vector logos for **GitHub**, **LinkedIn**, **Gmail**, and **Discord**.
  - Interactive reveal tooltip badges that smoothly emerge on cursor hover or mobile tap.
- **Skills & Capabilities Wave Marquee:**
  - Three continuous flowing marquee rows (Row 1 left, Row 2 right, Row 3 left) showcasing hardware, electronics, networking, and software skills.
  - High-quality SVG brand icons for Microsoft Office (Excel, Word, PowerPoint) and Canva.
- **Project Experience & Timeline:**
  - Structured showcase of academic and engineering projects (e.g., Bed Micro-Movement Sleep Monitor, SyncShot Technologies, Project Nexus).
  - Education timeline with institutional branding (ICCT Colleges, Asiatech).
- **Light / Dark Mode Switch:**
  - Sticky header toggle with automatic `localStorage` persistence and theme-color meta tag updates.
  - Refined contrast palettes (`#000000` pure black and `#f5f7f4` soft neutral).

---

## 🛠️ Tech Stack

- **Framework & Build:** [React 19](https://react.dev/), [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), Modern CSS variables, Glassmorphism backdrop filters
- **Icons:** Official SVG brand glyphs & [Lucide React](https://lucide.dev/)
- **Animations:** Framer Motion, WebGL2 GLSL Shaders, HTML5 Canvas 2D

---

## 📂 Project Structure

```text
lance-portfolio/
├── public/
│   ├── images/
│   │   ├── asiatech-logo.jpg      # High school education logo
│   │   ├── icct-logo.jpg          # College education logo
│   │   ├── profile-dark.jpg       # Dark mode avatar
│   │   └── profile-light.jpg      # Light mode avatar
│   ├── resume/
│   │   └── lance-velasquez-resume.pdf # Downloadable / viewable resume
│   └── skill-logos/
│       ├── canva.svg              # Canva brand logo
│       ├── excel.svg              # Microsoft Excel brand logo
│       ├── powerpoint.svg         # Microsoft PowerPoint brand logo
│       └── word.svg               # Microsoft Word brand logo
├── src/
│   ├── components/
│   │   ├── FadeIn.jsx             # Accessible scroll reveal wrapper
│   │   ├── Particles.css          # Particle canvas container styling
│   │   ├── Particles.jsx          # WebGL2 + 2D Canvas interactive particles
│   │   ├── PixelSwap.css          # Pixel transition animation styles
│   │   ├── PixelSwap.jsx          # Avatar pixel-swap effect component
│   │   ├── ProjectExperience.jsx  # Engineering projects section
│   │   ├── SiteHeader.jsx         # Sticky navigation & theme toggle
│   │   ├── Skills.jsx             # 3-row wave marquee skills section
│   │   ├── SocialLinks.jsx        # Official brand links with reveal tooltips
│   │   └── Timeline.jsx           # Education history timeline
│   ├── App.jsx                    # Root application component & layout
│   ├── data.js                    # Profile details, bio, links, and content
│   ├── index.css                  # Core CSS variables, typography, and styling
│   ├── animations.css             # Utility keyframes and micro-interactions
│   └── main.jsx                   # React DOM root entrypoint
├── index.html                     # HTML document template
├── vite.config.js                 # Vite bundler configuration
└── package.json                   # Dependencies and npm scripts
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 20+ or 22+
- npm, pnpm, or yarn

### Installation & Development

1. **Clone or open the directory:**

   ```sh
   cd "lance portfolio"
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the local development server:**

   ```sh
   npm run dev
   ```

   Open `http://localhost:5173/` in your browser.

4. **Build for production:**

   ```sh
   npm run build
   ```

   Outputs the optimized static bundle to `dist/`.

5. **Preview production build locally:**
   ```sh
   npm run preview
   ```

---

## ✏️ Customization

- **Personal Information & Bio:** Edit `src/data.js` to update name, title, bio, contact details, projects, and education.
- **Resume:** Replace `public/resume/lance-velasquez-resume.pdf` with your updated PDF.
- **Avatars:** Replace `public/images/profile-light.jpg` and `public/images/profile-dark.jpg`.
- **Social Links:** Update links in `src/data.js` (`github`, `linkedin`, `email`, `discord`).

---

## 📄 License

This portfolio is private and custom-built for **Lance Velasquez**.
