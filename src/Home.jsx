import React, { useState, useEffect } from 'react';
import './App.css';
import { BsSearch } from 'react-icons/bs';
import MovieCard from './MovieCard';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://www.omdbapi.com?apikey=b52295ba'



const Home = () => {
    const [movies, setMovies] = useState ([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
    
      }
    
    useEffect(() => {
    searchMovies('Harry');
    }, []);
    
    
      return (
        <>
        <div className="App  bg-zinc-900 ">

        {/* login button, search input and navigation  */}
  
          <div>
            <button onClick={() => navigate('/signup')}  className='text-white border-2 border-white rounded-3xl float-right mr-2 sm:mr-20 mt-10  w-28  hover:bg-slate-100 hover:scale-105 hover:text-black transition-all'> Login</button>
          </div>
          <div className='bg-bgimage bg-cover bg-center bg-no-repeat'>
          <div className=' bg-black bg-opacity-70 text-center'>
        <h1 className=' text-white pt-24 pb-5 text-6xl '>MovieLand</h1>
    

        {/* input for searching movies and search icon  */}

        <div className='search flex  justify-center p-5 shadow-md bg-gradient-to-r from-slate-200  via-white to-slate-200'>
          <input className='mr-3 w-60 p-2 md:w-96 h-10 border-2 border-black rounded-3xl bg-transparent' placeholder='Search for movies' 
          value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
        <BsSearch className='text-black mt-3  scale-150 cursor-pointer' onClick={() => searchMovies(searchTerm)} />
       </div>
      

      {/* Navigation and Social icons */}
      
        <div className='flex'>
    
       <div className='h-16 lg:h-10 text-sm sm:text-base flex w-full justify-start gap-3 sm:gap-7 pt-2 pl-8'>
        <a href='/' className='text-white hover:underline hover:scale-105 transition-all'>All Movies</a>
        <a href='#' className='text-white hover:underline  hover:scale-105 transition-all'>Populer Movies</a>
        <a href='#' className='text-white hover:underline  hover:scale-105 transition-all'>Legend Series</a>
        <a href='#' className='text-white hover:underline  hover:scale-105 transition-all'>IMDb 7+</a>
        </div>
        <div className='text-white h-10 flex gap-1 pt-2 pr-5 invisible sm:visible  w-full justify-end'>
      <AiOutlineTwitter className="icon text-3xl hover:text-cyan-400"/>
        <AiFillYoutube className="icon text-3xl hover:text-red-500"/>  
       <AiFillInstagram className="icon text-3xl hover:rounded-sm hover:bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500"/>
      <FaTripadvisor className="icon text-3xl hover:bg-green-600 hover:text-black hover:rounded-sm"/>
    </div>
    
    </div>
    
    
       </div>
       </div>
      
      {/* Responsive  MovieCard  */}
    
       {
         movies?.length > 0 
         ? (
          <div className='container grid  gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 m-auto p-10 '>
         {movies.map((movie) => (
          <MovieCard movie={movie} />
         ) )}
          
              </div>
         ) :  (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
         )
    
         
       }


       <Footer />
   
   </div>

   
   </>
  )
}

export default Home;