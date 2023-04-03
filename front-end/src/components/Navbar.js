//Importando React
import React from "react";
//Importando Css "modules"
import styles from "./Navbar.module.css"
//Importando Link
import {NavLink} from "react-router-dom";
import { useAuthentication} from "../hooks/useAuthentication";


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
                    <NavLink to="/login" className={({isActive}) => (isActive ?  styles.active : "" )}>Entrar</NavLink>
                </li>
                <li>
                    <NavLink to="/cadastro" className={({isActive}) => (isActive ?  styles.active : "" )}>Cadastrar</NavLink>
                </li>
                <li>
                    <NavLink to="/posts/create" className={({isActive}) => (isActive ?  styles.active : "" )}>NovoPost</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({isActive}) => (isActive ?  styles.active : "" )}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/about"className={({isActive}) => (isActive ?  styles.active : "" )}>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;