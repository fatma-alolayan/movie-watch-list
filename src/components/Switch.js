import React from "react";
import { observer } from "mobx-react";

// Stores
import movieStore from "../store/movieStore";

const Switch = ({ updatedMovie }) => {
  const change = () => movieStore.change(updatedMovie);

  return (
    <button
      type="button"
      class="btn btn-success"
      style={{
        width: "90px",
        height: "35px",
        margin: "3px",
        marginRight: "0px",
      }}
      onClick={change}
    >
      {updatedMovie.watch ? "Unwatch" : "Watched"}
    </button>
  );
};

export default observer(Switch);
