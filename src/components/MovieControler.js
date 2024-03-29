import { React, useContext } from 'react'
import { GlobalContext } from './context/GlobalState';

export const MovieControler = ({ movie, type }) => {
    const {
        removeMovieFromWatchList,
        addMovieToWatched,
        moveMovieToWatchList,
        removeMovieFromWatched
    } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn"
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeMovieFromWatchList(movie.id)}
                    >
                        <i className="fa-fw far fa-times-circle"></i>
                    </button>
                </>
            )}
            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => moveMovieToWatchList(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button className="ctrl-btn" onClick={()=> removeMovieFromWatched(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}
