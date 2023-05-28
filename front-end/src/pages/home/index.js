import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import styles from "./home.module.css"
import Navbar from "../../components/navbar";
import Post from "../../components/post";
import axios from "axios";

const Home = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    // Verificar se o usuario está logado
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            console.log(loggedInUser)
        } else {
            navigate("/login")
        }
    }, [navigate]);

    // Carregando posts
    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
        };

        // Posts
        axios.get(`http://localhost:3001/posts`, config)
            .then(function (response){
                setPosts(response.data)
                console.log(response.data)
            })
            .catch(function (error){
                // aqui temos acesso ao erro
                console.log(error)
            })
    }, []);

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
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        postId={post.id}
                        userId={post.user_id}
                        tittle={post.tittle}
                        description={post.description}
                        image={post.image}
                    />
                ))}
            </div>
        </>
    )
}

export default Home