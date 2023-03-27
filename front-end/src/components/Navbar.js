//Importando React
import React from "react";
//Importando Css "modules"
import styles from "./Navbar.module.css"
//Importando Link
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <NavLink to="/">
                Music<span>Verse</span>
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;