// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9bsvLj9b6N-shRR5H6lAXMes804i0Xw4",
  authDomain: "rokkit-4ffe4.firebaseapp.com",
  projectId: "rokkit-4ffe4",
  storageBucket: "rokkit-4ffe4.appspot.com",
  messagingSenderId: "383097163436",
  appId: "1:383097163436:web:f9f6a5636f314726455909",
  measurementId: "G-25LGGLVZ3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db,app,firebaseConfig};