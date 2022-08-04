<script>
import axios from "axios";

export default {
  data: function () {
    return {
      editMovieParams: {},
      errors: [],
    };
  },
  created: function () {
    this.showMovie();
  },
  methods: {
    showMovie: function () {
      axios.get("/movies/" + this.$route.params.id).then((response) => {
        this.editMovieParams = response.data;
        console.log("Movie", this.movie);
      });
    },
    editMovie: function () {
      axios
        .patch("/movies/" + this.$route.params.id, this.editMovieParams)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("flashMessage", "Movie Updated");
          this.$router.push("/movies");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyMovie: function () {
      axios.delete("/movies/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>

<template>
  <div class="movies-edit">
    <form v-on:submit.prevent="editMovie()">
      <h1>Edit Movie</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editMovieParams.title" />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" v-model="editMovieParams.director" />
      </div>
      <div>
        <label>Year:</label>
        <input type="text" v-model="editMovieParams.year" />
      </div>
      <div>
        <label>Plot:</label>
        <input type="text" v-model="editMovieParams.plot" />
      </div>
      <input type="submit" value="Submit" />
      <br />
      <button class="link" v-on:click="destroyMovie">Delete Movie</button>
    </form>
  </div>
</template>
