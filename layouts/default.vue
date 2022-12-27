<template>
  <v-app>
    <Navigation :color="color" :flat="flat" />
    <v-main>
      <Nuxt />
      <div v-if="show">
        <Skill />
        <Service />
        <Project />
        <Contact />
      </div>
    </v-main>
    <Footer />
    <v-scale-transition>
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        small
        color="primary"
        @click="toTop"
      >
        <v-icon small>
          {{ icons.arrowUp }}
        </v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script>
import { mdiArrowUp } from '@mdi/js'
export default {
  name: 'Default',
  data: () => ({
    show: false,
    color: 'transparent',
    fab: null,
    flat: true,
    icons: {
      arrowUp: mdiArrowUp
    }
  }),
  watch: {
    fab (val) {
      if (val) {
        this.color = '#1b1b1b'
        this.flat = false
      } else {
        this.color = 'transparent'
        this.flat = true
      }
    }
  },
  beforeMount () {
    const top = window.pageYOffset || 0
    if (top <= 50) {
      this.color = 'transparent'
      this.flat = true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.show = true
    })
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') { return }
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 50
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
