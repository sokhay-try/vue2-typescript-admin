<template>
  <div>
    <h1>This is Dashboard => About</h1>
    <h1>My profile: {{ fullName }}</h1>
    <h1>{{ $t("auth.success") }}</h1>

    <h1>Change Langues</h1>
    <v-select
      :items="LOCALES"
      item-value="value"
      item-text="caption"
      label="Switch Langues"
      v-model="$i18n.locale"
      outlined
    ></v-select>
  </div>
</template>

<script lang="ts">
import { LOCALES } from "@/local/local-types";
import Vue from "vue";

export default Vue.extend({
  name: "AboutView",
  mounted() {
    this.$store.dispatch({ type: "profile/getUserById", payload: { id: 1 } });
  },
  computed: {
    fullName(): string {
      return this.$store.getters["profile/fullName"];
    },
  },
  data() {
    return {
      LOCALES,
    };
  },
});
</script>
