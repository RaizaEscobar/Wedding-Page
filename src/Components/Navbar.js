import React, { useState} from 'react'
import "./Navbar.css"

function Navbar() {
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
                            <a href="/" className="nav-links" onClick={closeMobileMenu}> Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="registration" className="nav-links" onClick={closeMobileMenu}> Asistencia</a>
                        </li>
                        <li className="nav-item">
                            <a href="information" className="nav-links" onClick={closeMobileMenu}> Donde y Cuando</a>
                        </li>
                        <li className="nav-item">
                            <a href="Gallery" className="nav-links" onClick={closeMobileMenu}>Galeria</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Footer" className="nav-links" onClick={closeMobileMenu}> Playlist Boda</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
