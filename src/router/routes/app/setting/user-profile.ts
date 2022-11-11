/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */

export const UserProfileRoutes = [
  {
    path: "setting/user-profile",
    name: "app.setting.user-profile",
    meta: {
      title: "User Profile",
      ability: {
        action: "read",
        subject: "UserProfile",
      },
    },
    component: () =>
      import(
        /* webpackChunkName: "UserProfileView" */ "@/views/setting/UserProfile.vue"
      ),
  },
];
