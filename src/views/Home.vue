<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "../components/layout/AppBar.vue";

export default {
  name: "Home",

  components: {
    AppBar,
  },
};
</script>
