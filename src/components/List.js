import React, { useState } from "react";
import { observer } from "mobx-react";
//store
import movieStore from "../store/movieStore";
// components
import AddMovies from "./AddMovies";
import Item from "./Item";
//styles
import { Container } from "../styles";

const List = () => {
  const list = movieStore.movies.map((movie) => (
    <Item movie={movie} key={movie.id} />
  ));

  return (
    <>
      <Container>
        <AddMovies />
        <ul className="list-group">
          <p>{list}</p>
        </ul>
      </Container>
    </>
  );
};

export default observer(List);
