//Importando React
import React from "react";
//Importando css
import styles from "./footer.module.css"
//Importando imagens
import bannerAlt from "../../images/bannerAlt.png";


const Footer = () => {
    return(
        //Declarando Footer
        <footer className={styles.footer}>
            <h3>Escreva sobre o seu mundo musical!</h3>
            <p>MusicVerse &copy; 2023</p>
            {/*Usando imagem*/}
            <img className={styles.imageUSJT} src={bannerAlt}/>
        </footer>
    )
}
export default Footer;