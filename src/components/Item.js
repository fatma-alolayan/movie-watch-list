import React, { useState } from "react";
import { observer } from "mobx-react";

// component
import DeleteMovie from "./DeleteMovie";
import Switch from "./Switch";

// Style
import { Img, Buttoncontainer } from "../styles";

const Item = ({ movie }) => {
  const [show, setShow] = useState(false);

  return (
    <li className="list-group-item" style={{ display: "flex" }}>
      <p onClick={() => setShow(!show)}> {movie.name} </p>
      {show ? <Img src={movie.image} alt="movie image" /> : null}
      <Buttoncontainer>
        <Switch updatedMovie={movie} />
        <DeleteMovie movieId={movie.id} />
      </Buttoncontainer>
    </li>
  );
};

export default observer(Item);
