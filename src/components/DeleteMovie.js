import React from "react";
import { observer } from "mobx-react";

// Stores
import movieStore from "../store/movieStore";

const Deletemovie = ({ movieId }) => {
  const handleDelete = () => {
    movieStore.deleteItem(movieId);
  };
  return (
    <button
      type="button"
      class="btn btn-danger"
      style={{
        width: "90px",
        height: "35px",
        margin: "3px",
        marginRight: "0px",
        float: "right",
      }}
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default observer(Deletemovie);
