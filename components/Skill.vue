<template>
  <section id="skillSection">
    <v-container fluid>
      <div class="d-flex align-center">
        <v-icon color="primary" left>
          {{ icons.mdiAccountDetails }}
        </v-icon>
        <div class="section-title">
          Soft Skill
        </div>
      </div>
      <div class="headline font-weight-bold mb-5">
        Perosonal <span class="primary--text">Attributes</span>
      </div>

      <v-row class="d-flex justify-content-center">
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          cols="12"
          md="4"
          class="text-center"
        >
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                dark
                class="card"
                shaped
                :elevation="hover ? 10 : 4"
                :class="{ up: hover }"
                light
              >
                <v-img
                  :src="skill.img"
                  max-width="100px"
                  class="d-block ml-auto mr-auto"
                  :class="{ 'zoom-efect': hover }"
                />
                <h3 class="font-weight-regular mb-2">
                  {{ skill.title }}
                </h3>
                <h4 class="font-weight-regular subtitle-1">
                  {{ skill.text }}
                </h4>
              </v-card>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mdiAccountDetails } from '@mdi/js'
export default {
  data: () => ({
    icons: {
      mdiAccountDetails
    },
    skills: [
      {
        img: require('~/static/img/skill/icon1.png'),
        title: 'Problem Solving & Self-focus',
        text: 'I already have an experience of playing this game.'
      },
      {
        img: require('~/static/img/skill/icon2.png'),
        title: 'Sharefulness and Reliability',
        text: 'I am willing to share my knowledge and ideas in this game.'
      },
      {
        img: require('~/static/img/skill/icon3.png'),
        title: 'Teamwork & Communication',
        text: 'I am happy to help my fellow scholars to avoid being banned on axie.'
      },

      {
        img: require('~/static/img/skill/icon4.png'),
        title: 'Respectfulness & Friendliness',
        text: ' I will give my fully support about technical problems of this game as long as it is not beyond my capacity.'
      },
      {
        img: require('~/static/img/skill/icon5.png'),
        title: 'Time Management & Innovation',
        text: 'I am happy to help my fellow scholars to avoid being banned on axie.'
      },

      {
        img: require('~/static/img/skill/icon4.png'),
        title: 'Self-improvement & Perseverance',
        text: ' I will give my fully support about technical problems of this game as long as it is not beyond my capacity.'
      }
    ]
  })
}
</script>

 <style scoped>
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.2s ease-out;
}
</style>
