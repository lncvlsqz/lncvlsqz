import {
  BookOpen,
  Wrench,
  Lightbulb,
  Cpu,
  Network,
  Code2,
  Wifi,
  Microchip,
  ListChecks,
} from "lucide-react";
import FadeIn from "./FadeIn";

const skillIcons = {
  "Adaptability and Willingness to Learn": BookOpen,
  "Basic Computer Hardware and Troubleshooting": Wrench,
  "Problem-Solving and Critical Thinking": Lightbulb,
  Electronics: Cpu,
  "Computer Systems & Networking": Network,
  Programming: Code2,
  "Internet of Things (IoT)": Wifi,
  "Embedded Systems": Microchip,
  "Project Management": ListChecks,
};

const brandLogos = {
  Canva: "/skill-logos/canva.svg",
  "Microsoft Excel": "/skill-logos/excel.svg",
  "Microsoft Word": "/skill-logos/word.svg",
  "Microsoft PowerPoint": "/skill-logos/powerpoint.svg",
};

// Row 1: Adaptability until Canva -> moves to the left
const row1 = [
  "Adaptability and Willingness to Learn",
  "Basic Computer Hardware and Troubleshooting",
  "Problem-Solving and Critical Thinking",
  "Canva",
];

// Row 2: Microsoft Excel until Programming -> moves to the right
const row2 = [
  "Microsoft Excel",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "Electronics",
  "Computer Systems & Networking",
  "Programming",
];

// Row 3: Internet of Things until Project Management -> moves to the left
const row3 = [
  "Internet of Things (IoT)",
  "Embedded Systems",
  "Project Management",
];

function SkillItem({ skill }) {
  const Icon = skillIcons[skill] || BookOpen;
  return (
    <div className="skill-tag">
      {brandLogos[skill] ? (
        <img
          className="skill-brand-logo"
          src={brandLogos[skill]}
          alt=""
          aria-hidden="true"
          width="22"
          height="22"
          loading="lazy"
        />
      ) : (
        <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
      )}
      <span>{skill}</span>
    </div>
  );
}

export default function Skills() {
  // Repeating ensures continuous wave on both wide and mobile screens
  const row1Repeated = [...row1, ...row1, ...row1, ...row1];
  const row2Repeated = [...row2, ...row2, ...row2, ...row2];
  const row3Repeated = [...row3, ...row3, ...row3, ...row3, ...row3, ...row3];

  return (
    <FadeIn
      as="section"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <span className="section-number">04</span>
        <h2 id="skills-title">Skills & capabilities</h2>
      </div>

      <div
        className="skills-wave-container"
        aria-label="Technical and professional skills"
      >
        {/* Row 1: Moves to the left side */}
        <div className="skills-marquee-row marquee-left">
          <div className="skills-marquee-track">
            {row1Repeated.map((skill, index) => (
              <SkillItem key={`row1-${skill}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2: Moves to the right side */}
        <div className="skills-marquee-row marquee-right">
          <div className="skills-marquee-track">
            {row2Repeated.map((skill, index) => (
              <SkillItem key={`row2-${skill}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 3: Moves to the left side */}
        <div className="skills-marquee-row marquee-left">
          <div className="skills-marquee-track">
            {row3Repeated.map((skill, index) => (
              <SkillItem key={`row3-${skill}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
