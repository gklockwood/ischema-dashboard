<template>
  <div class="sidebar">

    <div class="list-group" v-if="[
    'PatientDashboard', 
    'PatientMessages',
    'PatientDocuments',
    'PatientBilling',
    ].includes($route.name)">
      <router-link to="/patient/dashboard" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-chart-bar"></i> Dashboard</router-link>
      <router-link to="/patient/profile" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-user"></i> Personal Information</router-link>
      <router-link to="/patient/messages" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-comment-alt"></i> Messages <span class="badge bg-primary ms-1">1</span></router-link>
      <router-link to="/patient/schedule" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-clock"></i> Schedule Session</router-link>
      <router-link to="/patient/calendar" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-calendar-alt"></i> Appointments</router-link>
      <router-link to="/patient/documents" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Documents <span class="badge bg-primary ms-1">2</span></router-link>
      <router-link to="/patient/billing" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Billing <span class="badge bg-primary ms-1">1</span></router-link>
    </div>


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
    'Therapistsettings'
    ].includes($route.name)">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              George Lockwood
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <router-link to="/therapist/therapistsettings" class="list-group-item list-group-item-action mt-1">
                <i class="fas fa-user"></i>
                Edit
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/therapist/therapistdashboard" class="list-group-item list-group-item-action bg-dark text-light">
        <i class="fas fa-chart-bar"></i> Dashboard
      </router-link>
      <router-link to="/therapist/clientlist" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-users"></i> Client Settings</router-link>
          <router-link to="/therapist/therapistdashboard" class="list-group-item list-group-item-action bg-dark text-light"><i
            class="fas fa-cog"></i> Toolbox</router-link>
      <router-link to="/therapist/therapistmessages" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-comment-alt"></i> Messages <span class="badge bg-primary ms-1">1</span></router-link>
      <!-- <router-link to="/therapist/Sessions" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-calendar-alt"></i> Sessions</router-link> -->
      <router-link to="/therapist/therapistcalendar" class="list-group-item list-group-item-action bg-dark text-light">
        <i class="far fa-calendar-alt"></i> Calendar
      </router-link>
      <router-link to="/therapist/Tdocuments" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Documents <span class="badge bg-primary ms-1">2</span></router-link>
      <router-link to="/therapist/Sentforms" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-share-square"></i> Requests</router-link>
      <router-link to="/therapist/Tbilling" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Create</router-link>
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