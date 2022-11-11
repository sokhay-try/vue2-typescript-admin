import * as MaterialIcon from "@mdi/js";
/**
 * Application's Icon enum
 */
export const IconEnum = Object.freeze({
  DEFAULT: MaterialIcon.mdiImageBrokenVariant,
  CARET_DOWN: MaterialIcon.mdiMenuDown,
  DEVTOOLS: MaterialIcon.mdiDeveloperBoard,
  EXIT: MaterialIcon.mdiExitToApp,
  CREATE: MaterialIcon.mdiPlus,
  COPY: MaterialIcon.mdiContentCopy,
  SYNC: MaterialIcon.mdiSync,
  CLOCK: MaterialIcon.mdiTimer,
  INFO: MaterialIcon.mdiInformationOutline,
  NEXT: MaterialIcon.mdiChevronRight,
  PREVIOUS: MaterialIcon.mdiChevronLeft,
  ARROW_RIGHT: MaterialIcon.mdiArrowRight,
  LOCK: MaterialIcon.mdiLockOutline,
  SETTING: MaterialIcon.mdiCogOutline,
  SWITCH_USER: MaterialIcon.mdiAccountMultipleOutline,
  AUTHENTICATOR: MaterialIcon.mdiShieldLockOutline,
  LOGOUT: MaterialIcon.mdiLogout,
  DASHBOARD: MaterialIcon.mdiViewDashboard,
});

/**
 * Action's Icon enum
 */
export const ActionIconEnum = Object.freeze({
  show: MaterialIcon.mdiEyeOutline,
  create: MaterialIcon.mdiPlus,
  update: MaterialIcon.mdiSquareEditOutline,
  delete: MaterialIcon.mdiDeleteOutline,
});

/**
 * Navigation's Icon enum
 */
export const NavigationIconEnum = Object.freeze({
  DEFAULT: IconEnum.DEFAULT,
  DASHBOARD: MaterialIcon.mdiViewDashboard,
});
