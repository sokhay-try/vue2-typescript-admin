import { RouteName } from "@/constants";
import AuthWireframe from "@/wireframes/AuthWireframe.vue";
import { RouteConfig } from "vue-router";

export const AuthRouteDef = {
  LOGIN: {
    path: "login",
    name: RouteName.AUTH.LOGIN,
    meta: {
      title: "Login",
    },
    component: () => import("@/views/auth/login/index.vue"),
  },
};

/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */
export const AuthRoutes: Array<RouteConfig> = [
  {
    path: "/login",
    redirect: {
      name: RouteName.AUTH.LOGIN,
    },
  },
  {
    path: "/auth",
    component: AuthWireframe,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        redirect: {
          name: RouteName.AUTH.LOGIN,
        },
      },
      AuthRouteDef.LOGIN,
    ],
  },
];
