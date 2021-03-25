import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {


  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=5ee08df2"

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return <div className='container-fluid movie-app'>
    <div className='row'>
      <MovieList movies={movies} />
    </div>
  </div>
}

export default App;