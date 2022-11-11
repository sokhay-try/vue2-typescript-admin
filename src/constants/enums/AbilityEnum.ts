export const ActionEnum = Object.freeze({
  LIST: "view",
  READ: "view",
  CREATE: "create",
  UPDATE: "edit",
  DELETE: "delete",
});

export const SpecialActionEnum = Object.freeze({
  CLONE: "clone",
  APPROVE: "approve",
  REJECT: "reject",
  CANCEL: "cancel",
  RESET_PASSWORD: "reset_password",
  EXPORT: "export",
  IMPORT: "import",
});

export const SubjectEnum = Object.freeze({
  SETTING: "SETTING",
  DASHBOARD: "DASHBOARD",
  USER_PROFILE: "USER_PROFILE",
});

export const AbilityEnum = Object.freeze({
  Action: ActionEnum,
  SpecialAction: SpecialActionEnum,
  Subject: SubjectEnum,
});
