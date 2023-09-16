import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import {Home} from "./components/home";
import {MovieDetails} from "./components/movieDetails";
import viteLogo from "/vite.svg";
// import "./App.css";, Routes

function App() {

  return (
    
    <Router>
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route  path="/movie/:id" element={<MovieDetails/>} />
    </Routes>
    </Router>
  );
}

export default App;
