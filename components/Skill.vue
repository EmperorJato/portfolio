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
        img: require('~/static/img/skill/problem_solving.png'),
        title: 'Problem Solving',
        text: 'For me this is the best trait for a backend developer. Finding a problem and overcoming this obstacle makes programming fun.',
        subText: 'A common way to solve a problem is by going from simplicity to complexity but what makes more thrilling is reverting from complexity to simplicity. This will make your codes simple, readable, and maintainable.'
      },
      {
        img: require('~/static/img/skill/empathy.png'),
        title: 'Empathy',
        text: 'Empathy is linked to intelligence. If you understand and share the feeling of your users, you will be wise and discerning in the making of application. For me the is the best trait for frontend developer'
      },
      {
        img: require('~/static/img/skill/team_work.png'),
        title: 'Teamwork',
        text: 'I believe that sharing information, collaborating, asking questions and helping if there is a problem will lead the team to success.'
      },
      {
        img: require('~/static/img/skill/innovation.png'),
        title: 'Innovation',
        text: 'As long as I always open to new things and ideas, opportunities will arise. Sometimes, these new strange ideas are essential for pioneering achievements.'
      },
      {
        img: require('~/static/img/skill/time_management.png'),
        title: 'Time Management',
        text: 'Organizing and planning time, helps me reduce stress at work. Setting a time frame for my tasks can increase my productivity and a sense of direction in my work.'
      },
      {
        img: require('~/static/img/skill/perseverance.png'),
        title: 'Self-improvement & Perseverance',
        text: 'For me as a developer, this is the most important trait of all.'
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
