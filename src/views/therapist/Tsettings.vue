<template>
    <div class="therapistsettings">
        <div class="container-fluid py-4 dashboard">
            <div class="row mt-4">
                
                <div class="col-md-6">
                    <div class="card shadow border-0">
                        <div class="card-title text-white bg-primary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Practice Management</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="fas fa-building"></i>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">My Profile</a>
                              </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card shadow border-0">
                        <div class="card-title text-white bg-secondary rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Account</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="fas fa-user-cog"></i>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">Subscription Information</a>
                                <a href="#" class="list-group-item list-group-item-action">Demo Data</a>
                                <a href="#" class="list-group-item list-group-item-action">Data Export</a>
                              </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-6 mt-4">
                    <div class="card shadow border-0">
                        <div class="card-title text-white bg-dark rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Files</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="list-group">
                                <router-link to="/therapist/clientportal" class="list-group-item list-group-item-action ">
                                    Inventories and Questionnaires</router-link>
                              </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-6 mt-4">
                    <div class="card shadow border-0">
                        <div class="card-title text-white bg-blue rounded-top d-flex">
                            <div class="col-sm-6 d-flex align-items-center p-4">
                                <h4 class="fw-light mb-0">Client Communication</h4>
                            </div>
                            <div class="col-sm-6 d-flex justify-content-end">
                                <div class="icontypica shadow">
                                    <i class="fas fa-envelope-open-text"></i>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">Client Portal</a>
                                <router-link to="/therapist/therapistclientreminders" class="list-group-item list-group-item-action">Client Reminders</router-link>
                              </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>