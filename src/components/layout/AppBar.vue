<template>
  <div>
    <v-navigation-drawer v-model="drawer" app> </v-navigation-drawer>
    <v-app-bar app flat color="white" absolute dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ALL</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style>
</style>