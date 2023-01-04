<template>
  <section id="projectSection">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" xl="8">
          <div
            class="d-flex align-center"
            data-aos="fade-right"
            data-aos-duration="4000"
          >
            <v-icon color="primary" left>
              {{ icons.mdiFolder }}
            </v-icon>
            <div class="section-title">
              Management and Participation in
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <div class="headline font-weight-bold mb-5">
              Proj<span class="primary--text">ects</span>
            </div>
          </div>
          <v-hover>
            <template #default="{ hover }">
              <v-carousel cycle show-arrows-on-hover>
                <v-carousel-item
                  v-for="(project, i) in projects"
                  :key="i"
                  :src="project.img"
                  contain
                >
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#424242"
                      z-index="0"
                      class="text-center"
                    >
                      <p class="overline">
                        Stacks used
                      </p>
                      <div>
                        <v-avatar
                          v-for="(img, index) in project.stack"
                          :key="index"
                        >
                          <v-tooltip bottom>
                            <template #activator="{ on, attrs }">
                              <img
                                :src="'/img/stacks/' + stacks[img][0]"
                                :alt="stacks[img][1]"
                                v-bind="attrs"
                                v-on="on"
                              >
                            </template>
                            <span>{{ stacks[img][1] }}</span>
                          </v-tooltip>
                        </v-avatar>
                      </div>
                      <v-btn color="primary mt-5">
                        See more info
                      </v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-carousel-item>
              </v-carousel>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mdiFolder } from '@mdi/js'
export default {
  name: 'Project',
  data: () => ({
    overlay: false,
    icons: {
      mdiFolder
    },
    projects: [
      {
        img: require('~/static/img/project/axie-tracker.jpg'),
        title: 'Axie Tracker',
        stack: [5, 7, 9, 10]
      },
      {
        img: require('~/static/img/project/purchase-requisition.jpg'),
        title: 'Purchase Requisition',
        stack: [3, 4, 9, 10]
      },
      {
        img: require('~/static/img/project/portfolio.jpg'),
        title: 'Portfolio',
        stack: [5, 6, 7]
      }
    ],
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
    ],
    projectStacks: {
      hrmPayroll: [3, 4, 11, 12]
    }
  })
}
</script>

<style>
</style>
