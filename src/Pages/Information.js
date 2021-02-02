import React from 'react'
import Navbar from "../Components/Navbar"
import "./Information.css"


function Information(props) {
    return (
        <>
            <Navbar lang={props.match.params.lang} />
            <div className="page-content">
                <div className="place">
                    <div className="content">
                        <h2 className="title">Mas Llombart</h2>
                        <p className="copy">Urbanización Mas Llombart, Av. la Conreria, 16, 08105 Sant Fost de Campsentelles, Barcelona</p>
                        <a className="btn" href="https://www.bodas.net/masias/mas-llombart--e5239" target="_blank" rel="noreferrer">{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Altre informazioni" : "Más información"}</a>
                    </div>
                </div>
                <div className="map">
                    <span>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Luogo della cerimonia e del ricevimento" : "Lugar de ceremonia y banquete"}</span>
                    <iframe
                        src="https://maps.google.com/maps?q=masllombart&hl=es&z=14&output=embed"
                        frameBorder="0"
                        style={{ padding: 0 }}
                        allowFullScreen
                        title="Mas llombart"
                    ></iframe>
                </div>
                <div className="place">
                    <div className="content">
                        <h2 className="title">{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Pullman" : "Autocar"}</h2>
                        <p className="copy">{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Partenza in Plaça Espanya alle ore 12:00" : "Recogida en Plaça Espanya a las 12:00"}</p>
                    </div>
                </div>
                <div className="map">
                    <span>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Luogo di partenza e arrivo del pullman" : "Lugar de recogida y retorno del autocar"}</span>
                    <iframe
                        src="https://maps.google.com/maps?q=41.37395,2.14980&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="map"
                        frameBorder="0"
                        style={{ padding: 0 }}
                        allowFullScreen
                        title="bus"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Information
