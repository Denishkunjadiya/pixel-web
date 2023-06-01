import React from 'react';
import { useState } from 'react';
// import { useEffect, useState } from "react";
import Axios from 'axios';
import './login.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import Home from './Home';

function Login() {

    const [adminname,setADMINName] = useState("");
    const [adminpassword,setADMINPassword] = useState("");
    const history = useHistory();
    const [data , setData] = useState([]);
    //const user = [ { adminname: 'Harshil', adminpassword: 'Harshil004' } ];

    const CheckLogin = () => {
    // Axios.post('http://localhost:4000/api/login', {adminname:adminname, adminpassword:adminpassword } , (err,result)=>{
    //     if(err===null) {
    //        // console.log(adminname)
    //         history.push("/");
    //     } 
    //     else{
    //         console.log(result)
    //     result.send(result)
    //     result.end(JSON.stringify(result))
    //     history.push("/Login");
    //     }
    // })

    if(adminname==="" || adminpassword===""){
        alert('Please Enter Username Or Password');
    }
    else{
        if(adminname==="Harshil" || adminpassword==="Harshil004"){
            alert('Login Successfully');
            history.push("/Home");
        }
        else{
            alert('Enter Valid Username Or Password')
        }
    }

    // const [data , setData] = useState([]);
    
    // const loaDdata = async () => {
    //     const response = await Axios.get("http://localhost:4000/api/getuser");
    //     setData(response.data);
    // };

    // useEffect(() => {
    //     loaDdata();
    // }, []);


    // {data.map((item,index) => {
    //     const unm=item.username;
    //     const upass=item.password;
    // })}

     
    // const response=  Axios.post('http://localhost:4000/api/login', {adminname:adminname, adminpassword:adminpassword })
    // // setData(response.data.length);
    // console.log("Response:",response)
    }
  return (
    <>
    <div className='back-body'>
    <div className='image-popup'>
        <br></br>
        <center><span className='login-title'> L O G I N </span></center>

        <div className='log-col'>
                
            <div className='left-log'>
                <center>
                <div className='left-log-content'>

                <input type={'text'} placeholder='User Name' name='unm' onChange={(e)=> {
                    setADMINName(e.target.value)
                    }} required></input><br></br>

                    <input type={'password'} placeholder='Password' name='upwd' onChange={(e)=> {
                    setADMINPassword(e.target.value)
                    }} required></input><br></br>

                    <button className='login-btn' onClick={CheckLogin}> Login </button>
                    <button className='login-btn'><Link to="/Registration">  Register </Link> </button>
                </div>
                </center><br></br>
            </div>

            <div className='right-log'>
                <div className='right-log-content'>
                    <span className='wel'> Welcom To </span><br></br>
                    <span className='right-title'> The Pixel </span><br></br>
                    <span className='right-desc'> Download Free Images </span>
                </div>
            </div>
        </div>
    </div>
    </div>



 {/* <input type={'text'} placeholder='User Name' name='unm' onChange={(e)=> {
                    setADMINName(e.target.value)
                    }}></input><br></br>

                    <input type={'text'} placeholder='Password' name='upwd' onChange={(e)=> {
                    setADMINPassword(e.target.value)
                    }}></input><br></br> */}

{/* <button className='login-btn' onClick={CheckLogin}> Login </button> */}


    </>
  )
}

export default Login;












