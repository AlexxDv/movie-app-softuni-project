import { React, useContext } from 'react'
import { GlobalContext } from './context/GlobalState';
import { WatchListCard } from './context/WatchListCard';

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
            <h1 className="heading">My Watchlist</h1>
        </div>

        <div className="movie-grid">
          {watchlist.map(movie => (
            <WatchListCard key={movie.id} movie={movie} type="watchlist" />
          ))}
        </div>

      </div>
    </div>

  )
}
