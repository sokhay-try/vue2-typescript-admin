import { ApplicationRoutes } from "@/router/routes/app";
import { RouteConfig } from "vue-router";
import { AuthRoutes } from "./routes/auth";

export function loadRoutes() {
  const routes: Array<RouteConfig> = [...ApplicationRoutes, ...AuthRoutes];

  return { routes };
}
