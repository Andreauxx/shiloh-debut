import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Daisy, Heart, LittleBird } from '../ui/Decorations';
import './AboutSection.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  return (
    <section className="about bg-gingham" id="about">
      <div className="about__container container">
        {/* Decorative flowers */}
        <div className="about__decor about__decor--left">
          <Flower variant="white" size="lg" />
          <Heart size={12} color="#F5C6D0" style={{ marginTop: '4px' }} />
        </div>
        <div className="about__decor about__decor--right">
          <Daisy size={24} color="#F8E7A8" />
          <Flower variant="blue" size="sm" style={{ marginTop: '4px' }} />
        </div>

        <motion.div
          className="about__card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          {/* Bird decoration on card */}
          <div className="about__card-bird">
            <LittleBird size={24} />
          </div>

          <h2 className="about__heading uppercase-wide">A Little Note</h2>

          <div className="elegant-divider">
            <Daisy size={12} color="#A9D8F5" />
          </div>

          <div className="about__text">
            <p className="about__paragraph font-handwritten">
              Some moments only come once,<br />
              and turning eighteen is one of them.
            </p>
            <p className="about__paragraph font-handwritten">
              Shiloh would love to celebrate this<br />
              special day surrounded by the people<br />
              who make life a little brighter.
            </p>
          </div>

          <div className="elegant-divider">
            <Heart size={10} color="#F5C6D0" />
          </div>

          <p className="about__signoff">
            <span className="uppercase-spaced" style={{ fontSize: '0.65rem' }}>With Love,</span>
            <br />
            <span className="font-serif about__signoff-name">Shiloh</span>
            <span className="about__heart"> ♡</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
