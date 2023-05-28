import React, {useEffect, useState} from "react"
import styles from "./post.module.css"
import Navbar from "../../components/navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Post = () => {

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

    //Criando constantes de states
    const [tittle, setTittle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
        };

        console.log(parseInt(localStorage.getItem('userId')))

        const data = {
            tittle: tittle,
            description: description,
            image: image,
            user_id: parseInt(localStorage.getItem('userId')),
            likes: 0
        }

        // Inserir post
        axios.post(`http://localhost:3001/post`, data, config)
            .then(function (response){
                if(response){
                    navigate("/")
                }
            })
            .catch(function (error){
                // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
                console.log(error)
            })
    }

    return(
        <div className={styles.create_post}>
            <Navbar/>
            <h2>Criar Post</h2>
            <p>Compartilhe o máximo possível sobre o seu gosto musical, incluindo artistas favoritos, <br />
                gêneros preferidos e não se esqueça de mencionar os shows que você curte.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input type="text" name="title" required placeholder="Pense num bom título..." onChange={(e) =>setTittle(e.target.value)} value={tittle}/>
                </label>
                <label>
                    <span>Descrição:</span>
                    <input type="text" name="description" required placeholder="Insira sua descrição..." onChange={(e) =>setDescription(e.target.value)} value={description}/>
                </label>
                <label>
                    <span>IMAGEM PARA POSTAR</span>
                    <input
                        type="file"
                        name="image"
                        required
                        placeholder="Insira uma imagem sobre música em geral"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            const fileName = file.name;
                            setImage(fileName);
                        }}
                    />
                </label>
                <button className="btn">Cadastrar</button>
            </form>
            <br/><br/><br/>
        </div>
    )
}

export default Post