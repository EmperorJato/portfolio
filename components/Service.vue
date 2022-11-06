<template>
  <section id="serviceSection" data-background="#23262D" class="section">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" xl="8">
          <div class="align-start mb-10">
            <div
              class="d-flex align-center"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              <v-icon color="primary" left>
                {{ icons.mdiAccountTie }}
              </v-icon>
              <div class="section-title">
                Assistance that I will offer
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000">
              <div class="headline font-weight-bold mb-5">
                My <span class="primary--text">Services</span>
              </div>
            </div>
          </div>
          <v-row justify="center" align="center" height>
            <v-col cols="12" sm="4" class="hidden-xs-only">
              <div data-aos="fade-right">
                <v-img
                  src="/img/about/about_me.svg"
                  class="d-block mx-auto"
                  max-width="350px"
                  min-height="100%"
                />
              </div>
            </v-col>
            <v-col cols="12" sm="8" class="text-end">
              <v-row justify="end">
                <v-col cols="12" md="8">
                  <div data-aos="fade-left" data-aos-delay="600">
                    <v-carousel
                      cycle
                      interval="15000"
                      show-arrows-on-hover
                      hide-delimiter-background
                    >
                      <v-carousel-item
                        v-for="(slide, dev) in developments"
                        :key="dev"
                      >
                        <v-card class="mt-8 text-center">
                          <v-sheet
                            class="
                              v-sheet--offset
                              mx-auto
                              d-flex
                              align-center
                              justify-center
                              py-3
                            "
                            color="cyan"
                            elevation="12"
                            max-width="65%"
                            dark
                          >
                            <div class="text-center">
                              <div class="font-weight-medium text-overline">
                                {{ slide.title }}
                              </div>
                            </div>
                          </v-sheet>

                          <v-card-text
                            class="text-subtitle-1 font-weight-medium"
                          >
                            {{ slide.subTitle }}
                          </v-card-text>
                          <v-card-text class="body-1" style="height: 700px">
                            <div
                              v-for="(items, i) in slide.experience"
                              :key="i"
                            >
                              <p data-aos="fade-left" :data-aos-delay="600 * i">
                                <v-icon color="success" left>
                                  {{ icons.mdiCheckBold }}
                                </v-icon>
                                {{ items }}
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-carousel-item>
                    </v-carousel>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mdiAccountTie, mdiCheckBold } from '@mdi/js'
export default {
  name: 'Service',
  data: () => ({
    icons: {
      mdiAccountTie,
      mdiCheckBold
    },
    developments: [
      {
        title: 'FrontEnd',
        subTitle: 'I can develop a pleasant experience to the users.',
        experience: [
          'Vue.js Ecosystem',
          'Ajax or Axios',
          'JSON Mapping',
          'Modifying Plugins or 3rd Party API',
          'Promises'
        ]
      },
      {
        title: 'BackEnd',
        subTitle: 'I can create a secure and fast response rest services.',
        experience: [
          'OOP and MVC',
          'Authorization, Authentication',
          'Rules, Permissions, and Middlewares',
          'JWT token and Refresh token',
          'ORM Tools'
        ]
      },
      {
        title: 'Database',
        subTitle: 'I can manage database to make it organize and efficient.',
        experience: [
          'Stored Procedure',
          'Raw SQL queries',
          'Indexing',
          'Migration',
          'Table Relationship'
        ]
      }
    ]
  }),
  mounted () {
    // const scrollObserver = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         const background = entry.target.getAttribute('data-background')
    //         const id = entry.target.getAttribute('id')
    //         document.querySelector(`#${id}`).style.background = background
    //       }
    //     })
    //   },
    //   {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.95
    //   }
    // )

    // const targets = document.querySelectorAll('.section')
    // for (const target of targets) {
    //   scrollObserver.observe(target)
    // }
  }
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
