import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginFormView from '../components/LoginForm.vue'
import AboutView from '../views/AboutView.vue'
import { isAuthenticated } from '../store/auth'
import { getAuth } from 'firebase/auth'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import UserWelcomeView from '../views/UserWelcomeView.vue'
import SetupAdminView from '../views/SetupAdminView.vue'
import LogoutPageView from '../views/LogoutPageView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherCheckView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView
//   },

//   {
//   path: '/login',
//   name: 'Login',
//   component: LoginFormView   
// },
//   {
//     path: '/about',
//     name: 'About',
//     component: AboutView,
//     meta: { requiresAuth: true }
//   },

//   {
//     path: '/firelogin',   
//     name: 'FireLogin',
//     component: FirebaseSigninView
//   },

//   {
//     path: '/fireregister',   
//     name: 'FireRegister',
//     component: FirebaseRegisterView
//   },

//   {
//     path: '/addbook',
//     name: 'AddBook',
//     component: AddBookView
//   },

//   {
//     path: '/welcome',
//     name: 'UserWelcome',
//     component: UserWelcomeView,
//     meta: { requiresAuth: true }
//   },

//   {
//     path: '/setup-admin',
//     name: 'SetupAdmin',
//     component: SetupAdminView
//   },

//   {
//     path: '/logout-page',
//     name: 'LogoutPage',
//     component: LogoutPageView
//   },

//   {
//     path: '/GetBookCount',
//     name: 'GetBookCount',
//     component: GetBookCountView

//   },

//   {
//     path: '/WeatherCheck',
//     name: 'WeatherCheck',
//     component: WeatherCheckView
//   },

//   {
//     path: '/CountBookAPI',
//     name: 'CountBookAPI',
//     component: CountBookAPI
//   }
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    // your routes here
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
    },

    {
      path: '/firelogin',
      name: 'FireLogin',
      component: FirebaseSigninView
    },

    {
      path: '/fireregister',
      name: 'FireRegister',
      component: FirebaseRegisterView
    },

    {
      path: '/addbook',
      name: 'AddBook',
      component: AddBookView
    },

    {
      path: '/welcome',
      name: 'UserWelcome',
      component: UserWelcomeView,
      meta: { requiresAuth: true }
    },

    {
      path: '/setup-admin',
      name: 'SetupAdmin',
      component: SetupAdminView
    },

    {
      path: '/logout-page',
      name: 'LogoutPage',
      component: LogoutPageView
    },

    {
      path: '/GetBookCount',
      name: 'GetBookCount',
      component: GetBookCountView

    },

    {
      path: '/WeatherCheck',
      name: 'WeatherCheck',
      component: WeatherCheckView
    },

    {
      path: '/CountBookAPI',
      name: 'CountBookAPI',
      component: CountBookAPI
    }

  ]
})

router.beforeEach((to, from, next) => {
  const needAuth = to.matched.some(r => r.meta.requiresAuth)
  const auth = getAuth()
  const isFirebaseAuth = auth.currentUser !== null

  if (needAuth && !isFirebaseAuth) {
    next({ name: 'FireLogin', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router