import React from 'react';
// import Footer from './Footer';
// import Header from './Header';
import './pages.css';
import Header from "./Header";
import Footer from "./Footer";


function About() {
  return (
    <>
    <Header />
    <br></br><br></br><br></br>
    <div className='About'>
      <div className='About-Title'> 
          <br></br>
          <hr></hr>
          <center> <h2> The PIXEL </h2> </center>
      </div>

      <div className='About-Image'>
          <center><span> A l l &nbsp;&nbsp;&nbsp; A b o u t &nbsp;&nbsp;&nbsp; P I X E L</span></center>
      </div>
    </div><br></br>

    <div className='About-Pixel-1'>
      <div className='About-Pixel-1-left'>
          <h1> Photos for everyone </h1>
          <div className='Pixel-1-left-Description'> Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.  </div>
          <div className='Pixel-1-left-Image'> <img src={require('../Images/wallpaper.jpg')} alt='IMGs'></img> </div>
      </div>
      <div className='About-Pixel-1-right'>
      <div className='imgs'>  <img src={require('../Images/About-Header-Image.jpg')} alt='IMG'></img>  </div>
      </div>
    </div>
    <br></br><br></br>

    <Footer />

    </>
  )
}

export default About;