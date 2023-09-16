import { Link } from "react-router-dom";
import tomato from "../assets/tomato.svg";
import imdb from "../assets/imdb.svg";

export const MovieCard = ({ movie, genreNames }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div data-testid="movie-card" key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          data-testid="movie-poster"
        />
        <div className="flex-col py-3 space-y-3">
          <p
            className="text-xs text-slate-500"
            data-testid="movie-release-date"
          >
            USA, {new Date(movie.release_date).getFullYear()}
          </p>

          <p className="font-bold" data-testid="movie-title">
            {movie.title}
          </p>
          <div className="flex justify-between">
            <div className="flex justify-between items-center text-sm space-x-3">
              <img src={imdb} />
              <p>86.0/100</p>
            </div>
            <div className="flex justify-between items-center text-sm space-x-3">
              <img src={tomato} />
              <p>{movie.vote_average * 10}%</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            {movie.genre_ids.join("", "")}
          </p>
        </div>
      </div>
    </Link>
  );
};
