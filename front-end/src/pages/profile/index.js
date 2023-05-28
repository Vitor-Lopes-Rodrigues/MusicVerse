import React, {useEffect, useState} from "react";
import Navbar from "../../components/navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "../../pages/profile/profile.module.css"

const Profile = () => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    const [user, setUser] = useState("");
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
            <img className={styles.profileImage} src={require("../../images/post/imagem_guitarra.png")} alt="Foto de perfil"/>
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
                            <button className="btn">Editar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile