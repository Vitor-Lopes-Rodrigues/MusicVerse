import React, { useState } from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";

const Login = () => {

    //Criando constantes para nome,email,senha,cofirmacaoSenha,errorIndicados
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    //Criando submit de formulário
    const handleSubmit =  async (e) => {
        e.preventDefault()
        //Enviei o formulário fica igual a vazio(sem erros)
        setError("")

        const data = {
            email: email,
            password: password
        }

        // Login
        axios.post(`https://${process.env.REACT_APP_LINK_API}/user`, data)
            .then(function (response){
                Navigate('/')
            }).catch(function (error){
            // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
            console.log(error)
        })
    }

    return (
        <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça o login para poder utilizar o sistema</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email:</span>
                    <input type="email" name="displayName" required placeholder="E-mail do usuário" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className="btn">Entrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Login