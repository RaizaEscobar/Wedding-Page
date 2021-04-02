import React, { useState} from 'react'
import "./Navbar.css"
import spanish from "../images/spain-flag-icon-16.png"
import italian from "../images/italy-flag-icon-16.png"

function Navbar(props) {
    const [click, setClick] = useState(false)

    const handleClick = () => { setClick(!click) }

    const closeMobileMenu = () => { setClick(false) }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href={`/home/${props.lang}`} className="nav-links" onClick={closeMobileMenu}> Home</a>
                        </li>
                        <li className="nav-item">
                            <a href={`/registration/${props.lang}`} className="nav-links" onClick={closeMobileMenu}> {props.lang === "it" ? "Parteciperò": "Asistencia"}</a>
                        </li>
                        <li className="nav-item">
                            <a href={`/information/${props.lang}`} className="nav-links" onClick={closeMobileMenu}> {props.lang === "it" ? "Dove e Quando" : "Donde y Cuando"}</a>
                        </li>
                        <li className="nav-item">
                            <a href={`/gallery/${props.lang}`} className="nav-links" onClick={closeMobileMenu}>{props.lang === "it" ? "Galleria" : "Galeria"}</a>
                        </li>
                        <li className="nav-item">
                            <a href={`/playlist/${props.lang}`} className="nav-links" onClick={closeMobileMenu}>{props.lang === "it" ? "Playlist Matrimonio" : "Playlist Boda"}</a>
                        </li>
                        <li className="nav-item">
                            <a href={`/honeymoon/${props.lang}`} className="nav-links" onClick={closeMobileMenu}>{props.lang === "it" ? "Lista di nozze" : "Lista de boda"}</a>
                        </li>
                        <li className="nav-item">
                            <a href="/home/it" className="nav-links" onClick={closeMobileMenu}><img src={italian} alt="it" /></a>
                        </li>
                        <li className="nav-item">
                            <a href="/home/es" className="nav-links" onClick={closeMobileMenu}><img src={spanish} alt="es" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
