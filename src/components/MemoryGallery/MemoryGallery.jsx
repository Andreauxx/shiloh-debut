import React from 'react';
import { motion } from 'framer-motion';
import { PHOTOS } from '../../config/event';
import { Flower, Daisy, Heart, WashiTape } from '../ui/Decorations';
import './MemoryGallery.css';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Illustrated placeholder for when no photo is available.
 */
function PlaceholderIllustration({ index }) {
  const illustrations = [
    // Flowers
    <svg viewBox="0 0 120 120" fill="none" key="fl">
      <rect width="120" height="120" fill="#EAF4FC" />
      <circle cx="40" cy="60" r="14" fill="#A9D8F5" opacity="0.5" />
      <circle cx="40" cy="60" r="7" fill="#F8E7A8" opacity="0.7" />
      <circle cx="75" cy="45" r="10" fill="#F8E7A8" opacity="0.4" />
      <circle cx="75" cy="45" r="5" fill="#FFF2BF" opacity="0.7" />
      <circle cx="60" cy="80" r="12" fill="#F5C6D0" opacity="0.35" />
      <circle cx="60" cy="80" r="6" fill="#F8E7A8" opacity="0.6" />
      <line x1="40" y1="74" x2="38" y2="100" stroke="#8BC4E8" strokeWidth="1.5" opacity="0.4" />
      <line x1="75" y1="55" x2="76" y2="90" stroke="#8BC4E8" strokeWidth="1.2" opacity="0.3" />
      <line x1="60" y1="92" x2="58" y2="110" stroke="#8BC4E8" strokeWidth="1" opacity="0.3" />
    </svg>,
    // Sky & clouds
    <svg viewBox="0 0 120 120" fill="none" key="sky">
      <rect width="120" height="120" fill="#DDEFFF" />
      <ellipse cx="35" cy="40" rx="20" ry="10" fill="white" opacity="0.8" />
      <ellipse cx="25" cy="38" rx="12" ry="8" fill="white" opacity="0.9" />
      <ellipse cx="80" cy="55" rx="18" ry="9" fill="white" opacity="0.7" />
      <ellipse cx="70" cy="53" rx="10" ry="7" fill="white" opacity="0.85" />
      <circle cx="95" cy="30" r="4" fill="#F8E7A8" opacity="0.5" />
      <circle cx="15" cy="70" r="3" fill="#F8E7A8" opacity="0.4" />
    </svg>,
    // Hearts
    <svg viewBox="0 0 120 120" fill="none" key="hrt">
      <rect width="120" height="120" fill="#FFF8EA" />
      <path d="M60 90s-30-20-30-40c0-11 9-18 15-18 5 0 10 4 15 12 5-8 10-12 15-12 6 0 15 7 15 18 0 20-30 40-30 40z" fill="#F5C6D0" opacity="0.2" stroke="#F5C6D0" strokeWidth="1" opacity="0.4" />
      <path d="M40 55s-12-8-12-16c0-5 3-7 6-7s6 3 6 7v16z" fill="#A9D8F5" opacity="0.25" />
      <path d="M85 50s-10-7-10-14c0-4 3-6 5-6s5 2 5 6v14z" fill="#F8E7A8" opacity="0.3" />
    </svg>,
    // Pastel abstract
    <svg viewBox="0 0 120 120" fill="none" key="abs">
      <rect width="120" height="120" fill="#FFF2BF" opacity="0.3" />
      <rect width="120" height="120" fill="#EAF4FC" />
      <circle cx="30" cy="30" r="25" fill="#A9D8F5" opacity="0.15" />
      <circle cx="90" cy="80" r="30" fill="#F8E7A8" opacity="0.2" />
      <circle cx="60" cy="55" r="18" fill="#F5C6D0" opacity="0.12" />
      <rect x="20" y="90" width="80" height="2" rx="1" fill="#A9D8F5" opacity="0.2" />
    </svg>,
    // Stars
    <svg viewBox="0 0 120 120" fill="none" key="str">
      <rect width="120" height="120" fill="#DDEFFF" />
      <path d="M60 25l4 12h12l-10 7 4 12-10-7-10 7 4-12-10-7h12z" fill="#F8E7A8" opacity="0.6" />
      <path d="M30 70l3 8h8l-6 5 3 8-8-5-8 5 3-8-6-5h8z" fill="#A9D8F5" opacity="0.4" />
      <path d="M85 60l2 6h7l-5 4 2 7-6-4-6 4 2-7-5-4h7z" fill="#F5C6D0" opacity="0.45" />
      <circle cx="45" cy="95" r="3" fill="#F8E7A8" opacity="0.5" />
      <circle cx="90" cy="30" r="2" fill="#A9D8F5" opacity="0.5" />
    </svg>,
  ];

  return (
    <div className="polaroid__placeholder">
      {illustrations[index % illustrations.length]}
    </div>
  );
}

export default function MemoryGallery() {
  return (
    <section className="memories bg-blue-pale" id="memories">
      <div className="memories__container container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.h2 className="memories__heading uppercase-wide" variants={fadeInUp}>
            A Little Bit of Shiloh
          </motion.h2>

          <motion.div className="elegant-divider" variants={fadeInUp}>
            <Flower variant="blue" size="sm" />
          </motion.div>

          <div className="memories__grid">
            {PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="polaroid"
                style={{ '--rotation': `${photo.rotation}deg` }}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, rotate: 0, transition: { duration: 0.3 } }}
              >
                {/* Tape decoration */}
                <div className="polaroid__tape">
                  <WashiTape
                    width={36}
                    color={index % 2 === 0 ? '#A9D8F5' : '#F8E7A8'}
                    rotation={index % 2 === 0 ? -8 : 5}
                  />
                </div>

                <div className="polaroid__frame">
                  {photo.src ? (
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="polaroid__image"
                      loading="lazy"
                    />
                  ) : (
                    <PlaceholderIllustration index={index} />
                  )}
                </div>
                <p className="polaroid__label font-handwritten">{photo.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p className="memories__coming font-handwritten" variants={fadeInUp}>
            More memories coming soon ♡
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
