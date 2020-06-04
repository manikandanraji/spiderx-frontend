<template>
  <router-link
    :to="{
      name: 'movie',
      params: { slug: movie ? movie.slug : '', passMovie: movie },
    }"
  >
    <img v-bind:src="movie && movie.poster" :alt="movie && movie.title" />
  </router-link>
</template>

<script>
export default {
  props: ['movie'],
}
</script>

<style scoped>
img {
  border-radius: 4px;
  box-shadow: var(--bs);
}

@media screen and (max-width: 640px) {
  img {
    width: 150px;
  }
}

@media screen and (max-width: 530px) {
  img {
    width: 120px;
  }
}

@media screen and (max-width: 430px) {
  img {
    width: 100px;
  }
}
</style>
