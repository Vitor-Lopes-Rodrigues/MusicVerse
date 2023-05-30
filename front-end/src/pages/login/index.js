import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";

const Login = () => {
    // Navigate
    const navigate = useNavigate()

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
        axios.post(`http://localhost:3001/login`, data)
            .then(function (response){
                localStorage.setItem('user', response.data)
                localStorage.setItem('userId', response.data.data.user.id)
                localStorage.setItem('userName', response.data.data.user.name)
                localStorage.setItem('userToken', response.data.data.token)
                console.log(response.data.data.user.id)
                navigate("/")
            })
            .catch(function (error){
                // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
                console.log(error)
            })
    }

    //Aqui serve para remover o token, bom para logout
    // localStorage.removeItem('token');

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
            <br/>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button className="btn">Entrar</button>
                {error && <p className="error">{error}</p>}
                <br/>
                <br/>
                <p>Não tem login? <Link to={"/register"}>Cadastre-se</Link></p>
            </form>
        </div>
    )
}

export default Login