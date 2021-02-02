import React from 'react'
import Card from "../Components/Card"
import Navbar from "../Components/Navbar"
import "./Galeria.css"


const images = [];
for(let i=1; i<=97; i++){
  let image = require(`../images/${i}.jpg`);
  images.push(image);
}

function Gallery(props) {
    return (
    <>
      <Navbar lang={props.match.params.lang}/>
      <h1 className="titulo">{props.match.params.lang !== "" && props.match.params.lang === "it" ? "La nostra famiglia, i nostri amici, i nostri momenti...": "Nuestra familia, nuestros amigos, nuestros momentos..."}</h1>
       
        <div className="grid-container">
          {images.map((ele, index) => {
            return <Card key={index+1}> <img key={index+1} src={ele.default} alt={`pic${index+1}`} /></Card>
          })}
        </div>
    
      
    </>
    )
}

export default Gallery

