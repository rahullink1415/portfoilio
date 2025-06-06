import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Smartphone } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Go Hotel Life',
      description: 'Enhanced guest experience with hotel automation via BLE-based room access & services. Modern hotel management system with seamless integration.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'BLE', 'Android SDK', 'Room'],
      category: 'Android',
      liveUrl: 'https://play.google.com/store/apps/details?id=sdei.trumpbeach.resort',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Date.Com',
      description: 'Modern dating app with real-time chat, deep linking & animated UI. Built with Jetpack Compose for smooth user experience and engaging interactions.',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Sendbird', 'Branch.io', 'Kotlin'],
      category: 'Android',
      liveUrl: 'https://play.google.com/store/apps/details?id=org.date.dot.com',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'E-Commerce Mobile App',
      description: 'Full-featured e-commerce Android application with secure payments, product catalog, and user management. Built with modern Android architecture.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'MVVM', 'Retrofit', 'Firebase'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Fitness Tracker App',
      description: 'Health and fitness tracking application with real-time data sync, workout plans, and progress analytics. Integrated with wearable devices.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Room', 'WorkManager', 'Health Connect'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Banking Mobile Solution',
      description: 'Secure banking application with biometric authentication, transaction history, and real-time notifications. Focus on security and user experience.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'Biometric API', 'Encryption', 'MVVM'],
      category: 'Android',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'IoT Smart Home App',
      description: 'Smart home control application with IoT device integration, automation rules, and energy monitoring. Real-time device status and control.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'MQTT', 'BLE', 'Firebase IoT'],
      category: 'IoT',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const categories = ['All', 'Android', 'IoT'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Project{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              A showcase of Android applications built with modern architecture, 
              clean code principles, and exceptional user experiences.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Filter size={16} className="inline mr-2" />
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } ${project.featured ? 'ring-2 ring-green-500/50' : ''}`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs font-bold px-3 py-1 text-center">
                    ⭐ FEATURED PROJECT
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        {project.liveUrl.includes('play.google.com') ? <Smartphone size={18} /> : <ExternalLink size={18} />}
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs rounded-full ${
                          darkMode
                            ? 'bg-gray-600 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                        }`}
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

export default Projects;