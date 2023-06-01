import React from 'react';
import './pages.css';
import { Link } from 'react-router-dom';
// import { BrowserRouter , Switch , Route } from 'react-router-dom';


function Footer() {
  return (
    <>
    <div className='Footer'>
        <div className='Footer-Container'>

            <div className='Footer-Top'>
            <div className='Footer-About'>
                <div className='Footer-Head'> 
                    <h2> Pixel </h2> 
                </div>
                <div className='Pixel-Desc'>
                    <p>
                    Beautiful, free images gifted by the world’s most generous community of photographers. Better than any royalty free or stock photos.
                    </p> 
                </div>
                <div className='Footer-Pages'>
                    <span> <Link to="/About"> About </Link> </span>
                    <span> <Link to="/Review"> Review </Link> </span>
                    <span> Community </span>
                </div>
            </div>

            <div className='Pixel-Product'>
                <div className='Product-head'>
                    <h2> Product </h2> 
                </div>
                <div className='Products'>
                    <span> <Link to="/Explore"> Explore </Link> </span>
                    <span> Unsplash Awards </span>
                    <span> Unsplash for iOS </span>
                    <span> Help Center </span>
                    <span> Apps & Plugins </span>
                    <span> Developers/API </span>
                </div>
            </div>

            <div className='Pixel-Popular'>
                <div className='Popular-head'>
                    <h2> Popular </h2> 
                </div>
                <div className='Populars'>
                    <span> Backgrounds </span>
                    <span> Street Photography </span>
                    <span> Portrait Images </span>
                    <span> Free Images </span>
                    <span> Nature Pictures </span>
                    <span> Black Backgrounds </span>
                    <span> White Backgrounds </span>
                    <span> Textures </span>
                    <span> Desktop Backgrounds </span>
                </div>
            </div>

            <div className='Pixel-Explore'>
                <div className='Explore-head'>
                    <h2> Explore </h2> 
                </div>
                <div className='Explores'>
                    <span> Free Images </span>
                    <span> Images </span>
                    <span> Stock Images </span>
                    <span> Help Center </span>
                    <span> Developers/API </span>
                    <span> Apps & Plugins </span>
                </div>
            </div>

            <div className='Pixel-socialMedia'>
                <div className='socialMedia'>
                    <span> S </span>
                    <span> O </span>
                    <span> C </span>
                    <span> I </span>
                    <span> A </span>
                    <span> L </span>
                </div>
                <div className='socialMedia-icon'>
                    <span> <i class="fa fa-instagram"></i> </span>
                    <span> <i class="fa fa-whatsapp"></i> </span>
                    <span> <i class="fa-brands fa-google"></i> </span>
                    <span> <i class="fa fa-twitter"></i> </span>
                </div>
            </div>
            </div>

            <div className='Footer-Bottom'>
                <div className='line'><hr></hr></div>
                <div className='terms'> 
                    <span> Privacy Policy </span>
                    <span>  Terms </span> 
                    <span> Security </span>
                </div>
                <div className='OWN'> 
                    <span> Designed & Developed By Harshil Gorasiya </span> 
                </div>
            </div>
            

        </div>
    </div>
    </>
  )
}

export default Footer;