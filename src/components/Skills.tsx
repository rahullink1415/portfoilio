import React from 'react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: 'Android & Mobile',
      skills: [
        'Kotlin', 'Java', 'NDK', 'Jetpack Compose', 'Android SDK',
        'MVVM', 'Clean Architecture', 'Coroutines', 'Flow',
        'Room', 'Hilt / Dagger 2', 'BLE', 'WorkManager',
      ],
    },
    {
      title: 'AI & Automation',
      skills: [
        'LangChain', 'LangGraph', 'Agentic AI', 'Prompt Engineering',
        'N8N Automation', 'Chatbots', 'LLMs', 'Python',
      ],
    },
    {
      title: 'Web, APIs & Tools',
      skills: [
        'REST APIs', 'Firebase', 'Retrofit', 'Node.js',
        'React', 'MongoDB', 'Docker', 'Git', 'CI/CD',
        'Play Console', 'Agile / Scrum',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Technical skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            What I work with
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-lg hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Domains row */}
        <div className="mt-12 pt-10 border-t border-zinc-100 dark:border-zinc-800">
          <h3 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
            Industry Domains
          </h3>
          <div className="flex flex-wrap gap-2">
            {['LegalTech', 'Healthcare', 'E-commerce', 'IoT', 'Hospitality', 'Social / Dating', 'FinTech'].map((d) => (
              <span
                key={d}
                className="px-3 py-1.5 text-sm border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 rounded-lg"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
