import React from 'react';
import './style.css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function AdminLogin() {

    const [adminname,setADMINName] = useState("");
    const [adminpassword,setADMINPassword] = useState("");
    const history = useHistory();

    const CheckAdminLogin = () => {
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
    }

  return (

    <>
    <div className='body-back'>
    <div className='admin-container'>

        <div className='left-col'>
            <div class="left-col-content">
			      		<div class="left-top">
			      			<div>
                                <span className='left-top-admin'> ADMIN </span>
                            </div>
							<div className='left-col-icon'>
                                <span class="fa fa-google"></span>
							    <span class="fa fa-twitter"></span>
                            </div>
						</div>
			      	

					<form className='left-col-form'>
			      		<div class="form-group-1">
			      			<label className='label'>Username</label><br></br>
			      			<input type="text" placeholder="Username"  onChange={(e)=> {
                            setADMINName(e.target.value)
                            }} required></input>

			      		</div>
				        <div class="form-group-1">
				            	<label className='label'>Password</label><br></br>
				                <input type="password"  placeholder="Password" onChange={(e)=> {
                                setADMINPassword(e.target.value)
                                }}  required></input>
				        </div>
                        
                        <div className='log-btn'>
                            <button type="submit" onClick={CheckAdminLogin}> Login </button>
                        </div>
                        		            
                        <div className='bottom-txt'>
                            <span>Only Admin</span>
                        </div>
		          </form>

            </div>
        </div>

        <div className='right-col'>
            <div className='right-col-content'>
                <center>
                <h1>The  P i x e l </h1>
                <h3> A D M I N </h3>
                <span>Login Here</span>
                </center>
            </div>
        </div>

    </div>
    </div>

    </>
  )
}

export default AdminLogin;