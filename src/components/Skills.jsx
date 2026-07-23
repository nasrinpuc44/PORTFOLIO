import React, { useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "DaisyUI", "Bootstrap", "Responsive Design"],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST API Development"],
  },
  {
    id: "database",
    name: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    id: "authentication",
    name: "Authentication",
    skills: ["Firebase Authentication", "JWT"],
  },
  {
    id: "tools",
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vite", "Netlify", "Vercel"],
  },
];

const filterButtons = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "authentication", label: "Authentication" },
  { id: "tools", label: "Tools" },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Get all skills flattened with their category info
  const getAllSkills = () => {
    const allSkills = [];
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        allSkills.push({
          name: skill,
          category: category.id,
          categoryName: category.name,
        });
      });
    });
    return allSkills;
  };

  const allSkills = getAllSkills();

  const filteredSkills =
    activeFilter === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeFilter);

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl font-bold tracking-widest text-gray-200 sm:text-3xl">
          SKILLS
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="mt-6 flex flex-wrap gap-2">
        {filterButtons.map((button) => {
          const isActive = activeFilter === button.id;

          return (
            <button
              key={button.id}
              type="button"
              onClick={() => setActiveFilter(button.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                  : "bg-white/[0.05] text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {button.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid - Tech Badges */}
      <div className="mt-8">
        {activeFilter !== "all" && (
          <p className="mb-4 text-sm text-gray-400">
            Showing <span className="text-yellow-400">{filteredSkills.length}</span> skills in{" "}
            <span className="text-yellow-400">
              {skillCategories.find((cat) => cat.id === activeFilter)?.name}
            </span>
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {filteredSkills.map((skill, index) => (
            <span
              key={index}
              className="animate-fadeIn rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;