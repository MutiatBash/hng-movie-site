import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

// const { movie_id } = useParams();
const apiKey = "7eb8bb10990471d4a7c6f41bcbd3f68b";
const TopRatedEndpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
const MovieEndpoint = (params) =>
  `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&page=1`;
const SearchEndpoint = (params) =>
  `https://api.themoviedb.org/3/search/movie/query=${params.title}?api_key=${apiKey}&language=en-US&page=1`;

const fetchData = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWI4YmIxMDk5MDQ3MWQ0YTdjNmY0MWJjYmQzZjY4YiIsInN1YiI6IjY1MDFiYTE1ZWZlYTdhMDBmZDFjMDNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G0Tdr9q5QXn6B_PNEonCWqWkjizTaNB9pOpm3bIvNZU",
    },
  };
  try {
    const response = await fetch(url, options);
    const formatted = await response.json();
    return formatted;
    // console.log(formatted)
  } catch (error) {
    console.error(error);
  }
};

// Rated data for movies
export const FetchTopRatedData = () => {
  return fetchData(TopRatedEndpoint);
};

// Movies Data
export const FetchMovieData = (params) => {
  return fetchData(MovieEndpoint(params));
};

// Movies Data
export const SearchMovieData = (params) => {
  return fetchData(SearchEndpoint(params));
};

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(url);
//       const formatted = await response.json();
//       setData(formatted);
//       setLoading(false);
//       // setError(null);
//     } catch (error) {
//       setError(`${error} ,could not get data from API`);
//     }
//   };
//   fetchData();
// }, [url]);
// return { data, loading, error };
// };

// useEffect(() => {
//   console.log("fetching data");
//   fetch(url, options)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.error(err));
