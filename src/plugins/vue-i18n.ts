/* ============
 * Vue i18n
 * ============
 *
 * Internationalization plugin of Vue.js.
 *
 * https://kazupon.github.io/vue-i18n/
 */

import Vue from "vue";
import VueI18n from "vue-i18n";
import messages, { defaultLocale } from "@/local";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
});

export default {
  i18n,
};
