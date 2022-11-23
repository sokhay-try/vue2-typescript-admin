<template>
  <div>
    <h1 class="test">This is Dashboard page</h1>
    <router-link :to="{ name: 'app.dashboard.contact' }"
      >Go to Contact</router-link
    >
    |
    <router-link :to="{ name: 'app.dashboard.about' }">Go to About</router-link>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DashboardView",
});
</script>

<style lang="scss" scoped>
.test {
  color: $primary-color;
}
</style>
