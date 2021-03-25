import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListTitle from './components/MovieListTitle';
import SearchField from './components/SearchField';

const App = () => {


  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const fetchMovie = async (searchTitle) => {
    const url = `http://www.omdbapi.com/?s=${searchTitle}&apikey=5ee08df2`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    fetchMovie(searchTitle);
  }, [searchTitle]);

  return <div className='container-fluid movie-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListTitle heading='Movies' />
      <SearchField searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
    </div>
    <div className='row'>
      <MovieList movies={movies} />
    </div>
  </div>
}

export default App;