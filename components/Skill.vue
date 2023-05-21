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
          <v-row class="d-flex justify-center">
            <v-col
              v-for="(skill, i) in skills"
              :key="i"
              cols="12"
              md="4"
              class="flex-fill"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="6000"
              :data-aos-delay="100 * i"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  dark
                  class="card text-center"
                  min-height="100%"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
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
              </v-hover>
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
        // Problem solving is like a challenge and there is only a sense of accomplishment if there is a challenge.
        text: 'Breaking down complex problem into pieces and then develop solutions to those problem, after that assemble them just like a jigsaw puzzle.',
        subText:
          "A common way to solve a problem is, by going from simplicity to complexity but what's more challenging is by reverting it from complexity to simplicity. This will make my codes readable, maintainable, and efficient.",
        show: false
      },
      {
        img: require('~/static/img/skill/empathy.png'),
        title: 'Empathy',
        text: 'Empathy is linked to intelligence. By sharing and understanding of the user`s feelings, with sincere emphathy a developer will become wise and discerning in creating a user-friendly applications.'
      },
      {
        img: require('~/static/img/skill/time_management.png'),
        title: 'Time Management',
        text: 'Organizing and planning time help reduce stress at work. Setting a time frame for the task can increase the productivity and a sense of direction in work.'
      },
      {
        img: require('~/static/img/skill/team_work.png'),
        title: 'Teamwork',
        text: 'Developing camaraderie, sharing information and collaborating will boost productivity, and maintain harmonious environment that can lead the team to success.'
      },
      {
        img: require('~/static/img/skill/innovation.png'),
        title: 'Innovation',
        text: 'Opportunities will arise for being always open to new things and ideas. Sometimes, these new strange ideas are essential for pioneering achievements.'
      },
      {
        img: require('~/static/img/skill/perseverance.png'),
        title: 'Self-improvement & Perseverance',
        text: 'Technology is evolving everyday. To adapt to these new technologies, one must learn it no matter how bitter the process is, never stop learning and self-improving. There shall be a moment that these learnings will be used as an advantage to your career.',
        // subText:
        //   'Self-improving is really hard for me due to lack of talent. Only by hardworking and persevering can make me further from this self-improvement. I truly believe that as long as I persevere, I will see results.',
        show: false
      }
    ]
  })
}
</script>

 <style scoped>
 #sectionSkill{
  position: relative;
  z-index: 1;
 }

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

