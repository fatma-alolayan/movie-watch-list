import React from "react";
import { observer } from "mobx-react";

// Stores
import movieStore from "../store/movieStore";
// style
import { DeleteButtonStyled } from "../styles";

const Switch = ({ updatedMovie }) => {
  const change = () => movieStore.change(updatedMovie);

  return <DeleteButtonStyled onClick={change}> Watched</DeleteButtonStyled>;
};

export default observer(Switch);
