import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import movieStore from "../store/movieStore";

const AddMovies = () => {
  const [movie, setMovie] = useState({ name: "" });

  const handelChange = (event) => {
    const newMovie = { ...movie, [event.target.name]: event.target.value };
    setMovie(newMovie);
  };

  const handelSubmit = (event) => {
    // event.preventDefault();
    movieStore.addMovie(movie);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Movie"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        name="name"
        onChange={handelChange}
        required
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handelSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default observer(AddMovies);
