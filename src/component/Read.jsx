import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Read = () => {
  const [data,setData] = useState([])
  const {id} = useParams();
    useEffect(() =>{
        axios.get('http://localhost:3000/users/'+id)
        .then((response) =>setData(response.data))
        .catch((error) =>console.log(error));
    },[])
  return (
    <div className='d-flex justify-content-center item-center vh-100 w-100 bg-white '>
    <div className='w-50 bg-light  border pt-3 pb-5 px-5'>
               <h3>Details Of {data.name}</h3><br/> 
    <div className='mb-2'>
      <strong>Name:{data.name}</strong>
    </div>
    <div className='mb-2'>
      <strong>User Name:{data.username}</strong>
    </div>
    <div className='mb-2'>
      <strong>Phone:{data.phone}</strong>
    </div>
    <div className='mb-2'>
      <strong>Email:{data.email}</strong>
    </div>

      <Link to={'/'} className='btn btn-warning mt-2'>Back</Link>
      <Link to={`/update/${id}`} className='btn btn-success mt-2 mx-4'>Edit</Link>

      </div>
     
    </div>
  )
}

export default Read