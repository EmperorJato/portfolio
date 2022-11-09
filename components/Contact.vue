<template>
  <section id="contactSection">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" xl="8">
          <div
            class="d-flex align-center"
            data-aos="fade-right"
            data-aos-duration="4000"
          >
            <v-icon color="primary" left>
              {{ icons.mdiCardAccountMail }}
            </v-icon>
            <div class="section-title">
              GET IN TOUCH WITH ME
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="2000">
            <div class="headline font-weight-bold mb-5">
              Cont<span class="primary--text">act</span>
            </div>
          </div>

          <v-row>
            <v-col cols="12" md="5">
              <div class="subtitle-1">
                <p data-aos="fade-right">
                  Please let me know if you have any suitable position for me.
                </p>
                <p class="mt-3" data-aos="fade-right">
                  Contact Number:
                </p>
                <div data-aos="fade-left">
                  +639275371519
                </div>
                <p class="mt-3" data-aos="fade-right">
                  Email:
                </p>
                <div data-aos="fade-left">
                  javellanasteto99@gmail.com
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="7">
              <v-alert
                v-model="alert.show"
                dismissible
                color="success"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-email-check"
                prominent
                transition="scroll-x-reverse-transition"
              >
                <div class="px-3">
                  <div class="font-weight-bold text-subtitle-2 text-sm-subtitle-1">
                    {{ alert.title }}
                  </div>
                  <div class="caption">
                    {{ alert.text }}
                  </div>
                </div>

                </h5>
              </v-alert>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                aria-autocomplete="off"
                @submit.prevent="submit"
              >
                <v-text-field
                  v-model="form.name"
                  outlined
                  label="Name"
                  required
                  :rules="rules.name"
                  :prepend-inner-icon="icons.mdiAccount"
                />

                <v-text-field
                  v-model="form.email"
                  outlined
                  label="Email"
                  required
                  type="email"
                  :rules="rules.email"
                  :prepend-inner-icon="icons.mdiEmail"
                  background-color="none"
                />

                <v-textarea
                  v-model="form.message"
                  outlined
                  label="Message"
                  required
                  rows="4"
                  row-height="30"
                  :rules="rules.message"
                  :prepend-inner-icon="icons.mdiCommentText"
                />
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  rounded
                  block
                  type="submit"
                  :loading="loading"
                >
                  <v-icon left>
                    {{ icons.mdiSend }}
                  </v-icon>
                  Send Message
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="mt-16">
        <div class="waves wave-1" />
        <div class="waves wave-2" />
        <div class="waves wave-3" />
        <div class="waves wave-4" />
      </div>
    </v-container>
  </section>
</template>

<script>
import {
  mdiAccount,
  mdiEmail,
  mdiCommentText,
  mdiSend,
  mdiCardAccountMail
} from '@mdi/js'
export default {
  name: 'Contact',
  data: () => ({
    alert: {
      show: false,
      title: '',
      text: ''
    },
    loading: false,
    icons: {
      mdiAccount,
      mdiEmail,
      mdiCommentText,
      mdiSend,
      mdiCardAccountMail
    },
    valid: true,
    form: {
      name: '',
      email: '',
      message: ''
    },
    rules: {
      name: [v => !!v || 'Name is required'],
      email: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      message: [
        v => !!v || 'Message is required',
        v =>
          (v && v.length >= 10) || 'Message must be greater than 10 characters'
      ]
    }
  }),
  methods: {
    async submit () {
      this.loading = true
      try {
        if (this.$refs.form.validate()) {
          await this.$fire.firestore.collection('contact').add(this.form).then((res) => {
            this.alert = {
              show: true,
              title: 'Thank you for contacting me',
              text: 'Your message is important to me and I will respond as soon as possible. Thank You!'
            }

            this.$refs.form.reset()
          })
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
/* #contact {
  background: #fff;
  background-image: url("#");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;
} */

.v-alert {
  position: fixed;
  top: 15%;
  right: 2%;
  margin: 0 auto;
}
</style>
