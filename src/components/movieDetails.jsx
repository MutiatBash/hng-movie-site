import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { FetchMovieData } from "../useApi";
import { Button } from "./button";
// import list from "../assets/list.svg";
import { MovieContext } from "../movieContext";
import { Sidebar } from "./sidebar";

export const MovieDetails = ({}) => {
  const {
    movieDetails,
    setMovieDetails,
    loading,
    setLoading,
    error,
    setError,
  } = useContext(MovieContext);

  const { id } = useParams();

  useEffect(() => {
    const detailsData = async () => {
      // setLoading(true);
      FetchMovieData({ id })
        .then((data) => {
          console.log(data);
          setMovieDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        });
    };
    detailsData();
  }, []);

  if (loading) {
    return <p> Loading data....</p>;
  } else if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="flex relative justify-between min-h-full ">
      <Sidebar />
      <div className="w-4/5 ml-auto">
        {movieDetails && (
          <div className="p-4 sm:p-10">
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
              data-testid="movie-poster"
              className="rounded-3xl sm:h-[30%]"
            />
            <div className="flex-col sm:flex-row py-3 space-y-2">
              <div className="flex flex-wrap sm:flex-row py-3 justify-between">
                <div className="flex flex-wrap sm:flex-row py-2 sm:py-3 justify-start sm:justify-between items-center gap-3 sm:gap-6">
                  <p className="font-bold" data-testid="movie-title">
                    {movieDetails?.title}
                  </p>
                  {/* <span className="font-xl">.</span> */}
                  <p className="" data-testid="movie-release-date">
                    {movieDetails?.release_date}
                  </p>
                  <p className="font-bold">PG-13</p>
                  <p className="font-bold" data-testid="movie-runtime">
                    {movieDetails?.runtime}
                  </p>
                  <p className="text-xs text-slate-500">
                    {movieDetails?.genres?.name}
                  </p>
                </div>
                <div className="flex justify-between text-sm gap-2">
                  <p>{movieDetails?.vote_average?.toFixed(2)}</p>
                  <p>|</p>
                  <p>350k</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="sm:w-3/5 justify-between space-y-4 sm:space-y-8">
                <p data-testid="movie-overview">{movieDetails?.overview}</p>
                <p>
                  Director :{" "}
                  <span className="text-red-600">Joseph Kosinski</span>
                </p>
                <p>
                  Writers :{" "}
                  <span className="text-red-600">
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <p>
                  Stars :{" "}
                  <span className="text-red-600">
                    Tom Cruise, Jennifer Conelly, Miles Teller
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:border rounded">
                  <Button
                    text={`Top rated movie #${movieDetails.id}`}
                    className="p-3 text-center bg-red-600 "
                  />
                  <p>Awards 9 nominations</p>
                  {/* <img src={list}/> */}
                </div>
              </div>
              <div className="w-full sm:w-2/5">
                <div className="space-y-3">
                  <Button
                    text={"See Showtimes"}
                    className="p-3 text-center w-full bg-red-600"
                  />
                  <Button
                    text={"More watch options"}
                    className="p-3 text-center text-black w-full bg-red-50 border border-red-600"
                  />
                </div>
                <img />
              </div>
            </div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};
