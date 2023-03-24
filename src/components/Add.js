import { React, useState } from 'react'
import { MovieCard } from './MovieCard';

export const Add = () => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const onChanges = (e) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&include_adult=false&query=${e.target.value}`
    e.preventDefault()
    setInputValue(e.target.value)

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          setResults(data.results)
        } else {
          setResults([])
        }
      });
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder='Search for a movie'
              value={inputValue}
              onChange={onChanges}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  < MovieCard movie = {movie}/>
                </li>))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
