import React, {useEffect, useState} from "react";
import Navbar from "../../components/navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Modal } from 'react-bootstrap';
import styles from "../../pages/profile/profile.module.css"



const Profile = () => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    const [user, setUser] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        phone: '',
        city: '',
        gender: '',
        state: '',
        country: ''
    });
    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Faça o que quiser com os valores do formulário
        console.log(formValues);
        setShowModal(false);
    };
    const navigate = useNavigate()

    // Verificar se o usuario está logado
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            console.log(loggedInUser)
        } else {
            navigate("/login")
        }
    }, [navigate]);

    //Perfil pega dados
    useEffect(() => {
        axios.get(`http://localhost:3001/user/${parseInt(localStorage.getItem('userId'))}`,config)
            .then (function (response){
                setUser(response.data)
            })
    })

    return(
        <>
            <Navbar/>
                <div className={styles.profile}>
                    <img className={styles.profileImage} src={require("../../images/post/imagem_guitarra.jpg")} alt="Foto de perfil"/>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>
                            <h1>{user.name} </h1>
                            <div className={styles.profileEmail}>
                                <p>{user.email}</p>
                            </div>
                            <div className={styles.profilePhone}>
                                <p>{user.phone}</p>
                            </div>
                            <div className={styles.profileLocation}>
                                <p>{user.city}</p>
                            </div>
                            <div className={styles.profileGender}>
                                <p>{user.gender}</p>
                            </div>
                            {/*<div className={styles.Password}>*/}
                            {/*    <p>{user.password}</p>*/}
                            {/*</div>*/}
                            <div className={styles.profileStates}>
                                <p>{user.state}</p>
                            </div>
                            <div className={styles.profileCounty}>
                                <p>{user.country}</p>
                            </div>
                            <button onClick={handleClick} className="btn">Editar</button>
                        </div>
                    </div>
                </div>
                <div id="poppup-modal">
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Informações</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={formValues.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>City:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={formValues.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Gender:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="gender"
                                        value={formValues.gender}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>State:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="state"
                                        value={formValues.state}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Country:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="country"
                                        value={formValues.country}
                                        onChange={handleChange}
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            <br/><br/>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
        </>
    )
}
export default Profile