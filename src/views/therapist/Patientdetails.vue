<template>
    <div class="patientdetails">
        <div class="container py-4">
            <h2 class="pb-3">Edit patient <a href="" class="text-decoration-none">Patient Name</a> </h2>


            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="clientinfo-tab" data-bs-toggle="tab" data-bs-target="#clientinfo" type="button" role="tab" aria-controls="clientinfo" aria-selected="true">Client Info</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="clientbilling-tab" data-bs-toggle="tab" data-bs-target="#clientbilling" type="button" role="tab" aria-controls="clientbilling" aria-selected="false">Billing</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="clientcontacts-tab" data-bs-toggle="tab" data-bs-target="#clientcontacts" type="button" role="tab" aria-controls="clientcontacts" aria-selected="false">Contacts</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="patientportal-tab" data-bs-toggle="tab" data-bs-target="#patientportal" type="button" role="tab" aria-controls="patientportal" aria-selected="false">Patient Portal</button>
                  </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="clientinfo" role="tabpanel" aria-labelledby="clientinfo-tab">
                    <div class="row">
                        <div class="col-sm-3">
                            <label class="fw-bolder pt-4 pb-2">Patient Status: </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Active</option>
                              </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <label class="fw-bolder pt-4">Name</label>

                            <div class="row g-3 py-3">
                                <div class="col">
                                    <label for="" class="pb-2">First Name</label>
                                    <input type="text" class="form-control" placeholder="Patient First Name" aria-label="First name">
                                </div>
                                <div class="col">
                                    <label for="" class="pb-2">Middle Name</label>
                                    <input type="text" class="form-control" placeholder="Patient Middle Name" aria-label="Last name">
                                </div>
                            </div>

                            <div class="row g-3 py-3">
                                <div class="col">
                                    <label for="" class="pb-2">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Patient Last Name" aria-label="Last name">
                                </div>
                                <div class="col">
                                    <label for="" class="pb-2">Suffix</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="row g-3 py-3">
                                <div class="col">
                                    <label for="" class="pb-2">Preferred Name</label>
                                    <input type="text" class="form-control" aria-label="Last name">
                                    <small class="text-muted">
                                        Used in place of a first name. 
                                    </small>
                                </div>
                                <div class="col">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                          Patient is a minor
                                        </label>
                                      </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">Phone</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">Address</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">About Client</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">Referred By</label>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="clientbilling" role="tabpanel" aria-labelledby="clientbilling-tab">
                    Client Billing
                </div>
                <div class="tab-pane fade" id="clientcontacts" role="tabpanel" aria-labelledby="clientcontacts-tab">
                    Patient Contacts
                </div>
                <div class="tab-pane fade" id="patientportal" role="tabpanel" aria-labelledby="patientportal-tab">
                    Patient Portal
                </div>
              </div>

        </div>
    </div>
</template>