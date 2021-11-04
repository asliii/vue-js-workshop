<template>
    <div class="container">
      <div class="row">
        <div v-for="(movie, i) in movies" :key="i" class="col-md-3 mb-3">
          <div class="card" style="min-height: 600px">
            <img class="card-img-top" :src="movie.Poster ? movie.Poster: '/images/gorsel-hazirlaniyor.jpg'" :alt="movie.Title">
            <div class="card-body">
              <h5 class="card-title">{{ movie.Title }}</h5>
              <p class="card-text">{{ movie.Year }}</p>
              <p class="card-text">{{ movie.Runtime }}</p>
              <router-link :to="{ name: 'movie-ticket', params: { id: movie.id } }" class="btn btn-success"><span class="text-white">Bilet Al</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Filmler',
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    let self = this
    let movies = this.$store.getters.movies
    if (movies.length) {
      self.movies = movies
    } else {
      axios.get('/json/movies.json').then(res => {
        self.movies = res.data
        self.$store.dispatch('set_movies', res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
