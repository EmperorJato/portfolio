<template>
  <section id="aboutSection">
    <v-container fluid>
      <div class="align-start mb-10">
        <div
          class="d-flex align-center"
          data-aos="fade-right"
          data-aos-duration="4000"
        >
          <v-icon color="primary" left>
            {{ icons.mdiAccountDetails }}
          </v-icon>
          <div class="section-title">
            My Services and Experience
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000">
          <div class="headline font-weight-bold mb-5">
            About <span class="primary--text">Me</span>
          </div>
        </div>
      </div>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4" class="hidden-xs-only">
          <v-img
            src="/img/about/about_me.svg"
            class="d-block ml-auto mr-auto"
            max-width="350px"
          />
        </v-col>
        <v-col cols="12" sm="8" class="white--text text-left">
          <v-carousel
            cycle
            interval="15000"
            height="100%"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, dev) in developments" :key="dev">
              <v-row justify="center">
                <v-col cols="12" md="6">
                  <v-card dark height="550px">
                    <v-card-title> {{ slide.title }}</v-card-title>
                    <v-card-subtitle class="primary--text font-weight-bold">
                      Development
                    </v-card-subtitle>
                    <v-card-text class="body-1">
                      {{ slide.subTitle }}
                    </v-card-text>
                    <v-card-text class="body-1">
                      <p>Experience on:</p>

                      <div v-for="(items, i) in slide.experience" :key="i">
                        <p>{{ items }}</p>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
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
    ],
    developments: [
      {
        title: 'Front-End',
        subTitle:
          'I can develop a pleasant experience to the user such as easy to understand user flow, validations, and errors.',
        experience: [
          'Vue.js Ecosystem',
          'Ajax or Axios',
          'JSON Mapping',
          'Modifying Plugins or 3rd Party API',
          'Promises or Asycnhronous and Synchronous operations'
        ]
      },
      {
        title: 'Back-End',
        subTitle: 'I can create a secure and fast response rest services.',
        experience: [
          'OOP and MVC',
          'Authorization, Authentication, and OAuth2',
          'Rules, Permissions, and Middlewares',
          'JWT token and Refresh token',
          'ORM Tools (C# Dapper or EF and Laravel Elequent)'
        ]
      },
      {
        title: 'Database',
        subTitle: 'I can manage databases to make it efficiently and flexibly.',
        experience: [
          'Stored Procedure and Raw sql queries',
          'Indexing (Clustered and Non-Clustered)',
          'Migration',
          'Table Relationship (One-to-One, One-to-Many, and Many-to-Many)'
        ]
      }
    ]
  })
}
</script>

<style>
</style>
