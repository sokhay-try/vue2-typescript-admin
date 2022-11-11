import { PureAbility } from "@casl/ability";
import VueRouter, { Route } from "vue-router";

export default {
  methods: {
    canAccessToPage(
      $route: Route,
      $can: PureAbility["can"],
      $router: VueRouter
    ) {
      const action = $route?.meta?.ability?.action;
      const subject = $route?.meta?.ability?.subject;
      if (!$can(action, subject)) {
        $router.push({ name: "40x" });
      }
    },
  },
};
