/**
 * Event configuration — single source of truth for all event details.
 * Update these values to customize the invitation.
 */
export const EVENT = {
  name: "Shiloh Xandrea B. Ampad",
  nickname: "Shiloh",
  date: "October 17, 2026",
  isoDate: "2026-10-17T17:00:00+08:00",
  time: "5:00 PM onwards",
  venue: "GV's Function Hall",
  dressCode: "Any Pastel Colors",
  venueMapUrl: "https://maps.app.goo.gl/rD7QribzVVAYroLe6",
  maxGuests: 10,
  firestoreCollection: "rsvps",
};

/**
 * Photo gallery configuration.
 * Replace `src` with actual image paths when available.
 * Set src to null for illustrated placeholders.
 */
export const PHOTOS = [
  { id: 1, src: "/assets/gallery/photo-1.jpg", label: "A Little Memory", rotation: -3 },
  { id: 2, src: "/assets/gallery/photo-2.jpg", label: "Precious Moments", rotation: 2 },
  { id: 3, src: "/assets/gallery/photo-3.jpg", label: "Growing Up", rotation: -1.5 },
  { id: 4, src: "/assets/gallery/photo-4.jpg", label: "Smiles & Laughter", rotation: 3 },
  { id: 5, src: "/assets/gallery/photo-5.jpg", label: "Always Loved", rotation: -2 },
];

/**
 * Music configuration.
 * Replace the path with your actual music file.
 */
export const MUSIC = {
  src: "/assets/music.mp3",
};
