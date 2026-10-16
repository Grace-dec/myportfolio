import React from "react";
import {
  Terminal,
  BrainCircuit,
  Lightbulb,
  Users,
  RefreshCw,
  FolderKanban,
  MessageSquare,
} from "lucide-react";

interface SkillBar {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: SkillBar[];
}

interface ProfessionalSkill {
  name: string;
  icon: React.ReactNode;
}

interface ToolItem {
  name: string;
  icon: string;
}

export const Skills: React.FC = () => {
  const technicalCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [{ name: "HTML, CSS3, JavaScript, React", percentage: 90 }],
    },
    {
      title: "Backend",
      skills: [{ name: "PHP, Node.js, Express.js", percentage: 85 }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL, MongoDB", percentage: 80 }],
    },
    {
      title: "Design & CMS",
      skills: [
        {
          name: "Figma, UI/UX design, WordPress, Graphic Design",
          percentage: 88,
        },
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        {
          name: "Git/GitHub, responsive design, debugging, collaborative development",
          percentage: 85,
        },
      ],
    },
    {
      title: "DevOps (Learning)",
      skills: [{ name: "Docker, CI/CD, cloud fundamentals", percentage: 60 }],
    },
  ];

  const professionalSkills: ProfessionalSkill[] = [
    {
      name: "Problem-solving",
      icon: <Lightbulb size={18} className="text-purple-400" />,
    },
    {
      name: "Analytical thinking",
      icon: <BrainCircuit size={18} className="text-purple-400" />,
    },
    { name: "Teamwork", icon: <Users size={18} className="text-purple-400" /> },
    {
      name: "Adaptability",
      icon: <RefreshCw size={18} className="text-purple-400" />,
    },
    {
      name: "Organization",
      icon: <FolderKanban size={18} className="text-purple-400" />,
    },
    {
      name: "Communication",
      icon: <MessageSquare size={18} className="text-purple-400" />,
    },
  ];

  const technologiesAndTools: ToolItem[] = [
    { name: "HTML", icon: "/src/assets/html.png" },
    { name: "CSS3", icon: "/src/assets/css.png" },
    { name: "JavaScript", icon: "/src/assets/js.png" },
    { name: "React", icon: "/src/assets/react icon.png" },
    { name: "PHP", icon: "/src/assets/php.png" },
    { name: "Node.js", icon: "/src/assets/node.js.png" },
    { name: "MySQL", icon: "/src/assets/node.js.png" },
    { name: "MongoDB", icon: "/src/assets/mongodb.png" },
    { name: "Figma", icon: "/src/assets/figma.png" },
    { name: "WordPress", icon: "/src/assets/wordpress.png" },
    { name: "Git", icon: "/src/assets/git.png" },
    { name: "GitHub", icon: "/src/assets/github.png" },
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide uppercase">
            <span className="text-purple-400">✦</span>
            <span>My Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technical & Professional Skills
          </h2>
        </div>

        {/* Two Columns Layout: Technical Skills vs Professional Skills & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Technical Skills */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-card-dark border border-slate-800/80 space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-200 text-sm">
                      {cat.title}
                    </span>
                    <span className="text-purple-400 font-bold text-sm">
                      {cat.skills[0].percentage}%
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs">{cat.skills[0].name}</p>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-linear-to-r from-purple-600 to-indigo-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${cat.skills[0].percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Skills & Technologies & Quote Banner */}
          <div className="lg:col-span-5 space-y-8">
            {/* Professional Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                Professional Skills
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {professionalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-card-dark border border-slate-800 flex items-center space-x-3"
                  >
                    <div className="p-2 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-slate-200 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                Technologies & Tools
              </h3>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                {technologiesAndTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-2xl bg-card-dark border border-slate-800 hover:border-purple-500/40 flex flex-col items-center justify-center p-2 text-center group transition-all"
                  >
                    <img
                      width="50px"
                      src={tool.icon}
                      alt={tool.name}
                      className="text-xs font-bold text-purple-400 group-hover:scale-110 transition-transform"
                    />

                    <span className="text-[10px] text-slate-400 mt-1 truncate w-full">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Banner */}
            <div className="p-6 rounded-3xl bg-linear-to-br from-purple-900/30 via-[#111722] to-[#111722] border border-purple-500/30 shadow-xl space-y-3 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-600/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center space-x-2 text-purple-400">
                <Terminal size={20} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Mindset
                </span>
              </div>
              <p className="text-slate-100 font-medium text-sm leading-relaxed">
                Always learning, always building. <br />
                <span className="text-purple-400 font-semibold">
                  Better solutions, greater impact.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
