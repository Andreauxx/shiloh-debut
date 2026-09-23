import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ref, push, serverTimestamp } from 'firebase/database';
import { db, isFirebaseConfigured } from '../../config/firebase';
import { EVENT } from '../../config/event';
import { Flower, Heart, Daisy } from '../ui/Decorations';
import { Button } from '../ui/Button';
import RSVPSuccessModal from '../RSVPSuccessModal/RSVPSuccessModal';
import './RSVPForm.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    attending: null,
    guests: 1,
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (formData.attending === null) {
      newErrors.attending = 'Please let us know if you can make it.';
    }

    if (formData.attending === true) {
      if (!formData.guests || formData.guests < 1) {
        newErrors.guests = 'At least 1 guest is required.';
      } else if (formData.guests > EVENT.maxGuests) {
        newErrors.guests = `Maximum of ${EVENT.maxGuests} guests allowed.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) return;

    setIsSubmitting(true);

    const rsvpData = {
      fullName: formData.fullName.trim(),
      attending: formData.attending,
      guests: formData.attending ? Number(formData.guests) : 0,
      message: formData.message.trim(),
      submittedAt: serverTimestamp(),
    };

    try {
      if (!isFirebaseConfigured()) {
        // In development without Firebase, simulate success
        console.warn('Firebase not configured. RSVP data:', rsvpData);
        await new Promise((resolve) => setTimeout(resolve, 1200));
      } else {
        await push(ref(db, EVENT.firestoreCollection || 'rsvps'), rsvpData);
      }

      setSubmittedName(formData.fullName.trim());
      setShowSuccess(true);
      setFormData({ fullName: '', attending: null, guests: 1, message: '' });
      setErrors({});
    } catch (error) {
      console.error('RSVP submission error:', error);
      setSubmitError('Something went wrong while sending your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validate]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    setSubmitError('');
  };

  return (
    <>
      <section className="rsvp bg-gingham" id="rsvp">
        <div className="rsvp__container container">
          <motion.div
            className="rsvp__card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            {/* Decorations */}
            <div className="rsvp__decor rsvp__decor--tl">
              <Flower variant="blue" size="md" />
            </div>
            <div className="rsvp__decor rsvp__decor--br">
              <Daisy size={20} color="#F8E7A8" />
            </div>

            <motion.h2 className="rsvp__heading uppercase-wide" variants={fadeInUp}>
              RSVP
            </motion.h2>

            <motion.div className="elegant-divider" variants={fadeInUp}>
              <Heart size={10} color="#F5C6D0" />
            </motion.div>

            <motion.p className="rsvp__subheading font-handwritten" variants={fadeInUp}>
              We'd love to celebrate with you.
            </motion.p>

            {!isFirebaseConfigured() && (
              <motion.div className="rsvp__dev-notice" variants={fadeInUp}>
                <p>⚠️ Firebase is not configured. RSVPs will be logged to console only.</p>
              </motion.div>
            )}

            <form className="rsvp__form" onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <motion.div className="rsvp__field" variants={fadeInUp}>
                <label className="rsvp__label uppercase-spaced" htmlFor="rsvp-name">
                  Full Name
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  className={`rsvp__input ${errors.fullName ? 'rsvp__input--error' : ''}`}
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <span className="rsvp__error">{errors.fullName}</span>
                )}
              </motion.div>

              {/* Attendance */}
              <motion.div className="rsvp__field" variants={fadeInUp}>
                <label className="rsvp__label uppercase-spaced">
                  Will you be joining us?
                </label>
                <div className="rsvp__attendance">
                  <button
                    type="button"
                    className={`rsvp__attendance-btn ${formData.attending === true ? 'rsvp__attendance-btn--active' : ''}`}
                    onClick={() => handleChange('attending', true)}
                  >
                    <span className="rsvp__attendance-icon">✨</span>
                    Yes, I'll be there!
                  </button>
                  <button
                    type="button"
                    className={`rsvp__attendance-btn rsvp__attendance-btn--decline ${formData.attending === false ? 'rsvp__attendance-btn--active' : ''}`}
                    onClick={() => handleChange('attending', false)}
                  >
                    Sorry, I can't make it
                  </button>
                </div>
                {errors.attending && (
                  <span className="rsvp__error">{errors.attending}</span>
                )}
              </motion.div>

              {/* Guest count - only show when attending */}
              {formData.attending === true && (
                <motion.div
                  className="rsvp__field"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  variants={fadeInUp}
                >
                  <label className="rsvp__label uppercase-spaced" htmlFor="rsvp-guests">
                    Number of Guests
                  </label>
                  <input
                    id="rsvp-guests"
                    type="number"
                    className={`rsvp__input rsvp__input--number ${errors.guests ? 'rsvp__input--error' : ''}`}
                    min="1"
                    max={EVENT.maxGuests}
                    value={formData.guests}
                    onChange={(e) => handleChange('guests', parseInt(e.target.value, 10) || 1)}
                  />
                  {errors.guests && (
                    <span className="rsvp__error">{errors.guests}</span>
                  )}
                </motion.div>
              )}

              {/* Optional message */}
              <motion.div className="rsvp__field" variants={fadeInUp}>
                <label className="rsvp__label uppercase-spaced" htmlFor="rsvp-message">
                  Optional Message
                </label>
                <textarea
                  id="rsvp-message"
                  className="rsvp__textarea"
                  placeholder="Leave a sweet note for Shiloh..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
              </motion.div>

              {/* Submit error */}
              {submitError && (
                <motion.div
                  className="rsvp__submit-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p>{submitError}</p>
                </motion.div>
              )}

              {/* Submit */}
              <motion.div className="rsvp__submit" variants={fadeInUp}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Sending RSVP...' : 'RSVP Now'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Success modal */}
      <RSVPSuccessModal
        isOpen={showSuccess}
        name={submittedName}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
