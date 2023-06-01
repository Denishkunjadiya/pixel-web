// import React from 'react';
import Axios from 'axios';
import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';

function Review() {

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");

  const submitReview = () => {
    if(name==="" || description==="")
    {
      alert('Fill The All Informations')
    }
    else{
      alert('Review Sended')
      Axios.post('http://localhost:4000/api/review', {name:name, description:description})
    }
    
  }

  return (
    <>
    <Header />
    <br></br><br></br><br></br><br></br><br></br>

    <center>
    <div className='Review-submit'>
        <br></br>
        <h2> Give Review </h2>

        <div className='Review-submit-inputs'>

            <input type={'text'} placeholder='Your Name'  onChange={(e)=> {
                    setName(e.target.value)
                }}></input><br></br>
             
            <textarea placeholder='What About us'  onChange={(e)=> {
                    setDescription(e.target.value)
                }}></textarea><br></br>

            <button type='submit' onClick={submitReview}> Send Review </button>
        </div>
    </div>
    </center><br></br><br></br><br></br><br></br>
    <Footer />
    </>
  )
}

export default Review

