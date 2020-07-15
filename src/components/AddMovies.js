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
    event.preventDefault();
    movieStore.addMovie(movie);
    document.forms["addForm"]["name"].value = "";
    document.forms["addForm"]["image"].value = "";
  };

  return (
    <form id="addForm" onSubmit={handelSubmit}>
      <div
        class="input-group  input-group-sm mb-3"
        style={{ width: "300px", marginLeft: "5px" }}
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
        </div>
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
            class="input-group-text"
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
