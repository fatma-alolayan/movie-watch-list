import { decorate, observable } from "mobx";

// data
import movies from "../movie";

class MovieStore {
  movies = movies;

  addMovie = (newMovie) => {
    // if (this.movies.length === 0) x = 0;
    // else x = this.movies.length - 1;

    newMovie.id = this.movies[this.movies.length - 1].id + 1;
    newMovie.watch = false;
    this.movies.push(newMovie);
  };

  deleteItem = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== +movieId);
  };

  change = (updatedMovie) => {
    const movie = this.movies.find((movie) => movie.id === updatedMovie.id);
    movie.watch = !movie.watch;

    // for (const key in item) item[key] = updatedItem[key];
  };
}

decorate(MovieStore, { movies: observable });

const movieStore = new MovieStore();

export default movieStore;
