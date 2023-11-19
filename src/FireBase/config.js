import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getStorage}  from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALyoexWZ-HA9HUqbRpFHkDNqLrg0WohD0",
  authDomain: "olx-clone-15c0f.firebaseapp.com",
  projectId: "olx-clone-15c0f",
  storageBucket: "olx-clone-15c0f.appspot.com",
  messagingSenderId: "600778650959",
  appId: "1:600778650959:web:97296fe4d116b954a7013a",
  measurementId: "G-VHQKEDPJ3C"
};

export const Firebase = initializeApp(firebaseConfig)

export const db = getFirestore(Firebase)
export const storage = getStorage(Firebase) 