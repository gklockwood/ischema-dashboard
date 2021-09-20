<template>
    <div class="patient">
        <div class="container-fluid py-4 dashboard">
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card shadow border-0 card-welcome mb-4 customcardbg">


                        <div class="card-body">
                            <div class="welcometext shadow mb-4 rounded-3">
                                <div class="d-flex">
                                    <div>
                                        <span class="fw-light">Good Morning, <br></span> Galen
                                    </div>
                                    <div class="mx-4 usericon">
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="customcardimage">

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow border-0 mb-4">

                        <div class="card-title text-white bg-primary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Sessions</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="fas fa-calendar-day"></i>
                                </div>
                            </div>
                        </div>

           

                        <div class="card-body">
                            
                            <div class="alert alert-info border-0 fw-bold" role="alert">
                              Today,  1:30 PM - Dr. George Lockwood
                            </div>


                            <hr>Monday, September 27, 2021 - 1:30 PM - Dr. George Lockwood
                            <hr>
                            <div>
                                <button type="button" class="btn btn-light mx-1 shadow-sm text-dark">Calendar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow border-0 mb-4">

                        <div class="card-title text-white bg-blue rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Messages</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="far fa-comment-alt"></i>
                                </div>
                            </div>
                        </div>

           

                        <div class="card-body">
                            
                            <span class="alert border-0 fw-bold" role="alert">
                              Dr. George Lockwood sent you a new message <i class="fas fa-arrow-right ms-1"></i>
                            </span>
                            <hr>
        
                            <div class="cardfooter">
                                <button type="button" class="btn btn-light mx-1 shadow-sm text-dark">View all Messages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow border-0 mb-4">

                        <div class="card-title text-white bg-secondary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Rewards</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>

           

                        <div class="card-body">
                            
                            <div class="alert alert-warning border-0 fw-bold" role="alert">
                              Schedule bulk sessions for a discount <i class="fas fa-arrow-right ms-1"></i>
                            </div>
                          
        
                            <div class="cardfooter">
                                <button type="button" class="btn btn-light mx-1 shadow-sm text-dark">View all offers</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>