import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 bg-violet-600 rounded-md flex items-center justify-center text-white text-xs font-bold shrink-0">
          RK
        </span>
        <span className="text-sm text-zinc-400 dark:text-zinc-500">
          Rahul Kumar · Android Developer
        </span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-5 text-xs text-zinc-400 dark:text-zinc-600">
        <span>© 2024 Rahul Kumar</span>
        <a
          href="mailto:rahul.link1415@outlook.com"
          className="hover:text-violet-600 dark:hover:text-violet-400"
        >
          Contact
        </a>
        <a
          href="https://www.linkedin.com/in/rahullink1415"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 dark:hover:text-violet-400"
        >
          LinkedIn
        </a>
      </div>
    </div>

    {/* Back to top */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-500 text-white shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  </footer>
);

export default Footer;
