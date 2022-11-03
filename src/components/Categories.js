import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './Categories.css'
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import AspectRatio from '@mui/joy/AspectRatio';
import Cardj from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ThumbUp from '@mui/icons-material/ThumbUp';

function Categories() {

  return (
  <div>

<Row>
<div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", }}>
<div class="secondimage4">
<div className='headlinetop'>
  <h5>Accessories</h5>
</div>
<div id="flexboxtop">
  <div>
     <img src='images/chargerandpowerbank.jpg'/>
     <div className='flexhead'>
      <h6>Charger & Power Banks</h6>
      </div>

  </div>
  <div>
  <img src='images/case.jpg'/>
  <div className='flexhead'>
      <h6>Case & Screen protector</h6>
      </div>

  </div>
  <div>
  <img src='images/earphone.jpg'/>
  <div className='flexhead'>
      <h6>Earphones & Headsets</h6>
      </div>
  </div>
  <div>
  <img src='images/memory.jpg'/>
  <div className='flexhead'>
      <h6>Memory and USB Flash Drive</h6>
      </div>
  </div>
  </div>
   <div className='link'>See More</div>
</div>


{/* second */}
<div class="secondimage4">
<div className='headlinetop'>
  <h5>Computers</h5>
</div>
<div id="flexboxtop">
  <div>
     <img src='images/computer1.jpg'/>
     <div className='flexhead'>
      <h6>Desktop Pc</h6>
      </div>

  </div>
  <div>
  <img src='images/compurterlap.jpg'/>
  <div className='flexhead'>
      <h6>Laptops</h6>
      </div>

  </div>
  <div>
  <img src='images/computerprinter.jpg'/>
  <div className='flexhead'>
      <h6>Printers & Scanners</h6>
      </div>
  </div>
  <div>
  <img src='images/computerscanner.jpg'/>
  <div className='flexhead'>
      <h6>Projectors & Screens</h6>
      </div>
  </div>
  </div>
   <div className='link'>See More</div>
</div>


{/* Third */}

<div class="secondimage4">
<div className='headlinetop'>
  <h5>Mobiles</h5>
</div>
<div id="flexboxtop">
  <div>
     <img src='images/mobileiphone.jpg'/>
     <div className='flexhead'>
      <h6>Apple i phones</h6>
      </div>

  </div>
  <div>
  <img src='images/mobilesamsung.jpg'/>
  <div className='flexhead'>
      <h6>Samsung Mobile Phones</h6>
      </div>

  </div>
  <div>
  <img src='images/mobilehuwei.jpg'/>
  <div className='flexhead'>
      <h6>Huawei Mobile Phones</h6>
      </div>
  </div>
  <div>
  <img src='images/mobilenokia.jpg'/>
  <div className='flexhead'>
      <h6>Nokia Mobile Phones</h6>
      </div>
  </div>
  </div>
   <div className='link'>See More</div>
</div>

<div class="right">
<CardActionArea>
        <CardMedia
          component="img"
          // height="360"
          image="images/signup.jpg"
          alt="green iguana"
        />
<div className='emailhead'>
Sign up for newsletter

IT CITY ONLINE STORE
</div>
<div className='emailsub d-flex'>
<input className='email'
       placeholder='Enter Your Email'
        /><input className='sub'
        placeholder='subscribe'
         /></div>
      </CardActionArea>
{/* <img src='images/rightsideimage.jpeg'/> */}
</div>
{/* Fourth */}
{/* <div class="secondimage4">


</div> */}



</div>
</Row>







  
<div class="secondcategory">

<Row>
<Col md={9} className=''>

<div className='d-flex'>

       
        <div className='secondimage'>
        <Card sx={{}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/camera.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography  style={{color:'f5831a'}}>
          Cameras & Drones
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        
       



      
        <div className='secondimage'>
        <Card sx={{}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/travelbag.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography>
          Travel Bags
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    </div>





   
        <div className='secondimage'>
        <Card sx={{}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/personal.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography >
          Personal Care
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        



    
        <div className='secondimage'>
        <Card sx={{ }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/gaming.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography >
          Gaming
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        
        
  
    
    <div className='secondimage'>
        <Card sx={{}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/offer.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography >
          Offer Zone
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    </div>      
    </div>




<Row>
<div className='secondimage2'>
    <Card sx={{  }}>
    <div className='headline'>
  <h3>Home Appliances</h3>
</div>
<div id="flexbox">
  <div>
     <img src='images/home1.jpg'/>
     <div className='flexhead'>
      <h6>Kitchens Appliances</h6>
      </div>

  </div>
  <div>
  <img src='images/fanimage.jpg'/>
  <div className='flexhead'>
      <h6>Fans & Heaters</h6>
      </div>

  </div>
  <div>
  <img src='images/iorns.jpg'/>
  <div className='flexhead'>
      <h6>Irons & Steamers</h6>
      </div>
  </div>
  <div>
  <img src='images/cookwareset.jpg'/>
  <div className='flexhead'>
      <h6> Cookware Sets</h6>
      </div>
  </div>
  </div>
   <div className='link'>See More</div>
    </Card>
    </div> 
    <div className='secondimage2'>
    <Card sx={{  }}>
    <div className='headline'>
  <h3>Tablets</h3>
</div>
<div id="flexbox">
  <div>
     <img src='images/tablenova.jpg'/>
     <div className='flexhead'>
      <h6>Lenovo Tab</h6>
      </div>

  </div>
  <div>
  <img src='images/Tab2.jpg'/>
  <div className='flexhead'>
      <h6>Apple ipad</h6>
      </div>

  </div>
  <div>
  <img src='images/Tab3.jpg'/>
  <div className='flexhead'>
      <h6>Samsung Galaxy Tab</h6>
      </div>
  </div>
  <div>
  <img src='images/Tab4.jpg'/>
  <div className='flexhead'>
      <h6>Huawei Tab</h6>
      </div>
  </div>
  </div>
   <div className='link'>See More</div>
    </Card>
    </div>
    
    
    <div className='secondimage2'>
    <Card sx={{  }}>
    <div className='headline'>
  <h3>Watches & Perfume</h3>
</div>
<div id="flexbox">
  <div>
     <img src='images/smartwatch.jpg'/>
     <div className='flexhead'>
      <h6>Smart Watches</h6>
      </div>

  </div>
  <div>
  <img src='images/perfume.jpg'/>
  <div className='flexhead'>
      <h6>Perfumes</h6>
      </div>

  </div>
  <div>
  <img src='images/watch.jpg'/>
  <div className='flexhead'>
      <h6>watches</h6>
      </div>
  </div>
  <div>
  <img src='images/strap.jpg'/>
  <div className='flexhead'>
      <h6>Watch Strap</h6>
      </div>
  </div>
  </div>
   <div className='link'>See More</div>
    </Card>
    </div> 




</Row>
</Col>  
  
<Col md={3}>



       {/* <Col>
        <div className='secondimage3'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="360"
          image="images/signup.jpg"
          alt="green iguana"
        />
<div className='emailhead'>
Sign up for newsletter

IT CITY ONLINE STORE
</div>
<div className='emailsub d-flex'>
<input className='email'
       placeholder='Enter Your Email'
        /><input className='sub'
        placeholder='subscribe'
         /></div>
      </CardActionArea>
    </Card>
    </div>
    </Col> */}
{/* <div className='dailydeals'>
  <h5>Daily <span className='deals'>Deals</span> </h5>
</div> */}
<OwlCarousel className='owl-theme'  items={1}    nav={false}
  >
    <div class='item' >
        <h4><Box sx={{ minHeight: 310 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0,borderColor:'orange' }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none" sx={{ fontSize: 'md', mt: 0 }}>
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions" sx={{ fontSize: 'md', mt: 0,alignItems:'center'}}>KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>

   
    <div class='item' >
        <h4><Box sx={{ minHeight: 350 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0 }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none">
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions">KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>

    <div class='item' >
        <h4><Box sx={{ minHeight: 350 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0 }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none">
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions">KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>

    <div class='item' >
        <h4><Box sx={{ minHeight: 350 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0 }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none">
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions">KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>

    <div class='item' >
        <h4><Box sx={{ minHeight: 350 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0 }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none">
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions">KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>

    <div class='item' >
        <h4><Box sx={{ minHeight: 350 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0 }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none">
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions">KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>

    <div class='item' >
        <h4><Box sx={{ minHeight: 350 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0 }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none">
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions">KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>

    <div class='item' >
        <h4><Box sx={{ minHeight: 350 }}>
      <Cardj variant="outlined" sx={{ width: 320 ,'--AspectRatio-paddingBottom': '100%',borderRadius:0 }} >

      <CardOverflow >
        <AspectRatio ratio="1">
          <img
            src="images/products/p2.jpg"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className='dealsinput'>
        <div className='deal d-flex'>
          <div class="Boxi">
          11
          </div>
          <div class="Boxi">
          22
          </div>
          <div class="Boxi">
          08
          </div>
          </div>


        </div>
        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 0 }}>
        <Link href="#multiple-actions" overlay underline="none">
        Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch
        </Link>
      </Typography>
      <Typography   level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link centered  href="#multiple-actions">KWD 17.990</Link>
      </Typography>
      
      <Button  style={{backgroundColor: "orange",
margin:'auto'}} size="md" variant="solid" startDecorator={<Add />} color="primary">Add To Cart</Button>
      {/* <Button size="md">Medium</Button>
      <Button size="lg">Large</Button> */}
   

{/* - */}

      
    </Cardj>
    </Box>
          
          
         </h4>
    </div>


</OwlCarousel>
    </Col>   
</Row>

</div>
    
    </div>
  )
}

export default Categories