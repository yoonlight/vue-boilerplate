import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      { path: 'hello', component: () => import('../components/HelloWorld.vue') },
      { path: '', component: () => import('../views/Inbox.vue') }
    ]
  },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/register', component: () => import('../views/Register.vue') },
  { path: '/profile', component: () => import('../views/Profile.vue') },
  { path: '/list', component: () => import('../views/List.vue') },
  { path: '/login', component: () => import('../views/Login.vue') }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
