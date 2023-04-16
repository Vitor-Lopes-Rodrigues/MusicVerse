//Importando React
import React from "react";
//Importando Css
import styles from "../../pages/Login/Login.module.css";
//Importando Hooks para login
import {useState, useEffect} from "react";
import {Navigate} from "react-router-dom";
// import {useAuthentication} from "../../hooks/useAuthentication";
//Importando Requisicao
import axios from "axios";


const LoginComponents = () =>{

    //Criando constantes para nome,email,senha,cofirmacaoSenha,errorIndicados
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {phone, setPhone} = useState("")
    const [error, setError] = useState("")
    const [state,setState] = useState("");
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

        //Requisicao
        const login = () => {
            axios.get(`https://${process.env.REACT_APP_LINK_API}/user`, state.user)
                .then(function (response){
                    Navigate('posts/create')
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
                    <label>
                        <span>Phone:</span>
                        <input type="phone" name="phone" required placeholder=" Insira o seu telefone" value={phone}
                               onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                    <button className="btn" onClick={login}>Entrar</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        )
    }
}
export default LoginComponents