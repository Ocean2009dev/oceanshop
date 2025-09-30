// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCbki4S8tgclUS-U8T4Xgt4nuCvrYvU03U",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "oceanshop-51115.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "oceanshop-51115",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "oceanshop-51115.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "693485856800",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:693485856800:web:4b950dbbd0794cbef93445",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-YBLY1VZNVN"
};

// Validate Firebase config
const requiredFields = ['apiKey', 'authDomain', 'projectId'];
const missingFields = requiredFields.filter(field => !firebaseConfig[field as keyof typeof firebaseConfig]);

if (missingFields.length > 0) {
    console.error('Missing Firebase configuration fields:', missingFields);
    throw new Error(`Firebase configuration incomplete. Missing: ${missingFields.join(', ')}`);
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);