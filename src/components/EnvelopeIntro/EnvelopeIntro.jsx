import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower, Daisy, Heart, Star, LittleBird } from '../ui/Decorations';
import { IMAGES } from '../../config/images';
import './EnvelopeIntro.css';

export default function EnvelopeIntro({ onOpen, onPlayMusic }) {
  const [isOpening, setIsOpening] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleOpen = useCallback(() => {
    if (isOpening) return;
    setIsOpening(true);

    if (onPlayMusic) {
      onPlayMusic();
    }

    // After flap opens, show the card rising
    setTimeout(() => setShowCard(true), 1000);

    // After card rises, transition to main page
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 3200);
  }, [isOpening, onOpen, onPlayMusic]);

  return (
    <AnimatePresence>
      <motion.div
        className="envelope-intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background decorations */}
        <div className="envelope-intro__decor envelope-intro__decor--tl">
          <Flower variant="blue" size="lg" />
        </div>
        <div className="envelope-intro__decor envelope-intro__decor--tr">
          <Daisy size={28} color="#F8E7A8" />
        </div>
        <div className="envelope-intro__decor envelope-intro__decor--bl">
          <Star size={20} color="#F8E7A8" />
          <Heart size={14} color="#F5C6D0" />
        </div>
        <div className="envelope-intro__decor envelope-intro__decor--br">
          <Flower variant="yellow" size="md" />
        </div>
        <div className="envelope-intro__decor envelope-intro__decor--bird">
          <LittleBird size={28} />
        </div>

        {/* Beagle illustration above envelope */}
        <motion.img
          src={IMAGES.beagleSitting}
          alt="Cute beagle"
          className="envelope-intro__beagle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isOpening ? 0 : 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* Main envelope */}
        <motion.div
          className="envelope-wrapper"
          initial={{ y: 0 }}
          animate={{ y: isOpening ? -20 : [0, -8, 0] }}
          transition={
            isOpening
              ? { duration: 0.4 }
              : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Click to open the invitation envelope"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(); }}
        >
          <div className={`envelope ${isOpening ? 'envelope--open' : ''}`}>
            {/* Envelope body */}
            <div className="envelope__body">
              {/* Inner card that rises */}
              <AnimatePresence>
                {showCard && (
                  <motion.div
                    className="envelope__card"
                    initial={{ y: 0 }}
                    animate={{ y: -180, opacity: [1, 1, 0] }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="envelope__card-inner">
                      <p className="envelope__card-label uppercase-wide">You're Invited</p>
                      <h2 className="envelope__card-name font-serif">Shiloh Xandrea</h2>
                      <p className="envelope__card-event uppercase-spaced">18th Birthday</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Envelope flap */}
            <div className="envelope__flap">
              <div className="envelope__flap-inner" />
            </div>

            {/* Wax seal */}
            <div className={`envelope__seal ${isOpening ? 'envelope__seal--break' : ''}`}>
              <span className="envelope__seal-letter font-serif">S</span>
            </div>

            {/* Front decorations */}
            <div className="envelope__front-decor">
              <Daisy size={16} color="#A9D8F5" style={{ position: 'absolute', top: '12px', right: '16px' }} />
              <Daisy size={12} color="#F8E7A8" style={{ position: 'absolute', bottom: '14px', left: '14px' }} />
              <Heart size={10} color="#F5C6D0" style={{ position: 'absolute', top: '16px', left: '20px' }} />
            </div>
          </div>
        </motion.div>

        {/* Text below envelope */}
        <motion.div
          className="envelope-intro__text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isOpening ? 0 : 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="envelope-intro__cta uppercase-wide">
            {isOpening ? '' : 'Click Envelope to Open'}
          </p>
          <div className="envelope-intro__sub">
            <span className="font-serif">Shiloh Xandrea</span>
            <span className="envelope-intro__dot">·</span>
            <span className="uppercase-spaced" style={{ fontSize: '0.65rem' }}>18th Birthday</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
