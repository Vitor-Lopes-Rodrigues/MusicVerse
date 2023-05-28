import React, {useEffect, useState} from "react";
import axios from "axios";

const Post = ({userId, tittle, description, image}) => {

    const [user, setUser] = useState("")

    // Carregando posts
    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
        };

        // Posts
        axios.get(`http://localhost:3001/user/${userId}`, config)
            .then(function (response){
                setUser(response.data)
                console.log(response.data)
            })
            .catch(function (error){
                // aqui temos acesso ao erro
                console.log(error)
            })
    }, []);

    return(
        <>
            <h2>{user.name}</h2>
            <h2>{tittle}</h2>
            <p>{description}</p>
            <img src={require(`../../images/post/${image}`)} alt="Teste" width="600" height="600"/>
            <br/>
            <hr width="50%" align="center" />
        </>
    )
}
export default Post;