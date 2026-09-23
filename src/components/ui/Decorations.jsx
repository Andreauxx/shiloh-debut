import React from 'react';

/**
 * Decorative flower SVG component.
 * Variants: 'blue', 'yellow', 'white', 'pink'
 * Sizes: 'sm', 'md', 'lg'
 */
export function Flower({ variant = 'blue', size = 'md', style = {}, className = '' }) {
  const sizes = { sm: 20, md: 32, lg: 48 };
  const s = sizes[size] || sizes.md;

  const colors = {
    blue: { petals: '#A9D8F5', center: '#F8E7A8' },
    yellow: { petals: '#F8E7A8', center: '#A9D8F5' },
    white: { petals: '#FFFFFF', center: '#F8E7A8' },
    pink: { petals: '#F5C6D0', center: '#F8E7A8' },
  };

  const c = colors[variant] || colors.blue;

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 40 40"
      fill="none"
      className={`decoration-flower ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Petals */}
      <ellipse cx="20" cy="10" rx="6" ry="9" fill={c.petals} opacity="0.9" />
      <ellipse cx="30" cy="16" rx="6" ry="9" fill={c.petals} opacity="0.85" transform="rotate(72 30 16)" />
      <ellipse cx="28" cy="28" rx="6" ry="9" fill={c.petals} opacity="0.9" transform="rotate(144 28 28)" />
      <ellipse cx="12" cy="28" rx="6" ry="9" fill={c.petals} opacity="0.85" transform="rotate(216 12 28)" />
      <ellipse cx="10" cy="16" rx="6" ry="9" fill={c.petals} opacity="0.9" transform="rotate(288 10 16)" />
      {/* Center */}
      <circle cx="20" cy="20" r="5" fill={c.center} />
      <circle cx="20" cy="20" r="3" fill={c.center} opacity="0.6" />
    </svg>
  );
}

/**
 * Small daisy flower - simpler, more doodle-like.
 */
export function Daisy({ size = 24, color = '#A9D8F5', style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`decoration-daisy ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle cx="12" cy="6" r="3.5" fill={color} opacity="0.8" />
      <circle cx="17.2" cy="9.8" r="3.5" fill={color} opacity="0.75" />
      <circle cx="15.2" cy="16" r="3.5" fill={color} opacity="0.8" />
      <circle cx="8.8" cy="16" r="3.5" fill={color} opacity="0.75" />
      <circle cx="6.8" cy="9.8" r="3.5" fill={color} opacity="0.8" />
      <circle cx="12" cy="12" r="3" fill="#F8E7A8" />
    </svg>
  );
}

/**
 * Heart doodle.
 */
