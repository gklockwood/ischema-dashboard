<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button @click="toggleSidebarLogic" class="btn me-2"
        v-if="$route.name==='Therapist' || $route.name==='Patient'"><i class="fas fa-bars"></i></button>

      <router-link to="/landing" type="button" class="btn">iSchema</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  gap-2 d-md-flex justify-content-md-end" id="navbarSupportedContent">

        <div class="btn-group" role="group" aria-label="Basic example"
          v-if="$route.name!=='Therapist' && $route.name!=='Patient'">
          <router-link to="/Register" type="button" class="btn btn-outline-dark">Create Account</router-link>
          <router-link to="/Login" type="button" class="btn btn-outline-dark">Login</router-link>
        </div>

        <router-link to="/Faq" type="button" class="btn btn-outline-dark"
          v-if="$route.name!=='Therapist' && $route.name!=='Patient'">FAQ</router-link>
      </div>
    </div>
  </nav>



  <div class="container-fluid px-0">

    <sidebar :class="{ sidebarOpen: !toggleSidebar}"
      v-if="$route.name==='Therapist' || $route.name==='Patient' || $route.name==='Messages'"></sidebar>

    <div class="mainContent" :class="{ 
      mainContentPushed: !toggleSidebar, 
      reset: $route.name==='Landing' || 
      $route.name==='About' || 
      $route.name==='Login' || 
      $route.name==='Register' ||
      $route.name==='Faq' 
    }">
      <router-view />

    </div>


  </div>



</template>

<script lang="ts">
  // import { Options, Vue } from 'vue-class-component';
  import Sidebar from '@/components/Sidebar.vue'; // @ is an alias to /src





  import {
    ref
  } from 'vue';

  export default {
    components: {
      Sidebar
    },
    setup() {
      const toggleSidebar = ref(false);

      function toggleSidebarLogic() {
        toggleSidebar.value = !toggleSidebar.value;
      }



      return {
        toggleSidebar,
        toggleSidebarLogic

      }
    }
  };
</script>