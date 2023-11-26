import React from 'react'
import { useState, useEffect } from 'react';

const Search = () => {
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          setFdata(data);
        })
        .catch(err => console.log(err));
    
      },[])
      const [data,setData]= useState([]);
      const [fdata,setFdata] = useState([])
    
      const onchange= (value)=>{
      
        const res =fdata.filter(f=>f.name.toLowerCase().includes(value))
        setData(res);
        if(value === ""){
          setData([]);
        }
    
      
      
        
      }
  return (
//     <div className='mt-4 w-50'>
//   <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2 mb-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success m-2 " type="submit">Search</button>
//     </form>
//     </div>
<div className="mt-4 w-50 d-flex justify-content-center">
    <div className='search'>
      <div className='flex d-flex'>
        <input onChange={e=>onchange(e.target.value)} className="form-control mr-sm-2 mb-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className='btn btn-outline-success m-2' type="submit">Search</button>
      </div>
      <div className='dropdown'>
        {
         data.map((d,i)=>(
         <div key={i}>
          {d.name} 
         </div>

         ))
        }


      </div>
    </div>
  </div>
  )
}

export default Search