import React, { useState } from "react";
import { personalInfo } from "../data/content";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: the form opens the visitor's email app with everything filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    const subject = form.subject || `Hello from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app. No radioactive spiders were harmed.");
  };

  return (
    <section id="contact" className="relative py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 reveal-up">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-red-600" />
              <span className="mono text-[11px] uppercase tracking-[0.3em] text-red-600">05 / Signal</span>
            </div>
            <h2 className="display-font text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8">
              Swing into<br />my<br /><span className="text-red-600">inbox.</span>
            </h2>
            <p className="text-white/55 leading-relaxed max-w-md mb-10">
              I&rsquo;m hunting for my first internship. Got a role, a project, or advice? Swing into my inbox.
            </p>

            <div className="space-y-4 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-white/80 hover:text-red-500 transition-colors group">
                <Mail size={16} className="text-red-600/80" />
                <span className="mono break-all">{personalInfo.email}</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-red-500 transition-colors">
                <Github size={16} className="text-red-600/80" />
                <span className="mono">{personalInfo.githubLabel}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-red-500 transition-colors">
                <Linkedin size={16} className="text-red-600/80" />
                <span className="mono">{personalInfo.linkedinLabel}</span>
              </a>
              <div className="flex items-center gap-3 pt-4">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 border border-white/10 hover:border-red-600 hover:text-red-500 text-white/70 flex items-center justify-center transition-colors">
                  <Github size={16} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 border border-white/10 hover:border-red-600 hover:text-red-500 text-white/70 flex items-center justify-center transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 reveal-up">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Name *</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Driver"
                  className="bg-transparent border-x-0 border-t-0 border-b border-white/15 rounded-none px-0 h-12 text-white focus-visible:ring-0 focus-visible:border-red-600"
                />
              </div>
              <div>
                <label className="mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@studio.com"
                  className="bg-transparent border-x-0 border-t-0 border-b border-white/15 rounded-none px-0 h-12 text-white focus-visible:ring-0 focus-visible:border-red-600"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Subject</label>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship / Project / Advice"
                  className="bg-transparent border-x-0 border-t-0 border-b border-white/15 rounded-none px-0 h-12 text-white focus-visible:ring-0 focus-visible:border-red-600"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Message *</label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your build..."
                  rows={5}
                  className="bg-transparent border-x-0 border-t-0 border-b border-white/15 rounded-none px-0 text-white focus-visible:ring-0 focus-visible:border-red-600 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="sticky-cta mt-10 inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 mono uppercase tracking-[0.25em] text-xs"
            >
              Send Message
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
