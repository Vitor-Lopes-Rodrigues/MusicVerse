import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


import {useState, useEffect} from "react";

export const useAuthentication = () => {
    const [erro,setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //Limpeza de components (cleanup) = limpeza da memoria
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()


    //Funcao criado para eliminar o vazamento de memoria de components
    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }
}