import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const FooterIcon = [
    {
      img: "/src/assets/linkined.png",
      alt: "git",
      href: "https://linkedin.com",
    },
    {
      img: "/src/assets/gmail.png",
      alt: "git",
      href: "https://github.com/Grace-dec",
    },
    {
      img: "/src/assets/git-black.png",
      alt: "git",
      href: "mailto:gracetsague0@gmail.comm",
    },
  ];

  return (
    <footer className="bg-[#080b12] border-t border-slate-800/80 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright notice */}
        <p className="text-sm text-slate-500">
          © {currentYear} Grace Kenne Tsague. All Rights Reserved.
        </p>

        {/* Social Links matching the image design */}
        <div className="flex items-center space-x-4">

          {FooterIcon.map((icon, index) => (
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-purple-50  border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500 transition-all"
            >
              <img src={icon.img} alt={icon.alt} key={index} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
