import React from "react";
import { Calendar, CheckCircle2, Sparkles } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: "2024",
      role: "Web Development Intern – Dotech Solutions",
      company: "(3 months)",
      description: [
        "Designed an e-commerce website interface in Figma, translating wireframe into a structured user interface.",
        "Implemented website pages and interface elements using HTML, CSS and JavaScript.",
        "Applied classroom knowledge to practical website-development tasks in a professional environment.",
      ],
    },
    {
      period: "2025",
      role: "Web Development Intern – Brand Ades",
      company: "",
      description: [
        "Gained practical experience using WordPress for website development and content management.",
        "Continued strengthening web-development skills and familiarity with digital production workflows.",
      ],
    },
    {
      period: "2025 – 2026",
      role: "Participant / Project Team Member – Light Share Scholarship Program",
      company: "",
      description: [
        "Collaborated with team members on a Learning Management System (LMS), an online platform to improve access to learning resources.",
        "Contributed to the development of a team-based software project, building experience in collaborative planning and implementation.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 lg:py-24 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide uppercase">
            <span className="text-purple-400">✦</span>
            <span>My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience
          </h2>
        </div>

        {/* Main Timeline Grid & Footer Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-8 space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-6 group"
              >
                {/* Timeline Icon Node */}
                <div className="w-8 h-8 rounded-full bg-card-dark border-2 border-purple-500 flex items-center justify-center shrink-0 z-10 shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 rounded-2xl bg-card-dark border border-slate-800/80 hover:border-purple-500/40 transition-all space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    {exp.company && (
                      <p className="text-sm text-slate-400 font-medium">
                        {exp.company}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2 pt-1">
                    {exp.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-slate-300 text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-purple-400 shrink-0 mt-1"
                        />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column / Bottom Banner Highlight */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-8 rounded-3xl bg-linear-to-br from-purple-900/30 via-[#111722] to-[#111722] border border-purple-500/30 shadow-2xl relative overflow-hidden space-y-4">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center shadow-inner">
                <Sparkles size={24} />
              </div>

              <blockquote className="text-lg font-medium text-slate-100 italic leading-snug">
                "Every project is a step towards a greater goal."
              </blockquote>

              <p className="text-xs text-slate-400">
                Constantly seeking new ways to learn, iterate, and build cleaner
                systems for the web ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
