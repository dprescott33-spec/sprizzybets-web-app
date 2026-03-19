// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth"; // <--- Add this import

// Your web app's Firebase configuration — prefer environment variables for
// production. Client-facing keys must use the NEXT_PUBLIC_ prefix so they are
// available in the browser at runtime.
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyCZP7Nkjj5KGlvEGtRvy6K8T04olY04FlU",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "sprizzybets.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
    "sprizzybets",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "sprizzybets.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
    "434161795222",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:434161795222:web:a2c7e38860e403054902b7",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
    "G-TL7X7FS22E",
};

// Initialize Firebase
let app: FirebaseApp;
let analytics: Analytics | undefined; // Analytics is optional
let auth: Auth | undefined; // <--- Declare auth variable (may be undefined on server)

try {
  app = initializeApp(firebaseConfig);
  // Only initialize Analytics and Auth in the browser environment
  if (typeof window !== "undefined") {
    // Initialize Analytics only when measurementId is present
    if (firebaseConfig.measurementId) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Firebase analytics not initialized:", e);
      }
    }
    try {
      auth = getAuth(app); // Initialize Auth in browser only
    } catch (e) {
      console.warn("Firebase auth not initialized:", e);
    }
  }
} catch (error) {
  console.error("Firebase initialization error", error);
  throw error;
}

// Export the initialized Firebase app, Analytics, and Auth instances
export { app, analytics, auth }; // <--- Export auth here

// You can add and export other Firebase services here as you need them.
// For example, for Cloud Firestore:
// import { getFirestore } from "firebase/firestore";
// export const db = getFirestore(app);
