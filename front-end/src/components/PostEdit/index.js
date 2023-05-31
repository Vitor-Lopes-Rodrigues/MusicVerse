//Importando React
import React, {useState} from "react";
//Importando modal
import Modal from "react-bootstrap/Modal";
//Importando axios
import axios from "axios";



const PostEdit = ({showModal, setShowModal, postId, postTitle, postDescription}) => {

    //Importando constante
    const [title, setTitle] = useState(postTitle);
    const [description, setDescription] = useState(postDescription);

    //Importando data
    const data = {
        title: title,
        description: description
    };

    //Colocando handleClose caso o usuario for falso e fazendo com o que o pop up
    const handleClose = () => {
        setShowModal(false);
    };

    //Const de autorizacao de segurança via localStorage
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    //Requisição de handleEdit para editar usuario pelo pop up
    const handleEdit = () => {
        //Lógica para editar o post
        axios.put(`http://localhost:3001/post/${postId}`, data, config)
            .then(function(response){
                console.log(response.data)
                window.location.reload();
            })
    };
    //Colocando handleSubmit para fazer o que quiser com o funcionario validado
    const handleSubmit = (event) => {
        event.preventDefault();
        // Faça o que quiser com os valores do formulário
        console.log("false");
        setShowModal(false);
    };

    return(
        <>
            <div id="poppup-modal">
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Informações</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>title:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Descrição:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <br/>
                            <button type="submit" onClick={handleEdit} className="btn btn-primary">Salvar</button>
                            <br/><br/>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )

}
export default PostEdit