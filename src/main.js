import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import './utils/util'
import { Picker, Button, Loading } from 'vant'
import 'amfe-flexible'
Vue.use(Picker)
  .use(Button)
  .use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
