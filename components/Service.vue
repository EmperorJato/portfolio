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

          <!-- frontend -->
          <v-row justify="center" align="center" class="vh">
            <v-col cols="12" sm="4" class="hidden-xs-only">
              <v-img id="frontendImage" src="/img/service/frontend.svg" class="service-img" />
            </v-col>
            <v-col cols="12" sm="8" class="text-end">
              <v-row justify="end">
                <v-col cols="12" md="8">
                  <v-card id="frontend" class="text-center service">
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
                          {{ frontend.title }}
                        </div>
                      </div>
                    </v-sheet>

                    <v-card-text class="text-subtitle-1 font-weight-medium">
                      {{ frontend.subTitle }}
                    </v-card-text>
                    <v-card-text class="body-1 pt-6 pb-12">
                      <div v-for="(items, i) in frontend.experience" :key="i">
                        <p data-aos="fade-left" :data-aos-delay="600 * i">
                          <v-icon color="success" left>
                            {{ icons.mdiCheckBold }}
                          </v-icon>
                          {{ items }}
                        </p>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- backend -->
          <v-row justify="center" align="center" class="vh">
            <v-col cols="12" sm="4" class="hidden-xs-only">
              <v-img id="backendImage" src="/img/service/backend.svg" class="service-img" />
            </v-col>
            <v-col cols="12" sm="8" class="text-end">
              <v-row justify="end">
                <v-col cols="12" md="8">
                  <v-card id="backend" class="text-center service">
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
                          {{ backend.title }}
                        </div>
                      </div>
                    </v-sheet>

                    <v-card-text class="text-subtitle-1 font-weight-medium">
                      {{ backend.subTitle }}
                    </v-card-text>
                    <v-card-text class="body-1 pt-6 pb-12">
                      <div v-for="(items, i) in backend.experience" :key="i">
                        <p data-aos="fade-left" :data-aos-delay="600 * i">
                          <v-icon color="success" left>
                            {{ icons.mdiCheckBold }}
                          </v-icon>
                          {{ items }}
                        </p>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- database -->
          <v-row justify="center" align="center" class="vh">
            <v-col cols="12" sm="4" class="hidden-sm-only">
              <v-img
                id="databaseImage"
                src="/img/service/database.svg"
                class="service-img"
              />
            </v-col>
            <v-col cols="12" sm="8" class="text-end">
              <v-row justify="end">
                <v-col cols="12" md="8">
                  <v-card id="database" class="text-center service">
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
                          {{ database.title }}
                        </div>
                      </div>
                    </v-sheet>

                    <v-card-text class="text-subtitle-1 font-weight-medium">
                      {{ database.subTitle }}
                    </v-card-text>
                    <v-card-text class="body-1 pt-6 pb-12">
                      <div v-for="(items, i) in database.experience" :key="i">
                        <p data-aos="fade-left" :data-aos-delay="600 * i">
                          <v-icon color="success" left>
                            {{ icons.mdiCheckBold }}
                          </v-icon>
                          {{ items }}
                        </p>
                      </div>
                    </v-card-text>
                  </v-card>
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
    frontend: {
      title: 'FrontEnd',
      subTitle: 'I can develop a pleasant experience to the users.',
      experience: [
        'Vue.js Ecosystem',
        'Ajax or Axios',
        'JSON Mapping',
        'Modifying Plugins or 3rd Party API',
        'Promises',
        'API Integration'
      ]
    },
    backend: {
      title: 'BackEnd',
      subTitle: 'I can create a secure and fast response rest services.',
      experience: [
        'OOP and MVC',
        'Authorization, Authentication',
        'Rules, Permissions, and Middlewares',
        'JWT token and Refresh token',
        'ORM Tools',
        'RESTful API'
      ]
    },
    database: {
      title: 'Database',
      subTitle: 'I can manage database to make it organize and efficient.',
      experience: [
        'Stored Procedure',
        'Raw SQL queries',
        'Indexing',
        'Migration',
        'Table Relationship',
        'Normalization and Denormalization'
      ]
    }
  }),

  mounted () {
    this.eventObserver()
  },

  methods: {
    eventObserver () {
      const targets = document.querySelectorAll('.service')
      const scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const frontendImage = document.getElementById('frontendImage')
            const backendImage = document.getElementById('backendImage')
            const databaseImage = document.getElementById('databaseImage')

            // const rect = entry.intersectionRect
            // const elementCenterY = (rect.top + rect.height / 2) / 2
            // const screenCenterY = window.innerHeight / 2

            frontendImage.classList.toggle('active', entry.isIntersecting && entry.target.id === 'frontend')
            backendImage.classList.toggle('active', entry.isIntersecting && entry.target.id === 'backend')
            databaseImage.classList.toggle('active', entry.isIntersecting && entry.target.id === 'database')
          })
        },
        {
          threshold: 0.4,
          rootMargin: '-20px 0px -100px'
        }
      )
      for (const target of targets) {
        scrollObserver.observe(target)
      }
    }
  }
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}

.vh {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-img {
  visibility: hidden;
  position: fixed;
  width: 35%;
  top: 45%;
  left: 30%;
  transform: translate(-50%, -50%);
  filter: blur(30px);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
  transition: .6s ease, opacity 0.6s ease, background-position .8s ease;
}

.active {
   visibility: visible;
  filter: blur(0);
  opacity: 1;
  top: 50%;
}

</style>
