//Importando React
import React from "react";
//Importando css de "modules"
import styles from "./About.module.css"
//Importando bibliotecas
import {Link} from "react-router-dom";

const  About = () => {
    return(
        <div className={styles.about}>
            <h2>Sobre o Mini <span>Blog</span></h2>
            <p>Este projeto tem o objetivo de integrar um ambiente completo, caso tenha interesse, consulte o nosso GitHub</p>
            <Link to="/posts/create" className="btn">
                Criar post
            </Link>
        </div>
    )
}
export default About