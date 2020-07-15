import React from "react";
import { observer } from "mobx-react";

// Stores
import movieStore from "../store/movieStore";

const Switch = ({ updatedMovie }) => {
  const change = () => movieStore.change(updatedMovie);

  return (
    <button
      type="button"
      className="btn btn-success"
      style={{
        width: "90px",
        height: "35px",
        margin: "3px",
        // marginLeft: "100px",
      }}
      onClick={change}
    >
      {updatedMovie.watch ? "Unwatch" : "Watched"}
    </button>
  );
};

export default observer(Switch);
