
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Content from './Component/Pages/Content';
// import Footer from './Component/Pages/Footer';
// import Header from './Component/Pages/Header';
import About from './Component/Pages/About';
import Blog from './Component/Pages/Blog';
import Home from './Component/Pages/Home';
import Explore from './Component/Pages/Explore';
import Adevertising from './Component/Pages/Adevertising';
import Login from './Component/Pages/Login';
import Registration from './Component/Pages/Registration';
import Search from './Component/Pages/Search';
import Review from './Component/Pages/Review';


/** -----------------  UNSPLESH API -------------------- */


/** --------------------------------------------------------------------------------- */

const access_key = 'Z70jRAtCARZcqsNYfVuCZdAn9E3ki7jxFYWm0eNgGbo';
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=10`;
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
  data.forEach((item, index) => {
    console.log(item);

    //const pop = document.querySelector('.gallery-img');
    let atr = document.createElement('a');
    atr.href = '#pop';
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


function App() {
  return (

    <>
      <BrowserRouter>

        {/* <Header/> */}
        <Switch>
          <Route path='/Home' exact component={Home} ></Route>
          <Route path='/About' exact component={About} ></Route>
          <Route path='/Blog' exact component={Blog} ></Route>
          <Route path='/Explore' exact component={Explore} ></Route>
          <Route path='/Adevertising' exact component={Adevertising} ></Route>
          <Route path='/Search' exact component={Search} ></Route>
          <Route path='/Review' exact component={Review} ></Route>
        </Switch>
        {/* <Footer /> */}

      </BrowserRouter>


      <BrowserRouter>
        <Switch>
          {/* <Route path='/' exact component={Login} ></Route> */}
          <Route path='/' exact component={Login} ></Route>
          <Route path='/Registration' exact component={Registration} ></Route>
        </Switch>
      </BrowserRouter>

    </>

  );
}

export default App;
