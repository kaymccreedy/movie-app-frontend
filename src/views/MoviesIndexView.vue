<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Movies",
      movies: [],
      users: [],
      currentMovie: [],
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
  },
};
</script>

<template>
  <div>
    <h3>Movies</h3>
  </div>
  <div v-for="movie in movies" v-bind:key="movie.id">
    <router-link :to="`/movies/${movie.id}`">{{ movie.title }}</router-link>
    <br />
  </div>
  <br />
  <br />
  <router-link :to="`/movies/new`">Add a Movie</router-link>
</template>
