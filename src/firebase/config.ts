// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: 'cv-app-2e766.firebaseapp.com',
    projectId: 'cv-app-2e766',
    storageBucket: 'cv-app-2e766.appspot.com',
    messagingSenderId: '399028266141',
    appId: '1:399028266141:web:71d5747ffb5af5a7c5a074',
    measurementId: 'G-6HHRWKN1QW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
