<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/movies">Movies</router-link>
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
</style>
