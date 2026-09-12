import logo from "../assets/logo-text.png";

const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

function scrollToSection(event, href) {
  const target = document.querySelector(href);
  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div id="contact" className="mt-4 flex items-center gap-4 text-sm font-medium text-slate-500">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-slate-900"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title} id={group.title === "Product" ? "projects" : undefined}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(event) => scrollToSection(event, link.href)}
                      className="text-sm text-slate-500 transition hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="transition hover:text-slate-700">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
