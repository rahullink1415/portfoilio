import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const roles = ['Senior Android Engineer', 'Jetpack Compose Expert', 'GenAI Certified', 'Full-Stack Engineer'];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < full.length) {
          setText(full.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (charIdx > 0) {
          setText(full.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, deleting ? 35 : 75);
    return () => clearTimeout(timeout);
  }, [charIdx, roleIdx, deleting]);

  const stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '10+', label: 'Apps Shipped' },
    { value: '98%+', label: 'Crash-Free Rate' },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/rahullink1415', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rahullink1415', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rahul.link1415@outlook.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-40" />

      {/* Radial gradient overlay to give depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.08),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-violet-500/25 bg-violet-500/8 text-violet-600 dark:text-violet-400 mb-10 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for Senior Android Roles
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-5 leading-none">
          Rahul Kumar
        </h1>

        {/* Typing role */}
        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="font-mono text-lg md:text-xl text-violet-600 dark:text-violet-400">
            {text}
            <span className="animate-blink ml-0.5">_</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Senior Android Engineer crafting scalable, crash-resistant mobile apps with Kotlin,
          Jetpack Compose & Android NDK — now expanding into GenAI, LangChain, and Agentic AI.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 md:gap-16 mb-12">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg w-full sm:w-auto text-center"
          >
            View Projects
          </a>
          <a
            href="mailto:rahul.link1415@outlook.com?subject=from%20portfolio"
            className="px-6 py-2.5 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-sm font-medium rounded-lg w-full sm:w-auto text-center"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2 rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 dark:hover:text-zinc-400"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
