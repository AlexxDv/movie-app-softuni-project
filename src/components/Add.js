import { React, useState } from 'react'

export const Add = () => {
  const [inputValue, setInputValue] = useState('')

  const onChanges = (e) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&include_adult=false&query=${e.target.value}`
    e.preventDefault()
    setInputValue(e.target.value)

    fetch(URL)
      .then(res => res.json())
      .then(data => console.log(data));
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
        </div>
      </div>
    </div>
  )
}
