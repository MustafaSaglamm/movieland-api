import React from "react";


const MovieCard = ({ movie }) => {
    return(
        <div key={movie.id} className='movie bg-slate-800 border-2 rounded-lg  border-whitrerounded-md shadow-lg  hover:scale-105  transform transition-all'>

<div>
  <img className=' h-80 w-full rounded-t-md ' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
</div>

<div className='  text-white pl-2 cursor-pointer'>
  <span>{movie.Type}</span>
  <h3>{movie.Title}</h3>
  <p>{movie.Year}</p>
</div>

</div> 
    )
}

export default MovieCard;