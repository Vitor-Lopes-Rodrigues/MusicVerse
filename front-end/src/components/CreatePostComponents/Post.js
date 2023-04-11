import React, {useState} from "react";
import styles from "../../pages/CreatePost/CreatePost.module.css";

const Post =  () => {
    //Criando constantes de states
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [body,setBody] = useState("");
    const [tags,setTags] = useState("");
    const [formError,setFormError] = useState("");

    //Handle de formulário
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className={styles.create_post}>
            <h2>Criar Post</h2>
            <p>Escreva tudo que possível sobre o seu gosto Músical, além claro, não esqueça de compartilhar os seus shows</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input type="text" name="title" required placeholder="Pense num bom título...." onChange={(e) =>setTitle(e.target.value)} value={title}/>
                </label>
                <label>
                    <span>IMAGEM PARA POSTAR</span>
                    <input   type="file" name="image" required placeholder="Insira uma imagem sobre musica em geral" onChange={(e) =>setImage(e.target.value)} value={image}/>
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea name="body" required placeholder="Insira sobre o post" onChange={(e) =>setBody(e.target.value)} value={body}/>
                </label>
                <label>
                    <span>Tags:</span>
                    <input type="text" name="tags" required placeholder="Insira as tags separadas por vírgula" onChange={(e) =>setTags(e.target.value)} value={tags}/>
                </label>
                <button className="btn">Cadastrar</button>
                {/*{!loading && }*/}
                {/*{loading && (*/}
                {/*    <button className="btn" disabled>*/}
                {/*        Aguarde...*/}
                {/*    </button>*/}
                {/*)}*/}
                {/*{error && <p className="error">{error}</p>}*/}
            </form>
        </div>
    )

}

export default Post;