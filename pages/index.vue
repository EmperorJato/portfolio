<template>
  <section
    id="homeSection"
  >
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" xl="8">
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
                A competent backend developer adept at solving complex problems
                and creating optimized algorithms, based in Bacolod City,
                <span class="primary--text">Philippines</span>
              </p>
              <div class="d-flex justify-content-start flex-wrap">
                <v-btn
                  color="primary"
                  class="white--text mr-2 mt-2"
                  href="https://www.linkedin.com/in/steto-javellana-394933255/"
                  target="_blank"
                >
                  <v-icon dark>
                    {{ icons.mdiLinkedin }}
                  </v-icon>
                </v-btn>

                <v-btn
                  color="primary"
                  class="white--text mr-2 mt-2"
                  href="https://github.com/EmperorJato"
                  target="_blank"
                >
                  <v-icon dark>
                    {{ icons.mdiGithub }}
                  </v-icon>
                </v-btn>

                <v-btn color="white" outlined class="mt-2" href="#">
                  <span class="primary--text"> Download CV </span>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="hidden-sm-and-down">
              <div class="d-flex justify-end">
                <div class="cyan-bg">
                  <v-img src="/img/me.png" contain />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves">
      <v-img src="/img/home/borderWaves.svg" />
    </div>
  </section>
</template>

<script>
import { mdiHome, mdiLinkedin, mdiGithub, mdiFileAccount } from '@mdi/js'
export default {
  name: 'Home',
  data: () => ({
    icons: {
      mdiHome,
      mdiLinkedin,
      mdiGithub,
      mdiFileAccount
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
  overflow: hidden;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>
