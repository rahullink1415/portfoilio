import React from 'react';
import { Smartphone, Code, Zap, Users } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile Excellence',
      description: '7+ years building scalable Android applications with modern architecture patterns.',
    },
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'Expert in MVVM, clean code principles, and maintainable application structures.',
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Driving performance optimizations, crash reductions, and seamless feature rollouts.',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Mentorship, ownership mindset, and strong collaboration with cross-functional teams.',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              About{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Android Developer & Mobile Architecture Expert
              </h3>
              <div
                className={`text-lg leading-relaxed space-y-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <p>
                  Android Developer with 7+ years of experience building scalable, high-performance 
                  mobile applications. I specialize in Kotlin and Jetpack Compose with a deep focus 
                  on product quality, clean architecture, and user-centric design.
                </p>
                <p>
                  Known for driving performance optimizations, crash reductions, and seamless feature 
                  rollouts, I bring a product-oriented mindset and strong collaboration with 
                  cross-functional teams. My expertise spans the entire Android ecosystem with a 
                  proven track record of 98% project success rate.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Kotlin, Jetpack Compose, MVVM, Firebase, REST APIs, 
                  Hilt, Retrofit, Room, Git
                </p>
                <p>
                  <strong>Soft Skills:</strong> Mentorship, Ownership, Agile Collaboration
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-700/50 hover:bg-gray-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h4
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Goals Section */}
          <div className="mt-16 text-center">
            <div
              className={`p-8 rounded-xl ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                🎯 Career Goals
              </h3>
              <p
                className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Looking for: <strong>Senior Android Developer</strong> roles (Remote or Hybrid) at{' '}
                <strong>product-first companies</strong> focused on innovation, scale, and clean architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;