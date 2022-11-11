<template>
  <div>
    <h1>This is User profile</h1>
  </div>
</template>

<script lang="ts">
import canAccessToPage from "@/mixins/canAccessToPage";
import Vue from "vue";

export default Vue.extend({
  name: "UserProfileView",
  mixins: [canAccessToPage],
  mounted() {
    canAccessToPage.methods.canAccessToPage(
      this.$route,
      this.$can,
      this.$router
    );
  },
  methods: {},
});
</script>
