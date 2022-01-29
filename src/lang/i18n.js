import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nMessage from './index';

Vue.use(VueI18n);
export default new VueI18n({
  locale: 'zh-cn',
  fallbackLocale: 'en-us',
  messages: i18nMessage
});
