// import React from 'react';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

    


function Registration() {

    const [name,setName] = useState("");
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [cnfpassword,setcnfPassword] = useState("");
    const [email,setEmail] = useState("");
    const [mono,setMono] = useState("");

    const history = useHistory();

    
    
    const submitPost = () => {
        if(name==="" || username==="" || password==="" || cnfpassword==="" || email==="" || mono==="")
        {
            alert('Fill All the Fields');
        }
        else{
            if(password===cnfpassword){
                alert('Registration Successfully...')
                Axios.post('http://localhost:4000/api/create', {name:name, username: username, password: password, email:email , mono:mono})
                history.push("/Home");
            }
            else{
            alert('Password and Confirm Password are Not Matched')
            }
        }
        // else
        // {
        //     alert('Registration Successfully...')
        //     Axios.post('http://localhost:4000/api/create', {name:name, username: username, password: password, email:email , mono:mono})
        //     history.push("/");
        // }
    }

  return (
    <>
    <div className='image-popup'>
        <br></br>
        <center><span className='login-title'> R E G I S T R A T I O N </span></center>

    <div className='log-col'>
             
        <div className='right-log'>
            <div className='right-log-content'>
                <span className='wel'> Welcom To </span><br></br>
                <span className='right-title'> The Pixel </span><br></br>
                <span className='right-desc'> Download Free Images </span>
            </div>
        </div>

        <div className='left-log'>
            <center>
            <div className='reg-left-log-content'>
                <input type={'text'} placeholder='Name' name='nm' onChange={(e)=> {
                    setName(e.target.value)
                }} required></input><br></br>


                <input type={'text'} placeholder='User Name' name='unm' onChange={(e)=> {
                    setUserName(e.target.value)
                }} required></input><br></br>


                <input type={'email'} placeholder='Email' name='email' onChange={(e)=> {
                    setEmail(e.target.value)
                }} required></input><br></br>


                <input type={'text'} placeholder='Password' name='upwd' onChange={(e)=> {
                    setPassword(e.target.value)
                }} required></input><br></br>


                <input type={'text'} placeholder='Confirm Password' name='cfupwd' onChange={(e)=> {
                    setcnfPassword(e.target.value)
                }} required></input><br></br>

                <input type={'number'} placeholder='Mobile No' name='cfupwd' onChange={(e)=> {
                    setMono(e.target.value)
                }} required></input><br></br>


                <button className='login-btn' onClick={submitPost}> Register </button>
                <button className='login-btn'><Link to="/"> Login </Link></button>
            </div>
            </center><br></br>
        </div>

     </div>
    </div>
    </>
  )
}

export default Registration;