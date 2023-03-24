import { React, useReducer, useEffect, createContext } from "react";


// Inital State
const initalState = {
    watchlist: [],
    watched: [],
};

// Create Context
export const GlobalContext = createContext(initalState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);
}