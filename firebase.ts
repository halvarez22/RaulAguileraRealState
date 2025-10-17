// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TEMPORALMENTE DESHABILITADO COMPLETAMENTE - Esperando credenciales del cliente
// const firebaseConfig = {
//   apiKey: "AIzaSyBmNiK_SHhm6WwL-P8zwUm4E9GxkSOi4SE",
//   authDomain: "inverland-portal.firebaseapp.com",
//   projectId: "inverland-portal",
//   storageBucket: "inverland-portal.firebasestorage.app",
//   messagingSenderId: "1033785562131",
//   appId: "1:1033785562131:web:4129fdc09952da2e2f1be6"
// };

// Configuración temporal para desarrollo local - DESHABILITADA
// const firebaseConfig = {
//   apiKey: "demo-key",
//   authDomain: "demo.firebaseapp.com",
//   projectId: "demo-project",
//   storageBucket: "demo-project.firebasestorage.app",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:demo"
// };

// Initialize Firebase - DESHABILITADO TEMPORALMENTE
// const app = initializeApp(firebaseConfig);

// Initialize Firebase services - DESHABILITADO TEMPORALMENTE
// export const db = getFirestore(app);
// export const auth = getAuth(app);

// export default app;

// TEMPORALMENTE DESHABILITADO - No usar Firebase hasta tener credenciales válidas
export const db = null as any;
export const auth = null as any;

export default null;
