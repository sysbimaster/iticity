import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
import './topbrand.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaSearch } from 'react-icons/fa';
function Product() {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }))
      
  return (
    <div>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
            {/* <h1 style={{
textAlign:"center",
  color:"orange"}}> Hot Deals</h1> */}
          <Item>
          <OwlCarousel className='owl-theme'  items={1} margin={10}  dots={false} >
    <div class='item'>
        <h4>
        <img src="images/daily/1663598477.jpg"/>  
        <h6>Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch</h6>
        <Stack spacing={1} >
      <Rating name="half-rating"  justifyContent="center" defaultValue={2.5} precision={0.5}  sx={{fontSize:10}}/>
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */} 
      <Button variant="contained" style={{margin:"auto",backgroundColor:"orage"}}>View Details</Button>
    </Stack>
  
        </h4>
    </div>
    <div class='item'>
        <h4>
        <img src="images/daily/1663598477.jpg"/>  
        <h6>Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch</h6>
        <Stack spacing={1} justifyContent="center">
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */} 
      <Button variant="contained" style={{margin:"auto",backgroundColor:"orage"}}>View Details</Button>
    </Stack>
  
        </h4>
    </div>
    <div class='item'>
        <h4>
        <img src="images/daily/1663598477.jpg"/>  
        <h6>Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch</h6>
        <Stack spacing={1} justifyContent="center">
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */} 
      <Button variant="contained" style={{margin:"auto",backgroundColor:"orage"}}>View Details</Button>
    </Stack>
  
        </h4>
    </div>
    <div class='item'>
        <h4>
       
        <img src="images/daily/1663598477.jpg"/>  
        <h6>Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch</h6>
        <Stack spacing={1} justifyContent="center">
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */} 
      <Button variant="contained" style={{margin:"auto",backgroundColor:"orage"}}>View Details</Button>
    </Stack>
  
        </h4>
    </div>
    <div class='item'>
        <h4>
        <img src="images/daily/1663598477.jpg"/>  
        <h6>Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch</h6>
        <Stack spacing={1} justifyContent="center">
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */} 
      <Button variant="contained" style={{margin:"auto",backgroundColor:"orage"}}>View Details</Button>
    </Stack>
  
        </h4>
    </div>
    <div class='item'>
        <h4>
          
        <img src="images/daily/1663598477.jpg"/>  
        <h6>Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch</h6>
        <Stack spacing={1} justifyContent="center">
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */} 
      <Button variant="contained" style={{margin:"auto",backgroundColor:"orage"}}>View Details</Button>
    </Stack>
  
             </h4>
    </div>
    <div class='item'>
        <h4> 
        <img src="images/daily/1663598477.jpg"/>  
        <h6>Buy 2 Pcs Haino Teko W7Mini 40/41MM Smartwatch</h6>
        <Stack spacing={1} >
      <Rating name="half-rating" justifyContent="center" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */} 
      <Button variant="contained" style={{margin:"auto",backgroundColor:"orage"}}>View Details</Button>
    </Stack>
  
            </h4>
    </div>
    {/* <div class='item'>
        <h4>
        <img src="images/brand/iphone.png"/>  
             </h4>
    </div> */}

</OwlCarousel>


          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Div>{"Featured Product"}</Div>;
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
    </List>

          </Item>
        </Grid>
        <Grid item xs={4}>
        <Item>
          <Div>{"Featured Product"}</Div>;
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" style={{width:"100px",height:"100px"}}  src="images/featured/4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={ <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           Hard Luggage Travel Bag 5Pcs Set 12"- 20"-24"-28" - Pink 
          </Typography>
       }
          secondary="KWD 24.990"
        />
        <ListItemText><Button variant="outlined" startIcon={<FavoriteIcon />}>

</Button>
<Button variant="contained" endIcon={<FaSearch />}>

</Button></ListItemText>



      </ListItem>
    </List>

          </Item>
        </Grid>
      </Grid>
    </Box>


    </div>
  )
}

export default Product