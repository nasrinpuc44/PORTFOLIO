import React, { useState, useEffect } from "react";

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
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "https://drive.google.com/uc?export=download&id=1d_wdnXNP73fByPx1M2yS8Im5Bnay2VPh";
    window.open(cvUrl, "_blank");
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Get current theme classes
  const getThemeClasses = () => {
    if (isDarkMode) {
      return {
        card: 'border-white/10 bg-white/[0.03]',
        text: 'text-white',
        subtext: 'text-gray-400',
        button: 'bg-yellow-400 text-black hover:bg-yellow-300',
        glitchButton: 'border-yellow-400/30 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-black',
        social: 'bg-white/5 text-white/80 hover:bg-yellow-400 hover:text-black',
      };
    } else {
      return {
        card: 'border-gray-200/30 bg-white/80 backdrop-blur-sm shadow-lg',
        text: 'text-gray-800',
        subtext: 'text-gray-600',
        button: 'bg-yellow-400 text-black hover:bg-yellow-300',
        glitchButton: 'border-yellow-400/30 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-black',
        social: 'bg-gray-100/80 text-gray-600 hover:bg-yellow-400 hover:text-black',
      };
    }
  };

  const theme = getThemeClasses();

  return (
    <aside className="relative h-full w-full max-w-[360px]">
      {/* Decorative Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/70" />

      {/* Sidebar Card */}
      <div className={`flex h-full flex-col overflow-hidden rounded-[28px] border ${theme.card} p-5 shadow-2xl backdrop-blur-sm transition-all duration-500`}>
        {/* Top Bar - Only Theme Toggle */}
        <div className="mb-5 flex items-center justify-end shrink-0">
          {/* Theme Toggle Button - Premium Glassmorphism */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-lg hover:shadow-yellow-400/10"
          >
            {/* Icon Container with Smooth Transition */}
            <div className="relative h-5 w-5">
              {/* Sun Icon - Light Mode */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${
                  isDarkMode 
                    ? 'opacity-0 rotate-90 scale-50' 
                    : 'opacity-100 rotate-0 scale-100'
                } text-yellow-400`}
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>

              {/* Moon Icon - Dark Mode */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${
                  isDarkMode 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-90 scale-50'
                } text-yellow-400`}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>

            {/* Glowing ring effect */}
            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md" />
            </span>
          </button>
        </div>

        {/* GLITCH IMAGE */}
        <div
          className={`glitch-image-wrapper shrink-0 ${
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

        {/* Glitch Toggle Button */}
        <button
          type="button"
          onClick={() => setIsGlitchActive(!isGlitchActive)}
          className={`mt-3 w-full shrink-0 rounded-xl border ${theme.glitchButton} py-2 text-sm font-medium transition-all duration-300`}
        >
          {isGlitchActive ? "Disable Glitch" : "Enable Glitch"}
        </button>

        {/* Name */}
        <div className="mt-5 text-center shrink-0">
          <h2 className={`text-xl font-bold ${theme.text} transition-colors duration-300`}>
            Nasrin Sultana
          </h2>
          <p className={`mt-1 text-sm ${theme.subtext} transition-colors duration-300`}>
            Web Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-5 flex items-center justify-center gap-3 shrink-0">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`flex h-9 w-9 items-center justify-center rounded-full ${theme.social} transition-all duration-300`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Download CV Button */}
        <button
          type="button"
          onClick={handleDownloadCV}
          className={`mt-6 w-full shrink-0 rounded-xl ${theme.button} py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
        >
          Download CV
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;