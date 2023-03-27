//Importando React
import React from "react";
//Importando Css "modules"
import styles from "./Navbar.module.css"
//Importando Link
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <NavLink to="/"className={styles.brand}>
                <span>MusicVerse</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ?  styles.active : "" )}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"className={({isActive}) => (isActive ?  styles.active : "" )}>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;