<script>
export default {
  data: function () {
    return {
      loggedIn: "",
    };
  },
  watch: {
    $route: function () {
      this.loggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/movies">Movies</router-link>
    <div class="small">
      <div v-if="!loggedIn">
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/signup">Signup</router-link>
      </div>
      <div v-if="loggedIn">
        <router-link to="/logout">Logout</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app,
button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  margin: 15px;
  font-size: small;
}

body {
  width: 75vw;
  margin: auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.small {
  font-size: small;
}
</style>
