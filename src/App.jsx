import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import './App.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/:curPage' element={<MovieList/>}/>
        <Route path='/movie/:movieId' element={<MovieDetails/>} />
      </Routes>
    </div>
  )
}
