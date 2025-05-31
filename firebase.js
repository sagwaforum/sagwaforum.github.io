import firebaseConfig from "./apikey.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: firebaseConfig.FB_API_KEY1,
  authDomain: firebaseConfig.FB_API_KEY2,
  databaseURL: firebaseConfig.FB_API_KEY3,
  projectId: firebaseConfig.FB_API_KEY4,
  storageBucket: firebaseConfig.FB_API_KEY5,
  messagingSenderId: firebaseConfig.FB_API_KEY6,
  appId: firebaseConfig.FB_API_KEY7,
  measurementId: firebaseConfig.FB_API_KEY8
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
