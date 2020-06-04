<template>
  <nav>
    <h1>
      <router-link :to="{ name: 'home' }">SpiderX </router-link>
    </h1>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'imdb' }">IMDB</router-link>
      </li>
      <li @click="show = !show">Genre</li>
      <Genre :show="show" />
    </ul>
  </nav>
</template>

<script>
import Genre from './Genre.vue'

export default {
  name: 'navbar',
  components: {
    Genre,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    openGenre() {
      this.$modal.show('genres')
    },
  },
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
  position: relative;
}

h1 {
  text-transform: uppercase;
  position: relative;
  top: 6px;
  color: var(--accentColor);
}
ul {
  display: flex;
  align-items: center;
  margin-left: 4rem;
  list-style-type: none;
}

li {
  margin: 0 1rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 1.2px;
  cursor: pointer;
}

.router-link-exact-active {
  color: var(--accentColor);
}

@media screen and (max-width: 650px) {
  li {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 530px) {
  ul {
    margin-left: 3rem;
    position: relative;
    top: 3px;
  }
}
</style>
