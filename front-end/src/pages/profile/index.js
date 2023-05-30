import React, {useEffect, useState} from "react";
import "../profile/profile.css"
import Navbar from "../../components/navbar";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "../../pages/profile/profile.module.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PostEdit from "../../components/postEdit/postEdit";
import button from "../../components/button";

const Profile = () => {

    let { userId } = useParams();

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    const [user, setUser] = useState("");

    const [showModal, setShowModal] = useState(false);


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

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleClick = () => {
        const user = localStorage.getItem('userId'); // Obtendo o ID do usuário do localStorage ou de onde você o armazena

        if (userId !== user) {
            setShowModal(true);
            console.log("Invalido")
        }else{
            setShowModal(true);
        }
    };


    //Perfil pega dados
    useEffect(() => {
        axios.get(`http://localhost:3001/user/${userId}`,config)
            .then (function (response){
                setUser(response.data)
            })
    })



    return(
        <>
            <Navbar/>
                <div className={styles.profile}>
                    <img id="profile-image" src={require("../../images/post/imagem_guitarra.jpg")} alt="Foto de perfil"/>
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
                            {userId === localStorage.getItem('userId') && (
                            <button onClick={handleClick} id="meuBotao" className="btn btn-primary">Editar</button>
                            )}
                            {showModal && (
                                <div className="modal">
                                    <PostEdit
                                        showModal={showModal} setShowModal={setShowModal}
                                    />
                                    <PostEdit/>
                                    <button onClick={toggleModal}>Fechar</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Profile