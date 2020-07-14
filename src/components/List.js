import React, { useState } from "react";
import { observer } from "mobx-react";
//store
import movieStore from "../store/movieStore";
// components
import AddMovies from "./AddMovies";
import Item from "./Item";
//styles
import { Container, ListStyle } from "../styles";

const List = () => {
  const watchList = movieStore.movies.filter((movie) => !movie.watch);
  const watched = movieStore.movies.filter((movie) => movie.watch);

  const list = watchList.map((movie) => <Item movie={movie} key={movie.id} />);
  const wList = watched.map((movie) => <Item movie={movie} key={movie.id} />);

  return (
    <>
      <Container>
        <AddMovies />
        <ul className="list-group">
          <ListStyle>{list}</ListStyle>
          <ListStyle>{wList}</ListStyle>
        </ul>
      </Container>
    </>
  );
};

export default observer(List);
