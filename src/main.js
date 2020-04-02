import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import global_msg from './global.js'   //注意文件路径，实际路径以项目目录结构为准
Vue.prototype.$global_msg = global_msg;

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios,axios);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
