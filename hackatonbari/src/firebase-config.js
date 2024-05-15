// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyATYfQY25vtroNxhwwaY294Iqx2XP2Cv-c",
    authDomain: "hackatonquiz.firebaseapp.com",
    projectId: "hackatonquiz",
    storageBucket: "hackatonquiz.appspot.com",
    messagingSenderId: "1015255093520",
    appId: "1:1015255093520:web:d31376c00297e5ab965595"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)