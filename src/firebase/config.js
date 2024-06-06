
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyBxGl125PR-FegZGDh06x1X3ZwAhEgyey4",
    authDomain: "proyecto-final-react-9570c.firebaseapp.com",
    projectId: "proyecto-final-react-9570c",
    storageBucket: "proyecto-final-react-9570c.appspot.com",
    messagingSenderId: "491949876297",
    appId: "1:491949876297:web:f109c098bc309855ba8b98",
    measurementId: "G-6E9Y6SHKWS"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)