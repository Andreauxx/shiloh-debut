import React from 'react';
import './MusicPlayer.css';

export default function MusicPlayer({ visible, isPlaying, toggleMusic }) {

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
