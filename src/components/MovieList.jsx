import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


export default function MovieList() {
  let { curPage } = useParams();
  const [moviesData, setMoviesData] = useState([]);


  useEffect(function () {
    let curApi;
    switch(curPage){
      case 'topRated':
        curApi = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1';
        break;
      case 'upcoming':
        curApi = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1';
        break;
      case 'popular':
        curApi = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1';
        break;
      default:
        curApi = 'https://api.themoviedb.org/3/trending/all/day?api_key=4e44d9029b1270a757cddc766a1bcb63';
        break;
    }
    console.log(curPage);
    console.log(curApi);
    fetch(curApi)
      .then(function (request) {
        return request.json();
      })
      .then(function (data) {
        return setMoviesData(data.results);
      })
  }, [curPage])

  let renderMoviesCarousel = moviesData.map(function (item, i) {
    return (<Carousel.Item key={i}>
      <Link to={`../movie/${item.id}`}>
        <img
          className='d-block w-100'
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={item.id}
        />
      </Link>
      <Carousel.Caption className='text-start'>
        <h1 style={{ textShadow: '2px 2px black' }}>{item.title || item.name}</h1>
        <h3 style={{ textShadow: '2px 2px black' }}>{item.release_date || item.first_air_date}</h3>
        <p style={{ textShadow: '2px 1px 1px gray' }}>{item.overview}</p>
      </Carousel.Caption>
    </Carousel.Item>)

  })

  let renderMoviesList = moviesData.map(function(item, i){
      return(
        <div className='col-2 p-2' >
          <Link to={`../movie/${item.id}`}>
          <img className='img-fluid' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt={item.id} />
          </Link>
          <h4 style={{color:'beige', textShadow: '1px 1px gray' }}>{item.title || item.name}</h4>
        </div>
      )
  })


  console.log(moviesData);
  return (
    <div className=" bg-black" >
    <div className="container bg-black">
      <Carousel>
        {renderMoviesCarousel}
      </Carousel>
    </div>
    <div className="container d-flex flex-wrap bg-black justify-content-space-around">
      {renderMoviesList}
    </div>
    </div>
  )
}
