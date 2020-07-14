import React from "react";
import { observer } from "mobx-react";

//store
import movieStore from "../store/movieStore";

const Item = ({ movie }) => {
  return (
    <>
      <p> {movie.name} </p>
      <button>watched</button>
      <button>Delete</button>
    </>
  );
};

export default observer(Item);
