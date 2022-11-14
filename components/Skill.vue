<template>
  <section id="skillSection">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" xl="8">
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
          <v-row justify="center">
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
                      :min-height="$vuetify.breakpoint.lgAndUp ? '390px' : ''"
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
                      <v-card-text class="body-1 pb-0">
                        <p>
                          {{ skill.text }}
                        </p>

                        <div v-if="skill.subText" class="my-0">
                          <v-btn
                            icon
                            color="primary"
                            @click="skill.show = !skill.show"
                          >
                            <v-icon>
                              {{
                                skill.show
                                  ? "mdi-chevron-double-up"
                                  : "mdi-chevron-double-down"
                              }}
                            </v-icon>
                          </v-btn>

                          <v-expand-transition>
                            <div v-show="skill.show">
                              <v-divider />

                              <v-card-text>
                                {{ skill.subText }}
                              </v-card-text>
                            </div>
                          </v-expand-transition>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </div>
            </v-col>
          </v-row>
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
        subText:
          'A common way to solve a problem is, by going from simplicity to complexity but what makes me more excited is reverting it from complexity to simplicity. This will make my codes readable and maintainable.',
        show: false
      },
      {
        img: require('~/static/img/skill/empathy.png'),
        title: 'Empathy',
        text: 'Empathy is linked to intelligence. From my perspective this is the best trait for frontend developer. If I understand and share the feeling of my users. With sincere emphathy, I will be wise and discerning in developing a user-friendly applications.'
      },
      {
        img: require('~/static/img/skill/time_management.png'),
        title: 'Time Management',
        text: 'Organizing and planning time, helps me reduce stress at work. Setting a time frame for my tasks can increase my productivity and a sense of direction in my work.'
      },
      {
        img: require('~/static/img/skill/team_work.png'),
        title: 'Teamwork',
        text: 'I believe that sharing information, collaborating, asking questions and helping if there is a problem will lead the team to success.'
      },
      {
        img: require('~/static/img/skill/innovation.png'),
        title: 'Innovation',
        text: 'As long as I always open to new things and ideas, opportunities will arise. I like innovation because sometimes, these new strange ideas are essential for pioneering achievements.'
      },

      {
        img: require('~/static/img/skill/perseverance.png'),
        title: 'Self-improvement & Perseverance',
        text: 'As a developer this is the most important trait of all. Technology is evolving everday so I need to adapt. Even how bitterly the process of improvement is, I must never stop self-improving.',
        subText:
          'Self-improvement is really hard for me due to lack of talent. Only by hardwork and perseverance can make me further from this self-improvement. If it doesn`t work the first time, I will do it a second time. If I fail again, then go for the third. As long as I persevere, I will see results.',
        show: false
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
