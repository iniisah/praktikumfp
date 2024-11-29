// Impor fungsi yang diperlukan dari Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Tambahkan impor ini untuk Firestore

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgs_z2NSIXoadUX6oSEn-J1G4N_OI54DQ",
  authDomain: "cobatodolist.firebaseapp.com",
  projectId: "cobatodolist",
  storageBucket: "cobatodolist.appspot.com", // Perbaikan pada URL
  messagingSenderId: "904390483976",
  appId: "1:904390483976:web:aac3c72963f457cefe71bd",
  measurementId: "G-4F4MW7LB3H",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app); // Pastikan modul Firestore digunakan dengan benar

// Ekspor aplikasi dan database
export { app, db };
