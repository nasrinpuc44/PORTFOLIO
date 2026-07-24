import React, { useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Sidebar from "../components/Sidebar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const stats = [
  { value: "12+", label: "Completed Projects" },
  { value: "15+", label: "Technologies & Tools" },
];

const navItems = [
  {
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    sectionId: "projects",
  },
  {
    label: "Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.36.68.64.94.28.26.6.46.96.6H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    sectionId: "services",
  },
  {
    label: "Resume",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
    sectionId: "resume",
  },
  {
    label: "Skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    sectionId: "skills",
  },
  {
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    sectionId: "contact",
  },
];

const Home = () => {
  const [activeNav, setActiveNav] = useState("Projects");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for the fixed navigation height
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (label, sectionId) => {
    setActiveNav(label);
    scrollToSection(sectionId);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0e0f0f]">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[400px] w-[400px] rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      {/* Content - Flex layout with fixed sidebar */}
      <div className="relative z-10 flex min-h-screen">
        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-0 h-screen w-[360px] p-6 lg:p-8">
          <Sidebar />
        </div>

        {/* Scrollable Content Area */}
        <div className="ml-[360px] flex-1 px-6 py-8 lg:px-12 lg:py-12">
          {/* Fixed Navigation Buttons - Always visible at top */}
          <div className="fixed-nav-container">
            <nav className="fixed top-0 z-30 flex flex-wrap items-center gap-2 bg-[#0e0f0f]/80 backdrop-blur-sm px-6 py-4 lg:px-12" style={{ left: '360px', right: '0' }}>
              {navItems.map((item) => {
                const isActive = activeNav === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.label, item.sectionId)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "border-yellow-400/60 bg-yellow-400/10 text-yellow-400"
                        : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content Sections - Add padding top to account for fixed nav */}
          <div className="mt-20">
            {/* Hero Section */}
            <div className="max-w-3xl">
              <p className="text-lg text-gray-300">
                Hello, I'm <span className="font-semibold text-yellow-400">Nasrin Sultana</span>
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-200 sm:text-5xl lg:text-6xl">
                Building Modern{" "}
                <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-black">
                  Web Experiences
                </span>{" "}
                with Code, Creativity & Purpose.
              </h1>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-x-16 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-5xl font-bold text-gray-200 sm:text-6xl">
                    {stat.value}
                  </div>
                  <p className="mt-1 max-w-[8rem] text-sm leading-snug text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* About */}
            <div className="mt-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                About Me
              </p>
              <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
                I am a Computer Science and Engineering (CSE) student at Premier University, Chattogram, with a strong passion for web development and modern technologies. I enjoy transforming ideas into responsive, user-friendly, and visually engaging web experiences using React, JavaScript, and modern development tools.
                <br /><br />
                Currently, I am expanding my expertise in Full Stack Web Development through hands-on projects and continuous learning. My goal is to build impactful digital solutions, grow as a software engineer, and contribute to innovative products that solve real-world problems.
              </p>
            </div>

            {/* Projects */}
            <div id="projects">
              <Projects />
            </div>

            {/* Services */}
            <div id="services">
              <Services />
            </div>

            {/* Resume */}
            <div id="resume">
              <Resume />
            </div>

            {/* Skills */}
            <div id="skills">
              <Skills />
            </div>

            {/* Contact */}
            <div id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;