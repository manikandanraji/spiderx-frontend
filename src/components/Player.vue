<template>
  <div>
    <video-player
      v-if="jwsrc"
      ref="videoPlayerRef"
      class="vjs-custom-skin vjs-big-play-centered"
      :options="playerOptions"
    >
    </video-player>
    <iframe
      class="iframe-embed"
      v-if="vidcloudsrc"
      :src="vidcloudsrc"
      allowfullscreen="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['jwsrc', 'vidcloudsrc', 'playerOptions'],
}
</script>

<style scoped>
iframe {
  display: block;
  border: none;
  height: 520px;
  width: 100%;
}

video,
iframe {
  box-shadow: var(--bs);
}

@media screen and (max-width: 530px) {
  iframe {
    height: 400px;
  }
}
</style>
