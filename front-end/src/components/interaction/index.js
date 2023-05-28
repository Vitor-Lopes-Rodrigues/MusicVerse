import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import './Interaction.css'; // Importando o arquivo CSS personalizado

const Interaction = () => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                {liked ? <FaThumbsUp color="blue" /> : <FaThumbsUp />}
                {liked ? 'Liked' : 'Like'}
            </button>
            <button className="comment-button">
                <FaComment />
                Comment
            </button>
        </div>
    );
};

export default Interaction;