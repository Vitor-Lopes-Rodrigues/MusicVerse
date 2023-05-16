import React from "react";
import styles from "./navbar.module.css"
import {NavLink} from "react-router-dom"

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
                {/*<li>*/}
                {/*    <NavLink to="/login" className={({isActive}) => (isActive ?  styles.active : "" )}>Entrar</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink to="/register" className={({isActive}) => (isActive ?  styles.active : "" )}>Cadastrar</NavLink>*/}
                {/*</li>*/}
                <li>
                    <NavLink to="/post" className={({isActive}) => (isActive ?  styles.active : "" )}>NovoPost</NavLink>
                </li>
                <li>
                    <NavLink to="/about"className={({isActive}) => (isActive ?  styles.active : "" )}>Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({isActive}) => (isActive ?  styles.active : "" )}>Perfil</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;