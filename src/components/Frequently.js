import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Frequently() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
  return (
    <div> <h4 className='owltitle'>Frequently Purchased Home Appliances</h4>
 <OwlCarousel className='owl-theme'margin={10}  padding={10}items={5} autoplay loop  >
 <div class='item'>
<h4>
     <img src="images/frequently/home.jpg" ></img>
 
</h4>
 </div>
 <div class='item'>
<h4>
     <img src="images/frequently/home2.jpg" ></img>

</h4>
 </div>
 <div class='item'>
<h4>
     <img src="images/frequently/hom3.jpg" ></img>
    
</h4>
 </div>
 {/* <div class='item'>
<h4><Card sx={{ minWidth: 275 }}>
     <img src="images/frequently/home4.jpg" ></img>
    </Card>
</h4>
 </div> */}
 <div class='item'>
<h4>
     <img src="images/frequently/home7.jpg" ></img>
    
</h4>
 </div>
 {/* <div class='item'>
<h4><Card sx={{ minWidth: 275 }}>
     <img src="images/frequently/home.jpg" ></img>
    </Card>
</h4>
 </div> */}
 </OwlCarousel>




    </div>
  )
}

export default Frequently
