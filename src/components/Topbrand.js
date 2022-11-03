import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
import './topbrand.css'



function Topbrand() {
  return (
    <div>
<div className='Topbrand'>
{/* <h1 class="owltitle">Top Brands</h1> */}

</div>
<Container>
      <OwlCarousel className='owl-theme'  items={6} loop margin={10}  autoplay  dots={false}   >
    <div class='item'>
        <h4>
        <img src="images/brand/iphone.png"/>  

        </h4>
    </div>
    <div class='item'>
        <h4>
        <img src="images/brand/lenova.png"/>  
        </h4>
    </div>
    <div class='item'>
        <h4>
        <img src="images/brand/huwaei.png"/>  
        </h4>
    </div>
    <div class='item'>
        <h4>
       
        <img src="images/brand/nokia.png"/>  
        </h4>
    </div>
    <div class='item'>
        <h4>
        <img src="images/brand/samsung.png"/>  
        </h4>
    </div>
    <div class='item'>
        <h4>
          
        <img src="images/brand/hp.png"/>  
             </h4>
    </div>
    <div class='item'>
        <h4> 
        <img src="images/brand/Dell.png"/>  
            </h4>
    </div>
    {/* <div class='item'>
        <h4>
        <img src="images/brand/iphone.png"/>  
             </h4>
    </div> */}

</OwlCarousel>

</Container></div>
  )
}


export default Topbrand