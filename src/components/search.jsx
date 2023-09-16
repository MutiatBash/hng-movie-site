import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../movieContext";
import searchicon from "../assets/Search.svg";
import { SearchMovieData } from "../useApi";

export const Search = () => {
  const [search, setSearch] = useState("");
//   function handleSearch(value) {
//     // useEffect(() => {
//     //   const searchData = async () => {
//     // setLoading(true);
//     SearchMovieData({ title: value })
//       .then((data) => {
//         console.log(data);
//         setSearchResults(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         console.log(error);
//       });
//     //   };
//     //   searchData();
//     // }, []);

//     // setSearch(e.target.value);
//     // console.log(search);
//   }

//   const {
//     searchResults,
//     setSearchResults,
//     loading,
//     setLoading,
//     error,
//     setError,
//   } = useContext(MovieContext);

//   if (loading) {
//     return <p> Loading data....</p>;
//   } else if (error) {
//     return <p>Error loading data</p>;
//   }

  return (
    <div className="sm:w-[45%]">
      <div className="flex justify-between items-center py-3 relative">
        <input
          placeholder="What do you want to watch ?"
          className="bg-transparent  border rounded-lg p-2 w-[100%]"
          //   value={search}
          //   onChange={handleSearch}
        />

        <img src={searchicon} className="absolute right-3" />
      </div>
      {/* <div>
        {searchResults &&
          searchResults.map((movies) => {
            return (
              <div>
                <p>{movies.title}</p>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};
