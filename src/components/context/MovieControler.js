import React from 'react'

export const MovieControler = ({ movie, type }) => {
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn">
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                    
                    <button className="ctrl-btn">
                        <i className="fa-fw far fa-times-circle"></i>
                    </button>
                </>
            )}
        </div>
    )
}
