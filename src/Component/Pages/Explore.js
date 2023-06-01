import React from 'react';
// import Content from './Content';
import './Content.css';
import Header from "./Header";
import Footer from "./Footer";
import './Content.css';


/** -----------------  UNSPLESH API -------------------- */


/** --------------------------------------------------------------------------------- */

const access_key = 'Z70jRAtCARZcqsNYfVuCZdAn9E3ki7jxFYWm0eNgGbo'; 
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=15`;
const gallery = document.querySelector('.gallary');


let allImages;

let serimg = document.createElement('img');
const downloadBtn = document.querySelector('.downloadbtn');


const getImages = () => {
  fetch(random_photo_url)
  .then(res => res.json())
  .then(data => {
    allImages = data;
    makeImages(allImages);
  });
}

const makeImages = (data) => {
  data.forEach((item,index) =>{
    console.log(item);

    //const pop = document.querySelector('.gallery-img');
    let atr = document.createElement('a');
    atr.href= '#pop';
    gallery.appendChild(atr);


    let img = document.createElement('img');
    img.src = item.urls.regular;
    img.className = 'gallery-img';
    atr.appendChild(img);

    
    const popupimg = document.querySelector('.popup-image');
    serimg.src = item.urls.regular;
    serimg.className = 'gal-img';
    popupimg.appendChild(serimg);


     /* PopUp Image */
     img.addEventListener('click', () => {
      showPopup(item);
    })

  })
}

const showPopup = (item) => {
  serimg.src = item.urls.regular;
  downloadBtn.href = item.links.html;
}

console.log(getImages());
getImages();


/** ----------------------------------------------------------------------------------- */


/**  --------------------------------------------------- */




function Explore() {
  return (
    <>
    <Header />
    <br></br><br></br><br></br>
        <center>  <h1 className='Main-Image-Images'> Explore Pixel IMAGES </h1>  </center>
            

        <center>  <h1 className='Main-Image-Images'> IMAGES </h1>  </center>
            <center>
            <div class="images">
                <section class="gallary">
                        {/* <img src={require('Images/stairs.jpg')} alt='IMG' className='gallery-img'></img> */}
                </section>
            </div>
        </center>

        {/* ----------------- popup -------------------------- */}
            <div className='container'>
                <div className='popup' id="pop">
                    <div className='popup-inner'>
                        
                        <span><i class="fa-solid fa-chevron-left"></i></span>
                        <span><i class="fa-solid fa-chevron-right"></i></span>

                        <center>
                        <div className='popup-image'>
                            {/* <img src={require('../Images/cofee.jpg')} alt=''></img> */}
                        </div>
                        </center>
                        <button><a className='downloadbtn' href=''> Download </a> </button>
                        <a className='closepopup' href='#POPUPCLOSE'>X</a>
                    </div>
                </div>
            </div>
        {/* ----------------- popup end -------------------------- */}


            <div className='Content-Bottom'>
                <div className='Bottom-Btn'>
                    <button className='Btnn'><a href='#pop'> Load More </a> </button> 
                </div>
            </div><br></br>
        <Footer />
    </>
  )
}

export default Explore;