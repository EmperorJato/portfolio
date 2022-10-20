<template>
  <section id="projectSection">
    <v-container fluid>
      <div class="d-flex align-center">
        <v-icon color="primary" left>
          {{ icons.mdiAccountDetails }}
        </v-icon>
        <div class="section-title">
          Projects
        </div>
      </div>
      <div class="headline font-weight-bold mb-5">
        Dealing <span class="primary--text">With</span>
      </div>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="2">
            <v-img :src="projects[0].img" contain />
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="2" class="fill-height">
            <v-img :src="projects[1].img" height="100%" />
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-card elevation="2">
            <v-img :src="projects[1].img" contain />
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="2">
            <v-img :src="projects[1].img" contain />
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="2">
            <v-img :src="projects[1].img" contain />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mdiAccountDetails } from '@mdi/js'
export default {
  name: 'Project',
  data: () => ({
    icons: {
      mdiAccountDetails
    },
    projects: [
      {
        img: require('~/static/img/project/axie-tracker.jpg'),
        title: 'Axie Tracker'
      },
      {
        img: require('~/static/img/project/pr.jpg'),
        title: 'Axie Tracker'
      }
    ]
  })
}
</script>

<style>
</style>
