import {React, useContext} from 'react'
import { GlobalContext } from './GlobalState';

export const MovieControler = ({ movie, type }) => {
    const { removeMovieFromWatchList } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn">
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn"
                    onClick={() => removeMovieFromWatchList(movie.id)}
                    > 
                        <i className="fa-fw far fa-times-circle"></i>
                    </button>
                </>
            )}
        </div>
    )
}
