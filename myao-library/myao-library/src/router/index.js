import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginFormView from '../components/LoginForm.vue'
import AboutView from '../views/AboutView.vue'

// router/index.js 里
import { isAuthenticated } from '@/store/auth'


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
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'About' && !isAuthenticated.value) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router