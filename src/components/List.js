import React, { useState } from "react";
import { observer } from "mobx-react";
//store
import movieStore from "../store/movieStore";
// components
import AddMovies from "./AddMovies";
import Item from "./Item";

const List = () => {
  const list = movieStore.movies.map((movie) => (
    <Item movie={movie} key={movie.id} />
  ));

  return (
    <>
      <AddMovies />
      <p>{list}</p>
    </>
  );
};

export default observer(List);
