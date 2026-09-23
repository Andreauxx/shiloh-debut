import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Heart, Daisy, Stamp, WashiTape, PaperClip } from '../ui/Decorations';
import { Button } from '../ui/Button';
import { EVENT } from '../../config/event';
import './EventDetails.css';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function DetailIcon({ type }) {
  const iconStyle = {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'var(--blue-light)',
    flexShrink: 0,
  };

  const svgProps = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--blue-deep)', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

  const icons = {
    date: (
      <svg {...svgProps}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="1.5" fill="var(--blue-deep)" stroke="none" />
      </svg>
    ),
    time: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    venue: (
      <svg {...svgProps}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" fill="var(--blue-deep)" stroke="none" />
      </svg>
    ),
    dress: (
      <svg {...svgProps}>
        <path d="M12 2C10 2 8 3.5 8 5.5S10 9 12 9s4-1.5 4-3.5S14 2 12 2z" />
        <path d="M8 9l-3 13h14L16 9" />
        <path d="M9 14h6" />
      </svg>
    ),
  };

  return <div style={iconStyle}>{icons[type]}</div>;
}

export default function EventDetails() {
  const details = [
    { type: 'date', label: 'Date', value: EVENT.date },
    { type: 'time', label: 'Time', value: EVENT.time },
    { type: 'venue', label: 'Venue', value: EVENT.venue },
    { type: 'dress', label: 'Dress Code', value: EVENT.dressCode },
  ];

  return (
    <section className="details bg-white" id="details">
      <div className="details__container container">
        <motion.div
          className="details__card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {/* Scrapbook decorations */}
          <div className="details__tape-top">
            <WashiTape width={50} color="#A9D8F5" rotation={-3} />
          </div>
          <div className="details__tape-bottom">
            <WashiTape width={45} color="#F8E7A8" rotation={4} />
          </div>
          <div className="details__clip">
            <PaperClip size={16} color="#A9D8F5" rotation={-10} />
          </div>
          <div className="details__stamp">
            <Stamp size={38} />
          </div>

          <motion.h2 className="details__heading uppercase-wide" variants={fadeInUp}>
            The Celebration
          </motion.h2>

          <motion.div className="elegant-divider" variants={fadeInUp}>
            <Flower variant="blue" size="sm" />
          </motion.div>

          <div className="details__list">
            {details.map((item) => (
              <motion.div key={item.type} className="details__item" variants={fadeInUp}>
                <DetailIcon type={item.type} />
                <div className="details__item-text">
                  <span className="details__item-label uppercase-spaced">{item.label}</span>
                  <span className="details__item-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="elegant-divider" variants={fadeInUp}>
            <Heart size={10} color="#F5C6D0" />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button
              variant="secondary"
              size="md"
              onClick={() => window.open(EVENT.venueMapUrl, '_blank', 'noopener')}
            >
              Open Location
            </Button>
          </motion.div>

          {/* Corner decorations */}
          <div className="details__flower-bl">
            <Daisy size={20} color="#A9D8F5" />
          </div>
          <div className="details__flower-tr">
            <Flower variant="yellow" size="sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
