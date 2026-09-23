import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Daisy, Heart, Star, Cloud, Bow } from '../ui/Decorations';
import { Button } from '../ui/Button';
import { EVENT } from '../../config/event';
import { IMAGES } from '../../config/images';
import './HeroInvitation.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroInvitation({ onRSVPClick }) {
  return (
    <section className="hero" id="home">
      {/* Background clouds */}
      <div className="hero__bg-decor">
        <Cloud size={80} style={{ position: 'absolute', top: '5%', left: '3%' }} />
        <Cloud size={60} style={{ position: 'absolute', top: '8%', right: '5%' }} />
        <Cloud size={50} style={{ position: 'absolute', bottom: '15%', left: '8%' }} />
      </div>

      <div className="hero__container container">
        <motion.div
          className="hero__card"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Card corner decorations */}
          <div className="hero__card-decor hero__card-decor--tl">
            <Flower variant="blue" size="lg" />
            <Daisy size={20} color="#F8E7A8" style={{ marginTop: '-4px', marginLeft: '8px' }} />
          </div>
          <div className="hero__card-decor hero__card-decor--tr">
            <Flower variant="yellow" size="md" />
            <Heart size={14} color="#F5C6D0" style={{ marginTop: '4px' }} />
          </div>
          <div className="hero__card-decor hero__card-decor--bl">
            <Star size={18} color="#F8E7A8" />
            <Daisy size={18} color="#A9D8F5" style={{ marginLeft: '4px' }} />
          </div>
          <div className="hero__card-decor hero__card-decor--br">
            <Flower variant="blue" size="md" />
            <Star size={14} color="#F8E7A8" style={{ marginTop: '4px' }} />
          </div>

          {/* Beagle illustration */}
          <motion.div className="hero__beagle" custom={0} variants={fadeInUp}>
            <img src={IMAGES.beagleCelebrating} alt="Cute celebrating beagle" className="hero__beagle-img" />
          </motion.div>

          {/* Invitation content */}
          <motion.p className="hero__invited uppercase-wide" custom={1} variants={fadeInUp}>
            You're Invited
          </motion.p>

          <motion.p className="hero__subtitle" custom={2} variants={fadeInUp}>
            to celebrate
          </motion.p>

          <motion.div custom={3} variants={fadeInUp}>
            <h1 className="hero__name font-serif">
              <span className="hero__name-first">Shiloh Xandrea</span>
              <span className="hero__name-last">B. Ampad</span>
            </h1>
          </motion.div>

          <motion.div className="hero__age-badge" custom={4} variants={fadeInUp}>
            <Bow size={28} color="#A9D8F5" style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
            <span className="hero__age-number font-serif">18</span>
            <span className="hero__age-label uppercase-spaced">th Birthday</span>
          </motion.div>

          <motion.div className="elegant-divider" custom={5} variants={fadeInUp}>
            <Daisy size={14} color="#A9D8F5" />
          </motion.div>

          <motion.div className="hero__details" custom={6} variants={fadeInUp}>
            <p className="hero__detail uppercase-spaced">{EVENT.date}</p>
            <p className="hero__detail uppercase-spaced">{EVENT.time}</p>
            <p className="hero__detail uppercase-spaced">{EVENT.venue}</p>
          </motion.div>

          <motion.div className="elegant-divider" custom={7} variants={fadeInUp}>
            <Heart size={12} color="#F5C6D0" />
          </motion.div>

          <motion.p className="hero__message font-handwritten" custom={8} variants={fadeInUp}>
            Come celebrate this special milestone<br />
            with Shiloh and the people she loves.
          </motion.p>

          <motion.div className="hero__actions" custom={9} variants={fadeInUp}>
            <Button variant="primary" size="lg" onClick={onRSVPClick}>
              RSVP Now
            </Button>
          </motion.div>

          <motion.p
            className="hero__scroll uppercase-wide"
            custom={10}
            variants={fadeInUp}
          >
            Scroll to Explore ↓
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
