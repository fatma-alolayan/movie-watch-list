import React from "react";
import { observer } from "mobx-react";

// Stores
import movieStore from "../store/movieStore";
// style
import { DeleteButtonStyled } from "../styles";

const Deletemovie = ({ movieId }) => {
  const handleDelete = () => {
    movieStore.deleteItem(movieId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(Deletemovie);
