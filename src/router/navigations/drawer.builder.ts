// Drawer Navigations
import { DashboardDrawerNavigation } from "../routes/app/dashboard";
import { SettingDrawerNavigation } from "../routes/app/setting";
import { NavigationDrawer } from "./NavigationDrawer";

export const DrawerBuilder = new NavigationDrawer({
  items: [...DashboardDrawerNavigation, ...SettingDrawerNavigation],
});
