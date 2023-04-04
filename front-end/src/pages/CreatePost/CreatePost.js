//Importando React
import React from "react";
//Importando Css
import Post from "../../components/CreatePostComponents/Post";


const CreatePost = () => {
        //Criando constantes de states
    //     const [title,setTitle] = useState("");
    //     const [image,setImage] = useState("");
    //     const [body,setBody] = useState("");
    //     const [tags,setTags] = useState("");
    //     const [formError,setFormError] = useState("");
    //
    //     //Handle de formulário
    //     const handleSubmit = (e) => {
    //         e.preventDefault();
    // }

    return(
        <React.Fragment>
            <Post/>
        </React.Fragment>
    )
}

export default CreatePost