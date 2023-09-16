import {Hero}from "./hero"
import {Footer}from "./footer"
import MovieDisplay from "./movieDisplay";

export const Home = () => {
  return (
    <div>
      <Hero/>
      <MovieDisplay/>
      <Footer/>
    </div>
  );
};
