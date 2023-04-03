//Importando React
import React from "react";
//Importando Css
import styles from "./Login.module.css";

//Importando Hooks para Login
import {useState, useEffect} from "react";
// import {useAuthentication} from "../../hooks/useAuthentication";

const Login = () => {
    //Criando constantes para nome,email,senha,cofirmacaoSenha,errorIndicados

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    // const { createUser, error: authError, loading } = useAuthentication()


    //Criando submit de formulário
    const handleSubmit =  async (e) => {
        e.preventDefault()
        //Enviei o formulário fica igual a vazio(sem erros)
        setError("")

        const user = {
            email,
            password
        }
        console.log(user);
    }
    return(
    <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça o login para poder utilizar o sistema</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email:</span>
                <input type="email" name="displayName" required placeholder="E-mail do usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button className="btn">Entrar</button>
            {error && <p className="error">{error}</p>}
        </form>
    </div>
    )
}
export default Login