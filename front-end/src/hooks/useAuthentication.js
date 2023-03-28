import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


import {useState, useEffect} from "react";

export const useAuthentication = () => {
    const [error,setError] = useState(null)
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
    //const assincrona pela demora de insecao na base de dados
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)
        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await  updateProfile(user, {
                displayName: data.displayName
            });
                setLoading(false)

            return user;
        }catch (error){
            console.log(error.message)
            console.log(typeof  error.message)

            let systemErrorMessage

            if(error.message.include("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.include("email-already")){
             systemErrorMessage = "E-mail já cadastrado."
            }else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            }
            setLoading(false)
            setError(systemErrorMessage)
        }

    };
    useEffect(() => {
        return() => setCancelled(true)
    },[])
    return{
        auth,
        createUser,
        error,
        loading,
    };
}