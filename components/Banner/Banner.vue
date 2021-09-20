<template>
  <div class="root">
   
    <div class="decoration">
      <svg class="left-deco">
        <use xlink:href="/elartedeloscupcakes/images/saas/deco-bg-left.svg#main" />
      </svg>
      <svg class="right-deco">
        <use xlink:href="/elartedeloscupcakes/images/saas/deco-bg-right.svg#main" />
      </svg>
    </div>

    <v-container :class="{ fixed: isDesktop }">
      <div class="slider-wrap">
        <div class="text">
          <img style="margin-top:-130px; width: 100%" :src="imgAPI.saas[10]" alt="letters">
          <div style="margin-top:-80px;" class="btn-area">
            <v-btn
              :href="link.saas.login"
              color="secondary"
              large
            >
              {{ $t('saasLanding.getstarted') }}
            </v-btn>
          </div>
        </div>
      </div>

      <div>
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
          style="border-radius: 30px;"
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </div>

    </v-container>

    <div class="deco">
      <hidden point="mdDown">
        <div :class="{ hide: hide }" class="deco-inner">
          <div class="wave wave-one" />
          <div class="wave wave-two" />
        </div>
      </hidden>
      <div class="wave wave-cover" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import youtube from '~/youtube'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      videoId: 'KxZAdEGpYAw',
      hide: false,
      link: link,
      imgAPI: imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8008'
      },
      yt: youtube,

      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false
      }
      this.dialog = true
      setTimeout(() => {
        this.player = this.$refs.youtube.player
        this.player.playVideo()
      }, 100)
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
