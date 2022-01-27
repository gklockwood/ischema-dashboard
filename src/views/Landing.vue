<template>
  <div class="landing">
    <div class="container py-4">
      <div class="col-sm-12 py-4">
        <h1>eSchemaTherapy Prorotype Directory</h1>
      </div>
        <div class="col-sm-12 py-4">
          <h2>General Screens</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/patient/dashboard" target="_blank">Client Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Client Screens</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/patient/dashboard" target="_blank">Client Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Therapist Screens</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/therapist/TherapistDashboard" target="_blank">Therapist Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Admin Screens</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/admin/adminreports"  target="_blank">Admin Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Forms & Surveys</h2>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Landing extends Vue {}
</script>
