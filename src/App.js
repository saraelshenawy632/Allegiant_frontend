import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Reviews from "./Components/Reviews/Reviews";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import NotFound from "./Components/Notfound/Notfound";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cast" element={<Hero />} />
        <Route path="moviedetail" element={<MovieDetails />} />
        <Route path="review" element={<Reviews />} />
        <Route path="about" element={<About />} />
        <Route path="movies" element={<Movies />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
