import { useEffect, useState, useContext } from "react";
import { FetchTopRatedData } from "../useApi";
import { MovieContext } from "../movieContext";
import { MovieCard } from "./movieCard";

export default function MovieDisplay({ props }) {
  const { movieData, setMovieData, loading, setLoading, error, setError } =
    useContext(MovieContext);

  useEffect(() => {
    const ratedData = async () => {
      setLoading(true);
      FetchTopRatedData()
        .then((data) => {
          console.log(data);
          setMovieData(data);
          setLoading(false);
        })
        .catch((error) => {
          // setLoading(false);
          console.log(error);
        });
    };
    ratedData();
  }, []);

  if (loading) {
    return <p> Loading data....</p>;
    // } else {
    //   setMovieData(data);
    //   // return data
    //   console.log(data);
  } else if (error) {
    return <p>Error loading data</p>;
  }

  const topTen = movieData?.results?.slice(0, 10);

  return (
    <div className="px-5 py-3 sm:px-20 sm:py-10">
      <div className="flex justify-between py-4">
        <h1 className="font-bold sm:text-3xl">Featured Movie</h1>
        <p className=" text-red-600 font-bold text-xs sm:text-base">
          See more {">"}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-16 sm:gap-y-20 py-4 sm:py-7">
        {topTen &&
          topTen.map((movie, index) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
}
