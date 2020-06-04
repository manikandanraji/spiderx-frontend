import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import SearchResult from '../views/SearchResult.vue'
import DisplayByGenre from '../views/DisplayByGenre.vue'
import Imdb from '../views/Imdb.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/top-imdb',
    name: 'imdb',
    component: Imdb,
  },
  {
    path: '/movie/:slug',
    name: 'movie',
    component: Movie,
    props: true,
  },
  {
    path: '/search/:searchterm',
    name: 'search-result',
    component: SearchResult,
    props: true,
  },
  {
    path: '/genre/:genre',
    name: 'genre',
    component: DisplayByGenre,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
