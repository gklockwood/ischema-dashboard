<template>
    <div class="clientdetail">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-sm-8">
                    <div class="d-flex align-items-center">
                        <div class="col-sm d-flex align-items-center">
                            <h4 class="align-self-center m-0">(Client Name Here) Detail</h4>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="d-flex">
                        <router-link to="/therapist/patientdetails"
                            class="btn btn-outline-dark align-self-center shadow-sm align-self-center me-2">
                            <i class="fas fa-edit"></i>
                            Edit
                        </router-link>

                        <button class="btn btn-outline-dark align-self-center shadow-sm" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="fas fa-file-upload"></i>
                            Upload</button>

                        <button class="btn btn-outline-dark align-self-center shadow-sm ms-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="fas fa-comment-alt"></i>
                            Message
                        </button>

                        <div class="dropdown ms-2">
                            <button class="btn btn-outline-dark shadow-sm dropdown-toggle" type="button"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-share"></i> Share
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#"><i class="fas fa-folder me-1"></i> Consent
                                        Forms</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fas fa-table me-1"></i>
                                        Inventories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row pt-3">

                <div class="col-sm">
                    <ul class="nav nav-pills small small-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="sessions-tab" data-bs-toggle="tab" data-bs-target="#sessions" type="button" role="tab" aria-controls="sessions" aria-selected="true">Upcoming Appointments</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="schemamodeconceptualizationplan-tab" data-bs-toggle="tab" data-bs-target="#schemamodeconceptualizationplan" type="button" role="tab" aria-controls="profile" aria-selected="false">Schema Mode Conceptualization Plan</button>
                          </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="diagnoses-tab" data-bs-toggle="tab" data-bs-target="#diagnoses" type="button" role="tab" aria-controls="profile" aria-selected="false">Diagnoses</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="mentalstatusexam-tab" data-bs-toggle="tab" data-bs-target="#mentalstatusexam" type="button" role="tab" aria-controls="contact" aria-selected="false">Mental Status Exam</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="assesmentresults-tab" data-bs-toggle="tab" data-bs-target="#assesmentresults" type="button" role="tab" aria-controls="assesmentresults" aria-selected="false">Assesment Results</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="treatmentreview-tab" data-bs-toggle="tab" data-bs-target="#treatmentreview" type="button" role="tab" aria-controls="treatmentreview" aria-selected="false">Treatment Review</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="dischargesummary-tab" data-bs-toggle="tab" data-bs-target="#dischargesummary" type="button" role="tab" aria-controls="dischargesummary" aria-selected="false">Discharge Summary</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="completedformsanddocuments-tab" data-bs-toggle="tab" data-bs-target="#completedformsanddocuments" type="button" role="tab" aria-controls="completedformsanddocuments" aria-selected="false">Completed Forms and Signed Documents</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="uploadedfiles-tab" data-bs-toggle="tab" data-bs-target="#uploadedfiles" type="button" role="tab" aria-controls="uploadedfiles" aria-selected="false">Uploaded Files</button>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="sessions" role="tabpanel" aria-labelledby="sessions">
                            <div class="row pt-4">
                                <div class="col-sm-6 d-flex ">
                                    <div class="dropdown shadow-sm">
                                        <button class="btn btn-outline-dark dropdown-toggle" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            All Time
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Select</a></li>
                                            <li><a class="dropdown-item" href="#">Select</a></li>
                                            <li><a class="dropdown-item" href="#">Select</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown  ms-2 shadow-sm">
                                        <button class="btn btn-outline-dark dropdown-toggle" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-filter" viewBox="0 0 16 16">
                                                <path
                                                    d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                            All Items
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">All Items</a></li>
                                            <li><a class="dropdown-item" href="#">Assessments</a></li>
                                            <li><a class="dropdown-item" href="#">Diagnosis and Treatment Plans</a></li>
                                            <li><a class="dropdown-item" href="#">Mental Status Exams</a></li>
                                            <li><a class="dropdown-item" href="#">Appointments</a></li>
                                            <li><a class="dropdown-item" href="#">Chart Notes</a></li>
                                            <li><a class="dropdown-item" href="#">Inventories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-group mt-4">
                                <li class="list-group-item py-3">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h5 class="d-inline"><span class="badge bg-light text-dark">DEC 13</span>
                                            </h5>
                                            <span class="fw-bolder px-2">Appointment</span>
                                        </div>
                                        <div class="col-sm-6 text-end">
                                            <span>11:00 am - 12:00 pm</span>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <button class="btn btn-outline-dark btn-sm align-self-center shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                    class="fas fa-edit"></i>
                                                Add Progress Note
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item py-3">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h5 class="d-inline"><span class="badge bg-light text-dark">NOV 13</span>
                                            </h5>
                                            <span class="fw-bolder px-2">Appointment</span>
                                        </div>
                                        <div class="col-sm-6 text-end">
                                            <span>11:00 am - 12:00 pm</span>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <button class="btn btn-outline-dark btn-sm align-self-center shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                    class="fas fa-edit"></i>
                                                Add Progress Note
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item py-3">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h5 class="d-inline"><span class="badge bg-light text-dark">OCT 13</span>
                                            </h5>
                                            <span class="fw-bolder px-2">Appointment</span>
                                        </div>
                                        <div class="col-sm-6 text-end">
                                            <span>11:00 am - 12:00 pm</span>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <button class="btn btn-outline-dark btn-sm align-self-center shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                    class="fas fa-edit"></i>
                                                Add Progress Note
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="schemamodeconceptualizationplan" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div class="tab-pane fade" id="diagnoses" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        <div class="tab-pane fade" id="mentalstatusexam" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        <div class="tab-pane fade" id="assesmentresults" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        <div class="tab-pane fade" id="treatmentreview" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        <div class="tab-pane fade" id="dischargesummary" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        <div class="tab-pane fade" id="completedformsanddocuments" role="tabpanel" aria-labelledby="contact-tab">
                            <ul class="list-group py-3">
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <label class="d-block">
                                                Consent for Telehealth
                                            </label>
                                            <small class="text-muted">
                                                Viewed by GL on Dec 11, 2021
                                            </small>
                                        </div>
                                        <div class="col-sm-2">
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-x-lg"
                                                    viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                    <path fill-rule="evenodd"
                                                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <label class="d-block">
                                                Notice of Privacy Practices
                                            </label>
                                            <small class="text-muted">
                                                Viewed by GL on Nov 27, 2021
                                            </small>
                                        </div>
                                        <div class="col-sm-2">
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-x-lg"
                                                    viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                    <path fill-rule="evenodd"
                                                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <label class="d-block">
                                                Informed Consent for Pychotherapy
                                            </label>
                                            <small class="text-muted">
                                                Viewed by GL on Nov 27, 2021
                                            </small>
                                        </div>
                                        <div class="col-sm-2">
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-x-lg"
                                                    viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                    <path fill-rule="evenodd"
                                                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
    
    
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="uploadedfiles" role="tabpanel" aria-labelledby="uploadedfiles">
                            <ul class="list-group py-3">
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-sm">
                                            <a href="" class="text-decoration-none"> Consent for
                                                Telehealth</a>
                                        </div>
                                        <div class="col-sm">
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor"
                                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                            </button>
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor"
                                                    class="bi bi-download" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                    <path
                                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                </svg>
                                            </button>
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-trash"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-sm">
                                            <a href="" class="text-decoration-none">Notice of Privacy
                                                Practices</a>
                                        </div>
                                        <div class="col-sm">
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor"
                                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                            </button>
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor"
                                                    class="bi bi-download" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                    <path
                                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                </svg>
                                            </button>
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-trash"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-sm">
                                            <label class="d-block">
                                                <a href="" class="text-decoration-none">Informed Consent
                                                    for Pychotherapy</a>
                                            </label>
                                        </div>
                                        <div class="col-sm">
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor"
                                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                            </button>
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor"
                                                    class="bi bi-download" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                    <path
                                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                </svg>
                                            </button>
                                            <button class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-trash"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
    
    
                            </ul>
                        </div>
                      
                      </div>
                </div>
            </div>

        </div>


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Progress Note</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-sm-8">
                                <div class="d-flex pb-4">
                                    <div class="d-flex-item pe-4">
                                        <span class="pe-2 fw-bolder">Patient:</span><span>Galen Lockwood</span>
                                    </div>
                                    <div class="d-flex-item">
                                        <span class="pe-2 fw-bolder">Time:</span><span>Sep 29, 2021</span>
                                        <div class="vr me-2 ms-2"></div><span>2:00 pm - 3:00 pm</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm">
                                        <select class="form-select my-2" aria-label="Default select example">
                                            <option selected>Simple Progress Note</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-sm">
                                        <button type="button" class="btn btn-outline-dark mt-2">
                                            Load Previous Note</button>
                                    </div>
                                </div>

                                <div class="row py-3">
                                    <div class="col">
                                        <label for="" class="pb-2 fw-bolder">Simple Progress Note</label>
                                        <textarea class="form-control" placeholder="Add Progress Note..."
                                            style="height: 100px"></textarea>
                                    </div>
                                    <div class="col-sm-12 text-end pt-2">
                                        <button type="button" class="btn btn-outline-dark mx-2">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                    </div>
                                </div>

                                <div class="row py-3">
                                    <div class="col-sm-12">
                                        <label for="" class="pb-2 fw-bolder">Psychotherapy Note</label>
                                        <textarea class="form-control" placeholder="Add Psychotherapy Note..."
                                            style="height: 100px"></textarea>
                                    </div>
                                    <div class="col-sm-12 text-end pt-2">
                                        <button type="button" class="btn btn-outline-dark mx-2">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                    </div>
                                </div>



                                <div class="d-flex pt-4">
                                    <button type="button" class="btn btn-outline-dark"><i
                                            class="fas fa-file-upload me-1"></i>
                                        Upload
                                        Progress Note</button>
                                </div>

                                <hr>

                                <div class="d-flex my-4 justify-content-center">
                                    <button type="button" class="btn btn-danger me-2" data-bs-dismiss="modal"><i
                                            class="fas fa-times me-1"></i> Cancel</button>
                                    <button type="button" class="btn btn-primary"><i class="fas fa-save me-1"></i>
                                        Save</button>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <h5>Appointment Info</h5>
                                <ul class="list-unstyled">
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                            <path
                                                d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Date:
                                        </span>
                                        <span class="ms-1">
                                            Dec 13, 2021 11:00am - 11:55am
                                        </span>
                                    </li>
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                                            <path
                                                d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z" />
                                            <path
                                                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Attendance:
                                        </span>
                                        <span class="ms-1">
                                            <span class="badge rounded-pill bg-primary">Show</span>
                                        </span>
                                    </li>
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Duration:
                                        </span>
                                        <span class="ms-1">
                                            55 Min
                                        </span>
                                    </li>
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Video Type:
                                        </span>
                                        <span class="ms-1">
                                            Office
                                        </span>
                                    </li>
                                </ul>
                                <div class="pb-4">
                                    <button type="button" class="btn btn-outline-dark me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-pencil-square me-1" viewBox="0 0 16 16">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                        Edit Date & Time
                                    </button>
                                    <button type="button" class="btn btn-outline-dark">
                                        Open in Calendar
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="ms-1 bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </button>
                                </div>


                                <h5>Services</h5>
                                <div class="pb-4">
                                    <ul class="list-unstyled m-0">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                              </svg>
                                            <span class="ms-1 fw-bolder">
                                                Service Provided:
                                            </span>
                                            <span class="ms-1">
                                                Psychotherapy
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <h5>Next Appointment</h5>
                                <div class="pb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-event" viewBox="0 0 16 16">
                                        <path
                                            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>
                                    <span class="ms-1">
                                        Dec 18 2021, 1:30pm - 2:25pm
                                    </span>
                                </div>

                                <h5>Previous Appointment</h5>
                                <div class="pb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-event" viewBox="0 0 16 16">
                                        <path
                                            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>
                                    <span class="ms-1">
                                        Dec 13 2021, 1:30pm - 2:25pm
                                    </span>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>



    </div>
</template>