import React from "react";

const education = [
  {
    year: "2023 - 2027 (Expected)",
    title: "Bachelor of Science in Computer Science & Engineering (CSE)",
    institution: "Premier University, Chattogram",
    description: "Currently in 3rd year, pursuing a degree in Computer Science & Engineering.",
  },
];

const courses = [
  {
    year: "2025 - Present",
    title: "Complete Web Development Course",
    institution: "Programming Hero",
    description:
      "Learning HTML, CSS, JavaScript, React.js, Tailwind CSS, DaisyUI, Firebase, Node.js, Express.js, MongoDB and Full Stack Web Development.",
  },
];

const Resume = () => {
  return (
    <section className="mt-24">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl font-bold tracking-widest text-gray-200 sm:text-3xl">
          PROFESSIONAL RESUME
        </h2>
      </div>

      {/* Education & Courses Grid - Side by Side */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Education Column */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-yellow-400">Education</h3>
          {education.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-block rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                  {item.year}
                </span>
                <span className="shrink-0 rounded-full border border-yellow-400/30 px-4 py-1 text-xs font-medium text-yellow-400">
                  Current Student
                </span>
              </div>
              <h4 className="mt-3 text-lg font-bold text-gray-200">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-gray-400">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Courses & Certifications Column */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-yellow-400">Courses & Certifications</h3>
          {courses.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-block rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                  {item.year}
                </span>
                <span className="shrink-0 rounded-full border border-yellow-400/30 px-4 py-1 text-xs font-medium text-yellow-400">
                  In Progress
                </span>
              </div>
              <h4 className="mt-3 text-lg font-bold text-gray-200">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-gray-400">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;