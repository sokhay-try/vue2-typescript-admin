import { IconEnum } from "@/constants";
import { RouteConfig } from "vue-router";
import { UserProfileRoutes } from "./user-profile";

export const SettingRoutes = [...UserProfileRoutes];

export const SettingDrawerNavigation: Array<RouteConfig> = [
  {
    meta: {
      title: "Setting",
      icon: IconEnum.SETTING,
    },
    path: "",
    children: [...UserProfileRoutes],
  },
];
