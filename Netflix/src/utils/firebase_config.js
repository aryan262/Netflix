// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBAIRGrCPmtQpAiq5-ZPalgq8XHV8RcsuA",
  authDomain: "netflix-b86fb.firebaseapp.com",
  projectId: "netflix-b86fb",
  storageBucket: "netflix-b86fb.appspot.com",
  messagingSenderId: "274029897945",
  appId: "1:274029897945:web:d00dbf62ad0a47d04bf6c8",
  measurementId: "G-CBRMWW7FW8"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)