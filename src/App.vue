<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-title>Electron Vue Boilerplate</v-app-bar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="pushRouter" target="_blank" text>
        <span class="mr-2">Switch Page</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    pushRouter() {
      if (this.$router.currentRoute.path === "/") {
        this.$router.push("/about");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>
