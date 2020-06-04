<template>
  <div>
    <DisplayMovies :movies="results" />
    <Loader :isLoading="isLoading" />
  </div>
</template>

<script>
import axios from 'axios'
import db from '../firebase'
import DisplayMovies from '../components/DisplayMovies.vue'
import Loader from '../components/Loader.vue'

export default {
  name: 'DisplayByGenre',
  components: {
    DisplayMovies,
    Loader,
  },
  props: ['genre'],
  data() {
    return {
      results: [],
    }
  },
  computed: {
    isLoading() {
      return this.results.length ? false : true
    },
  },
  async created() {
    const snapshot = await db
      .collection(`genres/${this.genre}/results`)
      .orderBy('imdb_score', 'desc')
      .limit(30)
      .get()
    snapshot.forEach((doc) => this.results.push(doc.data()))
  },
}
</script>
