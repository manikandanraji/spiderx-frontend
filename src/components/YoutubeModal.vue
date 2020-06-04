<template>
  <modal name="youtube" :width="820" :height="500">
    <iframe :src="id"></iframe>
  </modal>
</template>

<script>
export default {
  name: 'youtube-modal',
  props: ['id'],
}
</script>

<style scoped>
iframe,
video {
  width: 100%;
  height: 100%;
}

iframe {
  border: none;
}
</style>
