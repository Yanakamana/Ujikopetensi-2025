import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm9HdJ92vSLrKRclI6Z2J4bmvlFgR4AuU",
  authDomain: "mang-yana.firebaseapp.com",
  projectId: "mang-yana",
  storageBucket: "mang-yana.appspot.com",
  messagingSenderId: "1094982396668",
  appId: "1:1094982396668:web:2d103526ab40a59efc0579",
  measurementId: "G-MF48P7VG5P"
};