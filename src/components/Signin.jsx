import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import {HiOutlineHome} from 'react-icons/hi'





const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const {signIn} = UserAuth();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('')
  try {
await signIn(email, password)
navigate('/account')

  } catch (e) {
    setError(e.message)
    console.log(e.message)
  }
};


  return (
    <div className='signuppage h-screen text-white flex justify-center  bg-bgimage bg-cover  bg-center  bg-no-repeat '>
    <div className='signupcard m-auto bg-black bg-opacity-90 rounded-lg'>
        <div className=' mx-5'>
            <a href='/' className=' flex text-3xl pt-10 justify-center'>MovieLand</a>
            <a href='/'><HiOutlineHome className=' float-right hover:scale-110 transition-all text-2xl'/></a>
            <h2 className='flex text-lg pt-5 '>Sign in to your account</h2>
            <p className='flex text-lg gap-3 pt-2'>Don't have an account yet? <Link className=' hover:scale-110 transition-all' to='/signup'>Sign Up.</Link> </p>
        </div>


        <form onSubmit={handleSubmit} className='signupform pt-5 mx-5 ' >
            <div className='signupemail'>
                <label>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className='rounded-3xl bg-transparent h-7 pl-3 ml-4 mt-2 border-2 border-white w-72' type="email" placeholder='Enter Email Address' />
            </div>
  
            <div className='signuppass'>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='rounded-3xl bg-transparent h-7 pl-3 ml-12 mt-2 border-2 border-white w-72' type="password" placeholder='Enter Password' />
            </div>
            <button className='text-white  bg-transparent border-2 rounded-3xl mt-5 w-full hover:bg-slate-100 hover:scale-105 hover:text-black transition-all'>Sign In</button>
        </form>   

        <div className="socialcard flex mt-10 mb-5  justify-center gap-1">
        <AiOutlineTwitter className="icon text-3xl hover:text-cyan-400"/>
         <AiFillYoutube className="icon text-3xl hover:text-red-500"/>  
         <AiFillInstagram className="icon text-3xl hover:rounded-sm hover:bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500"/>
         <FaTripadvisor className="icon text-3xl hover:bg-green-600 hover:text-black hover:rounded-sm"/>
            </div>

    </div>
    </div>
  )
}

export default Signin