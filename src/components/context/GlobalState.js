import { React, useReducer, useEffect, createContext } from "react";
import AppReducer from "./AppReducer";


// Inital State
const initalState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};

// Create Context
export const GlobalContext = createContext(initalState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    })

    // Actions

    const addMovieToWatchList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie }); //Best practice for Reucer types is to use UPPER_CASE
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchList,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}