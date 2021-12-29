<template>
    <div class="adminreports">
        <div class="container-fluid py-4 dashboard">
            <h1>Dashboard</h1>
            <div class="row mt-4">
                
                <div class="col-md-6">
                    <div class="card shadow border-0">
                        <div class="card-title text-white bg-primary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Income</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
                                      </svg>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="list-group">
                                <router-link to="/admin/adminmonthlyincome" class="list-group-item list-group-item-action"> Monthly Income</router-link>
                                <router-link to="/admin/adminpayouts" class="list-group-item list-group-item-action"> Payouts</router-link>
                              </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card shadow border-0">
                        <div class="card-title text-white bg-secondary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Appointments</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                                      </svg>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="list-group">
                                <router-link to="/admin/adminappointmentstatus" class="list-group-item list-group-item-action"> Appointment Status</router-link>
                                <router-link to="/admin/adminsentemails" class="list-group-item list-group-item-action"> Sent Emails</router-link>
                              </div>
                        </div>
                    </div>
                </div>


              



            </div>
        </div>
    </div>
</template>