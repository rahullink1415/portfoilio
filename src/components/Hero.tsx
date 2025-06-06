import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Android Developer', 'Jetpack Compose Expert', 'Kotlin Specialist', 'Mobile Architect'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentIndex];

      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-purple-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-1">
              <div
                className={`w-full h-full rounded-full ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent`}
              >
                RK
              </div>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rahul Kumar
            </span>
          </h1>

          <div className="h-16 mb-8">
            <p
              className={`text-2xl md:text-3xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm an{' '}
              <span className="text-green-600 font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <p
            className={`text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            7+ Years Kotlin Experience | 98% Project Success Rate
          </p>

          <p
            className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Building scalable, high-performance mobile applications with clean architecture 
            and user-centric design. Specialized in driving performance optimizations and 
            seamless feature rollouts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Projects
            </a>
            <a
              href="mailto:rahul.link1415@gmail.com?subject=from%20portfolio%20github"
              className={`px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 ${
                darkMode ? 'hover:text-white' : ''
              }`}
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/rahullink1415', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rahullink1415', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rahul.link1415@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white'
                    : 'bg-white text-gray-600 hover:bg-green-600 hover:text-white shadow-lg'
                }`}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            size={32}
            className={darkMode ? 'text-gray-400' : 'text-gray-600'}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;