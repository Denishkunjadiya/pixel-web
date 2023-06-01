// import React from 'react';
import Axios from 'axios';
import React,{useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";


function Adevertising() {

    
    const [adfile,setADFile] = useState("");
    const [brandname,setBRNDName] = useState("");
    const [uname,setUName] = useState("");
    const [email,setEmail] = useState("");

    const submitPost = () => {
        if(adfile==="" || brandname==="" ||  uname==="" || email==="")
        {
            alert('Fill All Fields Information')
        }
        else{
            alert('Advertisment Request Sended')
            Axios.post('http://localhost:4000/api/adreq', {uname:uname, adfile: adfile, brandname: brandname, email:email})
        }
    }


  return (
    <>
    <Header />
    <br></br><br></br><br></br>
    <div className='Adevertising-fst'>

        <div className='Adevertising-fst-left'>
            <div className='Adevertising-fst-left-content'>
                <h1>Advertise on Pixel</h1>
                <p>The world’s most popular creative platform.</p>
                <button>Get in touch with us</button>
            </div>
        </div>

        <div className='Adevertising-fst-right'>
            <img src={require('../Images/cofee.jpg')} alt='ad' className='ad-img'></img>
        </div>

    </div><br></br><br></br>

    <hr></hr>

    <center>
    <div className='Adevertising-sec'>
        <h2> Direct Advertising </h2>
        <p> Direct ads are performance-driven placements. Built to generate traffic for brands and convert on customer acquisition KPIs. We create maximum impact with the following four paid placement opportunities </p>
    </div>
    </center>

    <center>
    <div className='Adevertising-submit'>
        <br></br>
        <h2> Direct Advertising </h2>

        <div className='Adevertising-submit-inputs'>

            <input type={'text'} placeholder='Brand Name'  onChange={(e)=> {
                    setBRNDName(e.target.value)
                }}></input>
             
            <input type={'text'} placeholder='Image URL'  onChange={(e)=> {
                    setADFile(e.target.value)
                }}></input><br></br>

            <input type={'text'} placeholder='Name'  onChange={(e)=> {
                    setUName(e.target.value)
                }}></input>

            <input type={'email'} placeholder='email' onChange={(e)=> {
                    setEmail(e.target.value)
                }}></input><br></br>

            <button type='submit' onClick={submitPost}> Send Request </button>
        </div>
    </div>
    </center><br></br><br></br>
    <Footer />

    </>
  )
}

export default Adevertising;