import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Create() {
  const[values,setValues]=useState({
    name:'',
    username:'',
    email:'',
    phone:''
  })

  const navigate = useNavigate();
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/users',values)
    .then((response) =>{
      console.log(response)
      navigate('/')


    })
    .catch((error) =>console.log(error))

  }
  return (
    <div className='w-75 border mt-5 p-4 bg-light'>
      <h2>ADD USERS</h2>
      <form onSubmit={handleSubmit}>

  <div className="form-group">
    <label htmlFor='name' className='p-2'>Name:</label>
    <input type="text" className="form-control"
    onChange={e=>setValues({...values,name:e.target.value})}/>
  </div>
  <div className="form-group">
    <label className='p-2'>User Name:</label>
    <input type="text" className="form-control"
     onChange={e=>setValues({...values,username:e.target.value})}/>
  </div>
  <div className="form-group">
    <label className='p-2'>Phone:</label>
    <input type="text" className="form-control"
     onChange={e=>setValues({...values,phone:e.target.value})}/>
  </div>
  <div className="form-group">
    <label className='p-2'>Email address:</label>
    <input type="email" className="form-control"
     onChange={e=>setValues({...values,email:e.target.value})}/>
  </div>
  <div className='p-3 d-flex justify-content-center'>
  <Link to={'/'} className='btn btn-warning m-4 px-4'>Back</Link>
  <button className='btn btn-success m-4 px-4' type="submit">Submit</button>
  </div>
</form>
    </div>
  )
}

export default Create