<template>
    <div class="patientdetails">
        <div class="container py-4">
            <h2 class="pb-3">Edit Client <a href="" class="text-decoration-none">Client Name</a> </h2>


            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="clientinfo-tab" data-bs-toggle="tab"
                        data-bs-target="#clientinfo" type="button" role="tab" aria-controls="clientinfo"
                        aria-selected="true">Client Portal</button>
                </li>
                <!-- <li class="nav-item" role="presentation">
                    <button class="nav-link" id="clientbilling-tab" data-bs-toggle="tab" data-bs-target="#clientbilling"
                        type="button" role="tab" aria-controls="clientbilling" aria-selected="false">Billing</button>
                </li> -->
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="clientcontacts-tab" data-bs-toggle="tab"
                        data-bs-target="#clientcontacts" type="button" role="tab" aria-controls="clientcontacts"
                        aria-selected="false">Contacts</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="patientportal-tab" data-bs-toggle="tab" data-bs-target="#patientportal"
                        type="button" role="tab" aria-controls="patientportal" aria-selected="false">Client
                        Portal</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="clientinfo" role="tabpanel" aria-labelledby="clientinfo-tab">
                    <div class="row">
                        <div class="col-sm-3">
                            <label class="fw-bolder pt-4 pb-2">Client Status: </label>
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
                                            Client is a minor
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr>
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
                    <hr>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block">Email</label>
                            <small class="text-muted">
                                Used to send client reminders or documents, as well as give access to the Client
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
                    <hr>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">Address</label>
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
                                <div class="col-sm-1 pt-2">
                                    <button type="button" class="btn btn-outline-dark mt-4">
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
                    <hr>
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
                                    <small class="text-muted">Add client's gender identity & pronouns.</small>
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
                            <hr>
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
                                    <small class="text-muted">Add any relevant detials about the client's race,
                                        ethnicity or origin.</small>
                                </div>
                            </div>
                            <div class="row pb-4">
                                <div class="col-sm-6 pt-4">
                                    <label for="" class="pb-2">Preferred Language</label>
                                    <select class="form-select">
                                        <option selected>Not Selected</option>
                                        <option value="1">Option</option>
                                    </select>
                                </div>
                            </div>
                            <hr>
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
                            <div class="row py-3 pb-4">
                                <div class="col-sm-3 pt-4">
                                    <label for="" class="pb-2 fw-bolder">Referred By</label>
                                    <input type="text" class="form-control" placeholder="" aria-label="First name">

                                </div>
                                <div class="col-sm-12 pt-3">
                                    <button type="button" class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                        Add New Referral
                                    </button>
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
                <!-- <div class="tab-pane fade" id="clientbilling" role="tabpanel" aria-labelledby="clientbilling-tab">
                    <label class="fw-bolder pt-4 d-block">Credit & Debit Cards</label>
                    <div class="d-flex align-items-center pt-2">
                        <span class="badge bg-primary">Default</span>
                        <span class="ms-3">Visa</span>
                        <span class="ms-3">****1423</span>
                        <span class="ms-3">5/2023</span>
                        <button type="button" class="btn btn-outline-dark ms-3" data-bs-toggle="modal" data-bs-target="#creditCardModalEdit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-gear" viewBox="0 0 16 16">
                                <path
                                    d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path
                                    d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>
                            Edit
                        </button>
                    </div>
                    <hr>
                    <div class="col-sm-12">
                        <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#creditCardModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-plus" viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            Add Card
                        </button>
                    </div>
                    <div class="row pt-4">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block">Client Default Services</label>
                            <table class="table billingtable">
                                <thead>
                                    <tr>
                                        <th scope="col">Service Code</th>
                                        <th scope="col">Rate Per Unit</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                                    id="flexRadioDefault1">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    90847 Family psychotherapy, conjoint sychotherapy
                                                </label>
                                            </div>

                                        </th>
                                        <td>
                                            <input class="form-control" value="" placeholder="$145">
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-outline-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                                    id="flexRadioDefault2" checked>
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    90837 Psychotherapy, 60 min
                                                </label>
                                            </div>

                                        </th>
                                        <td>
                                            <input class="form-control" value="" placeholder="$145">
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-outline-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                                    id="flexRadioDefault3">
                                                <label class="form-check-label" for="flexRadioDefault3">
                                                    90853 Group Therapy
                                                </label>
                                            </div>

                                        </th>
                                        <td>
                                            <input class="form-control" value="" placeholder="$100">
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-outline-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col-sm-4">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Add new service</option>
                                        <option value="1">90837 Psychotherapy, 60 min</option>
                                        <option value="1">90791 Psychiatric Diagnostic Evaluation</option>
                                        <option value="1">90834 Psychotherapy, 45 min</option>
                                        <option value="1">90847 Family psychotherapy, conjoint psychotherapy wi...
                                        </option>
                                        <option value="1">90853 Group Therapy</option>
                                        <option value="1">90875 Other Psychotherapy Services or Procedures</option>
                                        <option value="1">+90838 Psychotherapu Add-on, 60 min</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="tab-pane fade" id="clientcontacts" role="tabpanel" aria-labelledby="clientcontacts-tab">
                    <div class="row py-3">
                        <div class="col-sm-12 text-end">
                            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#addContactdModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                Add Contact
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h5 class="card-title mb-0">Contact's Name</h5>
                                </div>
                                <div class="col-sm-6 text-end">
                                    <button type="button" class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>  
                                    <button type="button" class="btn btn-outline-dark ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-gear" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                            <path
                                                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                        </svg>
                                        Edit
                                    </button>
                                </div>
                            </div>
                          <hr>
                          <div class="row py-3">
                              <div class="col-sm-2">
                                  <span class="fw-bolder">Relationship</span>
                              </div>
                              <div class="col-sm-2">
                                <span>Family Member</span> 
                            </div>
                          </div>
                          <div class="row py-3">
                            <div class="col-sm-2">
                                <span class="fw-bolder">Phone</span>
                            </div>
                            <div class="col-sm-2">
                              <span>(310) 555-1212</span> 
                          </div>
                        </div>
                        <div class="row py-3">
                            <div class="col-sm-2">
                                <span class="fw-bolder">Email</span>
                            </div>
                            <div class="col-sm-10 d-flex">
                              <span>example@examplemail.net</span> 
                              <span class="text-muted ms-2">work</span> 
                           
                                <button type="button" class="btn btn-outline-dark muted ms-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-envelope-plus" viewBox="0 0 16 16">
                                        <path
                                            d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                        <path
                                            d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                                    </svg>
                                </button>
                         
                          </div>
                        </div>
                        <div class="row py-3">
                            <div class="col-sm-2">
                                <span class="fw-bolder">Address</span>
                            </div>
                            <div class="col-sm-2">
                              <span>123 Example Lane</span> 
                          </div>
                        </div>
                        <div class="row py-3">
                            <div class="col-sm-2">
                                <span class="fw-bolder">Appointment Reminders</span>
                            </div>
                            <div class="col-sm-3">
                              <span>Will not receive appointment reminders</span> 
                          </div>
                        </div>
                        <div class="row py-3">
                            <div class="col-sm-2">
                                <span class="fw-bolder">Client Portal Access</span>
                            </div>
                            <div class="col-sm-3">
                              <span>No client portal access</span> 
                          </div>
                        </div>
                        <div class="row py-3">
                            <div class="col-sm-2">
                                <span class="fw-bolder">Billing & Payments</span>
                            </div>
                            <div class="col-sm-3">
                              <span>Not responsible</span> 
                          </div>
                        </div>
                        </div>
                      </div>
                </div>
                <div class="tab-pane fade" id="patientportal" role="tabpanel" aria-labelledby="patientportal-tab">
                    Client Portal
                </div>
            </div>

        </div>
    </div>


    <!-- Add Credit Card Modal -->
    <div class="modal fade" id="creditCardModal" tabindex="-1" aria-labelledby="creditCardModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Credit / Debit Card</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row pb-3">
                        <div class="col-sm-4">
                            <label for="" class="pb-2">Card Type</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Card Type</option>
                                <option value="1">Visa</option>
                                <option value="1">Mastercard</option>
                                <option value="1">Amax</option>
                            </select>
                        </div>
                        <div class="col-sm-2 pt-4">
                            <div class="form-check pt-2">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="iscredit">
                                <label class="form-check-label" for="iscredit">
                                  Credit
                                </label>
                              </div>
                        </div>
                        <div class="col-sm-2 pt-4">
                            <div class="form-check pt-2">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="isdebit">
                                <label class="form-check-label" for="isdebit">
                                  Debit
                                </label>
                              </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label for="" class="pb-2">Cardholder's Name</label>
                            <input type="text" class="form-control" placeholder="Please enter the cardholder's name">
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-sm">
                            <label for="" class="pb-2">Card Number</label>
                            <input type="text" class="form-control" placeholder="Please enter a card number">
                        </div>
                    </div>
                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">Expiration Date</label>
                            <input type="text" class="form-control" placeholder="MM / YY">
                        </div>
                        <div class="col">
                            <label for="" class="pb-2">CVC</label>
                            <input type="text" class="form-control" placeholder="CVC">
                        </div>
                        <div class="col">
                            <label for="" class="pb-2">Billing zip code</label>
                            <input type="text" class="form-control" placeholder="12345">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label for="" class="pb-2">Card Nickname (optional)</label>
                            <input type="text" class="form-control" placeholder="Ex: Galen's primary credit card">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button"  class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Card</button>

                </div>
            </div>
        </div>
    </div>





     <!-- Edit Credit Card Modal -->
     <div class="modal fade" id="creditCardModalEdit" tabindex="-1" aria-labelledby="creditCardModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Credit / Debit Card</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row pb-3">
                        <div class="col-sm-4">
                            <label for="" class="pb-2">Card Type</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Visa</option>
                                <option value="1">Mastercard</option>
                                <option value="1">Amax</option>
                            </select>
                        </div>
                        <div class="col-sm-2 pt-4">
                            <div class="form-check pt-2">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="iscredit" checked>
                                <label class="form-check-label" for="iscredit">
                                  Credit
                                </label>
                              </div>
                        </div>
                        <div class="col-sm-2 pt-4">
                            <div class="form-check pt-2">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="isdebit">
                                <label class="form-check-label" for="isdebit">
                                  Debit
                                </label>
                              </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label for="" class="pb-2">Cardholder's Name</label>
                            <input type="text" class="form-control" placeholder="Johny Johnson">
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-sm">
                            <label for="" class="pb-2">Card Number</label>
                            <input type="text" class="form-control" placeholder="---- ---- ---- 2222">
                        </div>
                    </div>
                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">Expiration Date</label>
                            <input type="text" class="form-control" placeholder="05 / 23">
                        </div>
                        <div class="col">
                            <label for="" class="pb-2">CVC</label>
                            <input type="text" class="form-control" placeholder="111">
                        </div>
                        <div class="col">
                            <label for="" class="pb-2">Billing zip code</label>
                            <input type="text" class="form-control" placeholder="12345">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label for="" class="pb-2">Card Nickname (optional)</label>
                            <input type="text" class="form-control" placeholder="Johnie's primary credit card">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button"  class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Card</button>

                </div>
            </div>
        </div>
    </div>







    <!-- Add Contact Modal -->
    <div class="modal fade" id="addContactdModal" tabindex="-1" aria-labelledby="creditCardModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add contact</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="" class="fw-bolder">Name</label>
                    <div class="row py-2">
                        <div class="col-sm-6">
                            <label for="" class="pb-2"> First Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="" class="pb-2"> Middle Name</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-sm-6">
                            <label for="" class="pb-2"> Last Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="" class="pb-2"> Suffix</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-sm-12">
                            <label for="" class="pb-2"> Preferred Name</label>
                            <input type="text" class="form-control">
                            <small class="text-muted">
                                Used in place of a first name across the site.
                            </small>
                        </div>
                    </div>
                    <div class="row pb-3 py-2">
                        <div class="col-sm-6">
                            <label for="" class="pb-2">Relationship Type</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>select</option>
                                <option value="1">Parent</option>
                                <option value="1">Spouse</option>
                                <option value="1">Grandparent</option>
                                <option value="1">Friend</option>
                            </select>
                        </div>
                        <div class="col-sm-6 pt-4">
                            <div class="form-check pt-2">
                                <input class="form-check-input" type="checkbox" value="" id="iserm">
                                <label class="form-check-label" for="iserm">
                                  Emergency Contact
                                </label>
                              </div>
                        </div>
                    </div>
                 
                    <div class="row g-3 py-3">
                        <label for="" class="fw-bolder">Phone</label>
                        <small class="text-muted">If you want to send this contact text messages or voice reminders</small>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Phone Number">
                        </div>
                        <div class="col-3">
                            <select class="form-select">
                                <option selected>Mobile</option>
                                <option value="1">Landline</option>
                            </select>
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
                    <div class="row">
                        <div class="col-sm-12 pt-3">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                Add Number
                            </button>
                        </div>
                    </div>

                    <div class="row g-3 py-3">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block">Email</label>
                            <small class="text-muted">
                                Used to send client reminders or documents, as well as give access to the Client
                                Portal.
                            </small>
                            <div class="row g-3 py-3">
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                                <div class="col-sm-4">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Personal</option>
                                        <option value="1">Work</option>
                                    </select>
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
                                    <label class="fw-bolder pt-2 d-block">Send Email Reminders for:</label>
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
                                <div class="col-sm-6">
                                    <label for="" class="pb-2">Street</label>
                                    <input type="text" class="form-control" placeholder="123 Main St">
                                </div>
                                <div class="col-sm-3">
                                    <label for="" class="pb-2">State</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>CA</option>
                                        <option value="1">option</option>
                                    </select>
                                </div>
                                <div class="col-sm-3">
                                    <label for="" class="pb-2">ZIP</label>
                                    <input type="text" class="form-control" placeholder="12345">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4">Notes</label>
                            <div class="py-2">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                              </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button"  class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Contact</button>

                </div>
            </div>
        </div>
    </div>





</template>