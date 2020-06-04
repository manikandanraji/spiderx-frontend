<template>
  <loading
    :active.sync="isLoading"
    :color="loader.color"
    :background-color="loader.bg"
    :loader="loader.loader"
    :is-full-page="loader.fullpage"
  ></loading>
</template>

<script>
import Loading from 'vue-loading-overlay'

export default {
  props: ['isLoading'],
  components: {
    Loading,
  },
  data() {
    return {
      loader: {
        color: '#1DFF8F',
        bg: '#141519',
        loader: 'dots',
        fullpage: true,
      },
    }
  },
}
</script>

<style></style>
