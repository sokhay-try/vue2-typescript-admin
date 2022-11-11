<template>
  <v-navigation-drawer v-model="isDrawer" app>
    <v-img
      height="140"
      class="pa-4"
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/164eda0d-3e68-43b8-94b2-93fef358d9f6/dd4sgar-b28f9509-8f6e-4f50-843d-74ca4b4f4172.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2NGVkYTBkLTNlNjgtNDNiOC05NGIyLTkzZmVmMzU4ZDlmNlwvZGQ0c2dhci1iMjhmOTUwOS04ZjZlLTRmNTAtODQzZC03NGNhNGI0ZjQxNzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xJLbTEu_ao3SoX5vQJJBHnkFUWCp3B6A7-qQ5SoVDTo"
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/164eda0d-3e68-43b8-94b2-93fef358d9f6/dd4sgar-b28f9509-8f6e-4f50-843d-74ca4b4f4172.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2NGVkYTBkLTNlNjgtNDNiOC05NGIyLTkzZmVmMzU4ZDlmNlwvZGQ0c2dhci1iMjhmOTUwOS04ZjZlLTRmNTAtODQzZC03NGNhNGI0ZjQxNzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xJLbTEu_ao3SoX5vQJJBHnkFUWCp3B6A7-qQ5SoVDTo"
          />
        </v-avatar>
        <h2 class="white--text">Unstoppable</h2>
      </div>
    </v-img>
    <v-divider></v-divider>

    <!-- test -->
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="noChild in noChildMenu"
          :key="noChild?.meta?.title"
          link
          :to="{ name: noChild.name }"
        >
          <v-list-item-icon>
            <v-icon>{{ noChild?.meta?.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ noChild?.meta?.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <div
        v-for="haveChildItem in haveChildMenu"
        :key="haveChildItem?.meta?.title"
      >
        <v-list-group
          :value="true"
          :prepend-icon="haveChildItem?.meta?.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{
                haveChildItem?.meta?.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="haveChild in haveChildItem?.children"
            :key="haveChild?.meta?.title"
            :to="{ name: haveChild.name }"
          >
            <!-- if have ability defind -->
            <v-list-item-icon
              v-if="
                haveChild?.meta?.ability &&
                $can(
                  haveChild.meta.ability.action,
                  haveChild.meta.ability.subject
                )
              "
            >
              <v-icon v-text="haveChild?.meta?.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title
              v-if="
                haveChild?.meta?.ability &&
                $can(
                  haveChild?.meta?.ability.action,
                  haveChild?.meta?.ability.subject
                )
              "
              v-text="haveChild?.meta?.title"
            ></v-list-item-title>

            <!-- if don't have ability defind -->
            <v-list-item-icon v-if="!haveChild?.meta?.ability">
              <v-icon v-text="haveChild?.meta?.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title
              v-if="!haveChild?.meta?.ability"
              v-text="haveChild?.meta?.title"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
    <!-- end test -->
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { NavigationItem } from "@/router/navigations/NavigationDrawer";

export default Vue.extend({
  name: "Sidebar",
  props: {
    drawer: {
      type: Boolean,
    },
    drawerItems: {
      required: true,
      type: Array as () => Array<NavigationItem>,
    },
  },
  data() {
    return {
      isDrawer: true,
    };
  },
  computed: {
    // a computed getter
    noChildMenu(): Array<NavigationItem> {
      const res = this.drawerItems.filter((menu) => {
        return !menu?.children;
      });
      return res;
    },
    haveChildMenu(): Array<NavigationItem> {
      const res = this.drawerItems.filter((menu) => {
        return menu?.children;
      });
      return res;
    },
  },
  watch: {
    drawer: function (val) {
      this.isDrawer = val;
    },
  },
});
</script>

<style scoped></style>
