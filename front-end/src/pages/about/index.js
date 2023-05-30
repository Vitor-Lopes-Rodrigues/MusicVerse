import React, {useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import styles from "./about.module.css"
import Navbar from "../../components/navbar";

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
            <div className={styles.about}>
                <h2>Sobre o Mini <span>Blog</span></h2>
                <p>Este projeto tem o objetivo de integrar um ambiente completo, caso tenha interesse, consulte o nosso GitHub</p>
                <Link to="/post" className="btn btn-primary">
                    Criar post
                </Link>
            </div>
        </>
    )
}

export default About