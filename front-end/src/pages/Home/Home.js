//Importando React
import React from "react";
//Importando css de "modules"

//hooks
import { useNavigation, Link} from "react-router-dom";
import {useState} from "react";

//Importando Components
import HomeComponets from "../../components/HomeComponents/HomeComponets";

const Home = () => {
    return(
        <React.Fragment>
            <HomeComponets/>
        </React.Fragment>
    )
}
export default Home