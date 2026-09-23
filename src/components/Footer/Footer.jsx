import React from 'react';
import { motion } from 'framer-motion';
import { EVENT } from '../../config/event';
import { Flower, Daisy, Heart, EnvelopeIcon, CuteBeagle } from '../ui/Decorations';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-cream">
      <div className="footer__container container">
        <motion.div
          className="footer__content"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorations */}
          <div className="footer__decor">
            <Flower variant="blue" size="sm" />
            <EnvelopeIcon size={18} color="#A9D8F5" />
            <Daisy size={16} color="#F8E7A8" />
          </div>

          <p className="footer__see-you font-serif">
            See you on October 17 ♡
          </p>

          <div className="elegant-divider">
            <Heart size={8} color="#F5C6D0" />
          </div>

          <p className="footer__made uppercase-wide">
            Made with love for Shiloh's 18th ♡
          </p>

          <p className="footer__date">
            {EVENT.date}
          </p>

          {/* Small beagle */}
          <div className="footer__beagle">
            <CuteBeagle size={36} />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
