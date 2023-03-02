// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr1zMRg8wsiwX6xh1dPov8rhO6yUnoOic",
  authDomain: "fir-auth-movieapp.firebaseapp.com",
  projectId: "fir-auth-movieapp",
  storageBucket: "fir-auth-movieapp.appspot.com",
  messagingSenderId: "494922029118",
  appId: "1:494922029118:web:4a8417139287192614996f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app