import logo from "../assets/Logo.svg";
import menu from "../assets/Menu.svg";
import { useState, useContext } from "react";
import { MovieContext } from "../movieContext";
import { SearchMovieData } from "../useApi";
import { Search } from "./search";

export const Navbar = () => {
  const { searchResults, setSearchResults } = useContext(MovieContext);

// useEffect(() => {
//   const detailsData = async () => {
//     // setLoading(true);
//     SearchMovieData({ movie })
//       .then((data) => {
//         console.log(data);
//         setMovieDetails(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         console.log(error);
//       });
//   };
//   detailsData();
// }, []);

// if (loading) {
//   return <p> Loading data....</p>;
// } else if (error) {
//   return <p>Error loading data</p>;
// }


  return (
    <div className="flex justify-between items-center py-3">
      <div className="">
        <img src={logo} />
      </div>
      <Search />
      <div className="flex gap-5 items-center">
        <p>
          <a href="#" className="text-white">
            Sign in
          </a>
        </p>
        <img src={menu} />
      </div>
    </div>
  );
};
