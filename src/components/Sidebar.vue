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
    'TherapistMessages',
    'TherapistDocuments',
    'TherapistBilling',
    'Clientlist',
    'Sessions',
    'Sessiondetail',
    'Clientdetail',
    'Therapistcalendar'
    ].includes($route.name)">
      <router-link to="/therapist/therapistdashboard" class="list-group-item list-group-item-action bg-dark text-light">
        <i class="fas fa-chart-bar"></i> Dashboard</router-link>
      <router-link to="/therapist/clientlist" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-user"></i> Client List</router-link>
      <router-link to="/therapist/Tmessages" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-comment-alt"></i> Messages <span class="badge bg-primary ms-1">1</span></router-link>
      <router-link to="/therapist/Sessions" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-calendar-alt"></i> Sessions</router-link>
      <router-link to="/therapist/therapistcalendar" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="far fa-calendar-alt"></i> Calendar</router-link>
      <router-link to="/therapist/Tdocuments" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Documents <span class="badge bg-primary ms-1">2</span></router-link>
      <router-link to="/therapist/Tbilling" class="list-group-item list-group-item-action bg-dark text-light"><i
          class="fas fa-file-invoice"></i> Billing <span class="badge bg-primary ms-1">1</span></router-link>
    </div>


    <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div> -->
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