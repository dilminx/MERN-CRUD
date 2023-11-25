import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        axios.get('http://localhost:3000/users')
        .then((response) =>setData(response.data))
        .catch((error) =>console.log(error))
    },[])

    // Delete function 
    function handleDelete(id) {
        const conf = window.confirm("Do you want to delete user?");
        if (conf) {
          axios
            .delete(`http://localhost:3000/users/` + id)
            .then((res) => {
              alert('record deleted successfully');
              location.reload('/');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }

  return (
    <div className='d-flex flex-column justify-content-center align-item-center bg-light vh-100'>
    <h1 className='mt-5 d-flex justify-content-center'>List of User</h1>
    <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'><Link to='/create' className='btn btn-success'>+ ADD</Link></div>
    <table className='table table-striped'>
        <thead>
          <tr >
            <th>ID</th>
            <th>NAME</th>
            <th>USER_NAME</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((data,index)=>(
                    <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>
                            <Link to={`/read/${data.id}`} className='btn btn-primary m-2'>View</Link>
                            <Link to={`/update/${data.id}`} className='btn btn-warning m-2'>Update</Link>
                            <button className='btn btn-danger m-2' onClick={e=>{handleDelete(data.id)}}>Delete</button>
                        </td>
                    </tr>
                ))
            }

        </tbody>
        
    </table>
</div>
    
    </div>
  )

  
  
}

export default Home
