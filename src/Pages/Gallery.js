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


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function Gallery() {
    return (
    <>
      <h1 className="titulo">Nuestros momentos</h1>
      <div className="gallery">
        <Carousel breakPoints={breakPoints}>
          <Card> <img src={pic1} alt= "pic1" /></Card>
          <Card> <img src={pic2} alt= "pic2" /></Card>
          <Card> <img src={pic3} alt= "pic3" /></Card>
          <Card> <img src={pic4} alt= "pic4" /></Card>
          <Card> <img src={pic5} alt= "pic5" /></Card>
          <Card> <img src={pic6} alt= "pic6" /></Card>
          <Card> <img src={pic7} alt= "pic7" /></Card>
          <Card> <img src={pic8} alt= "pic8" /></Card>
        </Carousel>
      </div>
    </>
    )
}

export default Gallery

