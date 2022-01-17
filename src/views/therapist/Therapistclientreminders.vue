<template>
  <div class="therapistclientreminders">
    <div class="container-fluid py-4">
      <h1>Client Reminders</h1>
      <div class="accordion accordion-flush pt-4" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              You have 5 appointments with missing notes
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">Client X is missing a Mental Status Exam <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
                <li class="list-group-item">Client X is missing a Mental Status Exam <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
                <li class="list-group-item">Client X is missing a Mental Status Exam <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
                <li class="list-group-item">Client X is missing a Mental Status Exam <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
                <li class="list-group-item">Client X is missing a Mental Status Exam <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              You have 2 appointments with missing notes
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">Appointment with client X on 1/14/2022 is missing a note<router-link
                    to="/admin/admincalendar" class="text-decoration-none">Add Note</router-link>
                </li>
                <li class="list-group-item">Appointment with client X on 1/13/2022 is missing a note <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Add Note</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              You have 4 clients or contacts that did not complete document requests
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">Client X has 10 pending document requests <router-link
                    to="/admin/admincalendar" class="text-decoration-none">View their profile</router-link>
                </li>
                <li class="list-group-item">Client X has 10 pending document requests <router-link
                    to="/admin/admincalendar" class="text-decoration-none">View their profile</router-link>
                </li>
                <li class="list-group-item">Client X has 10 pending document requests <router-link
                    to="/admin/admincalendar" class="text-decoration-none">View their profile</router-link>
                </li>
                <li class="list-group-item">Client X has 10 pending document requests <router-link
                    to="/admin/admincalendar" class="text-decoration-none">View their profile</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
              You have 3 Diagnosis and treatment plans which need review
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">Client X has a Diagnosis and treatment plan which needs review <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Review Now</router-link>
                </li>
                <li class="list-group-item">Client X has a Diagnosis and treatment plan which needs review <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Review Now</router-link>
                </li>
                <li class="list-group-item">Client X has a Diagnosis and treatment plan which needs review <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Review Now</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
              You have 3 clients missing a Diagnosis and treatment plan
            </button>
          </h2>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">Client X is missing a Diagnosis and treatment plan <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
                <li class="list-group-item">Client X is missing a Diagnosis and treatment plan <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
                <li class="list-group-item">Client X is missing a Diagnosis and treatment plan <router-link
                    to="/admin/admincalendar" class="text-decoration-none">Create Now</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
              Set up your available appointments
            </button>
          </h2>
          <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
              happening here in terms of content, but just filling up the space to make it look, at least at first
              glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>