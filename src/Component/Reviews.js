import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';


function Reviews() {


    const [data , setData] = useState([]);
    
    const loaDdata = async () => {
        const response = await axios.get("http://localhost:4000/api/getreview");
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
            <p className='review-active'> <Link to="/Reviews"> R e v i e w s </Link> </p>
            <p> <Link to="/Adevertising"> A d e v e r t i s e m e n t <br></br> R e q u e s t </Link> </p>
        </div>

        {/* -------------- Right Column ---------------- */}
        <div className='users-section'>
            <center>
                <h2> Reviews </h2>
            </center>

            {data.map((item,index) => {
              return(
                <div className='Reviews-container'>

                    <div className='Reviews-name'>
                        <h3> {item.Name} </h3>
                    </div>

                    <div className='Reviews-Desc'>
                        <p> {item.description} </p>
                    </div>

                </div>
              )})}

        </div>

    </div>
    </>
  )
}

export default Reviews;