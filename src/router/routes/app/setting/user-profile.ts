/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */

import { AbilityEnum, IconEnum, RouteName } from "@/constants";

export const UserProfileRoutes = [
  {
    path: "setting/user-profile",
    name: RouteName.SETTING.USER_PROFILE,
    meta: {
      title: "User Profile",
      icon: IconEnum.AUTHENTICATOR,
      ability: {
        action: AbilityEnum.Action.READ,
        subject: AbilityEnum.Subject.USER_PROFILE,
      },
    },
    component: () =>
      import(
        /* webpackChunkName: "UserProfileView" */ "@/views/setting/UserProfile.vue"
      ),
  },
];
