<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container-fluid">
      <button @click="toggleSidebarLogic" class="btn me-2" v-if="[
      'PatientDashboard', 
      'PatientMessages',
      'PatientDocuments',
      'PatientBilling',
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
      'Adminbilling'
      ].includes($route.name)"><i class="fas fa-bars"></i></button>

      <router-link to="/landing" type="button" class="btn brandtext">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 300 25.1" style="enable-background:new 0 0 300 25.1;" xml:space="preserve" class="custom-logo">
 
     <g>
       <path class="st0" d="M10.8,24.9c-3.8,0-6.5-1-8.1-3.1c-1.6-2-2.4-5.1-2.4-9.2c0-8.2,3.4-12.3,10.3-12.3c4,0,6.7,1.2,8.1,3.7
         c1.3,2.1,1.9,4.8,1.9,8.2v1.5h-15c0,2.6,0.5,4.4,1.3,5.4c0.8,1.1,2.2,1.6,4.1,1.6c3,0,4.6-1.1,4.8-3.3l4.5,0.2
         C19.9,22.4,16.7,24.9,10.8,24.9z M14,5.8c-0.7-0.9-1.8-1.3-3.4-1.3S7.9,4.9,7.2,5.8C6.5,6.6,6,8,5.8,9.9h9.5
         C15.1,8.1,14.7,6.7,14,5.8z"/>
       <path class="st0" d="M24.5,14.1v-3h4.8v3H24.5z"/>
       <path class="st1" d="M48,13.3c1,1,1.4,2.6,1.4,4.7c0,2.1-0.7,3.7-2.1,5c-1.4,1.2-3.5,1.9-6.3,1.9c-2.8,0-4.8-0.6-6-1.8
         c-1.2-1.2-2-2.9-2.3-5.1l3.5-0.6c0.1,1.3,0.6,2.3,1.3,3s1.8,1.1,3.1,1.1c2.9,0,4.3-1.1,4.3-3.3c0-0.9-0.3-1.6-0.8-2.1
         c-0.5-0.5-1.6-0.9-3.1-1.3l-1.8-0.5c-2.2-0.5-3.7-1.3-4.6-2.4c-0.9-1.1-1.4-2.6-1.4-4.8c0-2.1,0.7-3.8,2-5c1.4-1.2,3.4-1.8,6-1.8
         c2.7,0,4.6,0.6,5.8,1.8s1.9,2.9,2.2,5.1l-3.5,0.6c-0.3-2.7-1.7-4-4.2-4c-1.4,0-2.4,0.3-3,0.9c-0.6,0.6-1,1.4-1,2.4s0.2,1.7,0.7,2.2
         c0.5,0.5,1.4,0.9,2.9,1.3l2,0.6C45.5,11.5,47.1,12.3,48,13.3z"/>
       <path class="st1" d="M62.3,3.8c-2,0-3.4,0.7-4.1,2c-0.7,1.3-1.1,3.6-1.1,6.7c0,3.1,0.4,5.4,1.1,6.7c0.7,1.3,2.1,2,4.1,2
         c1.6,0,2.7-0.4,3.4-1.3c0.7-0.9,1-2.1,1.1-3.8l3.6,0.2c-0.2,2.8-0.8,4.9-2,6.3c-1.2,1.4-3.2,2.1-6,2.1c-3.7,0-6.2-1.1-7.7-3.2
         c-0.7-1.1-1.2-2.3-1.5-3.8s-0.4-3.2-0.4-5.3c0-2.1,0.1-3.8,0.4-5.3s0.8-2.7,1.5-3.8c1.4-2.2,4-3.2,7.7-3.2c2.7,0,4.6,0.6,5.7,1.8
         s1.9,2.9,2.1,5.3l-3.6,0.6c-0.1-1.3-0.5-2.3-1.2-3C64.7,4.2,63.7,3.8,62.3,3.8z"/>
       <path class="st1" d="M87.4,0.7h4.4v23.7h-4.4V14.2h-8.8v10.2h-4.4V0.7h4.4v10.2h8.8V0.7z"/>
       <path class="st1" d="M97.9,0.7h13.4v3.4h-9v6.6h8.1v3.4h-8.1V21h9.6v3.4h-14V0.7z"/>
       <path class="st1" d="M132.2,0.7h6.2l0.6,23.7h-4.3l-0.4-18.2L129,21.6h-3.8l-4.8-14.9l-0.3,17.7h-4.3l0.6-23.7h6.2l4.6,15
         L132.2,0.7z"/>
       <path class="st1" d="M149.3,0.7h5.7l7.3,23.7H158l-2-6.6h-7.8l-2,6.6H142L149.3,0.7z M152.1,4.9l-2.9,9.6h5.8L152.1,4.9z"/>
       <path class="st1" d="M161.3,4.1V0.7h16.8v3.3H172v20.3h-4.4V4.1H161.3z"/>
       <path class="st1" d="M194.3,0.7h4.4v23.7h-4.4V14.2h-8.8v10.2h-4.4V0.7h4.4v10.2h8.8V0.7z"/>
       <path class="st1" d="M204.8,0.7h13.4v3.4h-9v6.6h8.1v3.4h-8.1V21h9.6v3.4h-14V0.7z"/>
       <path class="st1" d="M223,0.7h8.3c3,0,5.1,0.8,6.3,2.4c1,1.4,1.5,3,1.5,4.8c0,3.3-1.3,5.4-3.8,6.5c0.5,0.5,0.9,1.2,1.2,1.9l3.6,8.1
         h-4.7l-3.4-7.7c-0.3-0.6-0.6-1.1-1-1.3c-0.4-0.2-0.9-0.4-1.6-0.4h-1.9v9.4H223V0.7z M227.4,11.6h3.3c1.3,0,2.3-0.4,2.9-1.1
         c0.6-0.7,1-1.6,1-2.7c0-1.1-0.3-2-1-2.7c-0.6-0.7-1.6-1.1-2.9-1.1h-3.3V11.6z"/>
       <path class="st1" d="M248.9,0.7h5.7l7.3,23.7h-4.2l-2-6.6h-7.8l-2,6.6h-4.3L248.9,0.7z M251.8,4.9l-2.9,9.6h5.8L251.8,4.9z"/>
       <path class="st1" d="M273.4,16h-3.8v8.4h-4.4V0.7h8.2c2.9,0,4.9,0.8,6,2.3c1,1.4,1.5,3.2,1.5,5.3c0,2.1-0.5,3.9-1.5,5.3
         C278.3,15.2,276.2,16,273.4,16z M269.6,12.6h3.1c2.6,0,3.8-1.4,3.8-4.2c0-2.8-1.3-4.2-3.8-4.2h-3.1V12.6z"/>
       <path class="st1" d="M293,24.4h-4.4v-8.2l-7.3-15.4h4.4l5.1,11.3l5.1-11.3h4.4L293,16.2V24.4z"/>
     </g>
     </svg>
     
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  gap-2 d-md-flex justify-content-md-end" id="navbarSupportedContent">

        <div class="btn-group" role="group" aria-label="Basic example" v-if="$route.name!=='Therapist' && 
          $route.name!=='Patient' && 
          $route.name!=='Messages' && 
          $route.name!=='Survey' && 
          $route.name!=='Schedule' && 
          $route.name!=='Patientdocuments'&& 
          $route.name!=='Patientbilling'">
          <!-- <router-link to="/entercode" type="button" class="btn btn-outline-dark">Register</router-link>
          <router-link to="/Login" type="button" class="btn btn-outline-dark">Login</router-link> -->
        </div>

      </div>
    </div>
  </nav>



  <div class="container-fluid px-0">

    <sidebar :class="{ sidebarOpen: !toggleSidebar}" v-if="[
    'PatientDashboard', 
    'PatientMessages',
    'PatientDocuments',
    'PatientBilling',
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
    'Adminbilling'
    ].includes($route.name)"></sidebar>


    <div class="mainContent" :class="{ 
        mainContentPushed: !toggleSidebar, 
        reset: ![
        'PatientDashboard', 
        'PatientMessages',
        'PatientDocuments',
        'PatientBilling',
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
        'Adminbilling'
        ].includes($route.name) }">
      <router-view />

    </div>


  </div>



</template>

<script lang="ts">
  // import { Options, Vue } from 'vue-class-component';
  import Sidebar from '@/components/Sidebar.vue'; // @ is an alias to /src
  import { useRoute } from 'vue-router';
  import {
    ref
  } from 'vue';

  export default {
    components: {
      Sidebar
    },
    setup() {
      const route = useRoute();
      const toggleSidebar = ref(false);
      function toggleSidebarLogic() {
        toggleSidebar.value = !toggleSidebar.value;
      }

      return {
        toggleSidebar,
        toggleSidebarLogic,
        route

      }
    }
  };
</script>

<style type="text/css">
  .st0{fill:#6D6E71;}
  .st1{fill:#008080;}
</style>