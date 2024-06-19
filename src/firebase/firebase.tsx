// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics"; 
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAS_-Mhk-IH3aXuBuKR7z7OuZqBarTrCBE',
    authDomain: 'rokucraft-7d86a.firebaseapp.com',
    projectId: 'rokucraft-7d86a',
    storageBucket: 'rokucraft-7d86a.appspot.com',
    messagingSenderId: '955003890475',
    appId: '1:955003890475:web:9e1a63ffb6c695c507336e',
    measurementId: 'G-MQDVTF3Y7C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();