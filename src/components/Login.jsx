import React from 'react'
import { useNavigate } from 'react-router-dom'

const  Login = () => {  
    const navigate=useNavigate() 
  return (
    <div className='login'>
      <div><h1>MOVIES</h1>

      <input type="text" placeholder='user name' />
      <box-icon  color="aliceblue" name='user'></box-icon >
      <input type="password" placeholder='password' name="" id="" />
      <box-icon color="aliceblue" name='lock'></box-icon >
      <button onClick={()=>navigate("/home")} className='logi'>login</button></div>
    </div>
  )
}

export default Login