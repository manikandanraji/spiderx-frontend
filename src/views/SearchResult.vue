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
  name: 'SearchResult',
  components: {
    DisplayMovies,
    Loader,
  },
  props: ['searchterm'],
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
  created() {
    const docRef = db.collection('movies').doc(`${this.searchterm}`)

    docRef.onSnapshot(async (doc) => {
      if (doc.exists) {
        docRef
          .collection('results')
          .orderBy('imdb_score', 'desc')
          .orderBy('slug', 'desc')
          .onSnapshot((snapshot) => {
            const docs = []
            snapshot.forEach((doc) => docs.push(doc.data()))
            this.results = docs
          })
      } else {
        const dataString = `project=default&spider=searchmovies&searchterm=${this.searchterm}`

        await axios.post(process.env.VUE_APP_SPIDERX_HEROKU, dataString)
      }
    })
  },
}
</script>
