import { RouteConfig } from "vue-router";
import { AppWireframe } from "@/wireframes";
import { DashboardRoutes } from "./dashboard";
import { DrawerBuilder } from "@/router/navigations/drawer.builder";
import { SettingRoutes } from "./setting";

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
    props: {
      DrawerBuilder,
    },
    meta: {
      requiresAuth: true,
    },
    children: [...DashboardRoutes, ...SettingRoutes],
  },
];
