import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Android Developer',
      company: 'Product-First Tech Company',
      location: 'Remote',
      period: '2022 – Present',
      achievement: '98% project success rate',
      description: [
        'Led Android app development serving 100K+ daily active users',
        'Migrated UI to Jetpack Compose — reduced development time by 40%',
        'Mentored junior developers and established code review standards',
        'Drove rigorous testing practices achieving 98% project success rate',
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Hilt'],
    },
    {
      title: 'Android Developer',
      company: 'Mobile Solutions Inc.',
      location: 'Hybrid',
      period: '2020 – 2022',
      achievement: '60% crash reduction',
      description: [
        'Built Go Hotel Life with BLE for hotel room automation and access control',
        'Developed Date.Com with real-time chat via Sendbird SDK',
        'Reduced crash rate by 60% through systematic root-cause analysis',
        'Collaborated with design and backend in two-week agile sprints',
      ],
      technologies: ['Java', 'Kotlin', 'BLE', 'Sendbird', 'Branch.io'],
    },
    {
      title: 'Mobile App Developer',
      company: 'Digital Innovation Lab',
      location: 'On-site',
      period: '2019 – 2020',
      achievement: 'Clean architecture rollout',
      description: [
        'Implemented REST integrations with Retrofit and Room for offline caching',
        'Built reusable component library and established team coding standards',
        'Contributed to architectural decisions and knowledge-sharing sessions',
      ],
      technologies: ['Android SDK', 'Retrofit', 'Room', 'MVVM', 'Git'],
    },
    {
      title: 'Junior Android Developer',
      company: 'StartUp Mobile',
      location: 'On-site',
      period: '2017 – 2019',
      achievement: 'Kotlin expertise',
      description: [
        'Contributed to flagship app features under senior developer guidance',
        'Led personal migration of new modules from Java to Kotlin',
        'Resolved critical bugs and improved test coverage across the codebase',
      ],
      technologies: ['Java', 'Kotlin', 'Android SDK', 'SQLite', 'Git'],
    },
  ];

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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-[22px] w-[15px] h-[15px] -translate-y-1/2 rounded-full bg-violet-500 ring-4 ring-white dark:ring-zinc-950 shrink-0" />

                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700">
                  {/* Card header */}
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

                  {/* Achievement */}
                  <span className="inline-block px-2.5 py-0.5 mb-3 bg-violet-500/8 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs rounded-md">
                    {exp.achievement}
                  </span>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="mt-[5px] w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
