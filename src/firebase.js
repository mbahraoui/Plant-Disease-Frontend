import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2bgfE3fB5R7BA08hO7ZQZKCJO7h8ia3E",
    authDomain: "plant-disease-frontend.firebaseapp.com",
    projectId: "plant-disease-frontend",
    storageBucket: "plant-disease-frontend.appspot.com",
    messagingSenderId: "755524013624",
    appId: "1:755524013624:web:760acaa93f22ccf907e0cd"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);