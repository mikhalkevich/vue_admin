import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue';
import HomeView from '../views/HomeView.vue';
import AuthApp from "@/components/auth/AuthApp";

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
  },
  {
    path: '/home',
    name: 'home',
    component: AuthApp,
    children:[
      {path:'',component:HomeView}
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/AuthLogin.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "login" */ '../views/AuthRegister.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
