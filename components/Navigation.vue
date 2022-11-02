<template>
  <div>
    <v-app-bar
      app
      dark
      height="60"
      class="px-15"
      :color="color"
      :flat="flat"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="/img/logo.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon v-if="isXs" @click.stop="drawer = !drawer">
        <v-icon large>
          {{ icons.mdiReorderHorizontal }}
        </v-icon>
      </v-app-bar-nav-icon>
      <div v-else v-show="show">
        <v-btn text @click="$vuetify.goTo('#homeSection')">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#skillSection')">
          <span class="mr-2">Skill</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#aboutSection')">
          <span class="mr-2">About</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#projectSection')">
          <span class="mr-2">Project</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contactSection')">
          <span>Contact</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary dark color="#212121">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="/img/logo.png" alt="Logo">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Steto Javellana
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />
      <v-list>
        <v-list-item
          v-for="([icon, text, link], i) in links"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitle-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiHome,
  mdiAccountTie,
  mdiFolder,
  mdiAccountDetails,
  mdiCardAccountMail,
  mdiReorderHorizontal
} from '@mdi/js'

export default {
  name: 'Navigation',
  props: {
    color: {
      type: String,
      required: true,
      default: ''
    },
    flat: Boolean
  },
  data: () => ({
    show: false,
    drawer: null,
    isXs: false,
    icons: {
      mdiReorderHorizontal
    },
    links: [
      [mdiHome, 'Home', '#homeSection'],
      [mdiAccountDetails, 'Skill', '#skillSection'],
      [mdiAccountTie, 'About', '#aboutSection'],
      [mdiFolder, 'Projects', '#projectSection'],
      [mdiCardAccountMail, 'Contact', '#contactSection']
    ]
  }),
  watch: {
    isXs (val) {
      if (!val) {
        if (this.drawer) {
          this.drawer = false
        }
      }
    }
  },
  beforeDestroy () {
    if (typeof window === 'undefined') {
      return
    }

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    this.$nextTick(function () {
      this.show = true
    })
  },
  methods: {
    onResize () {
      this.isXs = window.innerWidth < 970
    }
  }
}
</script>

<style scoped>
.v-toolbar {
  transition: 0.8s ease;
}

.expand {
  height: 70px !important;
  padding-top: 30px;
}
</style>
