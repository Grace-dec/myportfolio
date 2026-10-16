import React from "react";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveDemoUrl?: string;
  codeUrl?: string;
  isComingSoon?: boolean;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Shopping-website",
      category: "Team Project",
      description:
        "A restaurant website concept featuring food/menu content and a restaurant-focused browsing experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/src/assets/project_1.jpg",
      liveDemoUrl: "#",
      codeUrl: "https://github.com/Grace-dec/shopping-website",
    },
    {
      id: "2",
      title: "Learning Management System (LMS)",
      category: "Web App",
      description:
        "A laundry-service website demo to practice React and component-based interface development.",
      tags: ["PHP", "JavaScript", "CSS", "Mysql"],
      image: "/src/assets/project_2.jpg",
      liveDemoUrl: "#",
      codeUrl: "https://github.com/Grace-dec/Demo-for-LMS",
    },
    {
      id: "3",
      title: "Taste Haven",
      category: "Restaurant Website Demo",
      description:
        "An education platform to help users access learning resources online.",
      tags: ["HTML", "CSS", "JavaScript","MongoDB"],
      image: "/src/assets/project_3.png",
      liveDemoUrl: "#",
      codeUrl: "https://github.com/Grace-dec/Taste-Haven",
    },
    {
      id: "4",
      title: "Portfolio",
      category: "Personal Project",
      description:
        "A platform to discover registered restaurants, explore details, locations and menus.",
      tags: ["React", "Typescript",'Tailwindcss'],
      image: "/projects/restaurants-locator.jpg",
      liveDemoUrl: "#",
      codeUrl: "https://github.com/Grace-dec",
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide uppercase">
            <span className="text-purple-400">✦</span>
            <span>My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Here are some of the projects I have worked on, from academic
            projects to personal builds and team collaborations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            if (project.isComingSoon) {
              return (
                <div
                  key={project.id}
                  className="p-6 rounded-2xl bg-card-dark border border-slate-800 flex flex-col justify-center items-center text-center space-y-4 hover:border-purple-500/40 transition-all min-h-90"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shadow-lg shadow-purple-600/10">
                    <Code2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    {project.category}
                  </p>
                  <a
                    href="https://github.com/Grace-dec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white transition-all transform hover:scale-110"
                    aria-label="View Github"
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-card-dark border border-slate-800/80 overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between group"
              >
                {/* Top Image Preview Container */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden border-b border-slate-800/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback placeholder graphic if image is missing
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#111722] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-100 text-lg group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.category && (
                      <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                        {project.category}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Tags */}
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-purple-950/50 border border-purple-500/20 text-purple-300 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Button CTAs */}
                    <div className="flex items-center space-x-3 pt-2">
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          className="flex-1 py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-purple-600/20"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/80 text-xs font-medium flex items-center justify-center space-x-1.5 transition-all"
                        >
                          <Code2 size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
