import React from "react";
import { observer } from "mobx-react";

//store
import movieStore from "../store/movieStore";

// component
import DeleteMovie from "./DeleteMovie";
import Switch from "./Switch";

const Item = ({ movie }) => {
  return (
    <>
      <p> {movie.name} </p>

      <Switch updatedMovie={movie} />
      <DeleteMovie movieId={movie.id} />
    </>
  );
};

export default observer(Item);
