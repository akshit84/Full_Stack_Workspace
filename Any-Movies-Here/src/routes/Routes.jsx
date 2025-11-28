import React from "react";
import { createRoutesFromElements, Navigate, Route } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import IMDB from "../Pages/IMDB";
import NotFound from "../components/NotFound";
import Favorite from "../Pages/Favorite/Favorite";
import MovieDetails from "../components/MovieDetails";
import LogIN from "../components/LogIN";
import Register from "../components/Register";

const Routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Navigate to="/signin" replace />} />

    <Route path="register" element={<Register />} />
    <Route path="login" element={<LogIN />} />

    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="favorite" element={<Favorite />} />
      <Route path="imdbtop250" element={<IMDB />} />
      <Route path="moviedetails/:imdbID" element={<MovieDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </>
);

export default Routes;
