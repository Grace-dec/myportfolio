import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Download, 
  Briefcase, 
  Compass, 
  Award, 
  GraduationCap, 
  User 
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide uppercase">
            <span className="text-purple-400">✦</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Turning Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
              Digital Solutions
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Paragraphs & Actions */}
          <div className="lg:col-span-8 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I'm Grace Kenne Tsague, a Computer Engineering student specializing in Software Engineering. I have practical experience in front-end development, website design, content management, and collaborative software projects.
            </p>
            <p>
              I'm skilled in HTML, CSS, JavaScript, React, PHP, Node.js, MySQL, MongoDB, Figma, and WordPress. I combine technical problem-solving with UI/UX and visual design skills, and I'm actively developing knowledge of DevOps practices.
            </p>
            <p>
              I'm eager to contribute to meaningful projects, learn from experienced teams, and deliver user-focused digital solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm flex items-center space-x-2 shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-card-dark hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
              >
                <Briefcase size={18} />
                <span>Hire Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Quick Card */}
          <div className="lg:col-span-4 bg-card-dark p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Location</h4>
                <p className="text-slate-200 font-medium text-sm">Buea, Cameroon</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Phone</h4>
                <p className="text-slate-200 font-medium text-sm">+237 681 392 805</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Email</h4>
                <a href="mailto:gracetsague0@gmail.com" className="text-slate-200 hover:text-purple-400 font-medium text-sm transition-colors block truncate max-w-50">
                  gracetsague0@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0 w-10 h-10">
                <img src="/src/assets/github.png" width='100%' alt="" />
              </div>
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-semibold tracking-wider">GitHub</h4>
                <a href="https://github.com/Grace-dec" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-purple-400 font-medium text-sm transition-colors block">
                  github.com/Grace-dec
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Cards (Mission, Values, Education, Personal Story) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          
          {/* Mission */}
          <div className="p-6 rounded-2xl bg-card-dark border border-slate-800 hover:border-purple-500/40 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
              <Compass size={24} />
            </div>
            <h3 className="font-bold text-slate-100 text-lg">Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To build innovative digital solutions that create real value and improve people's lives.
            </p>
          </div>

          {/* Values */}
          <div className="p-6 rounded-2xl bg-card-dark border border-slate-800 hover:border-purple-500/40 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
              <Award size={24} />
            </div>
            <h3 className="font-bold text-slate-100 text-lg">Values</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Integrity, continuous learning, teamwork, creativity and excellence.
            </p>
          </div>

          {/* Education */}
          <div className="p-6 rounded-2xl bg-card-dark border border-slate-800 hover:border-purple-500/40 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
              <GraduationCap size={24} />
            </div>
            <h3 className="font-bold text-slate-100 text-lg">Education</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Computer Engineering Student
            </p>
          </div>

          {/* Personal Story */}
          <div className="p-6 rounded-2xl bg-card-dark border border-slate-800 hover:border-purple-500/40 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
              <User size={24} />
            </div>
            <h3 className="font-bold text-slate-100 text-lg">Personal Story</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A passionate student, developer and problem solver, committed to growth and impact.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About