import React, { useState } from "react";
import { observer } from "mobx-react";
//store
import movieStore from "../store/movieStore";
// components
import AddMovies from "./AddMovies";
import Item from "./Item";
//styles
import { Container, ListStyle } from "../styles";

const List = () => {
  const [queryList, setQueryList] = useState("");
  const [queryWatched, setQueryWatched] = useState("");

  const watchList = movieStore.movies.filter((movie) => !movie.watch);
  const watched = movieStore.movies.filter((movie) => movie.watch);

  // search
  const filterList = watchList.filter((movie) =>
    movie.name.toLocaleUpperCase().includes(queryList.toLocaleUpperCase())
  );

  const filterWatched = watched.filter((movie) =>
    movie.name.toLocaleUpperCase().includes(queryWatched.toLocaleUpperCase())
  );

  const list = filterList.map((movie) => <Item movie={movie} key={movie.id} />);
  const wList = filterWatched.map((movie) => (
    <Item movie={movie} key={movie.id} />
  ));

  return (
    <>
      <Container>
        <AddMovies />

        <ListStyle>
          <h4 style={{ width: "400px", margin: "10px" }}>
            Watchlist {watchList.length}
          </h4>
          <h4 style={{ width: "400px", margin: "10px" }}>
            Watched {wList.length}
          </h4>
        </ListStyle>

        <ListStyle>
          <ul class="list-group" style={{ width: "400px", margin: "10px" }}>
            <li class="list-group-item">
              <input
                type="search"
                placeholder="Search movie .."
                onChange={(event) => setQueryList(event.target.value)}
              ></input>
            </li>
            {list.length === 0 ? "Nothing found" : [list]}
          </ul>

          <ul class="list-group" style={{ width: "400px", margin: "10px" }}>
            <li class="list-group-item">
              <input
                type="search"
                placeholder="Search movie .."
                onChange={(event) => setQueryWatched(event.target.value)}
              ></input>
            </li>
            {wList.length === 0 ? "Nothing found" : [wList]}
          </ul>
        </ListStyle>
      </Container>
    </>
  );
};

export default observer(List);
