import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Download,
  CheckCircle2,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., EmailJS or API endpoint)
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide uppercase">
            <span className="text-purple-400">✦</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Have a project in mind, a question, or just want to say hello? I'd
            love to hear from you.
          </p>
        </div>

        {/* Two-Column Grid: Form vs Contact Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-card-dark border border-slate-800/80 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Thank you for reaching out. I will get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Map Preview & Download CV */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-6 rounded-3xl bg-card-dark border border-slate-800/80 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <span>+237 681 392 805</span>
                </div>

                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <span>+237 681 992 805</span>
                </div>

                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:gracetsague0@gmail.com"
                    className="hover:text-purple-400 transition-colors truncate"
                  >
                    gracetsague0@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span>Buea, South West Region, Cameroon</span>
                </div>

                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 shrink-0 w-10 h-10">
                    <img src="/src/assets/github.png" width='100%' alt="" />
                  </div>
                  <a
                    href="https://github.com/Grace-dec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    github.com/Grace-dec
                  </a>
                </div>
              </div>
            </div>
            {/* Map Preview Graphic */}
            <div className="pt-2">
              <div className="relative w-full h-36 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center shadow-inner">
                {/* Embedded Google Map */}
                <iframe
                  title="Buea Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.012743757204!2d9.284781009815045!3d4.150110264711636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613259651819a3%3A0x754210aa92e62bff!2sBuea!5e0!3m2!1sen!2scm!4v1792020235320!5m2!1sen!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full opacity-70 hover:opacity-100 transition-opacity"
                />

                {/* Location Tag Overlay */}
                <div className="relative z-10 pointer-events-none flex items-center space-x-1.5 bg-card-dark/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-blue-500/30 shadow-lg">
                  <MapPin size={14} className="text-blue-400 animate-bounce" />
                  <span className="text-xs font-semibold text-white">
                    Buea, Cameroon
                  </span>
                </div>
              </div>
            </div>

            {/* Download Resume Card */}
            <div className="p-6 rounded-3xl bg-card-dark border border-slate-800/80 flex items-center justify-between shadow-xl">
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm">
                  Download My Resume
                </h4>
                <p className="text-xs text-slate-400">
                  Get a copy of my professional resume in PDF format.
                </p>
              </div>
              <a
                href="/src/assets/Grace_Kenne_Tsague_Strong_CV.pdf"
                download
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium flex items-center space-x-1.5 shadow-md shadow-purple-600/20 transition-all hover:scale-105 shrink-0"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
