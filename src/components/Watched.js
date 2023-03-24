import {React, useContext} from 'react'
import { GlobalContext } from './context/GlobalState'
import { WatchListCard } from './context/WatchListCard'


export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watched Movies</h1>
        </div>

        {watched.length > 0 ?
          <div className="movie-grid">
            {watched.map(movie => (
              <WatchListCard key={movie.id} movie={movie} type="watched" />
            ))}
          </div>
          :
          <h2 className="no-movies">No movies here, you may watch some!</h2>
        }

      </div>
    </div>
  )
}
