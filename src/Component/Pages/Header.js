import React from 'react';
import './pages.css';
import { Link } from 'react-router-dom';
// import Search from './Search';

const Header = () => {
  return (
    <>
    <div className='Header'>
      <div className='Header-Container'>

          <div className='Brand-name'> <Link to="/Home">
              <span className='Letr'>P</span>IXEL</Link> 
          </div>

          <div className='Header-Search'> 
              <Link to="/Search">              
              {/* <input type={'text'} placeholder='Search here...'></input>  */}
              <button className='Header-Search-btn' type='submit' > <i class="fa-solid fa-magnifying-glass"></i> Search </button>
              </Link>

          </div>

          <div className='Header-pages'>
              <div>
                <span> <Link to="/Explore"> Explore </Link> &nbsp; | &nbsp; </span>
              </div>
              <div>
                <span> <Link to="/Adevertising"> Adevertising </Link> &nbsp; | &nbsp;  </span>
              </div>
              <div>
                <span> <Link to="/About"> About </Link>  </span>
              </div>
          </div>

          {/* <div className='Header-Submit-Button'>
              <div> <span> Submit Image </span> </div>
          </div> */}

          <div className='Login-btn'> 
              <button> <a className='button' href="#popup"><Link to="/"> LOGOUT </Link> </a> </button> 
          </div>

          {/* ----------------- popup -------------------------- */}
            <div className='container'>
              
                  <div className='popup' id="popup">
                    <div className='popup-inner'>
                        <div className='inner-left'>
                            <h1 className='login-A'> The </h1>
                            <span className='login-B'> PIXEL </span>
                            {/* <img src={require('./images/')}></img> */}
                        </div>
                        <div className='inner-Right'>
                          <div className='popup-title'> <h1> Sign Up </h1> </div><br></br>

                          <div className='input-field'>
                            <input type={'text'} name='' className='Validate' placeholder='Name'></input>
                          </div><br></br>
                          <div className='input-field'>
                            <input type={'password'} name='' className='Validate' placeholder='Password'></input>
                          </div><br></br>

                          <button className='second-button'> Sign In </button><br></br>
                          <p> already have an account </p>
                      
                          <a className='closepopup' href='#POPUPCLOSE'>X</a>
                        </div>
                    </div>
                  </div>
            </div>
            
            {/* ----------------- popup -------------------------- */}
          

      </div>
    </div>
    </>
  )
}

export default Header