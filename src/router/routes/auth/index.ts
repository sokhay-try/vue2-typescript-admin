import AuthWireframe from "@/wireframes/AuthWireframe.vue";
import { RouteConfig } from "vue-router";

export const AuthRouteDef = {
  LOGIN: {
    path: "login",
    name: "auth.login",
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
      name: "auth.login",
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
          name: "auth.login",
        },
      },
      AuthRouteDef.LOGIN,
    ],
  },
];
