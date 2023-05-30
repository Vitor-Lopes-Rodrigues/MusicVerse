import React, { useEffect, useState } from "react";
import axios from "axios";
import Interaction from "../interaction";
import "./Post.css";
import {useNavigate} from "react-router-dom";

const Post = ({ postId, userId, title, description, image }) => {
    const [user, setUser] = useState("");
    const [isMyPost, setIsMyPost] = useState(false);

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

    const handleEdit = () => {
        // Lógica para editar o post
    };

    const handleDelete = () => {
        // Lógica para excluir o post
    };

    const navigate = useNavigate()
    const searchUser = () => {
        // Lógica para clicar no usuário
        if (userId) {
            console.log("cliquei no usuario")
            navigate(`/profile/${userId}`)
        }
    }

    return (
        <div className="post">
            {isMyPost && (
                <div className="post-options">
                    <button className="post-edit-button" onClick={handleEdit}>
                        Editar
                    </button>
                    <button className="post-delete-button" onClick={handleDelete}>
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
        </div>
    );
};

export default Post;