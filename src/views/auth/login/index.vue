<template>
  <div>
    <h1>Login Page</h1>
    <v-btn @click="onLogin" class="primary">Login</v-btn>
  </div>
</template>

<script lang="ts">
import { RouteName } from "@/constants";
import Vue from "vue";

export default Vue.extend({
  name: "LoginView",
  methods: {
    onLogin() {
      this.$store.dispatch({
        type: "auth/login",
        payload: { username: "Admin", password: "123" },
      });
      this.$router.push({ name: RouteName.DASHBOARD.INDEX });
    },
  },
});
</script>
