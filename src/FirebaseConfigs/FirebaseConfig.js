// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWIZj6uzP4gA01r0eTVUYzDjbcp6B9SRo",
  authDomain: "clubsoriental-77d57.firebaseapp.com",
  projectId: "clubsoriental-77d57",
  storageBucket: "clubsoriental-77d57.appspot.com",
  messagingSenderId: "618753887650",
  appId: "1:618753887650:web:7cd4471b4c3c38059a76fb"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyBhPi3gBcB-uBTKKor_uI7r3pcIlBEvRkk",
//   authDomain: "clubsoriental.firebaseapp.com",
//   databaseURL: "https://clubsoriental-default-rtdb.firebaseio.com",
//   projectId: "clubsoriental",
//   storageBucket: "clubsoriental.appspot.com",
//   messagingSenderId: "1088559095046",
//   appId: "1:1088559095046:web:005c7725d2b0996209d287"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);