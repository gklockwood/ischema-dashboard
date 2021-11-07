<template>
    <div class="clientdetail">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm">
                            <h4>(Client Name Here) Detail</h4>
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
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1"
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
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="row">
                        <div class="col-sm d-flex">
                            <button class="btn btn-light align-self-center shadow-sm flex-fill" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i class="fas fa-file-upload"></i>
                                Upload</button>
                            <div class="dropdown">
                                <button class="btn btn-light shadow-sm dropdown-toggle ms-2" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-share"></i> Share
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-user"></i> Client Info</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-address-book"></i> Contacts</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-folder"></i> Consent Forms</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-list"></i> Inventories</a></li>
                                </ul>
                            </div>
                            <button class="btn btn-light align-self-center shadow-sm ms-2  flex-fill"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-comment-alt"></i>
                                Message</button>
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