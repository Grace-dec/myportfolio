import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Download,
  FolderKanban,
  Code2,
  Layout,
  Lightbulb,
  Users,
} from "lucide-react";

export const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] py-12 lg:py-16 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Greeting, Headline, Bio, CTAs & Contact Brief */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide shadow-lg shadow-blue-950/50">
              <span className="text-blue-400">✦</span>
              <span>Hello, I'm</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Grace Kenne <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">
                  Tsague
                </span>
              </h1>
              <h2 className="text-base sm:text-lg font-semibold text-blue-400 tracking-wide">
                Computer Engineering Student | Software & Web Developer
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I build responsive web applications, create user-friendly
              interfaces and turn ideas into digital solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm flex items-center space-x-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <FolderKanban size={18} />
                <span>View My Projects</span>
              </a>

              <a
                href="/src/assets/Grace_Kenne_Tsague_Strong_CV.pdf"
                download
                className="px-6 py-3 rounded-xl bg-card-dark hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm flex items-center space-x-2 shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Personal Contact Details List */}
            <div className="pt-6 space-y-3 border-t border-slate-800/80 text-sm text-slate-300">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span>Buea, South West Region, Cameroon</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <span>+237 681 392 805</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a
                  href="mailto:gracetsague0@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  gracetsague0@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                {/* <Github size={16} className="text-blue-400 shrink-0" /> */}
                <a
                  href="https://github.com/Grace-dec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  github.com/Grace-dec
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Picture with Tech Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-linear-to-b from-blue-950/40 via-[#111722] to-[#080b12] p-3 border border-blue-500/30 shadow-2xl shadow-blue-950/50 flex items-center justify-center overflow-hidden group">
              {/* Tech corner accents / HUD lines */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400 z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-blue-400 z-20 pointer-events-none" />

              {/* Background glowing linear ring */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 via-purple-600/10 to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Profile Image */}
              <img
                src="/src/assets/profile.jpg" // Replace with your image path
                alt="Grace Kenne Tsague"
                className="w-full h-full object-cover rounded-2xl relative z-10 filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Highlights / Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="p-5 rounded-2xl bg-card-dark border border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col items-center text-center space-y-3 group shadow-md">
            <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              <Code2 size={22} />
            </div>
            <span className="font-semibold text-slate-200 text-sm sm:text-base">
              Web Development
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-card-dark border border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col items-center text-center space-y-3 group shadow-md">
            <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              <Layout size={22} />
            </div>
            <span className="font-semibold text-slate-200 text-sm sm:text-base">
              UI/UX Design
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-card-dark border border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col items-center text-center space-y-3 group shadow-md">
            <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              <Lightbulb size={22} />
            </div>
            <span className="font-semibold text-slate-200 text-sm sm:text-base">
              Problem Solving
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-card-dark border border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col items-center text-center space-y-3 group shadow-md">
            <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              <Users size={22} />
            </div>
            <span className="font-semibold text-slate-200 text-sm sm:text-base">
              Team Collaboration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
