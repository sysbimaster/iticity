import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './slider.css'
import Button from '@mui/material/Button';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Rating from '@mui/material/Rating';
import Div from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import ButtonProps from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';import { styled } from '@mui/material/styles';

function Latestproduct() {
  // const [value, setValue] = React.useState<number | null>(2);
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '2px 4px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffa500',
    borderColor: '#ffa500',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ffa500'),
    backgroundColor:'#ffa500',

    fontSize: 12,
    padding: '2px 4px',
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  return (
    <div>
     <h4 className='owltitle'>Popular products</h4>
      <OwlCarousel className='owl-theme'  items={5} autoplay loop>
    <div class='item'>
        <h4>
<div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p1.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Nokia C2 2Nd Edition 32GB/2GB 5.7 inches Phone - Blue</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
        <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>

{/* <div class="youtubeBtn">
  <a target="_blank" href="https://www.youtube.com/AhmadEmran?sub_confirmation=1">
      <span>Watch on YouTube</span>
  <i class="fab fa-youtube"></i>
    </a>
</div>  */}



        {/* <img variant="top" src="images/products/p1.jpg" /> */}

        </h4>
    </div>
    <div class='item'>
        <h4>
        {/* <img variant="top" src="images/products/p2.jpg" /> */}
        <div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p2.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Nokia C2 2Nd Edition 32GB/2GB 5.7 inches Phone - Blue</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
      <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>
        </h4>
    </div>
    <div class='item'>
        <h4>
        {/* <img variant="top" src="images/products/p3.jpg" /> */}
        <div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p3.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Nokia C2 2Nd Edition 32GB/2GB 5.7 inches Phone - Blue</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
      <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>
        </h4>
    </div>
    <div class='item'>
        <h4>
        {/* <img variant="top" src="images/products/p4.jpg" /> */}
        <div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p4.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Realme 8i 128GB/4GB 6.6inch Phone - Space Purple</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
        <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>
        </h4>
    </div>
    <div class='item'>
        <h4>
        {/* <img variant="top" src="images/products/p5.jpg" /> */}

            {/* <img variant="top" src="images/products/p4.jpg" /> */}
            <div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p5.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Realme GT Neo2 256GB/8GB 6.62inch Phone - NEO Green</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
      <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>
        </h4>
    </div>
    <div class='item'>
        <h4> 
          {/* <img variant="top" src="images/products/p6.jpg" /> */}
        
         {/* <img variant="top" src="images/products/p5.jpg" /> */}

            {/* <img variant="top" src="images/products/p4.jpg" /> */}
            <div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p6.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Vivo V23E 128GB/8GB 6.44 Inch Phone - Sunshine Coast</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
        <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>
        
        
        </h4>
    </div>
    <div class='item'>
        <h4>
           {/* <img variant="top" src="images/products/p7.jpg" /> */}
              
         {/* <img variant="top" src="images/products/p5.jpg" /> */}

            {/* <img variant="top" src="images/products/p4.jpg" /> */}
            <div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p7.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Realme GT Neo2 256GB/8GB 6.62inch Phone - NEO Green</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
     <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>
        
        
        
        </h4>
    </div>
    <div class='item'>
        <h4> 
                   {/* <img variant="top" src="images/products/p7.jpg" /> */}
              
         {/* <img variant="top" src="images/products/p5.jpg" /> */}

            {/* <img variant="top" src="images/products/p4.jpg" /> */}
            <div className='product'>
        <div class="card">
    <div class="product-img">
      <img src="images/products/p8.jpg"/>  
   </div>
    <div className="add-to-cart">
      <button className='add-to-card-btn'>
        Add To Cart
      </button>
    </div>
    <div class="card-footer">
      <div class="title">
        <h3>Realme GT Neo2 256GB/8GB 6.62inch Phone - NEO Green</h3>
        <Rating
        name="simple-controlled"
        value={3}
        color=" rgb(255, 165, 0)"
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
       <div class="price">
        <small style={{fontSize:'16px'}}>KWD 26.990</small>
        <span> </span>
        <Stack spacing={2} direction="row"  style={{
  
        }}>
     
      {/* <BootstrapButton variant="contained" disableRipple>
     See More
      </BootstrapButton> */}
      
      <ColorButton variant="contained" marginLeft={100}>Add To Cart</ColorButton>
    </Stack>
      </div>
      </div>
      
      {/* <div class="product-options">
        <div class="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div class="colors">
          <strong>Colors</strong>
          <span class="blue"></span>
          <span class="red"></span>
          <span class="white"></span>
          <span class="green"></span>
        </div>
      </div> */}
    </div>
  </div>

  </div>
        
          
          {/* <img variant="top" src="images/products/p8.jpg" /> */}
          
          </h4>
    </div>

</OwlCarousel>
</div>
  )
}

export default Latestproduct