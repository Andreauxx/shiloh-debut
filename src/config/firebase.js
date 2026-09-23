import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/**
 * Check if Firebase is configured by verifying required env vars.
 */
export const isFirebaseConfigured = () => {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.apiKey !== "" &&
    firebaseConfig.projectId !== ""
  );
};

let app = null;
let db = null;

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else if (import.meta.env.DEV) {
  console.warn(
    "⚠️ Firebase is not configured. RSVP submissions will not be saved.\n" +
    "Copy .env.example to .env and fill in your Firebase credentials."
  );
}

export { db };
export default app;
