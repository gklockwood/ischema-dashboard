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
import Securecall from '../views/Securecall.vue'
import Patientportal from '../views/Patientportal.vue'
import Prospectivepatient from '../views/Prospectivepatient.vue'

// Patient Related
import Dashboard from '../views/patient/Dashboard.vue'
import Schedulepreview from '../views/Schedulepreview.vue'
import Documents from '../views/patient/Documents.vue'
import Billing from '../views/patient/Billing.vue'
import Schedule from '../views/patient/Schedule.vue'
import Clientappointmentconfirmation from '../views/patient/Clientappointmentconfirmation.vue'
import Clientappointments from '../views/patient/Clientappointments.vue'
import Clientrequestappointment from '../views/patient/Clientrequestappointment.vue'
import Clientselecttime from '../views/patient/Clientselecttime.vue'

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
import Clientportal from '../views/therapist/Clientportal.vue'
import Patientdetails from '../views/therapist/Patientdetails.vue'
import Therapistacceptappointment from '../views/therapist/Therapistacceptappointment.vue'
import Therapistcontinuetoemail from '../views/therapist/Therapistcontinuetoemail.vue'
import Therapistemailreview from '../views/therapist/Therapistemailreview.vue'
import Therapistemailreviewsend from '../views/therapist/Therapistemailreviewsend.vue'



// Admin Related
import Adminaccountactivity from '../views/admin/Adminaccountactivity.vue'
import Admincalendar from '../views/admin/Admincalendar.vue'
import Adminclients from '../views/admin/Adminclients.vue'
import Admindashboard from '../views/admin/Admindashboard.vue'
import Adminreminders from '../views/admin/Adminreminders.vue'
import Adminreports from '../views/admin/Adminreports.vue'
import Admintherapists from '../views/admin/Admintherapists.vue'
import Adminmonthlyincome from '../views/admin/Adminmonthlyincome.vue'
import Adminpayouts from '../views/admin/Adminpayouts.vue'
import Adminappointmentstatus from '../views/admin/Adminappointmentstatus.vue'
import Adminsentemails from '../views/admin/Adminsentemails.vue'
import Adminbilling from '../views/admin/Adminbilling.vue'

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
    path: '/patientportal',
    name: 'Patientportal',
    component: Patientportal
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
  },
  {
    path: '/patient/schedule',
    name: 'Schedule',
    component: Schedule
  },
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
  },
  {
    path: '/securecall',
    name: 'Securecall',
    component: Securecall
  },
  {
    path: '/therapist/clientportal',
    name: 'Clientportal',
    component: Clientportal
  },
  {
    path: '/therapist/patientdetails',
    name: 'Patientdetails',
    component: Patientdetails
  },
  {
    path: '/admin/adminaccountactivity',
    name: 'Adminaccountactivity',
    component: Adminaccountactivity
  },
  {
    path: '/admin/admincalendar',
    name: 'Admincalendar',
    component: Admincalendar
  },
  {
    path: '/admin/Aaminclients',
    name: 'Adminclients',
    component: Adminclients
  },
  {
    path: '/admin/admindashboard',
    name: 'Admindashboard',
    component: Admindashboard
  },
  {
    path: '/admin/adminreminders',
    name: 'Adminreminders',
    component: Adminreminders
  },
  {
    path: '/admin/adminreports',
    name: 'Adminreports',
    component: Adminreports
  },
  {
    path: '/admin/admincalendar',
    name: 'Admincalendar',
    component: Admincalendar
  },
  {
    path: '/admin/admintherapists',
    name: 'Admintherapists',
    component: Admintherapists
  },
  {
    path: '/admin/adminmonthlyincome',
    name: 'Adminmonthlyincome',
    component: Adminmonthlyincome
  },
  {
    path: '/admin/adminpayouts',
    name: 'Adminpayouts',
    component: Adminpayouts
  },
  {
    path: '/admin/adminappointmentstatus',
    name: 'Adminappointmentstatus',
    component: Adminappointmentstatus
  },
  {
    path: '/admin/adminsentemails',
    name: 'Adminsentemails',
    component: Adminsentemails
  },
  {
    path: '/admin/adminbilling',
    name: 'Adminbilling',
    component: Adminbilling
  },
  {
    path: '/patient/clientappointmentconfirmation',
    name: 'Clientappointmentconfirmation',
    component: Clientappointmentconfirmation
  },
  {
    path: '/patient/clientappointments',
    name: 'Clientappointments',
    component: Clientappointments
  },
  {
    path: '/patient/clientrequestappointment',
    name: 'Clientrequestappointment',
    component: Clientrequestappointment
  },
  {
    path: '/patient/clientselecttime',
    name: 'Clientselecttime',
    component: Clientselecttime 
  },
  {
    path: '/therapist/therapistacceptappointment',
    name: 'Therapistacceptappointment',
    component: Therapistacceptappointment 
  },
  {
    path: '/therapist/therapistcontinuetoemail',
    name: 'Therapistcontinuetoemail',
    component: Therapistcontinuetoemail 
  },
  {
    path: '/therapist/therapistemailreview',
    name: 'Therapistemailreview',
    component: Therapistemailreview 
  },
  {
    path: '/prospectivepatient',
    name: 'Prospectivepatient',
    component: Prospectivepatient 
  },
  {
    path: '/therapist/therapistemailreviewsend',
    name: 'Therapistemailreviewsend',
    component: Therapistemailreviewsend 
  },
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'activeLink',
  routes
})

export default router
