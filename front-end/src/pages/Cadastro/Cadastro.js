//Importando React
import React from "react";
//Importando Css "module"
import styles from "./Cadastro.module.css";
//Importando Hooks para cadastro
import {useState, useEffect} from "react";
import {useAuthentication} from "../../hooks/useAuthentication";
import CadastroComponents from "../../components/CadastroComponents/CadastroComponents";

const Cadastro = () => {

    //Criando constantes para nome,email,senha,cofirmacaoSenha,errorIndicados
    // const [displayName, setDisplayName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState("")
    // const { createUser, error: authError, loading } = useAuthentication()
    // //Criando submit de formulário
    // const handleSubmit =  async (e) => {
    //     e.preventDefault()
    //     //Enviei o formulário fica igual a vazio(sem erros)
    //     setError("")
    //
    //     const user = {
    //         displayName,
    //         email,
    //         password
    //     }
    // }
    return(
        <React.Fragment>
            <CadastroComponents/>
        </React.Fragment>
    )
}
export default Cadastro