import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
// import {useParams} from "react-router-dom"
import './style.css';
import {toast} from 'react-toastify';

function Manageuser() {

    const [data , setData] = useState([]);
    
    const loaDdata = async () => {
        const response = await axios.get("http://localhost:4000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loaDdata();
    }, []);



  // ----------DELETE USER --------------- 
  const deleteuser = (id) => {
    if(window.confirm("are You Syour You Want To Delete That User ? "))
    {
        axios.delete(`http://localhost:4000/api/deleteuser/${id}`);
        toast.success("Contact Deleted Succesfully..");
        alert('Contact Deleted Succesfully..');
        setTimeout(() => loaDdata(), 500)
    }
  }


  return (

    <>

    <center>
        <div> <h1> Registered Users </h1> </div>
    </center>

    <center>
    <div className='showdata'>
      <table className='tbl-data' cellSpacing={6}>
        <thead>
          <tr>
            <th> No </th>
            <th> Name </th>
            <th> User Name </th>
            {/* <th> Password </th> */}
            <th> Email </th>
            {/* <th> Mobile No </th> */}
            <th colSpan={3} > Action </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item,index) => {
              return(
                <tr key={item.id}>
                  <th scope='row'> {index+1} </th>
                  <td> {item.name} </td>
                  <td> {item.username} </td>
                  <td> {item.email} </td>

                  <td className='user-action-col'>
                    {/* <Link to={'/update/${item.id}'}> 
                      <button className='btn-edit'> EDIT </button>
                    </Link> */}
                    <button className='btn-delete' onClick={() => deleteuser(item.id)}><i class="fa-solid fa-trash"></i> Delete </button>
                    {/* <Link to={'/view/${item.id}'}>   --onClick={(() => deletePost(post.id))} */}
                      <button className='btn-view'> <i class="fa-solid fa-circle-info"></i> View </button>
                    {/* </Link> */}
                  </td>

                </tr>
              )
          })}

        </tbody>
      </table>
    </div>
    </center>


    </>
  )
}

export default Manageuser