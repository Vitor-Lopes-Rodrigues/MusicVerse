//Importando React, useEffect e useState
import React, { useEffect, useState } from "react";
//Importando css
import "./Post.css";
//Importando navigates
import {useNavigate} from "react-router-dom";
//Importando axios
import axios from "axios";
//Importando components
import Interaction from "../interaction";
import PostEdit from "../PostEdit";
import button from "../button";

const Post = ({ postId, userId, title, description, image }) => {
   //Declarando const
    const [user, setUser] = useState("");
    // const [title, setTittle] = useState("");
    // const [description, setDescription] = useState("");
    const [isMyPost, setIsMyPost] = useState("");
    const [showModal, setShowModal] = useState(false);

    //Usando header de autorização
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };
    //Usando useEffect para usuario id
    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
                };

                const response = await axios.get(`http://localhost:3001/user/${userId}`, config);
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        setIsMyPost(userId === parseInt(localStorage.getItem("userId")));

    }, [userId]);



    //Deletando post
    const deletePost = async () => {
        try {
            await axios.delete(`http://localhost:3001/post/${postId}`, config);
            window.location.reload();
        }catch (error){
            console.error('Erro ao salvar curtida:', error);
        }
    }

    //Colocando popPup como true
    const handleClick = () => {
        setShowModal(true);
    };

    //Usando navigate
    const navigate = useNavigate()

    //Const de procurar usuario ao clicar no perfil
    const searchUser = () => {
        // Lógica para clicar no usuário
        if (userId) {
            console.log("cliquei no usuario")
            navigate(`/profile/${userId}`)
        }
    }

    //Colocando modal se for verdadeiro
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="post">
            {isMyPost && (
                <div className="post-options">
                    <button className="btn btn-info" onClick={handleClick}>
                        Editar
                    </button>
                    &nbsp;
                    <button className="btn btn-danger" onClick={deletePost}>
                        Excluir
                    </button>
                </div>
            )}
            <div className="post-header">
                <img className="post-avatar" src={user.avatar} alt="User Avatar" onClick={searchUser} />
                <h2 className="post-username">{user.name}</h2>
            </div>
            <h2 className="post-title">{title}</h2>
            <p className="post-description">{description}</p>
            <img className="post-image" src={require(`../../images/post/${image}`)} alt="Post Image" />
            <Interaction postId={postId} />
            <hr className="post-divider" />
            {showModal && (
                <div className="modal">
                    <PostEdit
                        showModal={showModal}
                        setShowModal={setShowModal}
                        postId={postId}
                        postTitle={title}
                        postDescription={description}
                    />
                    <button onClick={toggleModal}>Fechar</button>
                </div>
            )}
        </div>
    );
};

export default Post;