import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import axios from "axios";



const PostEdit = ({showModal, setShowModal, postId, postTitle, postDescription}) => {

    const [title, setTitle] = useState(postTitle);
    const [description, setDescription] = useState(postDescription);

    const data = {
        title: title,
        description: description
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    const handleEdit = () => {
        //Lógica para editar o post
        axios.put(`http://localhost:3001/post/${postId}`, data, config)
            .then(function(response){
                console.log(response.data)
                window.location.reload();
            })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Faça o que quiser com os valores do formulário
        console.log("kkkk");
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