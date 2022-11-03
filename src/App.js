import React from 'react'
import Navbar from './components/Navbar';
import Carouselslider from './components/Carouselslider';
import Categories from './components/Categories';
import Newproduct from './components/Newproduct';


import Sliderdata from './components/Sliderdata';
import Banner from './components/Banner';
import Topbrand from './components/Topbrand';
import Footer from './components/Footer';
import Owlcarousel from './components/Owlcarousel';
import Dailydeals from './components/Dailydeals'
import Hotdeal  from './components/Hotdeal'
import Product from './components/Product';
import Popular from './components/Popular';
import Latestproduct from './components/Latestproduct';
import Frequently from './components/Frequently';
function App() {
  return (
     <>
   <Navbar />
   <Carouselslider/>
   <Categories/>
   <Banner/>
  <Sliderdata/>   
  <Latestproduct/>
   {/* <Sliderdata/>  */}
  {/* <Owlcarousel /> */}
  {/* <Product/> */}
   {/* <Dailydeals /> */}
       {/* <Hotdeal/> */}
       {/* <Popular/>

  // <Topbrand/> */}
  <Frequently/>
  
  <Topbrand/>
  <Footer/>

 
   </>
   
  );
}


export default App;
