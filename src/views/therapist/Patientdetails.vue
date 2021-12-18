<template>
    <div class="patientdetails">
        <div class="container py-4">
            <h2 class="pb-3">Edit patient <a href="" class="text-decoration-none">Patient Name</a> </h2>


            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="clientinfo-tab" data-bs-toggle="tab"
                        data-bs-target="#clientinfo" type="button" role="tab" aria-controls="clientinfo"
                        aria-selected="true">Client Info</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="clientbilling-tab" data-bs-toggle="tab" data-bs-target="#clientbilling"
                        type="button" role="tab" aria-controls="clientbilling" aria-selected="false">Billing</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="clientcontacts-tab" data-bs-toggle="tab"
                        data-bs-target="#clientcontacts" type="button" role="tab" aria-controls="clientcontacts"
                        aria-selected="false">Contacts</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="patientportal-tab" data-bs-toggle="tab" data-bs-target="#patientportal"
                        type="button" role="tab" aria-controls="patientportal" aria-selected="false">Patient
                        Portal</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="clientinfo" role="tabpanel" aria-labelledby="clientinfo-tab">
                    <div class="row">
                        <div class="col-sm-3">
                            <label class="fw-bolder pt-4 pb-2">Patient Status: </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Active</option>
                                <option value="1">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <label class="fw-bolder pt-4">Name</label>

                            <div class="row g-3 py-3">
                                <div class="col">
                                    <label for="" class="pb-2">First Name</label>
                                    <input type="text" class="form-control" placeholder="Patient First Name"
                                        aria-label="First name">
                                </div>
                                <div class="col">
                                    <label for="" class="pb-2">Middle Name</label>
                                    <input type="text" class="form-control" placeholder="Patient Middle Name"
                                        aria-label="Last name">
                                </div>
                            </div>

                            <div class="row g-3 py-3">
                                <div class="col">
                                    <label for="" class="pb-2">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Patient Last Name"
                                        aria-label="Last name">
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
                            <label class="fw-bolder pt-4 d-block">Phone</label>
                            <small class="text-muted"> Used for sending patient texts and reminders.</small>
                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" placeholder="(269) 267-1964">
                                </div>
                                <div class="col-sm-2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Mobile</option>
                                        <option value="1">Landline</option>
                                    </select>
                                </div>
                                <div class="col-sm-1">
                                    <button type="button" class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Voice Messages Ok
                                        </label>
                                    </div>
                                </div>
                                <div class="px-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Text Messages Ok
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block">Email</label>
                            <small class="text-muted">
                                Used to send client reminders or documents, as well as give access to the Patient
                                Portal.
                            </small>
                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" placeholder="glockwood@chartermi.net">
                                </div>
                                <div class="col-sm-2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Personal</option>
                                        <option value="1">Work</option>
                                    </select>
                                </div>
                                <div class="col-sm-1">
                                    <button type="button" class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Email Ok
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm pt-2 pb-4">
                                    <button type="button" class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-envelope-plus me-1" viewBox="0 0 16 16">
                                            <path
                                                d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                            <path
                                                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                                        </svg>
                                        Add Email Address
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <label class="fw-bolder pt-4 d-block">Send Email Reminders for:</label>
                                </div>
                            </div>
                            <div class="d-flex pt-2">
                                <div>
                                    <div class="form-check pe-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Appointments
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div class="form-check px-4">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Completing documents
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">Address</label>
                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" placeholder="123 Main St">
                                </div>
                                <div class="col-sm-1">
                                    <button type="button" class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <label for="" class="pb-2">Street</label>
                                    <input type="text" class="form-control" placeholder="123 Main St">
                                </div>
                                <div class="col-sm-1">
                                    <label for="" class="pb-2">State</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>CA</option>
                                        <option value="1">option</option>
                                    </select>
                                </div>
                                <div class="col-sm-1">
                                    <label for="" class="pb-2">ZIP</label>
                                    <input type="text" class="form-control" placeholder="12345">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm pt-2 pb-4">
                                    <button type="button" class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                        Add Address
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block pb-3">About Client</label>
                            <label for="" class="pb-2">Date of Birth</label>
                            <div class="d-flex">
                                <div>
                                    <select class="form-select">
                                        <option selected>March</option>
                                        <option value="1">option</option>
                                    </select>
                                </div>
                                <div class="px-1">
                                    <select class="form-select">
                                        <option selected>7</option>
                                        <option value="1">option</option>
                                    </select>
                                </div>
                                <div>
                                    <select class="form-select">
                                        <option selected>1991</option>
                                        <option value="1">option</option>
                                    </select>
                                </div>
                            </div>
                            <small class="text-muted">30 Years</small>
                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <label for="" class="pb-2">Sex</label>
                                    <select class="form-select">
                                        <option selected>Prefer not to say</option>
                                        <option value="1">Male</option>
                                        <option value="1">Female</option>
                                        <option value="1">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row g-3 py-3">
                                <div class="col-sm-6">
                                    <label for="" class="pb-2">Gender Identity</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <small class="text-muted">Add patient's gender identity & pronouns.</small>
                                </div>
                            </div>


                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <label class="pb-2">Relationship Status</label>
                                    <select class="form-select">
                                        <option selected>Not Selected</option>
                                        <option value="1">Single</option>
                                        <option value="1">Married</option>
                                        <option value="1">Dicorced</option>
                                        <option value="1">Partnership</option>
                                        <option value="1">In Long-term Relationship</option>
                                        <option value="1">Separated</option>
                                        <option value="1">Widowed</option>
                                    </select>
                                </div>
                                <div class="col-sm-3">
                                    <label class="pb-2">Employment Status</label>
                                    <select class="form-select">
                                        <option selected>Not Selected</option>
                                        <option value="1">Full-Time</option>
                                        <option value="1">Part-Time</option>
                                        <option value="1">Self-Employed</option>
                                        <option value="1">Unamployed</option>
                                        <option value="1">Full-time Student</option>
                                        <option value="1">Part-time Student</option>
                                        <option value="1">Retired</option>
                                        <option value="1">Homemaker</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <label class="fw-bolder pt-4 d-block pb-3">Race & Ethnicity</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            American Indian or Alaska Native
                                        </label>
                                    </div>
                                    <div class="form-check py-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Asian
                                        </label>
                                    </div>
                                    <div class="form-check py-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Black or African American
                                        </label>
                                    </div>
                                    <div class="form-check py-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Hispanic or Latinx
                                        </label>
                                    </div>
                                    <div class="form-check py-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Middle Eastern or North African
                                        </label>
                                    </div>
                                    <div class="form-check py-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Native Hawaiian or Other Pacific Islander
                                        </label>
                                    </div>
                                    <div class="form-check py-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            White
                                        </label>
                                    </div>
                                    <div class="form-check py-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Race or ethnicity not listed
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pt-4">
                                    <label for="" class="pb-2">Race & Ethnicity Details</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <small class="text-muted">Add any relevant detials about the patient's race, ethnicity or origin.</small>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pt-4">
                                    <label for="" class="pb-2">Preferred Language</label>
                                    <select class="form-select">
                                        <option selected>Not Selected</option>
                                        <option value="1">Option</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pt-4">
                                    <label for="" class="pb-2">Client Notes</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pt-4">
                                    <label for="" class="pb-2">Date First Seen</label>
                                    <div class="d-flex">
                                        <div>
                                            <select class="form-select">
                                                <option selected>May</option>
                                                <option value="1">option</option>
                                            </select>
                                        </div>
                                        <div class="px-1">
                                            <select class="form-select">
                                                <option selected>17</option>
                                                <option value="1">option</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select class="form-select">
                                                <option selected>2020</option>
                                                <option value="1">option</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row py-3">
                                <div class="col-sm-3 pt-4">
                                    <label for="" class="pb-2 fw-bolder">Referred By</label>
                                    <input type="text" class="form-control" placeholder=""
                                    aria-label="First name">
                                  
                                </div>
                            </div>
                            <div class="row py-4">
                                <div class="col-sm">
                                    <button type="button" class="btn btn-danger">
                                        Cancel
                                    </button>
                                    <button type="button" class="btn btn-success ms-2">
                                        Cancel
                                    </button>
                                </div>
                            </div>
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