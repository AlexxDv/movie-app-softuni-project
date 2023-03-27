import { React, useReducer, useEffect, createContext } from "react";
import AppReducer from "./AppReducer";


// Inital State
const initalState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
    token: localStorage.getItem("token"),
    isLoggedIn: false
};

// Create Context
export const GlobalContext = createContext(initalState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
        localStorage.setItem("token", state.token);
        if (state.token) {
            dispatch({ type: "LOGIN" });
        } else {
            dispatch({ type: "LOGOUT" });
        }
    }, [state]);


    // Actions
    const setToken = (token) => {
        dispatch({ type: "SET_TOKEN", payload: token });
    }

    const setIsLoggedIn = (isLoggedIn) => {
        dispatch({ type: "SET_ISLOGGEDIN", payload: isLoggedIn });
      };

    const logout  = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setToken(null);
        dispatch({ type: "LOGOUT" });
      };

    const addMovieToWatchList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie }); //Best practice for Reducer types is to use UPPER_CASE
    }

    const removeMovieFromWatchList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    }

    const moveMovieToWatchList = (movie) => {
        dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie });
    }

    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchList,
            removeMovieFromWatchList,
            addMovieToWatched,
            moveMovieToWatchList,
            removeMovieFromWatched,
            token: state.token,
            setToken,
            isLoggedIn: state.isLoggedIn,
            logout,
            setIsLoggedIn
        }}>
            {children}
        </GlobalContext.Provider>
    )
}