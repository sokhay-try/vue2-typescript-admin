import { ApplicationRoutes } from "@/router/routes/app";
import { RouteConfig } from "vue-router";
import { AuthRoutes } from "./routes/auth";
import { ErrorRoutes } from "./routes/errors";

export function loadRoutes() {
  const routes: Array<RouteConfig> = [
    ...ApplicationRoutes,
    ...AuthRoutes,
    ...ErrorRoutes,
  ];

  return { routes };
}
