import React, {useEffect} from "react";
import Navbar from "../../components/navbar";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate()

    // Verificar se o usuario está logado
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            console.log(foundUser)
        } else {
            navigate("/login")
        }
    }, [navigate]);

    return(
        <div>
            <Navbar/>
            <h1>
                Profile
            </h1>
        </div>
    )
}

export default Profile