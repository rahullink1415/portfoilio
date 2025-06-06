import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} relative`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Rahul Kumar
              </div>
              <p
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Android Developer & Jetpack Compose Expert
              </p>
            </div>

            <div
              className={`flex items-center text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Made with{' '}
              <Heart
                size={16}
                className="mx-1 text-red-500 fill-current animate-pulse"
              />{' '}
              using React & Tailwind CSS
            </div>
          </div>

          <hr
            className={`my-8 ${
              darkMode ? 'border-gray-700' : 'border-gray-300'
            }`}
          />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p
              className={`mb-4 md:mb-0 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              © 2024 Rahul Kumar. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href="mailto:rahul.link1415@gmail.com"
                className={`hover:text-green-600 transition-colors duration-200 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/rahullink1415"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-green-600 transition-colors duration-200 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
          darkMode
            ? 'bg-gray-700 text-white hover:bg-green-600'
            : 'bg-white text-gray-600 hover:bg-green-600 hover:text-white'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;