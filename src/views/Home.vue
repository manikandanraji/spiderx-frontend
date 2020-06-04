<template>
  <div>
    <Search />
    <h2>Trending Movies</h2>
    <DisplayMovies :movies="movies" />
  </div>
</template>

<script>
import db from '../firebase'
import DisplayMovies from '../components/DisplayMovies.vue'
import Search from '../components/SearchBar.vue'

export default {
  components: {
    Search,
    DisplayMovies,
  },
  data() {
    return {
      movies: [],
    }
  },
  created() {
    const result_ref = db.collection('trending')
    result_ref
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => this.movies.push(doc.data()))
      )
      .catch((err) => console.log(`Error occured: ${err}`))
  },
}
</script>

<style scoped>
h2 {
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-top: 1.2rem;
  color: var(--accentColor);
}
</style>
