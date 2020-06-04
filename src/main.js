import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vmodal from 'vue-js-modal'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer, {
  options: {
    controls: true,
    autoplay: false,
    fluid: true,
    height: '445',
    width: '1065',
  },
})

Vue.config.productionTip = false
Vue.use(Vmodal)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

export const eventHub = new Vue()
