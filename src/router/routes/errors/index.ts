import NotFoundView from "@/views/errors/NotFoundView.vue";

/** @type {import('vue-router').RouteConfig[]} */
export const ErrorRoutes = [
  {
    path: "*",
    redirect: {
      name: "40x",
    },
  },
  {
    path: "/404",
    name: "40x",
    component: NotFoundView,
  },
];
