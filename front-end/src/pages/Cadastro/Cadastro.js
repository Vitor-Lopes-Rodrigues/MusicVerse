//Importando React
import React from "react";
//Importando Css "module"
import styles from "./Cadastro.module.css";

//Importando Hooks para cadastro
import {useState, useEffect} from "react";

const Cadastro = () => {
    return(
        <div>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe o seu SOM!</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do usuário"/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="displayName" required placeholder="E-mail do usuário"/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha"/>
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha"/>
                </label>
                <button className="btn">Cadastrar</button>
            </form>
        </div>
    )
}
export default Cadastro