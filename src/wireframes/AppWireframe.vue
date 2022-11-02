<template>
  <v-app>
    <sidebar :drawer="drawer" />
    <topbar @drawerEvent="drawer = !drawer" />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

export default Vue.extend({
  name: "AppWireFrame",
  components: {
    Sidebar,
    Topbar,
  },
  data: () => ({
    drawer: true,
  }),
});
</script>
