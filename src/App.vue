<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand" :class="$route.path == '/' ? 'active': ''">Filmler</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar .active {
    background: #000;
    color: white !important;
    padding: 8px;
    border-radius: 5px;
}

@import'~bootstrap/dist/css/bootstrap.css' //Yeni
</style>