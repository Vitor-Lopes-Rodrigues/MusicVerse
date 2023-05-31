//Importando React
import React from "react";
//Importando css
import styles from "./navbar.module.css"
//Importando react-router-dom
import {NavLink} from "react-router-dom"
//Importando material/mUi
import {Avatar} from "@mui/material";

const Navbar = () => {
    return(
        //Usando NavLink com NavBar
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                <span>MusicVerse</span>
            </NavLink>
            {/* Usando avatar de perfil com o cadastrado*/}
            <ul className={styles.links_list}>
                <Avatar
                    src={require("../../images/post/imagem_guitarra.jpg")}
                    sx={{ width: 35, height: 35}}
                />
                {/*Usando localStorage para usuario logado*/}
                <li className={styles.dropdown}><b>{localStorage.getItem('userName')}</b>
                <ul className={styles.dropdown_content}>
                    <li>
                        <NavLink to={`/profile/${localStorage.getItem('userId')}`}>Perfil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({isActive}) => (isActive ?  styles.active : "" )}>Logout</NavLink>
                    </li>
                </ul>
                </li>

                <li>&nbsp;&nbsp;</li>
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
                    <NavLink to="/about" className={({isActive}) => (isActive ?  styles.active : "" )}>Sobre</NavLink>
                </li>
                {/*<li className={styles.dropdown}>*/}
                {/*    <span>Mais</span>*/}
                {/*<ul className={styles.dropdown_content}>*/}
                {/*<li>*/}
                {/*    <NavLink to="/profile" className={({isActive}) => (isActive ?  styles.active : "" )}>Perfil</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink to="/login" className={({isActive}) => (isActive ?  styles.active : "" )}>Logout</NavLink>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}
export default Navbar;