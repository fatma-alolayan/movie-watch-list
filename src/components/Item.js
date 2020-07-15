import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import movieStore from "../store/movieStore";

// component
import DeleteMovie from "./DeleteMovie";
import Switch from "./Switch";

// Style
import { Img } from "../styles";

const Item = ({ movie }) => {
  const [show, setShow] = useState(false);

  return (
    <li class="list-group-item" style={{ display: "flex" }}>
      <p onClick={() => setShow(!show)}> {movie.name} </p>
      {show ? <Img src={movie.image} alt="movie image" /> : null}
      <Switch updatedMovie={movie} />
      <DeleteMovie movieId={movie.id} />{" "}
    </li>
  );
};

export default observer(Item);
