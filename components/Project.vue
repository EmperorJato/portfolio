<template>
  <section id="projectSection">
    <v-container fluid>
      <div
        class="d-flex align-center"
        data-aos="fade-right"
        data-aos-duration="4000"
      >
        <v-icon color="primary" left>
          {{ icons.mdiFolder }}
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
              <v-hover>
                <template #default="{ hover }">
                  <v-card
                    elevation="2"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <v-img :src="projects[0].img" contain />
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#424242">
                        <p class="overline text-center">
                          Stacks used
                        </p>
                        <div>
                          <v-avatar
                            v-for="(
                              img, i
                            ) in projectStacks.axieTracker"
                            :key="i"
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
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="12" md="12">
              <v-hover>
                <template #default="{ hover }">
                  <v-card
                    elevation="2"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <v-img :src="projects[1].img" contain />
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#424242">
                        <p class="overline text-center">
                          Stacks used
                        </p>
                        <div>
                          <v-avatar
                            v-for="(
                              img, i
                            ) in projectStacks.purchaseRequisition"
                            :key="i"
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
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover>
            <template #default="{ hover }">
              <v-card elevation="2" height="100%" data-aos="zoom-out-left">
                <v-img :src="projects[2].img" contain height="100%" />
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#424242">
                    <p class="overline text-center">
                      Stacks used
                    </p>
                    <div>
                      <v-avatar
                        v-for="(img, i) in projectStacks.portfolio"
                        :key="i"
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
                  </v-overlay>
                </v-fade-transition>
              </v-card>
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
        title: 'Axie Tracker'
      },
      {
        img: require('~/static/img/project/purchase-requisition.jpg'),
        title: 'Purchase Requisition'
      },
      {
        img: require('~/static/img/project/portfolio.png'),
        title: 'Portfolio'
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
      axieTracker: [5, 7, 9, 10],
      purchaseRequisition: [3, 4, 9, 10],
      hrmPayroll: [3, 4, 11, 12],
      portfolio: [5, 6, 7]
    }
  })
}
</script>

<style>
</style>
