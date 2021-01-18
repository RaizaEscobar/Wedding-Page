import React from 'react'
import "./Information.css"


function Information() {
    return (
        <div className="page-content">
            <div className="place">
                <div className="content">
                    <h2 className="title">Mas Llombart</h2>
                    <p className="copy">Urbanización Mas Llombart, Av. la Conreria, 16, 08105 Sant Fost de Campsentelles, Barcelona</p>
                    <a className="btn" href="https://www.bodas.net/masias/mas-llombart--e5239" target="_blank" rel="noreferrer">Más información</a>
                </div>
            </div>
            <div className="map">
            <iframe 
                        src="https://maps.google.com/maps?q=masllombart&hl=es&z=14&output=embed" 
                        frameBorder="0"
                        style={{padding:0}}
                        allowFullScreen
                        title="prova"
                 ></iframe>
            </div>
            <div className="place">
                <div className="content">
                    <h2 className="title">Autocar</h2>
                    <p className="copy">Recogida en Plaça Espanya a las 12:00</p>
                </div>
            </div>
            <div className="map">
            <iframe 
                        src="https://maps.google.com/maps?q=41.37395,2.14980&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        className="map"
                        frameBorder="0"
                        style={{padding:0}}
                        allowFullScreen
                        title="prova"
                 ></iframe>
            </div>
        </div>
    )
}

export default Information
