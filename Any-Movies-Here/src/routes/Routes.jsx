import React from "react";
import { createRoutesFromElements, Route } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import IMDB from "../Pages/IMDB";
import NotFound from "../components/NotFound";
import Favorite from "../Pages/Favorite";
import MovieDetails from "../components/MovieDetails";

const Routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="favorite" element={<Favorite/>} />
    <Route path="imdbtop250" element={<IMDB />} />
    <Route path="moviedetails/:imdbID" element={<MovieDetails />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

export default Routes;
