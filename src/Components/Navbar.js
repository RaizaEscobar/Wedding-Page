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
                            <a href="#start" className="nav-links" onClick={closeMobileMenu}> Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Myprojects" className="nav-links" onClick={closeMobileMenu}> Asistencia</a>
                        </li>
                        <li className="nav-item">
                            <a href="#aboutMe" className="nav-links" onClick={closeMobileMenu}> Informacion</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Footer" className="nav-links" onClick={closeMobileMenu}> Otros</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
