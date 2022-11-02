import { RouteConfig } from "vue-router";
import { AppWireframe } from "@/wireframes";
import { DashboardRoutes } from "./dashboard";

export const ApplicationRoutes: Array<RouteConfig> = [
  {
    path: "",
    name: "root",
    redirect: {
      name: "dashboard",
    },
  },
  {
    path: "/app",
    component: AppWireframe,
    props: {},
    meta: {
      requiresAuth: true,
    },
    children: [...DashboardRoutes],
  },
];
