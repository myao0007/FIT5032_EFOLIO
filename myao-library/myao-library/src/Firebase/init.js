//import './assets/main.css'
//import './style.css'



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyAzKHeZmP7E2Cgs0W5XLddcBcjJJxG1eXg",

  authDomain: "week7-yummy.firebaseapp.com",

  projectId: "week7-yummy",

  storageBucket: "week7-yummy.firebasestorage.app",

  messagingSenderId: "285861969452",

  appId: "1:285861969452:web:7e8aa5106a48cab5305b89"

};

// Initialize Firebase

initializeApp(firebaseConfig);
const db = getFirestore();


export default db;


