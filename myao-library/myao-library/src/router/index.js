import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginFormView from '../components/LoginForm.vue'
import AboutView from '../views/AboutView.vue'
import { isAuthenticated } from '../store/auth'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
  path: '/login',
  name: 'Login',
  component: LoginFormView   
},
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const needAuth = to.matched.some(r => r.meta.requiresAuth)
  if (needAuth && !isAuthenticated.value) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router