import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingNav.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '✦' },
  { id: 'details', label: 'Details', icon: '◇' },
  { id: 'memories', label: 'Memories', icon: '❀' },
  { id: 'rsvp', label: 'RSVP', icon: '✉' },
];

export default function FloatingNav({ visible }) {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="floating-nav"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Page navigation"
        >
          <div className="floating-nav__inner">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`floating-nav__item ${activeSection === item.id ? 'floating-nav__item--active' : ''}`}
                onClick={() => scrollTo(item.id)}
                aria-label={`Navigate to ${item.label}`}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                <span className="floating-nav__icon">{item.icon}</span>
                <span className="floating-nav__label">{item.label}</span>
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
