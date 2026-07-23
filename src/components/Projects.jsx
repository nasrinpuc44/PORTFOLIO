import React, { useState } from "react";

const filters = ["ALL", "WEBSITE", "APP"];

const projects = [
  {
    title: "Green Thumb",
    tags: ["WEBSITE"],
    image: "https://i.ibb.co/mwyRzz2/image.png",
    liveLink: "https://green-thumb-xi.vercel.app/",
  },
  {
    title: "LinguaLearn",
    tags: ["WEBSITE"],
    image: "https://i.ibb.co/XrJrGM48/image.png",
    liveLink: "https://effulgent-frangollo-a40ec0.netlify.app/",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <h2 className="text-2xl font-bold tracking-widest text-gray-200 sm:text-3xl">
          PROJECTS
        </h2>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "bg-white/[0.05] text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.title} className="group">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Tags */}
            <div className="mt-4 flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.05] px-3 py-1 text-[10px] font-semibold tracking-wide text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title + Arrow */}
            <div className="mt-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-100">
                {project.title}
              </h3>

              <a
                href={project.liveLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-300 transition group-hover:border-yellow-400/60 group-hover:bg-yellow-400/10 group-hover:text-yellow-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;