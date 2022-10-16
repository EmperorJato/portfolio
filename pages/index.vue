<template>
  <section id="homeSection">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <div class="d-flex align-center mb-5">
            <v-icon color="primary" left>
              {{ icons.mdiHome }}
            </v-icon>
            <div class="section-title">
              introduction
            </div>
          </div>
          <div
            class="font-weight-bold"
            :class="$vuetify.breakpoint.smAndDown ? 'text-h5' : 'text-h4'"
          >
            Hello
          </div>
          <div
            class="font-weight-bold"
            :class="$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3'"
          >
            I'm Steto <span class="primary--text">Javellana</span>
          </div>
          <p class="title">
            A full stack web developer with a passion from Bacolod City in the
            <span class="primary--text">Philippines</span>
          </p>
          <div>
            <v-btn color="primary" class="white--text mb-2">
              <v-icon dark left>
                {{ icons.mdiLinkedin }}
              </v-icon>
              LinkedIn
            </v-btn>
            <v-btn color="primary" outlined class="mb-2">
              <v-icon dark left>
                {{ icons.mdiGithub }}
              </v-icon>
              Github
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex"
          :class="
            $vuetify.breakpoint.mdAndDown ? 'justify-center' : 'justify-end'
          "
        >
          <div class="cyan-bg">
            <v-img src="/img/me.png" contain />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mdiHome, mdiLinkedin, mdiGithub } from '@mdi/js'
export default {
  name: 'Home',
  data: () => ({
    icons: {
      mdiHome,
      mdiLinkedin,
      mdiGithub
    }
  })
}
</script>

<style scoped>
.cyan-bg {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 460px;
  border-radius: 50%;
  background-color: #00bcd4;
}
</style>
