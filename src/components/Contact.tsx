import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Briefcase } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const subject = encodeURIComponent(form.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:rahul.link1415@outlook.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' });
      setSubmitting(false);
    }, 1000);
  };

  const socials = [
    { icon: Github, href: 'https://github.com/rahullink1415', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rahullink1415', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rahul.link1415@outlook.com', label: 'Email' },
  ];

  const inputClass =
    'w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500';

  const labelClass = 'block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5';

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Let's work together
          </h2>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
            Looking for a Senior Android Developer? I'm open to new opportunities
            and would love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <a
              href="mailto:rahul.link1415@outlook.com"
              className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-violet-500/40 group"
            >
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                <Mail size={15} className="text-violet-600 dark:text-violet-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-zinc-400 dark:text-zinc-500">Email</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 truncate">
                  rahul.link1415@outlook.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                <Briefcase size={15} className="text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">Status</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Open to opportunities
                </p>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                Find me on
              </p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className="lg:col-span-3 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Senior Android Developer Opportunity"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg"
              >
                {submitting ? (
                  'Opening Email...'
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
