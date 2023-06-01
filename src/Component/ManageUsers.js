import React from 'react'
import Manageuser from './Manageuser';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
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
                <Manageuser />
            </center>
        </div>

    </div>
    </>

  )
}

export default ManageUsers