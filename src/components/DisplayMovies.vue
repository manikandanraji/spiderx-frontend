<template>
  <div class="preview-grid">
    <Preview
      v-if="movie.poster"
      v-for="movie in movies"
      :key="movie.slug"
      :movie="movie"
    ></Preview>
  </div>
</template>

<script>
import Preview from './Preview.vue'

export default {
  name: 'displaymovies',
  components: {
    Preview,
  },
  props: ['movies'],
}
</script>
