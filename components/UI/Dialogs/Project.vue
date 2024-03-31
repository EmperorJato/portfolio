<template>
  <v-row justify="center">
    <v-dialog
      :value="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>{{ projectTitle }}</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn icon dark @click="closeDialog()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row justify="center" content="center">
              <v-col
                v-for="(item, i) of selectedProject"
                :key="i"
                cols="8"
                md="4"
                sm="6"
                xs="12"
              >
                <v-card>
                  <v-img
                    cover
                    :src="item.img"
                    :lazy-src="item.img"
                    aspect-ratio="1"
                    height="200px"
                  >
                    <template #placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
                  <v-card-title class="text-subtitle-1">
                    {{ item.title }}
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean
    },
    project: {
      type: Object
    }
  },
  data () {
    return {
      googleDrive: 'https://lh3.google.com/u/0/d/',
      notifications: false,
      sound: true,
      widgets: false,
      projects: {
        axieTracker: [
          {
            title: 'Login',
            img: require('~/static/img/project/axie-tracker/login.jpg')
          },
          {
            title: 'Register',
            img: require('~/static/img/project/axie-tracker/register.jpg')
          },
          {
            title: 'Profile',
            img: require('~/static/img/project/axie-tracker/profile.jpg')
          },
          {
            title: 'Profile',
            img: require('~/static/img/project/axie-tracker/profile-2.jpg')
          },
          {
            title: 'Dashboard',
            img: require('~/static/img/project/axie-tracker/dashboard-1.jpg')
          },
          {
            title: 'Dashboard',
            img: require('~/static/img/project/axie-tracker/dashboard-2.jpg')
          },
          {
            title: 'Dashboard',
            img: require('~/static/img/project/axie-tracker/dashboard-3.jpg')
          },
          {
            title: 'Scholarship',
            img: require('~/static/img/project/axie-tracker/scholarship.jpg')
          },
          {
            title: 'Investment',
            img: require('~/static/img/project/axie-tracker/investment.jpg')
          },
          {
            title: 'Simulator Breeding',
            img: require('~/static/img/project/axie-tracker/simulator-breeding.jpg')
          },
          {
            title: 'Simulator Pricing',
            img: require('~/static/img/project/axie-tracker/simulator-pricing.jpg')
          },
          {
            title: 'Leaderboard Local Rank',
            img: require('~/static/img/project/axie-tracker/leaderboards-local.jpg')
          },
          {
            title: 'Leaderboard World Rank',
            img: require('~/static/img/project/axie-tracker/leaderboards-world.jpg')
          },
          {
            title: 'Accounts Users',
            img: require('~/static/img/project/axie-tracker/account-users.jpg')
          },
          {
            title: 'Accounts Roles',
            img: require('~/static/img/project/axie-tracker/account-role.jpg')
          }

        ]
      }
    }
  },
  computed: {
    selectedProject () {
      return this.projects[this.project.key]
    },
    projectTitle () {
      return this.project.title
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>
