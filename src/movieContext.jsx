import { useState, useEffect, createContext, useContext } from "react";
import * as React from "react";
export const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  return (
    <MovieContext.Provider
      value={{
        movieData,
        movieDetails,
        searchResults,
        setSearchResults,
        setMovieDetails,
        setMovieData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
