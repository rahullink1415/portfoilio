import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Engineer',
      company: 'Cepoch',
      location: 'Mohali, India',
      period: 'May 2025 – Present',
      achievement: 'AI-powered Android',
      description: [
        'Leading Android development with modern Jetpack Compose architecture',
        'Integrating AI-powered features into mobile applications',
        'Driving technical decisions and code quality standards',
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'AI Integration'],
    },
    {
      title: 'Sr. Android Developer',
      company: 'smartData Enterprises (I) Ltd.',
      location: 'Mohali, India',
      period: 'Jan 2018 – May 2025',
      achievement: '10+ high-impact apps shipped',
      description: [
        'Architected 10+ high-impact Android apps across LegalTech, Healthcare, IoT, and Hospitality domains',
        'Led mobile teams in Agile sprints, conducted code reviews and mentored junior developers',
        'Implemented scalable MVVM architecture with robust API/DB handling',
        'Built Go Hotel Life (BLE+POS), ModioLegal (audio/offline), and Date.Com (Compose+chat)',
        'Expanded skill set into GenAI — LangChain, LangGraph, and N8N workflow automation',
      ],
      technologies: ['Kotlin', 'Java', 'NDK', 'Jetpack Compose', 'BLE', 'Firebase', 'Hilt', 'Room', 'LangChain', 'N8N'],
    },
  ];

  const education = {
    degree: 'MCA — Master of Computer Applications',
    institution: 'Himachal Pradesh University',
    year: '2015 – 2018',
  };

  const certification = {
    title: 'Generative AI Certificate',
    topics: 'Generative AI · LLMs · Prompt Engineering',
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute left-0 top-[22px] w-[15px] h-[15px] -translate-y-1/2 rounded-full bg-violet-500 ring-4 ring-white dark:ring-zinc-950 shrink-0" />

                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-violet-600 dark:text-violet-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-x-3 gap-y-0.5 shrink-0">
                      <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 mb-3 bg-violet-500/8 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs rounded-md">
                    {exp.achievement}
                  </span>

                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="mt-[5px] w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education + Certification side by side */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <p className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Education
            </p>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              {education.degree}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{education.institution}</p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{education.year}</p>
          </div>

          <div className="p-5 rounded-xl border border-violet-500/20 bg-violet-500/5">
            <p className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Certification
            </p>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              {certification.title}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{certification.topics}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
