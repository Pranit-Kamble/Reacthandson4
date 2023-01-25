import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { data } from '../Routing/Routing'


const EditInfo = () => {
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location)
  let arr=useContext(data).array
  // console.log(arr)
  function update(){
    navigate('/student')
  }
  return (
    <div className='con1'>
      <h1>Edit</h1>
       <div className='con2'>
       <input placeholder='Name'></input>
        <br />
        <input placeholder='Age'></input>
        <br />
        <input placeholder='Course'></input>
        <br />
        <input placeholder='Batch'></input>
        <br />
       </div>
       <div className='con3'>
       <Link to='/student'><button>Cancle</button></Link>
        <br />
        <button onClick={update}>Update</button>
       </div>
    </div>
  )
}

export default EditInfo