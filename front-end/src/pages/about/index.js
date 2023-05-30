import React, {useEffect} from "react"
import {Link, useNavigate, useHref} from "react-router-dom"
import styles from "./about.module.css"
import Navbar from "../../components/navbar";
import bannerPrincipal from '../../images/bannerPrincipal.png'

const About = () => {

    const navigate = useNavigate()

    // Verificar se o usuario está logado
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            console.log(loggedInUser)
        } else {
            navigate("/login")
        }
    }, [navigate]);

    return(
        <>
        <Navbar/>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}> Embarque nessa! Music Verse</h1>
                    <p className={styles.paragrafo}> Music Verse é uma rede social exclusivamente voltada
                        para o mundo o da música beneficiando músicos e público.
                        Atráves da recém-lançada versão web, a rede funciona,
                        principalmente, como um extenso e direcional canal de divulgação
                        de eventos musicais.
                    </p>
                    <a className={styles.link_rede} href="https://github.com/Vitor-Lopes-Rodrigues/MusicVerse"> Git Hub </a>
                </div>
                <div className={styles.imagens}>
                    <img className={styles.bannerPrincipal}
                         src={bannerPrincipal}
                         aria-hidden={true}/>
                </div>
            </div>
        </>
    )
}

export default About