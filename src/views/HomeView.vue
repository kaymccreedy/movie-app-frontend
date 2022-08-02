<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Movies",
      movies: [],
      newMovieParams: {},
      showErrorMessage: false,
      errorMessage: "",
      currentMovie: {},
      editMovieParams: {},
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("movies").then((response) => {
        this.movies = response.data;
        console.log("All Movies: ", this.movies);
      });
    },
    newMovie: function () {
      document.querySelector("#movie-create").showModal();
    },
    createMovie: function () {
      axios
        .post("movies/", this.newMovieParams)
        .then((response) => {
          console.log("Success!", response.data);
          this.movies.push(response.data);
          this.newMovieParams = {};
          this.showErrorMessage = false;
        })
        .catch((error) => (this.errorMessage = error))
        .then((this.showErrorMessage = true));
    },
    showMovie: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      this.editMovieParams = movie;
      document.querySelector("#movie-info").showModal();
    },
    updateMovie: function (movie) {
      axios.patch("movies/" + movie.id, this.editMovieParams).then((response) => {
        console.log("Success!", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("movies/" + movie.id).then((response) => {
        console.log("Success", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br />
    <button v-on:click="newMovie()">Add a Movie</button>
    <div>
      <dialog id="movie-create">
        <form method="dialog">
          <h5>Add a Movie</h5>
          <h6>
            Title:
            <input type="text" v-model="newMovieParams.title" />
          </h6>
          <h6>
            Year:
            <input type="text" v-model="newMovieParams.year" />
          </h6>
          <h6>
            Plot:
            <input type="text" v-model="newMovieParams.plot" />
          </h6>
          <h6>
            Director:
            <input type="text" v-model="newMovieParams.director" />
          </h6>
          <button v-on:click="this.createMovie()">Create</button>
          <button>Close</button>
        </form>
      </dialog>
    </div>
    <div>
      <h3>Movies</h3>
    </div>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h5>{{ movie.title }}</h5>
      <button v-on:click="showMovie(movie)">Show Info</button>
      <br />
    </div>
    <dialog id="movie-info">
      <form method="dialog">
        <h5>Edit Movie</h5>
        <h6>
          Title:
          <input type="text" v-model="editMovieParams.title" />
        </h6>
        <h6>
          Year:
          <input type="text" v-model="editMovieParams.year" />
        </h6>
        <h6>
          Plot:
          <input type="text" v-model="editMovieParams.plot" />
        </h6>
        <h6>
          Director:
          <input type="text" v-model="editMovieParams.director" />
        </h6>
        <button v-on:click="updateMovie(currentMovie)">Update</button>
        <button v-on:click="destroyMovie(currentMovie)">Delete</button>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>
