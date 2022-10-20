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
        Personal <span class="primary--text">Attributes</span>
      </div>

      <v-row class="d-flex justify-content-center">
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                dark
                class="card text-center"
                shaped
                :elevation="hover ? 10 : 4"
                :class="{ up: hover }"
                height="200px  "
              >
                <v-img
                  :src="skill.img"
                  max-width="100px"
                  class="d-block ml-auto mr-auto"
                  :class="{ 'zoom-efect': hover }"
                />
                <div class="title font-weight-bold mb-2">
                  {{ skill.title1 }}
                  <span class="primary--text">&</span>
                  {{ skill.title2 }}
                </div>
                <v-card-text class="body-1">
                  <p>
                    {{ skill.text }}
                  </p>
                </v-card-text>
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
        title1: 'Problem Solving ',
        title2: ' Self-focus',
        text: 'I love programming because of these traits. Finding a problem and overcoming this obstacle is what makes programming fun.'
      },
      {
        img: require('~/static/img/skill/icon2.png'),
        title1: 'Sharefulness ',
        title2: ' Reliability',
        text: ' I may not good enough but I am willing to share every inch of much knowledge to my fellow colleague'
      },
      {
        img: require('~/static/img/skill/icon3.png'),
        title1: 'Teamwork ',
        title2: ' Communication',
        text: 'I believe that exchanging information, collaborating, and asking or helping if there is a problem will lead the team to success.'
      },

      {
        img: require('~/static/img/skill/icon4.png'),
        title1: 'Respectfulness ',
        title2: ' Friendliness',
        text: 'What I hate the most in the workplace is the toxic employees. In order not to become one I must show respect and keep being friendly to my Camaraderie.'
      },
      {
        img: require('~/static/img/skill/icon5.png'),
        title1: 'Time Management ',
        title2: ' Innovation',
        text: 'Organizing and planning my time, helps me reduce stress at work. Setting a time frame for my goals and tasks can increase my productivity and a sense of direction in my work.'
      },

      {
        img: require('~/static/img/skill/icon4.png'),
        title1: 'Self-improvement ',
        title2: ' Perseverance',
        text: 'For me as a programmer, this is the most important trait of all. '
      }
    ]
  })
}
</script>

 <style scoped>
.card {
  min-height: 320px;
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
