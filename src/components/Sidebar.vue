<template>
  <div class="sidebar">

    <!--  Admin Sidebar -->
    <div class="list-group" v-if="[
    'Adminaccountactivity', 
    'Admincalendar',
    'Adminclients',
    'Admindashboard',
    'Adminreminders',
    'Adminreports',
    'Admincalendar',
    'Adminmonthlyincome',
    'Adminpayouts',
    'Adminappointmentstatus',
    'Adminsentemails',
    'Adminbilling',
    'Adminstaff',
    'Adminaddnewuser'
    ].includes($route.name)">
    <router-link to="/admin/adminreports" class="list-group-item list-group-item-action bg-dark text-light"><i
      class="fas fa-users"></i> Dashboard</router-link>
      <router-link to="/admin/admincalendar" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-calendar"></i> Calendar</router-link>
      <router-link to="/admin/adminstaff" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-users"></i> Staff</router-link>
      <router-link to="/admin/adminclients" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-users"></i> Clients</router-link>
      <router-link to="/admin/adminbilling" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-users"></i> Billing</router-link>
      <router-link to="/admin/adminaccountactivity" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-users"></i> Account Activity</router-link>
      <router-link to="/admin/adminreminders" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-users"></i> Reminders (still needed)</router-link>
    </div>


    <!--  Patient Sidebar -->

    <div class="list-group" v-if="[
    'PatientDashboard', 
    'PatientMessages',
    'PatientDocuments',
    'PatientBilling',
    'Clientappointmentconfirmation',
    'Clientappointments',
    'Clientrequestappointment',
    'Clientselecttime',
    'Clientprofile'
    ].includes($route.name)">
      <router-link to="/patient/dashboard" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-chart-bar"></i> Dashboard</router-link>
      <router-link to="/patient/messages" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-comment-alt"></i> Messages<span class="badge bg-primary ms-1">1</span></router-link>
      <router-link to="/patient/Clientappointments" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-calendar-alt"></i> Appointments</router-link>
      <router-link to="/patient/documents" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Documents <span class="badge bg-primary ms-1">2</span></router-link>
      <router-link to="/patient/billing" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Billing <span class="badge bg-primary ms-1">1</span></router-link>
    </div>



    <!--  Therapist Sidebar -->
    <div class="list-group" v-if="[
    'TherapistDashboard', 
    'Therapistmessages',
    'TherapistDocuments',
    'TherapistBilling',
    'Clientlist',
    'Sessions',
    'Sessiondetail',
    'Clientdetail',
    'Therapistcalendar',
    'Sentforms',
    'Therapistsettings',
    'Clientportal',
    'Patientdetails',
    'Therapistacceptappointment',
    'Therapistcontinuetoemail',
    'Therapistcontinuetoemail',
    'Therapistemailreview',
    'Therapistemailreviewsend',
    'Therapistclientportal',
    'Therapistautomaticemails',
    'Therapistautomaticemails',
    'Therapistsubscriptioninformation',
    'Therapistdemodata',
    'Therapistdataexport',
    'Therapistassesment ',
    'Therapistdiagnosisandtreatmentplan',
    'Therapistmentalstatusexam',
    'Therapistclientreminders',
    'Therapistprofile'
    ].includes($route.name)">
      <div class="accordion accordion-flush" id="accordionFlushExampleog">
        <div class="accordion-item">
          <div id="flush-headingOneog" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExampleog">
            <div class="accordion-body">
              <router-link to="#" class="list-group-item list-group-item-action mt-1">
                <i class="fas fa-user"></i>
                Edit
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- <router-link to="/therapist/therapistdashboard" class="list-group-item list-group-item-action bg-dark text-light">
        <i class="fas fa-chart-bar"></i> Dashboard
      </router-link> -->
      <router-link to="/therapist/therapistdashboard" class="list-group-item list-group-item-action bg-dark text-light">
        <i class="fas fa-cog"></i> Dashboard
      </router-link>
      <router-link to="/therapist/therapistcalendar" class="list-group-item list-group-item-action bg-dark text-light">
        <i class="far fa-calendar-alt"></i> Calendar
      </router-link>
      <router-link to="/therapist/clientlist" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-users"></i> Clients</router-link>
          <router-link to="/therapist/therapistclientreminders" class="list-group-item list-group-item-action bg-dark text-light">
            <i class="fas fa-clipboard"></i> Reminders
          </router-link>
      <button class="btn dropdown-item cursor-pointer text-white sidebarbutton"  data-bs-toggle="modal" data-bs-target="#therapistmessagemodal"><i class="far fa-comment-alt"></i>
         Messages <span class="badge bg-primary ms-1">3</span></button>
      <!-- <router-link to="/therapist/Therapistacceptappointment" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-share-square"></i> Requests <span class="badge bg-primary ms-1">2</span>
        </router-link> -->
      <div class="dropdown">
        <button class="btn btn-dark shadow-sm dropdown-toggle d-block mt-2 ms-1 w-100 text-start" type="button" id="dropdownMenuButton1"
          data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-plus me-2"></i> Add
        </button>
        <ul class="dropdown-menu w-100 p-2" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item cursor-pointer"  data-bs-toggle="modal" data-bs-target="#addavailabilitymodal"><i class="fas fa-clock me-1"></i>
              Add Availability</a></li>
          <li><a class="dropdown-item cursor-pointer"  data-bs-toggle="modal" data-bs-target="#addappointmentmodal"><i class="fas fa-check me-1"></i>
              Add Appointment</a></li>
        </ul>
      </div>


    </div>

   



  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  @Options({
    props: {
      msg: String
    }
  })
  export default class Sidebar extends Vue {
    msg!: string
  }
</script>