// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey: any = process.env.PUBLIC_NEXT;
const authDomain: any = process.env.PUBLIC_NEXT;
const projectId: any = process.env.PUBLIC_NEXT;
const storageBucket: any = process.env.PUBLIC_NEXT;
const messagingSenderId: any = process.env.PUBLIC_NEXT;
const appId: any = process.env.PUBLIC_NEXT;
const measurementId: any = process.env.PUBLIC_NEXT;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebaseApp };
