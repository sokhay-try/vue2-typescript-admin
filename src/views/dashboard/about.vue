<template>
  <div>
    <h1>This is Dashboard => About</h1>
    <h1>My profile: {{ fullName }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutView",
  mounted() {
    this.$store.dispatch({ type: "profile/fetchData", payload: { id: 3 } });
  },
  computed: {
    fullName(): string {
      return this.$store.getters["profile/fullName"];
    },
  },
});
</script>
