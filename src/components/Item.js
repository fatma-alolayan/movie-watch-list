import React from "react";
import { observer } from "mobx-react";

//store
import movieStore from "../store/movieStore";

const Item = ({ movie }) => {
  return (
    <>
      <li className="list-group-item">
        <p> {movie.name} </p>
        <button>watched</button>
        <button>Delete</button>
      </li>
    </>
  );
};

export default observer(Item);
