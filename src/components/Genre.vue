<template>
  <div class="genres" v-if="show">
    <span @click="viewByGenre(genre)" v-for="genre in genres">
      {{ genre }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'genre',
  props: ['show'],
  data() {
    return {
      genres: [
        'Action',
        'Comedy',
        'Animation',
        'Thriller',
        'Adventure',
        'Documentary',
        'Drama',
        'Horror',
        'SciFi',
        'War',
        'Crime',
        'Mystery',
      ],
    }
  },
  methods: {
    viewByGenre(genre) {
      this.$router.push({
        name: 'genre',
        params: { genre: genre.toLowerCase() },
      })
      this.show = false
    },
  },
}
</script>

<style scoped>
.genres {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  position: absolute;
  top: 50px;
  left: 350px;
  background: #141729;
  z-index: 33;
  line-height: 2rem;
  border-radius: 4px;
}

.genres span {
  margin-right: 1.2rem;
  text-align: justify;
  cursor: pointer;
}

span:hover {
  color: #1dff86;
}

@media screen and (max-width: 820px) {
  .genres {
    left: 250px;
  }
}

@media screen and (max-width: 740px) {
  .genres {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 530px) {
  .genres {
    left: 50px;
    top: 30px;
  }
}

@media screen and (max-width: 480px) {
  .genres {
    left: 10px;
  }
}
</style>
