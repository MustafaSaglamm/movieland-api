import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Account = () => {

const {user, logout} = UserAuth(); 
const navigate = useNavigate ();
const handleLogout = async () => {
  try {
    await logout();
    navigate('/');
    console.log('You are logged out')
  } catch (e) {
    console.log(e.message);
  }
}


  return (
        <div className='account h-screen text-white flex justify-center  bg-bgimage bg-cover  bg-center  bg-no-repeat '>
          <div className='m-auto w-1/3 h-1/3 bg-black bg-opacity-80 rounded-lg'>
      <h1 className='flex text-3xl pt-5 m-5 justify-center' >Account</h1>
      <p className='flex text-lg pt-5 m-5 '>User Email: {user && user.email} </p>
      
 <div className='flex justify-center'>
      <button className='text-white  bg-transparent border-2 rounded-3xl  mt-3 w-2/3  hover:bg-slate-100 hover:scale-105 hover:text-black transition-all' onClick={handleLogout}>Logout</button>
      </div>
      </div>
    </div>
  )
}

export default Account