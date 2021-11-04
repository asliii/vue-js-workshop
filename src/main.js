import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'
import Filmler from '@/components/Filmler'
import Movie from '@/components/Movie'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'movie-ticket',  path: '/movie-ticket/:id', component: Movie },
    { name: 'movies',  path: '/', component: Filmler }
  ],
})


const store = new Vuex.Store({
  state: {
    movies: []
  },
  getters: {
    movies: state => {
      return state.movies
    },
    movie_detail: (state) => (id) => {
      return state.movies.find(x => x.id==id)
    }
  },
  mutations: {
    set_movies (state, movies) {
      state.movies = movies
    },
    change_movie (state, movie) {
      console.log(movie)
      let index = state.movies.findIndex(x => x.id == movie.id)
      state.movies[index] = movie
    }
  },
  actions: {
    set_movies (context, movies) {
      context.commit('set_movies', movies)
    },
    change_movie (context, movie) {
      context.commit('change_movie', movie)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

