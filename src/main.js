import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
/*  引入element 样式 */
import 'element-ui/lib/theme-chalk/index.css'
import dayjs from 'dayjs'


Vue.prototype.$dayJs = dayjs
Vue.config.productionTip = false
Vue.use(plugins).use(Element, {
  locale,
});

import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
