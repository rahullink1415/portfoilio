import React from 'react';
import { Smartphone, Brain, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile Excellence',
      description: '7+ years architecting production Android apps across LegalTech, Healthcare, E-commerce, IoT & Hospitality.',
    },
    {
      icon: Brain,
      title: 'GenAI & Automation',
      description: 'Building AI chatbots with LangChain/LangGraph and workflow automations with N8N.',
    },
    {
      icon: Zap,
      title: 'Performance First',
      description: 'NDK integration, crash-rate optimisation, BLE protocols, and smooth 60fps Compose UIs.',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led mobile teams in Agile sprints, mentored engineers, and drove architecture decisions.',
    },
  ];

  const stack = ['Kotlin', 'Java', 'NDK', 'Jetpack Compose', 'MVVM', 'Hilt', 'Room', 'BLE', 'LangChain', 'LangGraph', 'N8N', 'Docker'];

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            About me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
            Sr. Android Developer &<br />
            Full-Stack Engineer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
              <p>
                Innovative Android Developer with 7+ years of experience in Jetpack Compose,
                Kotlin, Java, and NDK. I architect robust, scalable Android apps across diverse
                industries — from LegalTech and Healthcare to E-commerce, IoT, and Hospitality.
              </p>
              <p>
                Currently expanding into <span className="text-violet-600 dark:text-violet-400 font-medium">GenAI</span> — building
                conversational chatbots with LangChain & LangGraph, and automating end-to-end
                workflows using N8N. Certified in Generative AI, LLMs, and Prompt Engineering.
              </p>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 font-mono text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Career goal callout */}
            <div className="flex gap-3 p-4 rounded-xl border border-violet-500/20 bg-violet-500/5">
              <div className="w-1 rounded-full bg-violet-500 shrink-0 self-stretch" />
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-violet-600 dark:text-violet-400 font-medium">Currently: </span>
                Sr. Android Developer at Cepoch — leading Android development with modern
                architecture and AI-powered feature integration.
              </p>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-violet-500/40 dark:hover:border-violet-500/30 group"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center mb-3 group-hover:bg-violet-500/15">
                  <item.icon size={16} className="text-violet-600 dark:text-violet-400" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
