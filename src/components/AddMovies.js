import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import movieStore from "../store/movieStore";

const AddMovies = () => {
  const [movie, setMovie] = useState({ name: "" });
  const [msg, setMsg] = useState("");

  const handelChange = (event) => {
    const newMovie = { ...movie, [event.target.name]: event.target.value };
    setMovie(newMovie);
    setMsg("");
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const checkMovie = (movies) => {
      return movie.name === movies.name;
    };

    const movieExists = movieStore.movies.some(checkMovie);

    !movieExists ? movieStore.addMovie(movie) : setMsg("movie is exists ");
    document.forms["addForm"]["name"].value = "";
    document.forms["addForm"]["image"].value = "";
  };

  return (
    <form id="addForm" onSubmit={handelSubmit} style={{ width: "500px" }}>
      <div
        class="input-group  input-group-sm mb-3"
        style={{ marginLeft: "5px", display: "block" }}
      >
        <div className="form-group row">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Movie name"
            onChange={handelChange}
            required
            onSubmit="this.value =``"
          />
        </div>{" "}
        <p style={{ color: "red" }}>{msg}</p>
        <div className="form-group row">
          <input
            type="text"
            name="image"
            class="form-control"
            placeholder="Movie image"
            onChange={handelChange}
            required
            onSubmit="this.value =``"
          />
        </div>
        <div className="form-group">
          <button
            class="input-group-text  "
            id="basic-addon2"
            type="submit"
            onSubmit={handelSubmit}
          >
            + Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default observer(AddMovies);
