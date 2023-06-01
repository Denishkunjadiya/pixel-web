import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

// const access_key = 'Z70jRAtCARZcqsNYfVuCZdAn9E3ki7jxFYWm0eNgGbo'; 
// const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=40`;

function Search() {
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
        <>
        <Header />
            <br></br><br></br><br></br><br></br>
            <center>

            <div className='search-text'>
                <input type="text" className='search-txtfield' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='search-btn'> <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            </center>
            <br></br>


            <center>
            <div className="container-gal">
                <div class="search-gal">
                    {result.map((value) => {
                        return (
                            <div class="search-gallery">
                                   <a href="#popup"> <img class="gal-img" src={value.urls.small} alt='' /></a>
                            </div>
                        )
                    })}
                </div>
            </div>
            </center>



            {/* ----------------- popup -------------------------- */}
            <div className='container'>
              
                <div className='popup' id="popup">
                    <div className='popup-inner'>
                          <a className='closepopup' href='#POPUPCLOSE'>X</a>
                        </div>
                    </div>
                </div>
            {/* ----------------- popup -------------------------- */}

            <div className='Content-Bottom'>
                <div className='Bottom-Btn'>
                    <button className='Btnn'><a href='#pop'> Load More </a> </button> 
                </div>
            </div><br></br>

            <Footer />

        </>
    )
}

export default Search;