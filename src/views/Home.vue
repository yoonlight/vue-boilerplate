<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
    <app-bottom />
  </v-app>
</template>

<script>
import AppBar from "../components/layout/AppBar.vue";
import AppBottom from "../components/layout/AppBottom.vue";

export default {
  name: "Home",

  components: {
    AppBar,
    AppBottom,
  },
};
</script>
