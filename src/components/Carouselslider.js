import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carouselslider() {
  return (
    <div> <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/1663091970.jpg"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/1663091461.jpg"
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/1644495711.jpeg"
        alt="Third slide"
      />

  
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carouselslider