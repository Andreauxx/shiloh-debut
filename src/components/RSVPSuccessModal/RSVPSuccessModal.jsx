import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flower, Star, Daisy, CuteBeagle, LittleBird } from '../ui/Decorations';
import './RSVPSuccessModal.css';

/**
 * Floating celebration particles.
 */
function CelebrationParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      size: 8 + Math.random() * 14,
      type: ['flower', 'heart', 'star'][i % 3],
    }))
  );

  return (
    <div className="celebration-particles" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="celebration-particle"
          style={{ left: `${p.x}%` }}
          initial={{ y: '110vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeOut',
          }}
        >
          {p.type === 'flower' && <Daisy size={p.size} color="#A9D8F5" />}
          {p.type === 'heart' && <Heart size={p.size} color="#F5C6D0" />}
          {p.type === 'star' && <Star size={p.size} color="#F8E7A8" />}
        </motion.div>
      ))}
    </div>
  );
}

export default function RSVPSuccessModal({ isOpen, name, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="success-modal__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <CelebrationParticles />

          <motion.div
            className="success-modal__card"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorations */}
            <div className="success-modal__beagle">
              <CuteBeagle size={60} />
              <LittleBird size={20} style={{ position: 'absolute', top: '-6px', right: '-12px' }} />
            </div>

            <div className="success-modal__corner success-modal__corner--tl">
              <Flower variant="blue" size="sm" />
            </div>
            <div className="success-modal__corner success-modal__corner--br">
              <Flower variant="yellow" size="sm" />
            </div>

            <h3 className="success-modal__heading uppercase-wide">
              RSVP Received
            </h3>

            <Heart size={16} color="#F5C6D0" />

            <p className="success-modal__message font-handwritten">
              Thank you, {name}!
            </p>

            <p className="success-modal__sub">
              We can't wait to celebrate<br />
              with you on Shiloh's special day.
            </p>

            <div className="elegant-divider">
              <Daisy size={12} color="#A9D8F5" />
            </div>

            <button className="success-modal__close" onClick={onClose}>
              <span className="uppercase-spaced" style={{ fontSize: '0.65rem' }}>Close</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
