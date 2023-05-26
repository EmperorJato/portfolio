<template>
  <v-row justify="center">
    <v-dialog
      :value="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn icon dark @click="closeDialog()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
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
      type: Array
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
            title: 'Dashboard 1',
            id: '1QTbdGQOdXRRqPtNspgnHMwkm1veC2cng'
          },
          {
            title: 'Dashboard 2',
            id: '1tKTgEkrncdrufEbUuzGbt3aAxEiMpV_k'
          },
          {
            title: 'Dashboard 3',
            id: '1bldNXOU-CavyH7lW7FFUrwG_B5fXpzzx'
          }
        ]
      }
    }
  },
  computed: {
    selectedProject () {
      return this.projects[this.project]
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
    }
    // showProject (project) {
    //   this.selectedProject = this.projects[project]
    // }
  }
}
</script>
