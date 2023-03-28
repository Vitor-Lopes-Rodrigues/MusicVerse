//Importando firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBNE0JT-sYNtf5TltQ2Ni1fOoCflDaUaJ8",
    authDomain: "musicverse-49962.firebaseapp.com",
    projectId: "musicverse-49962",
    storageBucket: "musicverse-49962.appspot.com",
    messagingSenderId: "657690314958",
    appId: "1:657690314958:web:b3d3fbf2978fdedd65e89f",
    measurementId: "G-J1MKZWZNL1"
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//Criando banco de dados
const db = getFirestore(app)

export { auth, db };