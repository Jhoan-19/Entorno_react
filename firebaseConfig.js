import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAP6Eb8lQJ4DyteGNWlCkMjo1aTMapxNsY",
    authDomain: "clase1-b6510.firebaseapp.com",
    projectId: "clase1-b6510",
    storageBucket: "clase1-b6510.firebasestorage.app",
    messagingSenderId: "492015190928",
    appId: "1:492015190928:web:f92a645c3139a6b442a915"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };