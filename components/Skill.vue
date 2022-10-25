<template>
  <section id="skillSection">
    <v-container fluid>
      <div
        data-aos="fade-right"
        data-aos-duration="4000"
        class="d-flex align-center"
      >
        <v-icon color="primary" left>
          {{ icons.mdiAccountDetails }}
        </v-icon>
        <div class="section-title">
          Soft Skill
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <div class="headline font-weight-bold">
          Personal <span class="primary--text">Attributes</span>
        </div>
      </div>
      <v-row class="d-flex justify-content-center mt-10">
        <v-col v-for="(skill, i) in skills" :key="i" cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                dark
                class="card text-center"
                shaped
                :elevation="hover ? 10 : 4"
                :class="{ up: hover }"
                :height="$vuetify.breakpoint.lgAndUp ? '350px': ''"
              >
                <v-img
                  :src="skill.img"
                  max-width="100px"
                  class="d-block ml-auto mr-auto"
                  :class="{ 'zoom-efect': hover }"
                />
                <div class="title font-weight-bold mb-2">
                  {{ skill.title }}
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
        title: 'Problem Solving',
        text: 'I love programming because of these traits. Finding a problem and overcoming this obstacle makes programming fun.'
      },
      {
        img: require('~/static/img/skill/icon2.png'),
        title: 'Empathy',
        text: 'I know the feeling of being a programmer with no one to ask. No senior to teach you when you hit a bottleneck, so if there's someone in need I will take part of the burden that they are carrying.'
      },
      {
        img: require('~/static/img/skill/icon3.png'),
        title: 'Teamwork',
        text: 'I believe that sharing information, collaborating, and asking questions or helping if there is a problem will lead the team to success..'
      },

      {
        img: require('~/static/img/skill/icon4.png'),
        title: 'Respectfulness',
        text: 'What I hate the most in the workplace is the toxic employees. In order not to become one I must show respect and keep being friendly to my Camaraderie.'
      },
      {
        img: require('~/static/img/skill/icon5.png'),
        title: 'Time Management',
        text: 'Organizing and planning my time, helps me reduce stress at work. Setting a time frame for my tasks can increase my productivity and a sense of direction in my work.'
      },

      {
        img: require('~/static/img/skill/icon6.png'),
        title: 'Self-improvement & Perseverance',
        text: 'For me as a programmer, this is the most important trait of all. '
      }
    ]
  })
}
</script>

 <style scoped>
.card {
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
