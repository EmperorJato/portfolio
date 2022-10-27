<template>
  <section id="contactSection">
    <v-container fluid>
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
          <h3 class="subtitle-1 my-3">
            Let's talk about everything.<br>Please feel free to contact me if
            you are interested in hiring me.
          </h3>
          <span class="subtitle-1 mt-3"> Contact Number: </span>
          <p class="subtitle-1">
            +639275371519
          </p>
          <span class="subtitle-1 mt-3"> Email: </span>
          <p class="subtitle-1">
            stetojavellana01@gmail.com
          </p>
          <v-img src="#" class="d-block ml-auto mr-auto mt-6" />
        </v-col>
        <v-col cols="12" md="7">
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
  })
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
</style>
