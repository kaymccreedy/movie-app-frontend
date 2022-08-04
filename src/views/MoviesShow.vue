<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: [],
    };
  },
  created: function () {
    this.showMovie();
  },
  methods: {
    showMovie: function () {
      axios.get("/movies/" + this.$route.params.id).then((response) => {
        this.movie = response.data;
        console.log("Movie", this.movie);
      });
    },
  },
};
</script>

<template>
  <div class="movie">
    <h4>{{ movie.title }}</h4>
    <p>{{ movie.director }} | {{ movie.year }}</p>
    <p>{{ movie.plot }}</p>
    <br />
    <router-link to="/movies">Back to Movies</router-link>
    |
    <router-link :to="`/movies/${movie.id}/edit`">Edit Movie</router-link>
  </div>
</template>
