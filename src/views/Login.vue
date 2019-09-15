<template>
  <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 mt-5>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-avatar color="white">
                <v-icon dark color="primary">mdi-account-card-details</v-icon>
              </v-avatar>
              <v-toolbar-title class="ml-3">Clients</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account"
                  name="username"
                  label="Email"
                  type="email"
                  v-model="username"
                ></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Heslo"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="emailLogin">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    emailLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          user => {
            this.$router.push({name: 'home'});
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>
