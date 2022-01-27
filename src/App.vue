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
      'Adminbilling',
      'Clientappointmentconfirmation',
      'Clientappointments',
      'Clientrequestappointment',
      'Clientselecttime',
      'Therapistacceptappointment',
      'Therapistcontinuetoemail',
      'Therapistcontinuetoemail',
      'Therapistemailreview',
      'Therapistemailreviewsend',
      'Adminstaff',
      'Adminaddnewuser',
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
      ].includes($route.name)"><i class="fas fa-bars"></i></button>

      <router-link to="/landing" type="button" class="btn brandtext">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" viewBox="0 0 300 25.1" style="enable-background:new 0 0 300 25.1;" xml:space="preserve"
          class="custom-logo">

          <g>
            <path class="st0" d="M10.8,24.9c-3.8,0-6.5-1-8.1-3.1c-1.6-2-2.4-5.1-2.4-9.2c0-8.2,3.4-12.3,10.3-12.3c4,0,6.7,1.2,8.1,3.7
         c1.3,2.1,1.9,4.8,1.9,8.2v1.5h-15c0,2.6,0.5,4.4,1.3,5.4c0.8,1.1,2.2,1.6,4.1,1.6c3,0,4.6-1.1,4.8-3.3l4.5,0.2
         C19.9,22.4,16.7,24.9,10.8,24.9z M14,5.8c-0.7-0.9-1.8-1.3-3.4-1.3S7.9,4.9,7.2,5.8C6.5,6.6,6,8,5.8,9.9h9.5
         C15.1,8.1,14.7,6.7,14,5.8z" />
            <path class="st0" d="M24.5,14.1v-3h4.8v3H24.5z" />
            <path class="st1" d="M48,13.3c1,1,1.4,2.6,1.4,4.7c0,2.1-0.7,3.7-2.1,5c-1.4,1.2-3.5,1.9-6.3,1.9c-2.8,0-4.8-0.6-6-1.8
         c-1.2-1.2-2-2.9-2.3-5.1l3.5-0.6c0.1,1.3,0.6,2.3,1.3,3s1.8,1.1,3.1,1.1c2.9,0,4.3-1.1,4.3-3.3c0-0.9-0.3-1.6-0.8-2.1
         c-0.5-0.5-1.6-0.9-3.1-1.3l-1.8-0.5c-2.2-0.5-3.7-1.3-4.6-2.4c-0.9-1.1-1.4-2.6-1.4-4.8c0-2.1,0.7-3.8,2-5c1.4-1.2,3.4-1.8,6-1.8
         c2.7,0,4.6,0.6,5.8,1.8s1.9,2.9,2.2,5.1l-3.5,0.6c-0.3-2.7-1.7-4-4.2-4c-1.4,0-2.4,0.3-3,0.9c-0.6,0.6-1,1.4-1,2.4s0.2,1.7,0.7,2.2
         c0.5,0.5,1.4,0.9,2.9,1.3l2,0.6C45.5,11.5,47.1,12.3,48,13.3z" />
            <path class="st1" d="M62.3,3.8c-2,0-3.4,0.7-4.1,2c-0.7,1.3-1.1,3.6-1.1,6.7c0,3.1,0.4,5.4,1.1,6.7c0.7,1.3,2.1,2,4.1,2
         c1.6,0,2.7-0.4,3.4-1.3c0.7-0.9,1-2.1,1.1-3.8l3.6,0.2c-0.2,2.8-0.8,4.9-2,6.3c-1.2,1.4-3.2,2.1-6,2.1c-3.7,0-6.2-1.1-7.7-3.2
         c-0.7-1.1-1.2-2.3-1.5-3.8s-0.4-3.2-0.4-5.3c0-2.1,0.1-3.8,0.4-5.3s0.8-2.7,1.5-3.8c1.4-2.2,4-3.2,7.7-3.2c2.7,0,4.6,0.6,5.7,1.8
         s1.9,2.9,2.1,5.3l-3.6,0.6c-0.1-1.3-0.5-2.3-1.2-3C64.7,4.2,63.7,3.8,62.3,3.8z" />
            <path class="st1" d="M87.4,0.7h4.4v23.7h-4.4V14.2h-8.8v10.2h-4.4V0.7h4.4v10.2h8.8V0.7z" />
            <path class="st1" d="M97.9,0.7h13.4v3.4h-9v6.6h8.1v3.4h-8.1V21h9.6v3.4h-14V0.7z" />
            <path class="st1" d="M132.2,0.7h6.2l0.6,23.7h-4.3l-0.4-18.2L129,21.6h-3.8l-4.8-14.9l-0.3,17.7h-4.3l0.6-23.7h6.2l4.6,15
         L132.2,0.7z" />
            <path class="st1"
              d="M149.3,0.7h5.7l7.3,23.7H158l-2-6.6h-7.8l-2,6.6H142L149.3,0.7z M152.1,4.9l-2.9,9.6h5.8L152.1,4.9z" />
            <path class="st1" d="M161.3,4.1V0.7h16.8v3.3H172v20.3h-4.4V4.1H161.3z" />
            <path class="st1" d="M194.3,0.7h4.4v23.7h-4.4V14.2h-8.8v10.2h-4.4V0.7h4.4v10.2h8.8V0.7z" />
            <path class="st1" d="M204.8,0.7h13.4v3.4h-9v6.6h8.1v3.4h-8.1V21h9.6v3.4h-14V0.7z" />
            <path class="st1" d="M223,0.7h8.3c3,0,5.1,0.8,6.3,2.4c1,1.4,1.5,3,1.5,4.8c0,3.3-1.3,5.4-3.8,6.5c0.5,0.5,0.9,1.2,1.2,1.9l3.6,8.1
         h-4.7l-3.4-7.7c-0.3-0.6-0.6-1.1-1-1.3c-0.4-0.2-0.9-0.4-1.6-0.4h-1.9v9.4H223V0.7z M227.4,11.6h3.3c1.3,0,2.3-0.4,2.9-1.1
         c0.6-0.7,1-1.6,1-2.7c0-1.1-0.3-2-1-2.7c-0.6-0.7-1.6-1.1-2.9-1.1h-3.3V11.6z" />
            <path class="st1"
              d="M248.9,0.7h5.7l7.3,23.7h-4.2l-2-6.6h-7.8l-2,6.6h-4.3L248.9,0.7z M251.8,4.9l-2.9,9.6h5.8L251.8,4.9z" />
            <path class="st1" d="M273.4,16h-3.8v8.4h-4.4V0.7h8.2c2.9,0,4.9,0.8,6,2.3c1,1.4,1.5,3.2,1.5,5.3c0,2.1-0.5,3.9-1.5,5.3
         C278.3,15.2,276.2,16,273.4,16z M269.6,12.6h3.1c2.6,0,3.8-1.4,3.8-4.2c0-2.8-1.3-4.2-3.8-4.2h-3.1V12.6z" />
            <path class="st1" d="M293,24.4h-4.4v-8.2l-7.3-15.4h4.4l5.1,11.3l5.1-11.3h4.4L293,16.2V24.4z" />
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
    'Adminbilling',
    'Clientappointmentconfirmation',
    'Clientappointments',
    'Clientrequestappointment',
    'Clientselecttime',
    'Therapistacceptappointment',
    'Therapistcontinuetoemail',
    'Therapistcontinuetoemail',
    'Therapistemailreview',
    'Therapistemailreviewsend',
    'Adminstaff',
    'Adminaddnewuser',
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
        'Adminbilling',
        'Clientappointmentconfirmation',
        'Clientappointments',
        'Clientrequestappointment',
        'Clientselecttime',
        'Therapistacceptappointment',
        'Therapistcontinuetoemail',
        'Therapistcontinuetoemail',
        'Therapistemailreview',
        'Therapistemailreviewsend',
        'Adminstaff',
        'Adminaddnewuser',
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
        ].includes($route.name) }">
      <router-view />

    </div>


    <!-- Add Availability Modal Start -->
    <div class="modal fade" id="addavailabilitymodal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="z-index:2000;position: relative;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Availibility</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="row py-3">
              <div class="col">
                <input type="text" class="form-control" placeholder="Add Title">
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col">
                <input type="text" class="form-control" placeholder="12/28/2021">
              </div>
              <div class="col d-flex align-items-center">
                <input type="text" class="form-control" placeholder="12:30 pm">
                <span class="px-2">To</span>
                <input type="text" class="form-control" placeholder="1:30 pm">
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                  <label class="form-check-label" for="flexCheckChecked">
                    Repeats
                  </label>
                </div>
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col d-flex align-items-center">
                <span class="pe-2">Every</span>
                <select class="form-select" style="max-width:60px">
                  <option selected>1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </select>
                <span class="ps-2">week on:</span>
              </div>
            </div>


            <div class="row ">
              <div class="col">
                <div class="btn-group w-100" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-dark">S</button>
                  <button type="button" class="btn btn-outline-primary">M</button>
                  <button type="button" class="btn btn-outline-primary">T</button>
                  <button type="button" class="btn btn-outline-primary">W</button>
                  <button type="button" class="btn btn-outline-primary">T</button>
                  <button type="button" class="btn btn-outline-primary">F</button>
                  <button type="button" class="btn btn-outline-dark">S</button>
                </div>
              </div>
            </div>


            <div class="row py-3">
              <div class="col-6 d-flex align-items-center">
                <span class="pe-2">Ends</span>
                <select class="form-select">
                  <option selected>Never</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </select>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Availability Modal End -->


    <!-- Add Appointment  Modal Start -->
    <div class="modal fade" id="addappointmentmodal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Appointment</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="row py-3">
              <div class="col">
                <input type="text" class="form-control" placeholder="Add Title">
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col">
                <input type="text" class="form-control" placeholder="12/28/2021">
              </div>
              <div class="col d-flex align-items-center">
                <input type="text" class="form-control" placeholder="12:30 pm">
                <span class="px-2">To</span>
                <input type="text" class="form-control" placeholder="1:30 pm">
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                  <label class="form-check-label" for="flexCheckChecked">
                    Repeats
                  </label>
                </div>
              </div>
            </div>

            <div class="row g-3 py-3">
              <div class="col d-flex align-items-center">
                <span class="pe-2">Every</span>
                <select class="form-select" style="max-width:60px">
                  <option selected>1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </select>
                <span class="ps-2">week on:</span>
              </div>
            </div>


            <div class="row ">
              <div class="col">
                <div class="btn-group w-100" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-dark">S</button>
                  <button type="button" class="btn btn-outline-primary">M</button>
                  <button type="button" class="btn btn-outline-primary">T</button>
                  <button type="button" class="btn btn-outline-primary">W</button>
                  <button type="button" class="btn btn-outline-primary">T</button>
                  <button type="button" class="btn btn-outline-primary">F</button>
                  <button type="button" class="btn btn-outline-dark">S</button>
                </div>
              </div>
            </div>


            <div class="row py-3">
              <div class="col-6 d-flex align-items-center">
                <span class="pe-2">Ends</span>
                <select class="form-select">
                  <option selected>Never</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </select>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Appointment Modal End -->






    <!-- Modal - Edit Session Start -->

    <div class="modal fade" id="shareModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

      <div class="vertical-alignment-helper">
        <div class="modal-dialog modal-lg  vertical-align-center">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Patient Name</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="d-flex pb-4">
                <div class="d-flex-item pe-4">
                  <a type="button" class="btn btn-sm btn-primary shadow-sm p-2"
                    href="http://localhost:8080/securecall"><i class="fas fa-video me-1"></i> Start Session</a>

                </div>
                <div class="d-flex-item">
                  <div class="dropdown d-flex">
                    <button class="btn btn-light dropdown-toggle shadow-sm align-self-center" type="button"
                      id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-share me-1"></i> Share Link
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#"><i class="fas fa-copy me-1"></i> Copy Link</a></li>
                      <li><a class="dropdown-item" href="#"><i class="fas fa-envelope me-1"></i> Send Reminder</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <label for="Patient Attendance Select" class="fw-bolder">Patient Attendance</label>
                  <select class="form-select my-2" aria-label="Patient Attendance">
                    <option selected>Show</option>
                    <option value="1">No Show</option>
                    <option value="2">Cancelled</option>
                    <option value="3">Late Cancelled</option>
                  </select>
                </div>
              </div>


              <div class="row pt-3">
                <div class="col-sm-3">
                  <input placeholder="12/06/2021" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <input placeholder="10:00 am" class="form-control" />
                </div>
                <div class="col-sm-2 d-flex align-items-center">
                  <input placeholder="55" class="form-control" /><span class="ps-1">min</span>
                </div>
                <div class="col-sm-2 d-flex align-items-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Repeats
                    </label>
                  </div>
                </div>
              </div>


              <div class="row pt-4">
                <div class="col-sm-6">
                  <ul class="list-group">
                    <li class="list-group-item"><span class="fw-bolder">Notes</span></li>
                    <li class="list-group-item"><span><a href="">11/30/2021</a></span></li>
                    <li class="list-group-item"><span><a href="">11/29/2021</a> </span></li>
                  </ul>
                  <div class=" d-flex justify-content-center">
                    <button class="btn btn-light mt-2 shadow-sm"><i class="fas fa-plus me-1"></i>
                      Add Note</button>
                  </div>
                </div>
                <div class="col-sm-6">

                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-sm-6">
                          <span class="fw-bolder">Billing type</span>
                        </div>
                        <div class="col-sm-6 border-start">
                          Self Pay
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-sm-6">
                          <span class="fw-bolder">Appointment total</span>
                        </div>
                        <div class="col-sm-6 border-start">
                          $145
                        </div>
                      </div>
                    </li>
                  </ul>



                </div>
              </div>




              <div class="row pt-4">
                <div class="col-sm-6">
                  <input placeholder="Psychotherapy, 60 min" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <input placeholder="$145" class="form-control" />
                </div>
                <div class="col-sm-3 d-flex align-items-center">
                  <button class="btn"><i class="fas fa-plus me-1"></i> Add Service</button>
                </div>
              </div>


              <hr>
              <div class="d-flex justify-content-end">
                <button data-bs-dismiss="modal" type="button" class="btn btn-light me-2"><i
                    class="fas fa-times me-1 shadow-sm"></i>Cancel</button>
                <button type="button" class="btn btn-primary me-2"><i class="fas fa-check me-1"></i>Done</button>

              </div>


            </div>

          </div>
        </div>
      </div>

    </div>

    <!-- Modal - Edit Session End -->






    <!-- Therapsit Message  Modal Start -->
    <div class="modal fade" id="therapistmessagemodal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Messages</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row" v-if="messagesinitial">
              <div class="col-sm">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search Messages...">
                </div>    
              </div>
              <div class="col-sm text-end pb-3">
                <button class="btn btn-outline-dark" @click="composemessagebtn">
                  New Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                  </svg>
                </button>
              </div>
            </div>



            <div v-if="composemessage">
              <div class="row">
                <div class="col-sm-6">
                  <span class="mt-1 d-block">Message</span>
                </div>
                <div class="col-sm-6 text-end">
                  <button class="btn btn-outline-dark btn-sm"  @click="cancelcompose">Cancel</button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm py-3">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="To...">
                  </div>                  
                </div>
              </div>
              <div class="row">
                <div class="col-sm pb-1">
                  <small class="text-muted">
                    Recent
                  </small>
                  </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="row cursor-pointer"  @click="composing">
                        <div class="col-sm-2">
                          <div class="border rounded-pill p-3 initials">BM</div>
                        </div>
                        <div class="col-sm-10"><span class="d-block text-primary cursor-pointer" style="margin-top:14px;position: relative;">Jamie Appleseed</span></div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="row  cursor-pointer" @click="composing">
                        <div class="col-sm-2">
                          <div class="border rounded-pill p-3 initials">JJ</div>
                        </div>
                        <div class="col-sm-10"><span class="d-block text-primary" style="margin-top:14px;position: relative;">Jahnny Johnson</span></div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="row cursor-pointer"  @click="composing">
                        <div class="col-sm-2">
                          <div class="border rounded-pill p-3 initials">BM</div>
                        </div>
                        <div class="col-sm-10"><span class="d-block text-primary cursor-pointer" style="margin-top:14px;position: relative;">Bobby McName</span></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>



            <div v-if="messagesinitial">
              <ul class="list-group">
                <li class="list-group-item">
                  <div class="row  cursor-pointer" @click="composing">
                    <div class="col-sm-2">
                      <div class="border rounded-pill p-3 initials">JA</div>
                    </div>
                    <div class="col-sm-8">
                      <dov class="row">
                        <div class="col-sm-6"><span class="d-block">Jamie Appleseed</span></div>
                        <div class="col-sm-6 text-end"><small class="text-muted">01/14/2022</small></div>
                        <div class="col-sm-12">
                          <small class="text-muted">Example message snippet</small>
                        </div>
                      </dov>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row  cursor-pointer" @click="composing">
                    <div class="col-sm-2">
                      <div class="border rounded-pill p-3 initials">JJ</div>
                    </div>
                    <div class="col-sm-8">
                      <dov class="row">
                        <div class="col-sm-6"><span class="d-block">Johny Johnson</span></div>
                        <div class="col-sm-6 text-end"><small class="text-muted">01/13/2022</small></div>
                        <div class="col-sm-12">
                          <small class="text-muted">Example message snippet</small>
                        </div>
                      </dov>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row  cursor-pointer" @click="composing">
                    <div class="col-sm-2">
                      <div class="border rounded-pill p-3 initials">BM</div>
                    </div>
                    <div class="col-sm-8">
                      <dov class="row">
                        <div class="col-sm-6"><span class="d-block">Bobby McName</span></div>
                        <div class="col-sm-6 text-end"><small class="text-muted">01/07/2022</small></div>
                        <div class="col-sm-12">
                          <small class="text-muted">Example message snippet</small>
                        </div>
                      </dov>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div v-if="textthread">
              <div class="row border-bottom pb-3">
                <div class="col-sm-6">
                  <span class="mt-2 d-block">To: (Client Name Here)</span>
                </div>
                <div class="col-sm-6 text-end">
                  <button class="btn btn-outline-dark btn-sm"  @click="cancelcompose">Cancel</button>
                </div>
              </div>
              <div class="chat">
                <div class="mine messages firstmessage">
                  <div class="message last">
                    Hello Patient X, did you have a moment to fill out the form?
                  </div>
                </div>
                <div class="yours messages">
                  <div class="message">
                    Oh yes I just submitted it
                  </div>
                </div>
                <div class="mine messages">
                  <div class="message">
                    Ok great I just received it, thank you. 
                  </div>
                </div>
                <div class="yours messages">
                  <div class="message last">
                    Ok great thank you for reminding me!
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm pt-3">
                    <textarea class="form-control" placeholder="Send Message"></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- Therapsit Message Modal End -->



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

      // Messages Start
      const messagesinitial = ref(true);
      const textthread = ref(false);
      const composemessage = ref(false);

      function composemessagebtn() {
        messagesinitial.value = false;
        composemessage.value = true;
        textthread.value = false;
      }

      function cancelcompose() {
        messagesinitial.value = true;
        composemessage.value = false;
        textthread.value = false;
      }

      function composing() {
        messagesinitial.value = false;
        composemessage.value = false;
        textthread.value = true;
      }


      // Messages End

      return {
        toggleSidebar,
        toggleSidebarLogic,
        route,
        textthread,
        messagesinitial,
        composemessage,
        composemessagebtn,
        cancelcompose,
        composing
      }
    }
  };
