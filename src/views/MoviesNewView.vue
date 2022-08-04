<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createMovie: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/movies");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>

<template>
  <div class="movies-new">
    <img :src="`https://http.dog/${status}.jpg`" width="500" v-if="status.length !== 0" />
    <form v-on:submit.prevent="createMovie()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <h1>New Movie</h1>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newMovieParams.title" />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" v-model="newMovieParams.director" />
      </div>
      <div>
        <label>Year:</label>
        <input type="text" v-model="newMovieParams.year" />
      </div>
      <div>
        <label>Plot:</label>
        <input type="text" v-model="newMovieParams.plot" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
