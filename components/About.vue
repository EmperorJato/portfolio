<template>
  <section id="aboutSection">
    <v-container fluid>
      <div class="d-flex align-center">
        <v-icon color="primary" left>
          {{ icons.mdiAccountDetails }}
        </v-icon>
        <div class="section-title">
          About Me
        </div>
      </div>
      <div class="headline font-weight-bold mb-5">
        My <span class="primary--text">Services</span>
      </div>
      <!-- Frontend -->
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> UI/UX </v-card-title>
            <v-card-subtitle class="primary--text font-weight-bold">
              Designing
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Front-End </v-card-title>
            <v-card-subtitle class="primary--text font-weight-bold">
              Development
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <!-- Backend -->
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Back-End </v-card-title>
            <v-card-subtitle class="primary--text font-weight-bold">
              Development
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Database </v-card-title>
            <v-card-subtitle class="primary--text font-weight-bold">
              Administrator
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          A passionate programmer who loves both fontend and backend development
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-wrap align-center justify-center">
            <v-tooltip v-for="([image, text], i) in stacks" :key="i" bottom>
              <template #activator="{ on, attrs }">
                <v-sheet
                  color="#232126"
                  elevation="4"
                  height="80"
                  outlined
                  rounded
                  width="80"
                  class="
                    pa-2
                    d-flex
                    align-center
                    justify-content-center
                    mr-2
                    mb-2
                  "
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img :src="'img/about/' + image" contain />
                </v-sheet>
              </template>
              <span>{{ text }}</span>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mdiAccountDetails } from '@mdi/js'
export default {
  name: 'About',
  data: () => ({
    icons: {
      mdiAccountDetails
    },
    stacks: [
      ['html.png', 'HTML'],
      ['css.png', 'CSS'],
      ['javascript.png', 'JavaScript'],
      ['jquery.png', 'JQuery'],
      ['bootstrap.png', 'Bootstrap'],
      ['vuetify.png', 'Vuetify'],
      ['vue.png', 'Vue'],
      ['nuxt.png', 'Nuxt'],
      ['php.png', 'PHP'],
      ['laravel.png', 'Laravel'],
      ['mysql.png', 'MySQL'],
      ['mssql.png', 'MSSQL'],
      ['csharp.png', 'C#']
    ]
  })
}
</script>

<style>
</style>
