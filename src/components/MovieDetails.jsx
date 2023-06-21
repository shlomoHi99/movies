import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'

export default function MovieDetails() {
  let {movieId} = useParams();
  const [curMovie, setCurMovie] = useState([]);

  useEffect(function(){
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      setCurMovie(data);
    })
  },[movieId])

  return (
    <div className="bg-black cover">
      <div className="container">
        <img className="img-fluid col-9" src={`https://image.tmdb.org/t/p/original${curMovie.backdrop_path}`} alt={curMovie.id} />
        <h1 style={{color:'white', textShadow: '2px 2px red' }}>{curMovie.title || curMovie.name}</h1>
        <h4 style={{color:'beige', textShadow: '1px 1px gray' }}>{curMovie.overview}</h4>
      </div>
    </div>
  )
}
