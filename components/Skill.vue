<template>
  <section id="skillSection">
    <v-container fluid>
      <div class="align-start mb-10">
        <div
          data-aos="fade-right"
          data-aos-duration="4000"
          class="d-flex align-center"
        >
          <v-icon color="primary" left>
            {{ icons.mdiAccountDetails }}
          </v-icon>
          <div class="section-title">
            My Personal Attributes
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000">
          <div class="headline font-weight-bold">
            Soft <span class="primary--text">Skill</span>
          </div>
        </div>
      </div>
      <v-row class="d-flex justify-content-center">
        <v-col v-for="(skill, i) in skills" :key="i" cols="12" md="4">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="6000"
            :data-aos-delay="100 * i"
          >
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
          </div>
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
        text: 'I love programming because of this trait. Finding a problem and overcoming this obstacle makes programming fun.'
      },
      {
        img: require('~/static/img/skill/icon2.png'),
        title: 'Empathy',
        text: 'if you understand the feeling of someone your actions and the way you make an application will be wise and discerning. So if there is someone in need I will see if I have the ability to carry some of their burden.'
      },
      {
        img: require('~/static/img/skill/icon3.png'),
        title: 'Teamwork',
        text: 'I believe that sharing information, collaborating, asking questions and helping if there is a problem will lead the team to success.'
      },

      {
        img: require('~/static/img/skill/icon4.png'),
        title: 'Respectfulness',
        text: 'What I hate the most in the workplace is the toxic employees. As long as I show respect, then the other party would definitely be affected by my respectful manners, this also helps me balance the factor in a workplace.'
      },
      {
        img: require('~/static/img/skill/icon5.png'),
        title: 'Time Management',
        text: 'Organizing and planning my time, helps me reduce stress at work. Setting a time frame for my tasks can increase my productivity and a sense of direction in my work.'
      },
      {
        img: require('~/static/img/skill/icon6.png'),
        title: 'Self-improvement & Perseverance',
        text: 'For me as a programmer, this is the most important trait of all.'
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
