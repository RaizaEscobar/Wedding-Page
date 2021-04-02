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
            
            <p className="description">{props.match.params.lang !== "" && props.match.params.lang === "it" ? 
				"Per noi, il miglior regalo è che siate con noi il 20 giugno del 2021" : 
				"Para nosotros, el mejor regalo es que estéis a nuestro lado el 20 de junio de 2021" }</p>
			<p className="description">{props.match.params.lang !== "" && props.match.params.lang === "it" ? 
				"Per chi desidera partecipare alla nostra luna di miele, abbiamo creato un salvadanaio on line su PayPal (si può partecipare senza avere PayPal)." : 
				"Para aquellos que deséeis participar en nuestra luna de miel, hemos creado una hucha en linea en PayPal (se puede participar sin tener cuenta en PayPal)." }</p>
			<p className="description">{props.match.params.lang !== "" && props.match.params.lang === "it" ? 
				"Queste sono le Maldive, dove voleremo dopo il nostro grande giorno." : 
				"Esto es las Maldivas, adonde volaremos después de nuestro gran dia." }</p>
			<p className="description">{props.match.params.lang !== "" && props.match.params.lang === "it" ? 
				"Un abbraccio," : 
				"Un abrazo," }</p>
			<p className="sign">{props.match.params.lang !== "" && props.match.params.lang === "it" ? 
				"Boris e Raisa" : 
				"Boris y Raisa" }</p>
            <div className="grid-container">
                <Card><img src={maldives_1} alt="maldives_1"/></Card>
                <Card><img src={maldives_2} alt="maldives_2"/></Card>
                <Card><img src={maldives_3} alt="maldives_3"/></Card>
            </div>
			<div className="button-container">
				<a className="button" href="https://paypal.me/pools/c/8yg3NKbsGr" target="_blank">{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Partecipare alla luna di miele" : "Participar en la luna de miel"}</a>
			</div>
        </>
    )
}

export default Honeymoon