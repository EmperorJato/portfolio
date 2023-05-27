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
                    :src="googleDrive + item.id"
                    :lazy-src="googleDrive + item.id"
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
      googleDrive: 'http://drive.google.com/uc?export=view&id=',
      notifications: false,
      sound: true,
      widgets: false,
      projects: {
        axieTracker: [
          {
            title: 'Login',
            id: '17ZrYGJz6EQocUSlXaEOVRTw99g7rv2xQ'
          },
          {
            title: 'Register',
            id: '1keIiR2W7W923ReDy18deVnyc_-1Cfsqv'
          },
          {
            title: 'Profile',
            id: '1MZ1Qv8lN_uNXOJZm8TeqgARAgXMNPgRL'
          },
          {
            title: 'Profile',
            id: '1NPlQ0st-CGmrzihsjCFw8wBNzrbm_j5Z'
          },
          {
            title: 'Dashboard',
            id: '1QTbdGQOdXRRqPtNspgnHMwkm1veC2cng'
          },
          {
            title: 'Dashboard',
            id: '1tKTgEkrncdrufEbUuzGbt3aAxEiMpV_k'
          },
          {
            title: 'Dashboard',
            id: '1bldNXOU-CavyH7lW7FFUrwG_B5fXpzzx'
          },
          {
            title: 'Scholarship',
            id: '1yoR84dIdyUHeu4rC5YjxZTslqh_MSi-h'
          },
          {
            title: 'Investment',
            id: '13O9hg3q73BHtNXUeRDdaQ4AZUw3-jO9u'
          },
          {
            title: 'Simulator Breeding',
            id: '11TcTSLExBISKD35eM6nyxdBdI8T-yr_p'
          },
          {
            title: 'Simulator Pricing',
            id: '13zwCoR400_qBj8Uw3lNTLxtVvYPj6k7p'
          },
          {
            title: 'Leaderboard Local Rank',
            id: '1FW_eat69qLrKY6eLjD027aevBiLaygab'
          },
          {
            title: 'Leaderboard World Rank',
            id: '1FW_eat69qLrKY6eLjD027aevBiLaygab'
          },
          {
            title: 'Accounts Users',
            id: '14mwUj8flr082CWoW8bVOWwwCawQDLRuo'
          },
          {
            title: 'Accounts Roles',
            id: '1_VzyKc1_qxr7RrBKPGs_ZGDtUHn0Azez'
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
