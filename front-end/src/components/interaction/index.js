import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import axios from 'axios';
import './Interaction.css';

const Interaction = ({ postId }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    useEffect(() => {
        getLikesCount();
    }, []);

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

    const deleteLike = async () => {
        try {
            await axios.delete(`http://localhost:3001/like/${postId}/${parseInt(localStorage.getItem('userId'))}`, config);
            setLikesCount(likesCount - 1);
            setLiked(false);
        } catch (error) {
            console.error('Erro ao deletar curtida:', error);
        }
    };

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
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                    <FaThumbsUp className="icon" size={24} />
                    {liked ? 'Liked' : 'Like'}
                </button>
                <button className="comment-button">
                    <FaComment className="icon" size={24} />
                    Comment
                </button>
            </div>
            <p>{likesCount} {likesCount === 1 ? 'pessoa gostou' : 'pessoas gostaram'} disso</p>
        </div>
    );
};

export default Interaction;