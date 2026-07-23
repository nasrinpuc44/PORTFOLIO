import React, { useState } from "react";

const menuItems = ["menu 1", "menu 2", "menu 3", "menu 4"];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nasrin-sultana-415047338?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/nasrinpuc44",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.51-1.11-1.51-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nasrin.sultana.airin.2025",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGlitchActive, setIsGlitchActive] = useState(false);

  const handleDownloadCV = () => {
    const cvUrl = "https://drive.google.com/uc?export=download&id=1d_wdnXNP73fByPx1M2yS8Im5Bnay2VPh";
    window.open(cvUrl, "_blank");
  };

  return (
    <aside className="w-full">
      {/* Decorative Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/70" />

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[20%] min-w-[220px] border-r border-white/10 bg-[#111212] p-6 shadow-2xl transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Menu
          </span>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-white/70 transition hover:text-yellow-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item}
              type="button"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm font-medium text-gray-200 transition hover:border-yellow-400/60 hover:bg-yellow-400/10 hover:text-yellow-400"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Sidebar Card */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur-sm">
        {/* Top Bar */}
        <div className="mb-5 flex items-center justify-between">
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(true)}
            className="text-white/80 transition hover:text-yellow-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Toggle theme"
            className="text-white/80 transition hover:text-yellow-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </button>
        </div>

        {/* GLITCH IMAGE */}
        <div
          className={`glitch-image-wrapper ${
            isGlitchActive ? "glitch-active" : ""
          }`}
          onMouseEnter={() => setIsGlitchActive(true)}
          onMouseLeave={() => setIsGlitchActive(false)}
        >
          <img
            src="https://i.ibb.co.com/3YsB6M33/Chat-GPT-Image-Jul-16-2026-10-39-20-PM.png"
            alt="Nasrin Sultana"
            className="glitch-image aspect-[4/3] w-full object-cover"
          />
          <img
            src="https://i.ibb.co.com/3YsB6M33/Chat-GPT-Image-Jul-16-2026-10-39-20-PM.png"
            alt=""
            aria-hidden="true"
            className="glitch-layer glitch-red aspect-[4/3] w-full object-cover"
          />
          <img
            src="https://i.ibb.co.com/3YsB6M33/Chat-GPT-Image-Jul-16-2026-10-39-20-PM.png"
            alt=""
            aria-hidden="true"
            className="glitch-layer glitch-blue aspect-[4/3] w-full object-cover"
          />
          <div className="glitch-scanlines" />
        </div>

        <button
          type="button"
          onClick={() => setIsGlitchActive(!isGlitchActive)}
          className="mt-3 w-full rounded-xl border border-yellow-400/30 bg-yellow-400/10 py-2 text-sm font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          {isGlitchActive ? "Disable Glitch" : "Enable Glitch"}
        </button>

        <div className="mt-5 text-center">
          <h2 className="text-xl font-bold text-white">Nasrin Sultana</h2>
          <p className="mt-1 text-sm text-gray-400">Web Developer</p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 transition hover:bg-yellow-400 hover:text-black"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={handleDownloadCV}
          className="mt-6 w-full rounded-xl bg-yellow-400 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Download CV
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;