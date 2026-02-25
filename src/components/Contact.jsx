import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  const [copyLabel, setCopyLabel] = useState('Copy Email');
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    const key = 'portfolio_open_count';
    const countedKey = '__portfolio_counted_once__';
    const alreadyCounted = window[countedKey] === true;

    if (!alreadyCounted) {
      const current = Number(localStorage.getItem(key) || '0');
      const next = current + 1;
      localStorage.setItem(key, String(next));
      window[countedKey] = true;
      setOpenCount(next);
      return;
    }

    setOpenCount(Number(localStorage.getItem(key) || '0'));
  }, []);

  const contactItems = [
    {
      title: 'Phone',
      value: '9484875152',
      href: 'tel:9484875152',
      icon: <FaPhoneAlt className="text-cyan" />,
    },
    {
      title: 'Email',
      value: 'tanuj9484@gmail.com',
      href: 'mailto:tanuj9484@gmail.com',
      icon: <FaEnvelope className="text-lime" />,
    },
    {
      title: 'WhatsApp',
      value: 'Chat with me',
      href: 'https://wa.me/919484875152',
      icon: <FaWhatsapp className="text-[#3de07a]" />,
    },
    {
      title: 'GitHub',
      value: 'tanuj2503-ai',
      href: 'https://github.com/tanuj2503-ai',
      icon: <FaGithub className="text-cyan" />,
    },
    {
      title: 'Instagram',
      value: '@tanuj.fittt',
      href: 'https://instagram.com/tanuj.fittt',
      icon: <FaInstagram className="text-coral" />,
    },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tanuj9484@gmail.com');
      setCopyLabel('Email Copied');
      setTimeout(() => setCopyLabel('Copy Email'), 1800);
    } catch {
      setCopyLabel('Copy Failed');
      setTimeout(() => setCopyLabel('Copy Email'), 1800);
    }
  };

  return (
    <section id="contact">
      <div className="section-shell">
        <span className="section-kicker">Connect</span>
        <h2 className="section-title">Let&apos;s Build Something Valuable</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-4xl panel p-8 md:p-10"
        >
          <p className="max-w-2xl text-sm leading-7 text-text-soft md:text-base">
            Open to internships, freelance collaborations, and early-stage product builds.
            Share your project goals and I will reply with a clear execution approach.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-lg border border-cyan/50 bg-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan transition-colors hover:bg-cyan/20"
            >
              {copyLabel}
            </button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.title === 'Phone' || item.title === 'Email' ? undefined : '_blank'}
                rel={item.title === 'Phone' || item.title === 'Email' ? undefined : 'noopener noreferrer'}
                className="rounded-2xl border border-edge bg-canvas/70 p-5 transition-all hover:-translate-y-1 hover:border-cyan/50"
              >
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-text-soft">
                  {item.icon}
                  {item.title}
                </div>
                <p className="mt-3 break-all text-sm font-semibold text-text-main">{item.value}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.15em] text-text-soft">
            This portfolio has been opened {openCount} time{openCount === 1 ? '' : 's'} on this device.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
