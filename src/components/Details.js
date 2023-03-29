import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className='result-card'>
            <div className="poster-wrapper-details">

                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                    />
                )}
            </div>
            <div className="info">
                <div className="header"></div>
                <h2 className="title">{movie.title}</h2>
                <p >{movie.overview}</p>
                <p >{movie.genres.name}</p>
                <p>Rating: {movie.vote_average}</p>
            </div >
        </div >


    );
};