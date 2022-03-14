import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getProjectCode, initCodeAndBase } from '../utils/getUrlBase'
Vue.use(VueRouter)
const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
  },
]
initCodeAndBase()
export const router = new VueRouter({
  mode: 'history',
  base: getProjectCode(),
  routes,
})
