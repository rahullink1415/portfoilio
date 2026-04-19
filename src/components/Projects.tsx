import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Go Hotel Life',
      description:
        'Hotel automation app with BLE-based room access and guest services for seamless hospitality experiences.',
      image:
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'BLE', 'Android SDK', 'Room'],
      category: 'Android',
      liveUrl: 'https://play.google.com/store/apps/details?id=sdei.trumpbeach.resort',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Date.Com',
      description:
        'Modern dating app with real-time chat, deep linking, and polished Jetpack Compose animations.',
      image:
        'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Sendbird', 'Branch.io', 'Kotlin'],
      category: 'Android',
      liveUrl: 'https://play.google.com/store/apps/details?id=org.date.dot.com',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'E-Commerce App',
      description:
        'Full-featured shopping application with secure payments, product catalog, and user management.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'MVVM', 'Retrofit', 'Firebase'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description:
        'Health tracking app with real-time sync, workout plans, and wearable device integration.',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Room', 'WorkManager', 'Health Connect'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Banking Solution',
      description:
        'Secure banking app with biometric authentication, transaction history, and real-time notifications.',
      image:
        'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'Biometric API', 'Encryption', 'MVVM'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'IoT Smart Home',
      description:
        'Smart home control app with IoT device integration, automation rules, and energy monitoring.',
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'MQTT', 'BLE', 'Firebase IoT'],
      category: 'IoT',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const categories = ['All', 'Android', 'IoT'];
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
                {/* Hover overlay with links */}
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
