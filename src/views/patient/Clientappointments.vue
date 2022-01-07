<template>
    <div class="clientappointment">
        <div class="container-fluid pt-4">
            <h1>Upcoming Appointments</h1>
            <div class="row">
                <div class="col-sm pt-4">
                    <router-link to="/patient/Clientrequestappointment" class="btn btn-outline-dark mt-2 shadow-sm">
                        Request new Appointment
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                          </svg>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card shadow-sm my-3">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled p-0 m-0">
                                        <li class="py-1"><span class="badge bg-primary">Upcoming</span></li>
                                        <li class="py-1"><small class="text-muted">JAN 07, 2022</small></li>
                                        <li class="py-1"><span class="fw-bolder">8:00 AM - 8:55 AM EST</span></li>
                                        <li class="py-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill me-1" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                              </svg>
                                              <span>George Lockwood, Ph.D.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card shadow-sm my-3">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled p-0 m-0">
                                        <li class="py-1"><span class="badge bg-danger">Cancelled</span></li>
                                        <li class="py-1"><small class="text-muted">JAN 07, 2022</small></li>
                                        <li class="py-1"><span class="fw-bolder">8:00 AM - 8:55 AM EST</span></li>
                                        <li class="py-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill me-1" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                              </svg>
                                              <span>George Lockwood, Ph.D.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>