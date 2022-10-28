<template>
  <section id="projectSection">
    <v-container fluid>
      <div
        class="d-flex align-center"
        data-aos="fade-right"
        data-aos-duration="4000"
      >
        <v-icon color="primary" left>
          {{ icons.mdiAccountDetails }}
        </v-icon>
        <div class="section-title">
          Handling with
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <div class="headline font-weight-bold mb-5">
          Proj<span class="primary--text">ects</span>
        </div>
      </div>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="12">
              <v-card elevation="2">
                <v-img :src="projects[0].img" contain />
              </v-card>
            </v-col>
            <v-col cols="12" md="12">
              <v-card elevation="2">
                <v-img :src="projects[1].img" contain />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="2" height="100%">
            <v-img :src="projects[1].img" />
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
        img: require('~/static/img/project/purchase-requisition.jpg'),
        title: 'Purchase Requisition'
      }
    ]
  })
}
</script>

<style>
</style>
