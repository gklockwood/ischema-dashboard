<template>
    <div class="clientdetail">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-sm-8">
                    <div class="d-flex align-items-center">
                        <div class="col-sm d-flex align-items-center">
                            <h4 class="align-self-center m-0">(Client Name Here) Detail</h4>
                            <span class="align-self-center px-3">
                                <span class="fw-bolder pe-1">Birthdate:</span>
                                <span>3/7/1991</span>
                            </span>
                            <router-link to="/therapist/patientdetails"
                                class="btn btn-outline-dark align-self-center shadow-sm d-block align-self-center">
                                <i class="fas fa-edit"></i>
                                Edit
                            </router-link>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <div class="col-sm d-flex justify-content-start">
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
                                    All Items
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Select</a></li>
                                    <li><a class="dropdown-item" href="#">Select</a></li>
                                    <li><a class="dropdown-item" href="#">Select</a></li>
                                </ul>
                            </div>
                            <div class="dropdown  ms-2 shadow-sm">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    New
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Assessment</a></li>
                                    <li><a class="dropdown-item" href="#">Diagnosis & Treatment Plan</a></li>
                                    <li><a class="dropdown-item" href="#">Mental Status Exam</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="card p-3 my-3 shadow-sm" v-for="session in sessionsList" :key="session.id"
                        :therapist-name="session.first_name" :id="session.id">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h5 class="fw-normal">Session</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <p class="text-decoration-none d-inline">{{ session.session_date }}</p>
                                        <div class="vr me-2 ms-2"></div>
                                        <p class="text-decoration-none d-inline fw-bolder">{{ session.session_time }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 d-flex">
                                <button class="btn btn-outline-dark align-self-center shadow-sm" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"><i class="fas fa-edit"></i>
                                    Add Progress Note</button>
                            </div>
                        </div>
                        <div class="row pt-3">
                            <div class="col-sm-12 offset-md-3 col-md-9">
                                <label class="fw-bolder">Progress Note</label>
                                <p>
                                    This is an example progress note.
                                </p>
                                <button class="btn btn-outline-dark btn-sm align-self-center shadow-sm">Read
                                    More</button>
                            </div>
                            <div class="col-sm-12 offset-md-3 col-md-9 pt-3">
                                <label class="fw-bolder">Psychotherapy Note</label>
                                <p>
                                    This is an example progress note.
                                </p>
                                <button class="btn btn-outline-dark btn-sm align-self-center shadow-sm">Read
                                    More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="d-flex">
                        <button class="btn btn-outline-dark align-self-center shadow-sm" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="fas fa-file-upload"></i>
                            Upload</button>

                        <button class="btn btn-outline-dark align-self-center shadow-sm ms-1" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="fas fa-comment-alt"></i>
                            Message
                        </button>

                        <div class="dropdown ms-1">
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
                    <div class="row">

                        <div class="col-sm-12 pt-3">


                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-info" aria-expanded="false"
                                            aria-controls="flush-info">
                                            Client Info
                                        </button>
                                    </h2>
                                    <div id="flush-info" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Phone:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>222-222-2222</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Email:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>test@testmail.net</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Address:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>123 Great Ln</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="pt-3 text-center">
                                                <router-link to="/therapist/patientdetails"
                                                    class="btn btn-outline-dark align-self-center">
                                                    <i class="fas fa-edit"></i>
                                                    Edit
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne2">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2"
                                            aria-expanded="false" aria-controls="flush-collapseOne2">
                                            Contacts
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne2" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">

                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Name:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>Johny Johnson</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Phone:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>222-222-2222</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Address:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>123 Great Ln</span>
                                                        </div>
                                                    </div>
                                                </li>


                                            </ul>
                                            <div class="pt-3 text-center">
                                                <router-link to="/therapist/patientdetails"
                                                    class="btn btn-outline-dark align-self-center">
                                                    <i class="fas fa-edit"></i>
                                                    Manage Contacts
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne3">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3"
                                            aria-expanded="false" aria-controls="flush-collapseOne2">
                                            Upcoming Appointments
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne3" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    <a href=""> 12/27/2021</a>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href=""> 1/27/2022</a>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href=""> 2/28/2022</a>
                                                </li>
                                            </ul>
                                            <div class="pt-3 text-center">
                                                <button class="btn btn-outline-dark align-self-center shadow-sm"><i
                                                        class="fas fa-edit"></i>
                                                    Manage Appointments</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne4">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4"
                                            aria-expanded="false" aria-controls="flush-collapseOne2">
                                            Communication Settings
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne4" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">

                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Appointment Reminders:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>Disabled</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <span class="fw-bolder">
                                                                Client Portal Access:
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <span>Documents, Scheduling Messaging & Billing</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="pt-3 text-center">
                                                <router-link to="/therapist/patientdetails"
                                                    class="btn btn-outline-dark align-self-center">
                                                    <i class="fas fa-edit"></i>
                                                    Manage
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-sharedwith">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-sharedwith"
                                            aria-expanded="false" aria-controls="flush-sharedwith">
                                            Shared with Client
                                        </button>
                                    </h2>
                                    <div id="flush-sharedwith" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">

                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm-10">
                                                            <label class="d-block">
                                                                Credit Card Information
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
                                            <div class="d-flex pt-3">

                                                <button class="btn btn-outline-dark">
                                                    Show Completed (25)
                                                </button>


                                                <button class="btn btn-outline-dark ms-2">
                                                    Share New
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-uploadedfiles">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-uploadedfiles"
                                            aria-expanded="false" aria-controls="flush-uploadedfiles">
                                            Uploaded Files
                                        </button>
                                    </h2>
                                    <div id="flush-uploadedfiles" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">

                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <a href="" class="text-decoration-none">  Credit Card Information</a>
                                                        </div>
                                                        <div class="col-sm">
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                                  </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <a href="" class="text-decoration-none"> Consent for Telehealth</a>
                                                        </div>
                                                        <div class="col-sm">
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                                  </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <a href="" class="text-decoration-none">Notice of Privacy Practices</a>
                                                        </div>
                                                        <div class="col-sm">
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                                  </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <label class="d-block">
                                                                 <a href="" class="text-decoration-none">Informed Consent for Pychotherapy</a>
                                                            </label>
                                                        </div>
                                                        <div class="col-sm">
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                  </svg>
                                                            </button>
                                                            <button class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                                  </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>


                                            </ul>
                                            <div class="d-flex pt-3">

                                                <button class="btn btn-outline-dark">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                        <path
                                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                    Upload New
                                                </button>



                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-invoices">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-invoices"
                                            aria-expanded="false" aria-controls="flush-invoices">
                                            Invoices
                                        </button>
                                    </h2>
                                    <div id="flush-invoices" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">

                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <span><a href="" class="text-decoration-none">INV #257</a></span>
                                                        </div>
                                                        <div class="col-sm">
                                                            <span class="badge bg-danger">Unpaid</span>
                                                        </div>
                                                        <div class="col-sm">
                                                            <span>11/30/2021</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <span><a href="" class="text-decoration-none">INV #245</a></span>
                                                        </div>
                                                        <div class="col-sm">
                                                            <span class="badge bg-danger">Unpaid</span>
                                                        </div>
                                                        <div class="col-sm">
                                                            <span>11/29/2021</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <span><a href="" class="text-decoration-none">INV #230</a></span>
                                                        </div>
                                                        <div class="col-sm">
                                                            <span class="badge bg-danger">Unpaid</span>
                                                        </div>
                                                        <div class="col-sm">
                                                            <span>11/22/2021</span>
                                                        </div>
                                                    </div>
                                                </li>
                                               

                                            </ul>
                                            <div class="d-flex pt-3">

                                                <button class="btn btn-outline-dark">
                                                    Show More
                                                </button>



                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

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

                        <div class="d-flex pb-4">
                            <div class="d-flex-item pe-4">
                                <span class="pe-2 fw-bolder">Patient:</span><span>Galen Lockwood</span>
                            </div>
                            <div class="d-flex-item">
                                <span class="pe-2 fw-bolder">Time:</span><span>Sep 29, 2021</span>
                                <div class="vr me-2 ms-2"></div><span>2:00 pm - 3:00 pm</span>
                            </div>
                        </div>

                        <select class="form-select my-2" aria-label="Default select example">
                            <option selected>Standard Progress Note</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div class="form-floating my-4">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Subjective Complaint</label>
                        </div>

                        <div class="form-floating my-4">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Objective Findings</label>
                        </div>

                        <div class="form-floating my-4">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Assessment of Progress</label>
                        </div>

                        <div class="form-floating my-4">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Plans for Next Session</label>
                        </div>

                        <div class="d-flex">
                            <button type="button" class="btn btn-outline-dark"><i class="fas fa-file-upload me-1"></i>
                                Upload
                                Progress Note</button>
                        </div>

                        <hr>

                        <div class="d-flex my-4 justify-content-center">
                            <button type="button" class="btn btn-danger me-2" data-bs-dismiss="modal"><i
                                    class="fas fa-times me-1"></i> Cancel</button>
                            <button type="button" class="btn btn-primary"><i class="fas fa-save me-1"></i> Save</button>
                        </div>

                        <hr>

                        <div class="d-flex my-4 justify-content-start">
                            <button type="button" class="btn btn-outline-dark"><i class="fas fa-plus me-1"></i> Add
                                Another
                                Note Type</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import sessionData from '../../data/session-data.js';



    export default {
        setup() {
            const sessionsList = sessionData;


            return {
                sessionsList
            }
        }
    };
</script>