import React from "react";
import styles from "./footer.module.css"
import bannerAlt from "../../images/bannerAlt.png";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <h3>Escreva sobre o seu mundo musical!</h3>
            <p>MusicVerse &copy; 2023</p>
            <img className={styles.imageUSJT} src={bannerAlt}/>

        </footer>
    )
}
export default Footer;