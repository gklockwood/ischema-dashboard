import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Therapist from '../views/Therapist.vue'
import Patient from '../views/Patient.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Therapistjoin from '../views/Therapistjoin.vue'
import Messages from '../views/Messages.vue'
import Survey from '../views/Survey.vue'
import Schedule from '../views/Schedule.vue'
import Patientdocuments from '../views/Patientdocuments.vue'
import Patientbilling from '../views/Patientbilling.vue'


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
    path: '/therapist/:therapistId',
    component: Messages  
  },
  {
    path: '/patient',
    name: 'Patient',
    component: Patient
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/login',
    name: 'Login',
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
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/patientdocuments',
    name: 'Patientdocuments',
    component: Patientdocuments
  },
  {
    path: '/patientbilling',
    name: 'Patientbilling',
    component: Patientbilling
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'activeLink',
  routes
})

export default router
