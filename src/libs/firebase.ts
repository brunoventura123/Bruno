import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAJfXP9UpYs3YRilbjjP_NoWEP_VMjMHeg",
  authDomain: "portifolio-images.firebaseapp.com",
  projectId: "portifolio-images",
  storageBucket: "portifolio-images.appspot.com",
  messagingSenderId: "666216420956",
  appId: "1:666216420956:web:26df64ed200debf00cf899"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp)