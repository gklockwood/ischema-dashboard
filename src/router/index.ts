import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Therapist from '../views/Therapist.vue'
import Dashboard from '../views/patient/Dashboard.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Therapistjoin from '../views/Therapistjoin.vue'
import Messages from '../views/patient/Messages.vue'
import Survey from '../views/Survey.vue'
// import Schedule from '../views/patient/Schedule.vue'
import Schedulepreview from '../views/Schedulepreview.vue'
import Documents from '../views/patient/Documents.vue'
import Billing from '../views/patient/Billing.vue'
import Entercode from '../views/Entercode.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'Landing',
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/therapist',
    name: 'Therapist',
    component: Therapist
  },
  {
    path: '/patient/dashboard',
    name: 'PatientDashboard',
    component: Dashboard
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/therapistjoin',
    name: 'Therapistjoin',
    component: Therapistjoin
  },
  {
    path: '/patient/messages',
    name: 'PatientMessages',
    component: Messages
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  }
  ,
  // {
  //   path: '/patient/schedule',
  //   name: 'Schedule',
  //   component: Schedule
  // },
  {
    path: '/patient/documents',
    name: 'PatientDocuments',
    component: Documents
  },
  {
    path: '/patient/billing',
    name: 'PatientBilling',
    component: Billing
  },
  {
    path: '/schedulepreview',
    name: 'Schedulepreview',
    component: Schedulepreview
  },
  {
    path: '/entercode',
    name: 'Entercode',
    component: Entercode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'activeLink',
  routes
})

export default router
