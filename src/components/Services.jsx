import React from "react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building modern, responsive, and scalable web applications from frontend interfaces to backend systems. I develop complete web solutions using React, Node.js, Express.js, MongoDB, and modern development tools.",
    developerCount: "5",
    image: "https://i.ibb.co/67vTQykF/Product-Development-icone.png",
  },
  {
    title: "Responsive Website Design",
    description:
      "Project management and teamwork, The new assembly process is being rolled out to other departments to realize further Creating fully responsive and mobile-friendly websites that provide a smooth and consistent experience across desktop, tablet, and mobile devices.",
    developerCount: "4",
    image: "https://i.ibb.co/zTQk0SkL/Product-Management-icone.png",
  },
  {
    title: "React Application Development",
    description:
      "Developing dynamic and interactive web applications with reusable components, clean architecture, and modern React development practices.",
    developerCount: "3",
    image: "https://i.ibb.co/ynXLycr2/Business-Generation-icone.png",
  },
  {
    title: "UI Implementation",
    description:
      "Converting design concepts and Figma layouts into pixel-perfect, responsive, and visually appealing web interfaces with clean and maintainable code.",
    developerCount: "2",
    image: "https://i.ibb.co/5Xg6YDs8/Project-Coordinator-icone.png",
  },
];

const Services = () => {
  return (
    <section className="mt-24">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl font-bold tracking-widest text-gray-200 sm:text-3xl">
          SERVICES
        </h2>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]"
          >
            {/* Icon & Developer Count */}
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-yellow-400">
                {service.developerCount} Developers
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-gray-200">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {service.description}
            </p>

            {/* Get Started Button */}
            <button
              type="button"
              className="mt-5 flex items-center gap-2 text-sm font-medium text-yellow-400 transition hover:gap-3 hover:text-yellow-300"
            >
              GET STARTED
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;