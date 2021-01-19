import React from 'react'
import Carousel from "react-elastic-carousel";
import Card from "../Components/Card"
import "./Galeria.css"
import pic1 from "../images/1.jpg"
import pic2 from "../images/2.jpg"
import pic3 from "../images/3.jpg"
import pic4 from "../images/4.jpg"
import pic5 from "../images/5.jpg"
import pic6 from "../images/6.jpg"
import pic7 from "../images/7.jpg"
import pic8 from "../images/8.jpg"
import pic9 from "../images/9.jpg"
import pic10 from "../images/10.jpg"
import pic11 from "../images/11.jpg"
import pic12 from "../images/12.jpg"
import pic13 from "../images/13.jpg"
import pic14 from "../images/14.jpg"
import pic15 from "../images/15.jpg"
import pic16 from "../images/16.jpg"
import pic17 from "../images/17.jpg"
import pic18 from "../images/18.jpg"
import pic19 from "../images/19.jpg"
import pic20 from "../images/20.jpg"
import pic21 from "../images/21.jpg"
import pic22 from "../images/22.jpg"



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22]

function Gallery() {
    return (
    <>
      <h1 className="titulo">Nuestra familia, nuestros amigos, nuestros momentos...</h1>
      <div className="gallery">
        <Carousel breakPoints={breakPoints}>
          {pictures.map((ele, index) => {
            return <Card> <img key={index+1} src={ele} alt={`pic${index+1}`} /></Card>
          })}
        </Carousel>
      </div>
      <p>Holaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </>
    )
}

export default Gallery

