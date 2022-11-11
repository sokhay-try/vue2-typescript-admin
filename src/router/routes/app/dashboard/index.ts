import { RouteConfig } from "vue-router";

export const DashboardRouteDef = {
  CONTACT: {
    path: "contact",
    name: "app.dashboard.contact",
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
    name: "app.dashboard.about",
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
    name: "dashboard",
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
      ability: {
        action: "read",
        subject: "Dashboard",
      },
    },
  },
];
