import React, { useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EnvelopeIntro from './components/EnvelopeIntro/EnvelopeIntro';
import HeroInvitation from './components/HeroInvitation/HeroInvitation';
import AboutSection from './components/AboutSection/AboutSection';
import EventDetails from './components/EventDetails/EventDetails';
import GiftWishlist from './components/GiftWishlist/GiftWishlist';
import MemoryGallery from './components/MemoryGallery/MemoryGallery';
import Countdown from './components/Countdown/Countdown';
import RSVPForm from './components/RSVPForm/RSVPForm';
import Footer from './components/Footer/Footer';
import FloatingNav from './components/FloatingNav/FloatingNav';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import { MUSIC } from './config/event';
import './App.css';

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const initMusic = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC.src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
  }, []);

  const playMusic = useCallback(() => {
    initMusic();
    audioRef.current.play().catch(console.warn);
    setIsPlaying(true);
  }, [initMusic]);

  const toggleMusic = useCallback(() => {
    initMusic();
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.warn);
      setIsPlaying(true);
    }
  }, [isPlaying, initMusic]);

  const handleEnvelopeOpen = useCallback(() => {
    setEnvelopeOpened(true);
    // Scroll to top when main content appears
    window.scrollTo(0, 0);
  }, []);

  const handleRSVPClick = useCallback(() => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="app">
      {/* Envelope intro */}
      <AnimatePresence mode="wait">
        {!envelopeOpened && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnvelopeIntro onOpen={handleEnvelopeOpen} onPlayMusic={playMusic} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {envelopeOpened && (
          <motion.main
            key="main-content"
            className="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroInvitation onRSVPClick={handleRSVPClick} />
            <AboutSection />
            <EventDetails />
            <GiftWishlist />
            <MemoryGallery />
            <Countdown />
            <RSVPForm />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Floating UI */}
      <MusicPlayer visible={envelopeOpened} isPlaying={isPlaying} toggleMusic={toggleMusic} />
      <FloatingNav visible={envelopeOpened} />
    </div>
  );
}
