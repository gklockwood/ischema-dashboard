<template>
    <div class="tdashboard">
        <div class="container-fluid py-4 dashboard">
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card shadow border-0 card-welcome mb-4 bg-primary">
                        <div class="card-body">
                            <div class="welcometext">
                                <div class="d-flex">
                                    <div>
                                        <span class="fw-light">Welcome, <br></span> George
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow border-0 mb-4">

                        <div class="card-title text-white bg-primary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Appointments</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="fas fa-calendar-day"></i>
                                </div>
                            </div>
                        </div>

           

                        <div class="card-body">

                            <ul class="list-group">
                                <li class="list-group-item bg-light">
                                    <span class=" fw-bold">
                                        Today,  1:30 PM - Dr. George Lockwood
                                    </span>
                                </li>
                                <li class="list-group-item">Monday, September 27, 2021 - 1:30 PM - Dr. George Lockwood</li>
                              </ul>
                    
                                <div class="cardfooter">
                                <button type="button" class="btn btn-light mx-1 shadow-sm text-dark">Calendar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow border-0 mb-4">

                        <div class="card-title text-white bg-blue rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Documents</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="far fa-comment-alt"></i>
                                </div>
                            </div>
                        </div>

           

                        <div class="card-body">
                            <div class="alert alert-warning text-center" role="alert">
                                Patient documents need to be completed.
                            </div>
                            <ul class="list-group">
                                <li class="list-group-item"><i class="fas fa-exclamation me-2" style="color:#dc3545"></i><a href="">Credit Card Information</a></li>
                                <li class="list-group-item"><i class="fas fa-exclamation me-2" style="color:#dc3545"></i><a href="">Practice Policies</a></li>
                              </ul>
                            <div class="cardfooter">
                                <button type="button" class="btn btn-light mx-1 shadow-sm text-dark">View all Documents</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow border-0 mb-4">

                        <div class="card-title text-white bg-secondary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Billing & Staments</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">                           
                            <ul class="list-group">
                                <li class="list-group-item"> 
                                    <span class="badge rounded-pill bg-light text-dark shadow-sm">Oct 15</span> 
                                    <a href="" class="px-3">Patient Statement</a>
                                </li>
                                <li class="list-group-item"> 
                                    <span class="badge rounded-pill bg-light text-dark shadow-sm">Sep 15</span> 
                                    <a href="" class="px-3">Patient Statement</a>
                                </li>
                              </ul>
                              <div class="cardfooter">
                                <button type="button" class="btn btn-light mx-1 shadow-sm text-dark">View all Bills & Statements</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>