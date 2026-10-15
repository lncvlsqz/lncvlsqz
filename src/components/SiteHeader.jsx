import { Moon, Sun } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contacts", href: "#contact" },
];

export default function SiteHeader({ theme, setTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="theme-switch" role="group" aria-label="Color theme">
          <button
            type="button"
            aria-label="Light theme"
            aria-pressed={theme === "light"}
            onClick={() => setTheme("light")}
          >
            <Sun size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Dark theme"
            aria-pressed={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            <Moon size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
