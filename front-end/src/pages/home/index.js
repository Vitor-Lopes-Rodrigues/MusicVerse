import React, {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import styles from "./home.module.css"
import Navbar from "../../components/navbar";

const Home = () => {

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

    // const [query, setQuery] = useState("")
    const [posts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
            <Navbar/>
            <div className={styles.home}>
                <h1>Veja os posts mais recentes</h1>
                <form onSubmit={handleSubmit} className={styles.search_form}>
                    <input type="text" placeholder="ou busque pelo perfil desejado" onChange={(e) => e.target.value}/>
                    <button className="btn btn-dark">Pesquisar</button>
                </form>
                <div>
                    <h1>Posts...</h1>
                    {posts && posts.length === 0 &&(
                        <div className={styles.nopost}>
                            <p>Não foram encontrados posts</p>
                            <Link to="/post" className="btn">Criar primeiro post</Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home