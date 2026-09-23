import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { EVENT } from '../../config/event';
import { Flower, Heart, Star, Daisy } from '../ui/Decorations';
import './Countdown.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function calculateTimeLeft(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isOver: false,
  };
}

function pad(num) {
  return String(num).padStart(2, '0');
}

export default function Countdown() {
  const targetDate = useMemo(() => new Date(EVENT.isoDate), []);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="countdown bg-cream">
      <div className="countdown__container container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          {/* Decorations */}
          <div className="countdown__decor countdown__decor--left">
            <Star size={20} color="#F8E7A8" />
          </div>
          <div className="countdown__decor countdown__decor--right">
            <Heart size={14} color="#F5C6D0" />
          </div>

          <h2 className="countdown__heading uppercase-wide">Counting Down</h2>

          <div className="elegant-divider">
            <Daisy size={14} color="#A9D8F5" />
          </div>

          {timeLeft.isOver ? (
            <motion.div
              className="countdown__over"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="countdown__over-text font-serif">
                The Celebration Has Begun!
              </p>
              <Heart size={20} color="#F5C6D0" />
            </motion.div>
          ) : (
            <div className="countdown__grid">
              {units.map((unit) => (
                <div key={unit.label} className="countdown__unit">
                  <div className="countdown__number-card">
                    <motion.span
                      className="countdown__number font-serif"
                      key={unit.value}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {pad(unit.value)}
                    </motion.span>
                  </div>
                  <span className="countdown__label uppercase-spaced">{unit.label}</span>
                </div>
              ))}
            </div>
          )}

          <p className="countdown__date font-handwritten">
            {EVENT.date} · {EVENT.time}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
