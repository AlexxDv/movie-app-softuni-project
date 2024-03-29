import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from './MovieCard';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.REACT_APP_TMDB_KEY}`);
        const data = await response.json();
        setMovies(data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="background">
      <div className="container">
        <div className="text-container">
          <h1 className="home-page-title">Welcome to my Movie App</h1>
          <p className="home-page-text">Watching movies is always better with friends. It's a great way to spend time together and share the experience of a great film.</p>
        </div>
    
        <div className="movie-grid">
          {movies.map(movie => (
            <Link key={movie.id} to={`/details/${movie.id}`} >
              <div>
                {movie.poster_path ? (
                  <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ) : (
                  <div className="filler-poster"></div>
                )}
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