export function Heart({ size = 16, color = '#F5C6D0', filled = true, style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={`decoration-heart ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M10 17.5s-7-4.5-7-9.5C3 5.5 4.5 3 7 3c1.5 0 2.5 1 3 2 .5-1 1.5-2 3-2 2.5 0 4 2.5 4 5 0 5-7 9.5-7 9.5z"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Star doodle.
 */
export function Star({ size = 16, color = '#F8E7A8', style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={`decoration-star ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M10 2l2.4 5.2L18 8l-4 3.8L15 18l-5-2.8L5 18l1-6.2L2 8l5.6-.8z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}

/**
 * Cloud doodle.
 */
export function Cloud({ size = 40, color = '#DDEFFF', style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 60 36"
      fill="none"
      className={`decoration-cloud ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      <ellipse cx="30" cy="22" rx="20" ry="12" fill={color} opacity="0.7" />
      <ellipse cx="18" cy="18" rx="14" ry="10" fill={color} opacity="0.8" />
      <ellipse cx="42" cy="18" rx="14" ry="10" fill={color} opacity="0.75" />
      <ellipse cx="30" cy="14" rx="16" ry="12" fill={color} opacity="0.85" />
    </svg>
  );
}

/**
 * Bow decoration.
 */
export function Bow({ size = 32, color = '#A9D8F5', style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 40 28"
      fill="none"
      className={`decoration-bow ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M20 14c-4-6-14-10-16-6s6 10 16 6z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M20 14c4-6 14-10 16-6s-6 10-16 6z"
        fill={color}
        opacity="0.85"
      />
      <ellipse cx="20" cy="14" rx="3" ry="4" fill={color} />
      <path
        d="M18 18c0 0 1 8 2 10s2-10 2-10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Cute beagle dog illustration (Snoopy-inspired, original design).
 * A simple, wholesome cartoon beagle sitting.
 */
export function CuteBeagle({ size = 80, style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`decoration-beagle ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="50" cy="68" rx="22" ry="20" fill="white" stroke="#354052" strokeWidth="1.5" />
      {/* Head */}
      <ellipse cx="50" cy="38" rx="20" ry="18" fill="white" stroke="#354052" strokeWidth="1.5" />
      {/* Ear left */}
      <ellipse cx="34" cy="34" rx="8" ry="14" fill="#354052" opacity="0.15" stroke="#354052" strokeWidth="1.2" transform="rotate(-15 34 34)" />
      {/* Ear right */}
      <ellipse cx="66" cy="34" rx="8" ry="14" fill="#354052" opacity="0.15" stroke="#354052" strokeWidth="1.2" transform="rotate(15 66 34)" />
      {/* Eye spots */}
      <ellipse cx="43" cy="35" rx="5" ry="4" fill="#354052" opacity="0.08" />
      {/* Eyes */}
      <circle cx="43" cy="35" r="2.5" fill="#354052" />
      <circle cx="57" cy="35" r="2.5" fill="#354052" />
      <circle cx="44" cy="34" r="0.8" fill="white" />
      <circle cx="58" cy="34" r="0.8" fill="white" />
      {/* Nose */}
      <ellipse cx="50" cy="42" rx="4" ry="3" fill="#354052" />
      {/* Mouth */}
      <path d="M46 45 Q50 49 54 45" stroke="#354052" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Collar */}
      <path d="M35 55 Q50 60 65 55" stroke="#A9D8F5" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Collar tag */}
      <circle cx="50" cy="59" r="3" fill="#F8E7A8" stroke="#354052" strokeWidth="0.8" />
      {/* Front paws */}
      <ellipse cx="40" cy="85" rx="6" ry="4" fill="white" stroke="#354052" strokeWidth="1.2" />
      <ellipse cx="60" cy="85" rx="6" ry="4" fill="white" stroke="#354052" strokeWidth="1.2" />
      {/* Tail */}
      <path d="M72 62 Q82 48 78 42" stroke="#354052" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Little bird companion (Woodstock-inspired, original design).
 */
export function LittleBird({ size = 30, style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      className={`decoration-bird ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="15" cy="18" rx="7" ry="8" fill="#F8E7A8" stroke="#354052" strokeWidth="1" />
      {/* Head */}
      <circle cx="15" cy="10" r="6" fill="#F8E7A8" stroke="#354052" strokeWidth="1" />
      {/* Eye */}
      <circle cx="17" cy="9" r="1.5" fill="#354052" />
      <circle cx="17.5" cy="8.5" r="0.5" fill="white" />
      {/* Beak */}
      <path d="M21 10 L25 9 L21 12 Z" fill="#F5A623" stroke="#354052" strokeWidth="0.6" />
      {/* Hair feathers */}
      <path d="M13 5 Q14 1 16 4" stroke="#354052" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M15 4 Q17 0 18 3" stroke="#354052" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Wing */}
      <path d="M9 16 Q5 14 7 20 Q9 18 11 20" fill="#F5D76E" stroke="#354052" strokeWidth="0.8" />
      {/* Feet */}
      <line x1="13" y1="26" x2="12" y2="29" stroke="#354052" strokeWidth="0.8" />
      <line x1="17" y1="26" x2="18" y2="29" stroke="#354052" strokeWidth="0.8" />
    </svg>
  );
}

/**
 * Envelope icon decoration.
 */
export function EnvelopeIcon({ size = 24, color = '#A9D8F5', style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 32 24"
      fill="none"
      className={`decoration-envelope ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="22" rx="3" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5" />
      <path d="M1 3 L16 14 L31 3" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Postage stamp decoration.
 */
export function Stamp({ size = 48, style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 48 58"
      fill="none"
      className={`decoration-stamp ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Stamp border with perforations */}
      <rect x="4" y="4" width="40" height="50" rx="2" fill="var(--warm-white, #FFFDF8)" stroke="var(--blue, #A9D8F5)" strokeWidth="1" strokeDasharray="3 2" />
      {/* Inner content area */}
      <rect x="8" y="8" width="32" height="36" rx="1" fill="var(--blue-light, #DDEFFF)" opacity="0.5" />
      {/* Small flower in stamp */}
      <circle cx="24" cy="24" r="6" fill="var(--blue, #A9D8F5)" opacity="0.6" />
      <circle cx="24" cy="24" r="3" fill="var(--butter, #F8E7A8)" />
      {/* Text */}
      <text x="24" y="50" textAnchor="middle" fontSize="5" fill="var(--text-light, #7A8190)" fontFamily="Poppins, sans-serif">OCT 2026</text>
    </svg>
  );
}

/**
 * Washi tape / scrapbook tape.
 */
export function WashiTape({ width = 60, color = '#A9D8F5', rotation = -5, style = {}, className = '' }) {
  return (
    <div
      className={`decoration-tape ${className}`}
      style={{
        width: `${width}px`,
        height: '14px',
        background: color,
        opacity: 0.4,
        transform: `rotate(${rotation}deg)`,
        borderRadius: '1px',
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

/**
 * Paper clip decoration.
 */
export function PaperClip({ size = 20, color = '#A9D8F5', rotation = 15, style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 16 32"
      fill="none"
      className={`decoration-clip ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M4 28V8a4 4 0 018 0v16a2 2 0 01-4 0V10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Doghouse decoration (Snoopy-inspired).
 */
export function Doghouse({ size = 48, style = {}, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      className={`decoration-doghouse ${className}`}
      style={{ ...style, flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Roof */}
      <path d="M5 25 L25 8 L45 25 Z" fill="#F5A623" opacity="0.3" stroke="#354052" strokeWidth="1" />
      {/* Body */}
      <rect x="10" y="25" width="30" height="20" rx="2" fill="white" stroke="#354052" strokeWidth="1" />
      {/* Door */}
      <path d="M20 45 V32 A5 5 0 0130 32 V45" fill="var(--blue-light, #DDEFFF)" stroke="#354052" strokeWidth="0.8" />
      {/* Roof line */}
      <line x1="5" y1="25" x2="45" y2="25" stroke="#354052" strokeWidth="1.2" />
    </svg>
  );
}
