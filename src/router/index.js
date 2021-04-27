import Vue from 'vue'
import VueRouter from 'vue-router'
import '../utils/util'
Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
