<template>
  <v-app>
    <v-app-bar :value="!!auth.currentUser" app>
      <v-avatar color="primary">
        <v-icon dark>mdi-account-card-details</v-icon>
      </v-avatar>
      <v-toolbar-title class="headline text-uppercase ml-3">
        <span class="font-weight-light">Clients</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="logout"
      >
        <span class="mr-2">Log out</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      :temporary="temporary"
      :permanent="!temporary"
      clipped
      app
    >
    <div>
      vanjkbj
    </div>
  </v-navigation-drawer>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    temporary: false
  }),
  methods: {
    logout() {
      firebase.auth().signOut();
      this.$router.push({name: 'login'});
    }
  },
  computed: {
    auth() {
      return firebase.auth();
    }
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
