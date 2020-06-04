<template>
  <div>
    <Player
      :jwsrc="jwsrc"
      :vidcloudsrc="vidcloudsrc"
      :playerOptions="playerOptions"
    />
    <div class="container">
      <img class="poster" :src="movie.poster" :alt="movie.title" />

      <div class="movie-info">
        <h2>{{ movie.title }}</h2>

        <div class="movie-info__meta">
          <span>{{ movie.year }}</span>
          <span>{{ movie.duration }}</span>
        </div>

        <span v-if="movie.genres.length" class="genre">{{
          movie.genres.join(', ')
        }}</span>

        <YoutubeModal :id="movie.trailer" />

        <p class="description">
          {{ movie.description.substr(0, 400) + '...' }}
        </p>

        <button @click="openModal" class="btn yt">Watch trailer</button>

        <button @click="playMovie" class="btn">Play Now</button>
      </div>
    </div>
    <Loader :isLoading="isLoading" />
  </div>
</template>

<script>
import axios from 'axios'
import YoutubeModal from '../components/YoutubeModal.vue'
import Player from '../components/Player.vue'
import Loader from '../components/Loader.vue'
import db from '../firebase'

export default {
  name: 'movie',
  props: ['slug', 'passMovie'],
  components: {
    YoutubeModal,
    Player,
    Loader,
  },
  data() {
    return {
      movie: {},
      jwsrc: '',
      vidcloudsrc: '',
      playTriggered: false,
      playerOptions: {
        sources: [{ type: 'video/mp4', src: '' }],
        poster: '',
      },
    }
  },
  computed: {
    score() {
      return parseInt(this.movie.imdb_score.split(':')[1].trim())
    },
    isLoading() {
      return this.playTriggered && !this.jwsrc && !this.vidcloudsrc
    },
  },
  methods: {
    openModal() {
      this.$modal.show('youtube')
    },
    playMovie() {
      this.playTriggered = true
      const docRef = db.collection('videolinks').doc(this.movie.slug)

      docRef.onSnapshot(async (doc) => {
        if (doc.exists) {
          const { jw_video_link, iframe_video_link } = doc.data()

          if (jw_video_link) {
            this.jwsrc = jw_video_link
            this.playerOptions.sources[0].src = jw_video_link
          } else if (iframe_video_link) {
            this.vidcloudsrc = iframe_video_link
          }

          this.playerOptions.poster = this.movie.cover
        } else {
          const dataString = `project=default&spider=videolink&slug=${this.movie.slug}`
          await axios.post(process.env.VUE_APP_SPIDERX_HEROKU, dataString)
        }
      })
    },
  },
  created() {
    this.movie = this.passMovie
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 3rem;
  font-size: 1.1rem;
  margin: 2rem 0;
  font-weight: 500;
}

img.poster {
  height: 440px;
  width: 300px;
  border-radius: 4px;
  box-shadow: var(--bs);
}

.movie-info__meta {
  display: flex;
  color: var(--secondaryColor);
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
}

.movie-info__meta span {
  margin-right: 1rem;
}

.genre {
  display: inline-block;
  letter-spacing: 1px;
  color: var(--secondaryColor);
}

p.description {
  letter-spacing: 0.9px;
  text-align: justify;
  width: 75%;
  margin-top: 1rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  background: var(--dark);
  border: 3px solid var(--tertiaryColor);
  margin: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border-radius: 4px;
  margin-right: 1rem;
  color: var(--accentColor);
}

@media screen and (max-width: 1093px) {
  p.description {
    width: 100%;
  }
}

@media screen and (max-width: 880px) {
  div.container {
    font-size: 1rem;
  }
}

@media screen and (max-width: 780px) {
  div.container {
    grid-template-columns: 1fr;
    font-size: 1.1rem;
  }

  img {
    display: none;
  }

  .btn {
    margin-top: 1.2rem;
  }

  .yt {
    display: none;
  }
}

@media screen and (max-width: 540px) {
  div.container {
    font-size: 0.9rem;
  }

  p.description {
    text-align: left;
  }
}
</style>
