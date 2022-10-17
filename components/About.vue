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
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title> Front-End </v-card-title>
            <v-card-subtitle class="primary--text font-weight-bold">
              Development
            </v-card-subtitle>
            <v-card-text class="body-1">
              I can develop a pleasant experience to the user such as easy to
              understand user flow, validations, and errors.
            </v-card-text>
            <v-card-text class="body-1">
              <p>Experience on:</p>
              <p>- AJAX or Axios</p>
              <p>- JSON Mapping</p>
              <p>- State Management (Vuex)</p>
              <p>- Modifying Plugins or 3rd party API</p>
              <p>- Promises or Async/await</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title> Back-End </v-card-title>
            <v-card-subtitle class="primary--text font-weight-bold">
              Development
            </v-card-subtitle>
            <v-card-text class="body-1">
              I can create a lightweight, secure, and fast response RESTful API.
            </v-card-text>
            <v-card-text class="body-1">
              <p>Experience on:</p>
              <p>- OOP and MVC</p>
              <p>- Authorization and Authentication</p>
              <p>- JWT Token and Refresh Token</p>
              <p>- Roles and Permissions</p>
              <p>- OAuth2 and Middlewares</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title> Database </v-card-title>
            <v-card-subtitle class="primary--text font-weight-bold">
              Administrator
            </v-card-subtitle>
            <v-card-text class="body-1">
              I can manage databases to make it efficiently and flexibly.
            </v-card-text>
            <v-card-text class="body-1">
              <p>Experience on :</p>
              <p>- Stored Procedure and Raw SQL Queries</p>
              <p>- Indexing</p>
              <p>- Migrations</p>
              <p>- One-to-One, One-to-Many, and Many-to-Many Relationships</p>
            </v-card-text>
          </v-card>
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
