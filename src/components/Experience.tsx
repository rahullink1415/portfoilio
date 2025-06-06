import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Senior Android Developer',
      company: 'Product-First Tech Company',
      location: 'Remote',
      period: '2022 - Present',
      description: [
        'Led development of scalable Android applications serving 100K+ daily active users',
        'Implemented Jetpack Compose UI reducing development time by 40%',
        'Mentored junior developers and conducted code reviews for clean architecture',
        'Achieved 98% project success rate through rigorous testing and quality assurance',
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Hilt'],
      achievements: '98% Project Success Rate',
    },
    {
      title: 'Android Developer',
      company: 'Mobile Solutions Inc.',
      location: 'Hybrid',
      period: '2020 - 2022',
      description: [
        'Developed Go Hotel Life app with BLE integration for hotel automation',
        'Built Date.Com dating app with real-time chat using Sendbird SDK',
        'Optimized app performance reducing crash rates by 60%',
        'Collaborated with cross-functional teams in agile development environment',
      ],
      technologies: ['Java', 'Kotlin', 'BLE', 'Sendbird', 'Branch.io'],
      achievements: '60% Crash Reduction',
    },
    {
      title: 'Mobile App Developer',
      company: 'Digital Innovation Lab',
      location: 'On-site',
      period: '2019 - 2020',
      description: [
        'Created mobile applications with focus on user experience and performance',
        'Implemented REST API integrations with Retrofit and Room database',
        'Developed reusable UI components and established coding standards',
        'Participated in code reviews and knowledge sharing sessions',
      ],
      technologies: ['Android SDK', 'Retrofit', 'Room', 'MVVM', 'Git'],
      achievements: 'Clean Architecture Implementation',
    },
    {
      title: 'Junior Android Developer',
      company: 'StartUp Mobile',
      location: 'On-site',
      period: '2017 - 2019',
      description: [
        'Assisted in development of company\'s flagship mobile application',
        'Learned modern Android development practices and frameworks',
        'Fixed bugs and implemented minor features under senior guidance',
        'Gained expertise in Kotlin and modern Android architecture patterns',
      ],
      technologies: ['Java', 'Kotlin', 'Android SDK', 'SQLite', 'Git'],
      achievements: 'Kotlin Expertise Development',
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Work{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              7+ years of Android development experience with a focus on clean architecture, 
              performance optimization, and team collaboration.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            ></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                    darkMode
                      ? 'bg-gray-900 border-green-600'
                      : 'bg-white border-green-600'
                  }`}
                ></div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div
                    className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <div className="mb-4">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-green-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div
                        className={`flex flex-wrap items-center gap-4 text-sm mb-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                        <Award size={16} />
                        <span>{exp.achievements}</span>
                      </div>
                    </div>

                    <ul
                      className={`space-y-2 mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs rounded-full ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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