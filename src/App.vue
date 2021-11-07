<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
      'Therapistsettings'
      ].includes($route.name)"><i class="fas fa-bars"></i></button>

      <router-link to="/landing" type="button" class="btn brandtext">iSchema</router-link>

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
          <router-link to="/entercode" type="button" class="btn btn-outline-dark">Register</router-link>
          <router-link to="/Login" type="button" class="btn btn-outline-dark">Login</router-link>
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
    'Therapistsettings'
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
        'Therapistsettings'
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