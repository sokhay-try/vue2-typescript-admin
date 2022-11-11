import { defineAbility } from "@casl/ability";

export default defineAbility((can) => {
  /** In real app should be fetch from backend api */
  can("read", "Dashboard");
  can("read", "UserProfile");
});
