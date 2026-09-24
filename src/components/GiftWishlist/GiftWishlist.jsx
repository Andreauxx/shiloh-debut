import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Daisy, Heart, Stamp } from '../ui/Decorations';
import './GiftWishlist.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function GiftWishlist() {
  return (
    <section className="wishlist bg-gingham" id="wishlist">
      <div className="wishlist__container container">
        {/* Decorative flowers */}
        <div className="wishlist__decor wishlist__decor--left">
          <Flower variant="yellow" size="lg" />
          <Heart size={12} color="#A9D8F5" style={{ marginTop: '4px' }} />
        </div>
        <div className="wishlist__decor wishlist__decor--right">
          <Daisy size={24} color="#F5C6D0" />
          <Flower variant="blue" size="sm" style={{ marginTop: '4px' }} />
        </div>

        <motion.div
          className="wishlist__card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          {/* Stamp decoration on card */}
          <div className="wishlist__card-stamp">
            <Stamp size={32} />
          </div>

          <h2 className="wishlist__heading uppercase-wide">Gift Guide</h2>

          <div className="elegant-divider">
            <Daisy size={12} color="#A9D8F5" />
          </div>

          <div className="wishlist__text">
            <p className="wishlist__paragraph font-handwritten">
              Your presence is the greatest present.<br />
              But if you wish to bring a gift, Shiloh loves:
            </p>
            <ul className="wishlist__list font-serif">
              <li>Snoopy related things</li>
              <li>Anything that can be kept forever</li>
              <li>Clothes (Shirt size: Medium)</li>
              <li>Shoes (Size: 39)</li>
              <li>Makeups</li>
            </ul>
          </div>

          <div className="elegant-divider">
            <Heart size={10} color="#F5C6D0" />
          </div>

          <p className="wishlist__signoff">
            <span className="font-handwritten" style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>
              Every gift is cherished!
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
