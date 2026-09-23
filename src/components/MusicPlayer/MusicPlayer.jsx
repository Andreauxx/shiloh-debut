import React, { useState, useRef, useCallback } from 'react';
import { MUSIC } from '../../config/event';
import './MusicPlayer.css';

export default function MusicPlayer({ visible }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC.src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.warn('Music playback failed:', err);
      });
      setIsPlaying(true);
    }
  }, [isPlaying]);

  if (!visible) return null;

  return (
    <button
      className={`music-player ${isPlaying ? 'music-player--playing' : ''}`}
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      title={isPlaying ? 'Music On' : 'Music Off'}
    >
      <span className="music-player__icon">{isPlaying ? '♫' : '♪'}</span>
      <span className="music-player__label">
        {isPlaying ? 'ON' : 'OFF'}
      </span>
    </button>
  );
}
