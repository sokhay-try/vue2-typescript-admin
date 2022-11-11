import { RouteConfig } from "vue-router";
import { AppWireframe } from "@/wireframes";
import { DashboardRoutes } from "./dashboard";
import { DrawerBuilder } from "@/router/navigations/drawer.builder";
import { SettingRoutes } from "./setting";
import { RouteName } from "@/constants";

export const ApplicationRoutes: Array<RouteConfig> = [
  {
    path: "",
    name: "root",
    redirect: {
      name: RouteName.DASHBOARD.INDEX,
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
