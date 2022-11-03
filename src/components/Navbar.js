import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Row,Col,Nav,NavDropdown,DropdownButton,ButtonGroup,Dropdown} from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import './Navbar.css'
// import Select from 'react-select'
// import MenuItem from '@mui/material/MenuItem';
import {FaCartPlus} from 'react-icons/fa'
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/joy/Stack';
// import TextField from '@mui/joy/TextField';
import Chip from '@mui/joy/Chip';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
// import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import Select, { selectClasses } from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


import Logo from '../main-logo.png'
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };




  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
  const [ value, setValue ] =useState('India')
  return (
    <div>


    <div className='itcityheader' >

    <Row>
    <Col lg={2}>  
  <div class="iticitylogo">
   
      <img src={Logo} />
    </div>
    </Col>
  <Col lg={6}>  
    <div className='searchbox'>
{/*       
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          size="small"
        />  */}
         <Stack direction="column" spacing={2}>
      <TextField
        label="Search here"
        placeholder="Type in here…"
        
        startDecorator={<PersonRoundedIcon />}
        endDecorator={
          <Chip size="sm" variant="soft" padding="9.5 14">
            New stuff
          </Chip>
        }
      />
      {/* <TextField
        disabled
        label="Label"
        placeholder="I am disabled."
        startDecorator={<EditIcon />}
        endDecorator={<CheckIcon />}
      /> */}
    </Stack>
        </div>
        </Col>
        <Col lg={1} style={{marginTop: 10}}>
        {/* <Select
      placeholder="Select a pet…"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="dog">
        
      <ListItemDecorator>
          <Avatar size="sm" src="/images/flag-round-250.png" />
        </ListItemDecorator>
        Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select> */}
        <Select className="country"

        borderColor="orange"
      defaultValue="1"
       indicator={<KeyboardArrowDown />}
      componentsProps={{
        listbox: {
          sx: {
            '--List-decorator-size': '25px',
            '--Select-gap': '0rem',
            '--border':'0px solid orange',
            '--Select-radius': '0',
            '--border-color':'orange'
          },
        },
      }}
      sx={{
        '--List-decorator-size': '25px', '--border':'none',
        '--minwidth':66,'--Select-radius': '0','--top':'-3','--padding': '9.5 14',
        '--border-color':'orange'
      }}
    >
      <Option value="1">
        <ListItemDecorator   >
          <Avatar size="sm" style={{padding:6 }} src="/images/flag-round-250.png" />
        </ListItemDecorator>
        KWD
      </Option>
      {/* <ListDivider role="none" inset="startContent" />
      <Option value="2">
        <ListItemDecorator>
          <Avatar size="sm" src="/static/images/avatar/2.jpg" />
        </ListItemDecorator>
        Smith
      </Option>
      <ListDivider role="none" inset="startContent" />
      <Option value="3">
        <ListItemDecorator>
          <Avatar size="sm" src="/static/images/avatar/3.jpg" />
        </ListItemDecorator>
        Erika
      </Option> */}
    </Select>




        </Col>
        <Col lg={1} style={{marginTop: 10,marginLeft:30}}>

        <Select className='langbutton'
      placeholder="En"
      // width:66
      fontColor="rgb(245,131,26)"
   
      indicator={<KeyboardArrowDown />}
      sx={{
        '--border':'none',
        '--Select-radius': '0',
        '--variant-borderWidth':'0px',
      
      
       
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      {/* <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option> */}
    </Select>
        </Col>
        <Col lg={1} style={{marginTop: 10, marginLeft: 22}}>
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon   backgroundColor='rgba((245,131,26))'/>
      </StyledBadge>
    </IconButton>
        </Col>
    </Row>
    </div>
    <div class="secondheader">

  <Row>
  <Col lg={1}>  

  {/* <div class="iticitylogo">
   
      <img src={Logo} />
    </div> */}
    </Col>
    <Col lg={10}>
    {/* <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar> */}
        <nav>
  <ul className='navlinks'>
    <li className='navlist'>
All Categories
</li>
<li className='navlist'>
Accessories
</li>

<li className='navlist'>
Computers
</li>
<li className='navlist'>
Mobiles
</li>
<li className='navlist'>
Travel Bags
</li>
<li className='navlist'>
Cameras & Drones
</li>
<li className='navlist'>
Watches & Perfume
</li>
<li className='navlist'>
Gaming
</li>
<li className='navlist'>
Tablets
</li>
<li className='navlist'>
Personal Care
</li>
<li className='navlist'>
Offer Zone 
</li>
  </ul>
</nav>
        </Col>
      <Col lg={1}>
      
      </Col>
        
  

    
    </Row>


      </div>
       


    </div>
  )
}

export default Navbar