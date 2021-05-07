import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', component: () => import('../components/HelloWorld.vue') }
    ]
  },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/register', component: () => import('../views/Register.vue') },
  { path: '/profile', component: () => import('../views/Profile.vue') },
  { path: '/login', component: () => import('../views/Login.vue') }

]

const router = new VueRouter({
  routes
})

export default router
