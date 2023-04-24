// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4BhU8qPcRjqRENBQohaedK2ZS9O4PWvY",
  authDomain: "the-news-dragon-c8390.firebaseapp.com",
  projectId: "the-news-dragon-c8390",
  storageBucket: "the-news-dragon-c8390.appspot.com",
  messagingSenderId: "424936744803",
  appId: "1:424936744803:web:102283e50de4ab4f691556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;