</script>

<style type="text/css">
  .initials {
    width: 54px;
    height: 54px;
    text-align: center;
    line-height: 18px;
    letter-spacing: 1px;
  }
  .st0 {
    fill: #6D6E71;
  }

  .st1 {
    fill: #008080;
  }


  /* chat specific styles */
  .chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.messages {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.firstmessage {
  margin-top:0;
}

.message {
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
}

.yours {
  align-items: flex-start;
}

.yours .message {
  margin-right: 25%;
  background-color: #eee;
  position: relative;
}

.yours .message.last:before {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: -7px;
  height: 20px;
  width: 20px;
  background: #eee;
  border-bottom-right-radius: 15px;
}
.yours .message.last:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: -10px;
  width: 10px;
  height: 20px;
  background: white;
  border-bottom-right-radius: 10px;
}

.mine {
  align-items: flex-end;
}

.mine .message {
  color: white;
  margin-left: 25%;
  background: var(--primary-bg-gradient-dark);
  background-attachment: fixed;
  position: relative;
}

.mine .message.last:before {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: -8px;
  height: 20px;
  width: 20px;
  background: var(--primary-bg-gradient-dark);
  background-attachment: fixed;
  border-bottom-left-radius: 15px;
}

.mine .message.last:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: -10px;
  width: 10px;
  height: 20px;
  background: white;
  border-bottom-left-radius: 10px;
}

</style>