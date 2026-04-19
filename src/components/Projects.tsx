import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'ModioLegal & CoreNet Global',
      description:
        'Audio-based legal content platform with dynamic content delivery, offline sync, and seamless playback for legal professionals.',
      image:
        'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'MVVM', 'Room', 'ExoPlayer', 'Retrofit'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Go Hotel Life',
      description:
        'Hotel guest automation — BLE-based room access, check-in, food orders, and POS integration for a seamless hospitality experience.',
      image:
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'BLE', 'Android SDK', 'Room', 'POS SDK'],
      category: 'Android',
      liveUrl: 'https://play.google.com/store/apps/details?id=sdei.trumpbeach.resort',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Date.Com',
      description:
        'Social dating app with real-time chat, deep linking, animated Jetpack Compose UI, and smart matching features.',
      image:
        'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Sendbird', 'Branch.io', 'Kotlin', 'Firebase'],
      category: 'Android',
      liveUrl: 'https://play.google.com/store/apps/details?id=org.date.dot.com',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'AI Chatbots & Automation',
      description:
        'Conversational AI chatbots built with LangChain & LangGraph agents; end-to-end workflow automation powered by N8N.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['LangChain', 'LangGraph', 'N8N', 'Python', 'Agentic AI'],
      category: 'AI',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 5,
      title: 'IoT Smart Home',
      description:
        'Smart home control application with IoT device integration, BLE automation rules, and real-time energy monitoring.',
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'MQTT', 'BLE', 'Firebase IoT', 'MVVM'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Healthcare Patient App',
      description:
        'Patient-facing healthcare app with appointment booking, medical records, and real-time doctor consultation features.',
      image:
        'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Hilt', 'REST APIs'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const categories = ['All', 'Android', 'AI'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Selected Projects
            </h2>
          </div>

          {/* Tab-style filter */}
          <div className="flex gap-0.5 p-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-sm rounded-md font-medium ${
                  filter === cat
                    ? 'bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3 gap-2">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-white/10 border border-white/15 rounded-lg text-white hover:bg-white/20"
                    >
                      {project.liveUrl.includes('play.google') ? (
                        <Smartphone size={15} />
                      ) : (
                        <ExternalLink size={15} />
                      )}
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      className="p-1.5 bg-white/10 border border-white/15 rounded-lg text-white hover:bg-white/20"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
                {project.featured && (
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-violet-600 text-white text-xs font-medium rounded-md">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
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
    </section>
  );
};

export default Projects;
