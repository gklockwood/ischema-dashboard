<template>
  <div class="landing">
    <div class="container py-4">
      <div class="col-sm-12 py-4">
        <h1>eSchemaTherapy Prorotype Directory</h1>
        <p class="pt-3">
          <i>
            * indented list items are linked to parent items in system.
          </i>
        </p>
      </div>
        <div class="col-sm-12 py-4">
          <h2>General Screens</h2>
         <ul>
           <li>
              <router-link to="/patient/dashboard" target="_blank">Client Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Client Screens</h2>
         <ul>
           <li>
              <router-link to="/patient/dashboard" target="_blank">Client Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Therapist Create Membership Screens</h2>
          <li>
            <router-link to="/staffmemberlogin" target="_blank">Login to e-Schematherapy </router-link>
            <ul>
              <li>
                <router-link to="/staffmembertermsofservice" target="_blank">e-Schematherapy Terms of Service</router-link>
                <ul>
                  <li>
                    <router-link to="/staffmemberchangepassword" target="_blank">Change Your Password</router-link>
                    <ul>
                      <li>
                        <router-link to="/staffcontinue" target="_blank">Login to eSchemaTherapy</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Therapist Screens</h2>
          <ul>
            <li>
              <router-link to="/therapist/TherapistDashboard" target="_blank">Therapist Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Admin Screens</h2>
         <ul>
           <li>
              <router-link to="/admin/adminreports"  target="_blank">Admin Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 py-4">
          <h2>Forms & Surveys</h2>
        </div>
       <ul>
         <li>
            <router-link to="/Intakenote1"  target="_blank">Initial Psychotherapy Intake Note and Treatment Plan</router-link>
          </li>
         <li>
            <router-link to="/Psychotherapynote"  target="_blank">Psychotherapy Progress Note</router-link>
          </li>
         <li>
            <router-link to="/SchemaModePlan1"  target="_blank">Schema:Mode Conceptualization and Treatment Plan-1. Presenting Problems and Strengths</router-link>
          </li>
         <li>
            <router-link to="/SchemaModePlan2"  target="_blank">Schema:Mode Conceptualization and Treatment Plan-2. Current Level of Functioning</router-link>
          </li>
         <li>
            <router-link to="/SchemaModePlan3"  target="_blank">Schema/Mode Conceptualization and Treatment Plan-3b. Childhood & Adolescent Origins</router-link>
          </li>
        </ul>
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
