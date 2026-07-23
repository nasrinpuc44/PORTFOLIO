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
  },
  {
    label: "Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.36.68.64.94.28.26.6.46.96.6H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
  },
  {
    label: "Skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
  },
];

const Home = () => {
  const [activeNav, setActiveNav] = useState("Projects");

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0e0f0f]">
      <AnimatedBackground />

      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[400px] w-[400px] rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      {/* Main container - এখানে h-screen ব্যবহার করা হয়েছে */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          
          {/* Left Sidebar - Sticky with viewport height */}
          <div className="lg:w-[360px] lg:shrink-0 lg:sticky lg:top-6 lg:self-start lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
            <Sidebar />
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0">
            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeNav === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveNav(item.label)}
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

            <div className="mt-14 max-w-3xl">
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

            <div className="mt-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                About Me
              </p>
              <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
                I am a Computer Science and Engineering (CSE) student at Premier University, Chattogram, with a strong passion for web development and modern technologies. I enjoy transforming ideas into responsive, user-friendly, and visually engaging web experiences using React, JavaScript, and modern development tools. Currently, I am expanding my expertise in Full Stack Web Development through hands-on projects and continuous learning. My goal is to build impactful digital solutions, grow as a software engineer, and contribute to innovative products that solve real-world problems.
              </p>
            </div>

            <Projects />
            <Services />
            <Resume />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;