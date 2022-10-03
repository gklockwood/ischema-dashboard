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
      'Therapistprofile',
      'Clientprofile'
      ].includes($route.name)"><i class="fas fa-bars"></i></button>

      <router-link to="/landing" type="button" class="btn brandtext">
        <img src="../src/assets/img/eschematherapy_logo_horizontal-01.svg">
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
    'Therapistprofile',
    'Clientprofile'
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
        'Therapistprofile',
        'Clientprofile'
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