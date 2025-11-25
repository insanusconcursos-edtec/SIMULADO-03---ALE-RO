
// This tells TypeScript that the 'firebase' object exists on the global scope
declare var firebase: any;

// Your web app's Firebase configuration
// ATUALIZADO PARA O PROJETO SIMULADO 03
// Using the new keys provided to ensure isolation from Simulado 02
const firebaseConfig = {
  apiKey: "AIzaSyCN1FUreHXe2eAgRnTStvJh85HAx4Jz25c",
  authDomain: "simulado-03-ale-ro.firebaseapp.com",
  projectId: "simulado-03-ale-ro",
  storageBucket: "simulado-03-ale-ro.firebasestorage.app",
  messagingSenderId: "244029444748",
  appId: "1:244029444748:web:00a9754b7405e1fb15e1a9",
  measurementId: "G-DWJXH50R74"
};

// Initialize Firebase
// We check if firebase is already initialized to prevent errors during hot reloads
const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service using the compat API
export const db = app.firestore();
