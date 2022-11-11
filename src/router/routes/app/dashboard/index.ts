import { AbilityEnum, IconEnum, RouteName } from "@/constants";
import { RouteConfig } from "vue-router";

export const DashboardRouteDef = {
  CONTACT: {
    path: "contact",
    name: RouteName.DASHBOARD.CONTACT,
    meta: {
      title: "contact",
    },
    component: () =>
      import(
        /* webpackChunkName: "ContactView" */ "@/views/dashboard/contact.vue"
      ),
  },
  ABOUT: {
    path: "about",
    name: RouteName.DASHBOARD.ABOUT,
    meta: {
      title: "about",
    },
    component: () =>
      import(/* webpackChunkName: "AboutView" */ "@/views/dashboard/about.vue"),
  },
};

/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */
export const DashboardRoutes: Array<RouteConfig> = [
  {
    path: "dashboard",
    name: RouteName.DASHBOARD.INDEX,
    component: () =>
      import(
        /* webpackChunkName: "DashboardView" */ "@/views/dashboard/index.vue"
      ),
    children: [DashboardRouteDef.CONTACT, DashboardRouteDef.ABOUT],
  },
];

/**
 * Navigations
 */
export const DashboardDrawerNavigation: Array<RouteConfig> = [
  {
    path: "dashboard",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      icon: IconEnum.DASHBOARD,
      ability: {
        action: AbilityEnum.Action.READ,
        subject: AbilityEnum.Subject.DASHBOARD,
      },
    },
  },
];
