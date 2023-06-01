import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function Adevertising() {

    const [data , setData] = useState([]);
    
    const loaDdata = async () => {
        const response = await axios.get("http://localhost:4000/api/getadvertising");
        setData(response.data);
    };

    useEffect(() => {
        loaDdata();
    }, []);

  return (
    <>
    <center><div className='home-top'>
        <h2> The Pixel </h2>
    </div></center>

    <div className='main-bars'>
        {/* ---------------- Left Column ------------------ */}
        <div className='side-bar'>
            <center> <span> P I X E L </span></center>
            <p> <Link to="/ManageUsers"> U s e r s </Link> </p>
            <p> <Link to="/Reviews"> R e v i e w s </Link> </p>
            <p> <Link to="/Adevertising"> A d e v e r t i s e m e n t <br></br> R e q u e s t </Link> </p>
        </div>

        {/* -------------- Right Column ---------------- */}
        <div className='users-section'>
            <center>
                <h2> Adevertising Requests </h2>
            </center>


            {data.map((item,index) => {
              return(
                <div className='Adevertising-container'>

                        <div className='Adevertising-inner-top'>
                            <div className='Adevertising-brndname'>
                                <h3><span className='Adevertising-brndname-nm'> {item.brand_name} </span></h3>
                            </div>
                            <div className='Adevertising-imageby'>
                                <p> &nbsp; {item.img_by} &nbsp; </p>
                            </div>
                        </div>
                        <div className='Adevertising-inner-bottom'>

                            <div className='Adevertising-email'>
                                <p><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp; {item.email} </p>
                            </div>

                            <div className='Adevertising-imgurl'>
                                <p><i class="fa-solid fa-image"></i> <i class="fa-solid fa-link"></i> &nbsp;&nbsp; {item.image} </p>
                            </div>
                        </div>

                    </div>
                )})}

        </div>

    </div>
    </>
  )
}

export default Adevertising