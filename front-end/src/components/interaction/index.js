//Importando React com States e useEffect
import React, { useState, useEffect } from 'react';
//Importando css
import './Interaction.css';
//Importando Biblioteca
import { FaThumbsUp, FaComment } from 'react-icons/fa';
//Imporatndo axios para requisição
import axios from 'axios';



const Interaction = ({ postId }) => {
    //Importando constantes
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    //Usando config de autentificacao de token
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    //Usando useEffect para pegar count
    useEffect(() => {
        getLikesCount();
    }, []);

    //Const de Contador de like com requisicao
    const getLikesCount = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/likes/${postId}`, config);
            const { likesCount } = response.data;
            setLikesCount(parseInt(likesCount));

            // Verifica se o usuário atual deu "like" no post
            const userLiked = response.data.usersLiked.includes(parseInt(localStorage.getItem('userId')));
            setLiked(userLiked);
        } catch (error) {
            console.error('Erro ao obter contagem de likes:', error);
        }
    };

    //Const para salvar Like de usuarios com Id diferentes
    const saveLike = async () => {
        try {
            await axios.post(
                'http://localhost:3001/like',
                { post_id: parseInt(postId), user_id: parseInt(localStorage.getItem('userId')) },
                config
            );
            setLikesCount(likesCount + 1);
            setLiked(true);
        } catch (error) {
            console.error('Erro ao salvar curtida:', error);
        }
    };

    //Const para deletar like de usuario
    const deleteLike = async () => {
        try {
            await axios.delete(`http://localhost:3001/like/${postId}/${parseInt(localStorage.getItem('userId'))}`, config);
            setLikesCount(likesCount - 1);
            setLiked(false);
        } catch (error) {
            console.error('Erro ao deletar curtida:', error);
        }
    };

    //Const de handle para deletar ou salvar like
    const handleLike = () => {
        if (liked) {
            deleteLike();
        } else {
            saveLike();
        }
    };
    return (
        <div className="interaction-container">
            <div className="button-container">
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}> {/*Usando fator se for dado like, utilizar handleLike*/}
                    {/*Importando icon de like com tamanho*/}
                    <FaThumbsUp className="icon" size={24} />
                    {liked ? 'Liked' : 'Like'}
                </button>
            </div>
            {/*Contador de pessoas que gostaram se for igual a 1*/}
            <p>{likesCount} {likesCount === 1 ? 'pessoa gostou' : 'pessoas gostaram'} disso</p>
        </div>
    );
};
export default Interaction;