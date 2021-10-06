<template>
    <div class="sidebar">
      
        <div class="list-group">
          <router-link to="/Patient" class="list-group-item list-group-item-action bg-dark text-light" 
          v-if="
          $route.name==='Patient' || 
          $route.name==='Messages'  || 
          $route.name==='Patientprofile' || 
          $route.name==='Schedule' || 
          $route.name==='Scheduled' || 
          $route.name==='Patientbilling' || 
          $route.name==='Survey' 
          ">
          <i class="fas fa-chart-bar"></i> Dashboard</router-link>  
          <router-link to="/Patientprofile" class="list-group-item list-group-item-action bg-dark text-light" 
          v-if="
          $route.name==='Patient' || 
          $route.name==='Messages'  || 
          $route.name==='Patientprofile' || 
          $route.name==='Schedule' || 
          $route.name==='Scheduled' || 
          $route.name==='Patientbilling' || 
          $route.name==='Survey' 
          "><i class="fas fa-user"></i> Personal Information</router-link>  
          <router-link to="/Messages" class="list-group-item list-group-item-action bg-dark text-light"  v-if="
          $route.name==='Patient' || 
          $route.name==='Messages'  || 
          $route.name==='Patientprofile' || 
          $route.name==='Schedule' || 
          $route.name==='Scheduled' || 
          $route.name==='Patientbilling' || 
          $route.name==='Survey' 
          "><i class="far fa-comment-alt"></i> Messages <span class="badge bg-primary ms-1">1</span></router-link>    
          <router-link to="/Schedule" class="list-group-item list-group-item-action bg-dark text-light"  v-if="
          $route.name==='Patient' || 
          $route.name==='Messages'  || 
          $route.name==='Patientprofile' || 
          $route.name==='Schedule' || 
          $route.name==='Scheduled' || 
          $route.name==='Patientbilling' || 
          $route.name==='Survey' 
          "><i class="fas fa-clock"></i> Schedule Session</router-link>    
          <router-link to="/Scheduled" class="list-group-item list-group-item-action bg-dark text-light"  v-if="
          $route.name==='Patient' || 
          $route.name==='Messages'  || 
          $route.name==='Patientprofile' || 
          $route.name==='Schedule' || 
          $route.name==='Scheduled' || 
          $route.name==='Patientbilling' || 
          $route.name==='Survey' 
          "><i class="far fa-calendar-alt"></i> Calendar</router-link>  
          <router-link to="/Patientbilling" class="list-group-item list-group-item-action bg-dark text-light"  v-if="
          $route.name==='Patient' || 
          $route.name==='Messages'  || 
          $route.name==='Patientprofile' || 
          $route.name==='Schedule' || 
          $route.name==='Scheduled' || 
          $route.name==='Patientbilling' || 
          $route.name==='Survey' 
          "><i class="fas fa-file-invoice"></i> Patient Forms <span class="badge bg-primary ms-1">2</span></router-link>     
          <router-link to="/Patientbilling" class="list-group-item list-group-item-action bg-dark text-light"  v-if="
          $route.name==='Patient' || 
          $route.name==='Messages'  || 
          $route.name==='Patientprofile' || 
          $route.name==='Schedule' || 
          $route.name==='Scheduled' || 
          $route.name==='Patientbilling' || 
          $route.name==='Survey' 
          "><i class="fas fa-file-invoice"></i> Billing <span class="badge bg-primary ms-1">1</span></router-link>    

        
          <!-- <router-link to="/Therapist" class="list-group-item list-group-item-action bg-dark text-light" v-if="$route.name==='Therapist' || $route.name==='Messages'"><i class="fas fa-chart-bar"></i> Dashboard</router-link>
          <router-link to="/Messages" class="list-group-item list-group-item-action bg-dark text-light" v-if="$route.name==='Therapist' || $route.name==='Messages'"><i class="far fa-comment-alt"></i> Messages</router-link>    
          <router-link to="/" class="list-group-item list-group-item-action bg-dark text-light" v-if="$route.name==='Therapist' || $route.name==='Messages'"><i class="fas fa-calendar-day"></i> Sessions</router-link>    
          <router-link to="/" class="list-group-item list-group-item-action bg-dark text-light" v-if="$route.name==='Therapist' || $route.name==='Messages'"><i class="fas fa-users"></i> Patients</router-link>    
          <router-link to="/" class="list-group-item list-group-item-action bg-dark text-light" v-if="$route.name==='Therapist' || $route.name==='Messages'"><i class="fas fa-file-invoice"></i> Billing</router-link>    
          <router-link to="/" class="list-group-item list-group-item-action bg-dark text-light" v-if="$route.name==='Therapist' || $route.name==='Messages'"><i class="fab fa-wpforms"></i> Questionnaire Manager</router-link>     -->

       
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