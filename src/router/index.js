import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/addGroup',
    component: () => import(/* webpackChunkName: "about" */ '../views/addGroup.vue')
  },
  {
    path: '/addDevice',
    component: () => import( '../views/addDevice.vue')
  },
  {
    path: '/settingDevice',
    component: () => import( '../views/settingDevice.vue')
  },
  {
    path: '/CheckTemp',
    component: () => import( '../views/CheckTemp.vue')
  },
  {
    path: '/Temperature',
    component: () => import( '../views/Temperature.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
