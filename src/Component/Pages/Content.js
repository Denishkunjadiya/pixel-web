import React from 'react';
import './Content.css';
import axios from 'axios';
import { useState } from 'react';


/** -----------------  UNSPLESH API -------------------- */


/** --------------------------------------------------------------------------------- */

// const access_key = 'Z70jRAtCARZcqsNYfVuCZdAn9E3ki7jxFYWm0eNgGbo'; 
// const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=15`;
// const gallery = document.querySelector('.gallary');


// let allImages;

// let serimg = document.createElement('img');
// const downloadBtn = document.querySelector('.downloadbtn');


// const getImages = () => {
//   fetch(random_photo_url)
//   .then(res => res.json())
//   .then(data => {
//     allImages = data;
//     makeImages(allImages);
//   });
// }

// const makeImages = (data) => {
//   data.forEach((item,index) =>{
//     // console.log(item);

//     //const pop = document.querySelector('.gallery-img');
//     let atr = document.createElement('a');
//     atr.href= '#pop';
//     gallery.appendChild(atr);


//     let img = document.createElement('img');
//     img.src = item.urls.regular;
//     img.className = 'gallery-img';
//     atr.appendChild(img);

    
//     const popupimg = document.querySelector('.popup-image');
//     serimg.src = item.urls.regular;
//     serimg.className = 'gal-img';
//     popupimg.appendChild(serimg);


//      /* PopUp Image */
//      img.addEventListener('click', () => {
//       showPopup(item);
//     })

//   })
// }

// const showPopup = (item) => {
//   serimg.src = item.urls.regular;
//   downloadBtn.href = item.links.html;
// }

// console.log(getImages());
// getImages();


/** ----------------------------------------------------------------------------------- */



function Content() {

    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
        .then((response) => {
            console.log(response.data);
            setResult(response.data.results);
        })
    }

  return (
    <div className='Content'>
        <div className='Content-Container'>

            <div className='Content-Top'>
                <div className='Top-Image'>
                    <div className='Top-Image-Content'> 
                        <h2 className='BrandNAme'> P I X E L </h2>

                        <input type={'text'} placeholder='Search' value={photo} onChange={(e) => {
                            setPhoto(e.target.value)
                            }} ></input>

                        <button onClick={changePhoto}> <i class="fa-solid fa-magnifying-glass"></i> </button>
                        <p> popular : food , Portrait Photography , Street </p>
                    </div>
                </div>
            </div>


            <center>  <h1 className='Main-Image-Images'> IMAGES </h1>  </center>
            <center>
            <div class="images">
                <section class="gallary">
                        {/* <img src={require('Images/stairs.jpg')} alt='IMG' className='gallery-img'></img> */}
                </section>
            </div>
            </center>

            {/* ----------------- Search Gallery start ------------------- */}

            
            <center>
            <div className="container-gal">
                <div class="search-gal">
                    {result.map((value) => {
                        return (
                            <div class="search-gallery">
                                   <a href="#popup-"> <img class="gal-img" src={value.urls.small} alt='' /></a>
                            </div>
                        )
                    })}
                </div>
            </div>
            </center>
            
            {/* --------------------- Search Gallery End -------------- */}

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
            </div>

        </div>
    </div>
  )
}

export default Content;