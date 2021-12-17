<template>
    <div class="clientdetail">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm d-flex align-items-center">
                            <h4>(Client Name Here) Detail</h4>
                            birthdate
                            <button class="btn btn-light align-self-center shadow-sm d-block mt-2"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Edit
                            </button>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-sm d-flex justify-content-start">
                            <div class="dropdown shadow-sm">
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    All Time
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Select</a></li>
                                    <li><a class="dropdown-item" href="#">Select</a></li>
                                    <li><a class="dropdown-item" href="#">Select</a></li>
                                </ul>
                            </div>
                            <div class="dropdown  ms-2 shadow-sm">
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
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
                                <button class="btn btn-light align-self-center shadow-sm" data-bs-toggle="modal"
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
                                <button class="btn btn-light btn-sm align-self-center shadow-sm">Read More</button>
                            </div>
                            <div class="col-sm-12 offset-md-3 col-md-9 pt-3">
                                <label class="fw-bolder">Psychotherapy Note</label>
                                <p>
                                    This is an example progress note. 
                                </p>
                                <button class="btn btn-light btn-sm align-self-center shadow-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <button class="btn btn-light align-self-center shadow-sm d-block" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i class="fas fa-file-upload"></i>
                                Upload</button>

                            <button class="btn btn-light align-self-center shadow-sm d-block mt-2"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-comment-alt"></i>
                                Message
                            </button>

                            <div class="dropdown">
                                <button class="btn btn-light shadow-sm dropdown-toggle d-block mt-2" type="button"
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
                    <div class="row">

                        <div class="col-sm-12 pt-3">


                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Client Info
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">Phone: 222-222-2222</li>
                                                <li class="list-group-item">Email: test@testmail.net</li>
                                                <li class="list-group-item">Addr: 123 Great Ln</li>
                                            </ul>
                                            <div class="pt-3 text-center">
                                                <button class="btn btn-light align-self-center shadow-sm"><i
                                                    class="fas fa-edit"></i>
                                                Edit Info</button>
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
                                                <li class="list-group-item">Name: Johny Johnson</li>
                                                <li class="list-group-item">Phone: 222-222-2222</li>
                                                <li class="list-group-item">Email: test@testmail.net</li>
                                            </ul>
                                            <div class="pt-3 text-center">
                                                <button class="btn btn-light align-self-center shadow-sm"><i
                                                    class="fas fa-edit"></i>
                                                Edit Contacts Info</button>
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
                                                <li class="list-group-item">Date:</li>
                                                <li class="list-group-item">Date:</li>
                                                <li class="list-group-item">Date:</li>
                                            </ul>
                                            <div class="pt-3 text-center">
                                                <button class="btn btn-light align-self-center shadow-sm"><i
                                                    class="fas fa-edit"></i>
                                                Edit Appointments</button>
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
                                                <li class="list-group-item">Appointment Reminders: Disabled</li>
                                                <li class="list-group-item">Client Portal Access: Documents, Scheduling Messaging & Billing</li>
                                            </ul>
                                            <div class="pt-3 text-center">
                                                <button class="btn btn-light align-self-center shadow-sm"><i
                                                    class="fas fa-edit"></i>
                                                Manage</button>
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
                            <button type="button" class="btn btn-light"><i class="fas fa-file-upload me-1"></i> Upload
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
                            <button type="button" class="btn btn-light"><i class="fas fa-plus me-1"></i> Add Another
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