// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCXRR35PQPHzlsQz9chzEwFIKd2LGvUGUs",
	authDomain: "next-uber-3d293.firebaseapp.com",
	projectId: "next-uber-3d293",
	storageBucket: "next-uber-3d293.appspot.com",
	messagingSenderId: "287860051855",
	appId: "1:287860051855:web:43395a07cbab92bb6c85fa",
	measurementId: "G-D3GBL4QZTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
