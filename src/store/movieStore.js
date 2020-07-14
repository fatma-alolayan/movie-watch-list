import { decorate, observable } from "mobx";

// data
import movies from "../movie";

class MovieStore {
  movies = movies;

  addMovie = (newMovie) => {
    newMovie.id = this.movies[this.movies.length - 1].id + 1;
    newMovie.watch = false;
    this.movies.push(newMovie);
  };
}

decorate(MovieStore, { movies: observable });

const movieStore = new MovieStore();

export default movieStore;
