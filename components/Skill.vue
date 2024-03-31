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
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="6000"
              :data-aos-delay="100 * i"
            >
              <div style="position: relative">
                <v-hover v-slot="{ hover }">
                  <v-card
                    dark
                    class="card text-center rounded-xl"
                    :elevation="hover ? 10 : 4"
                    :class="{ up: hover }"
                    :style="skill.show ? '' : 'height: 500px; transition: 0.25s;'"
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
        img: require('~/static/img/skill/empathy.png'),
        title: 'Empathy',
        text: "Empathy for a programmer goes beyond just emotions. It's a form of intelligence that involves understanding user and teammate needs, along with the ability to read situations and design solutions. This emotional intelligence fosters clear communication, resulting in well-designed and user-friendly code.",
        subText:
          'By prioritizing empathy, I can craft applications that resonate with user needs and frustrations, leading to a more intuitive and user-friendly experience.',
        show: false
      },
      {
        img: require('~/static/img/skill/perseverance.png'),
        title: 'Self-improvement & Perseverance',
        text: "Programming can often involve solving complex problems, demanding persistence and determination. This constant challenge fuels a growth mindset in good programmers, where they stay focused and motivated to conquer obstacles. It's this relentless pursuit of overcoming challenges that paves the way for a continuous journey of self-improvement.",
        subText:
          'Fueled by my relentless perseverance and a thirst for self-improvement, I embark on a software development journey. This path is paved with complex problems to tackle, new technologies to conquer, and a constant drive to refine my craft.',
        show: false
      },
      {
        img: require('~/static/img/skill/time_management.png'),
        title: 'Time Management',
        text: "Effective time management is a programmer's secret weapon. By chunking complex coding tasks into bite-sized pieces, you can prioritize effectively and tackle the most critical task first.  Dedicating focused work sessions and incorporating strategic breaks optimizes your coding time and unlocks peak productivity.",
        subText:
          'By breaking down tasks into manageable steps, scheduling focused work sessions, and prioritizing effectively, I can maximize my coding efficiency, minimize stress, and deliver projects on time.',
        show: false
      },
      {
        img: require('~/static/img/skill/problem_solving.png'),
        title: 'Problem Solving',
        text: 'Good programmers are able to break down complex problems into smaller, more manageable pieces and then develop solutions to those problems. This methodical approach ensures not only efficient coding but also the flexibility to adapt solutions as new challenges or requirements arise.',
        subText:
          'My methodical approach to problem-solving involves meticulously refining complex solutions towards elegant simplicity. This results in well-structured, readable, and ultimately, highly efficient code.',
        show: false
      },
      {
        img: require('~/static/img/skill/innovation.png'),
        title: 'Innovation',
        text: 'Programmers are more than coders; they\'re innovators. Critical thinking and problem-solving transform their creative ideas into elegant solutions that power impactful applications, constantly pushing the boundaries of what technology can achieve.',
        subText: 'My innovation skill set as a software developer unlocks the power to translate user needs into groundbreaking solutions. It all begins with empathy and critical thinking, allowing me to deeply understand user challenges and pinpoint the core problems.',
        show: false
      },

      {
        img: require('~/static/img/skill/team_work.png'),
        title: 'Teamwork',
        text: 'Programmers thrive on collaboration, using their diverse skillsets to achieve a common goal. A strong sense of camaraderie fosters clear communication, mutual support, and the ability to tackle challenges that exceed individual capabilities. This teamwork propels programmers to create groundbreaking applications that surpass what any one programmer could achieve alone.',
        subText:
          'I excel as a team player by clearly communicating progress and roadblocks, always willing to lend a hand to my teammates, and sharing my knowledge to boost our collective skills.',
        show: false
      }
    ]
  })
}
</script>

<style scoped>
#sectionSkill {
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
