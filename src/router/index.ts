import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// General
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Therapistjoin from '../views/Therapistjoin.vue'
import Messages from '../views/patient/Messages.vue'
import Survey from '../views/Survey.vue'
import Entercode from '../views/Entercode.vue'

// Patient Related
import Dashboard from '../views/patient/Dashboard.vue'
import Schedulepreview from '../views/Schedulepreview.vue'
import Documents from '../views/patient/Documents.vue'
import Billing from '../views/patient/Billing.vue'

// Therapist Related
import Tdashboard from '../views/therapist/Tdashboard.vue'
import Tdocuments from '../views/therapist/Tdocuments.vue'
import Tbilling from '../views/therapist/Tbilling.vue'
import Clientlist from '../views/therapist/Clientlist.vue'
import Sessions from '../views/therapist/Sessions.vue'
import Sessiondetail from '../views/therapist/Sessiondetail.vue'
import Clientdetail from '../views/therapist/Clientdetail.vue'
import Tcalendar from '../views/therapist/Tcalendar.vue'
import Sentforms from '../views/therapist/Sentforms.vue'
import Tmessages from '../views/therapist/Tmessages.vue'
import Tsettings from '../views/therapist/Tsettings.vue'

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
  },
  // {
  //   path: '/therapist/therapistdashboard',
  //   name: 'TherapistDashboard',
  //   component: Tdashboard
  // },
  {
    path: '/therapist/therapistbilling',
    name: 'TherapistBilling',
    component: Tbilling
  },
  {
    path: '/therapist/documents',
    name: 'TherapistDocuments',
    component: Tdocuments
  },
  {
    path: '/therapist/clientlist',
    name: 'Clientlist',
    component: Clientlist
  },
  {
    path: '/therapist/sessions',
    name: 'Sessions',
    component: Sessions
  },
  {
    path: '/therapist/sessionsdetail',
    name: 'Sessionsdetail',
    component: Sessiondetail
  },
  {
    path: '/therapist/clientdetail',
    name: 'Clientdetail',
    component: Clientdetail
  },
  {
    path: '/therapist/therapistcalendar',
    name: 'Therapistcalendar',
    component: Tcalendar
  },
  {
    path: '/therapist/sentforms',
    name: 'Sentforms',
    component: Sentforms
  },
  {
    path: '/therapist/therapistmessages',
    name: 'Therapistmessages',
    component: Tmessages
  },
  {
    path: '/therapist/therapistdashboard',
    name: 'Therapistsettings',
    component: Tsettings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'activeLink',
  routes
})

export default router
