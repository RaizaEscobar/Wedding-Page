import React from 'react'
import Navbar from "../Components/Navbar"
import Card from "../Components/Card"
import "./Galeria.css"
import "./Honeymoon.css"
import maldives_1 from "../images/maldivas_1.jpg"
import maldives_2 from "../images/maldivas_2.jpg"
import maldives_3 from "../images/maldivas_3.jpg"

function Honeymoon(props){
    return (
        <>
            <Navbar lang={props.match.params.lang}/>
            <p className="title">{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Maldive": "Maldivas"}</p>
            <div className="grid-container">
                <Card><img src={maldives_1} alt="maldives_1"/></Card>
                <Card><img src={maldives_2} alt="maldives_2"/></Card>
                <Card><img src={maldives_3} alt="maldives_3"/></Card>
            </div>
            <p className="description">{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Il regalo è opzionale, l'assistenza obbligatoria, però se volete farci un pensiero ed inviarci il più lontano possibile nella nostra luna di miele, vi facilitiamo il numero di conto corrente:" : "El regalo es opcional, la asistencia obligatoria, pero si quereis tener un detalle con nosotros y enviarnos lo mas lejos posible en nuestra luna de miel, te facilitamos el numero de cuenta:" }</p>
            <p className="description">ES32 2100 0747 2002 0056 7080</p>
        </>
    )
}

export default Honeymoon