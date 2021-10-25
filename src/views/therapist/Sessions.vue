<template>
    <div class="faq">
        <div class="container py-4">
            <h1>Sessions</h1>

            <div class="row my-3">
                <div class="col-sm col-sm-6 py-3">
                    <div class="input-group">
                        <input class="form-control border-end-0 border rounded-pill" type="search" value="Search Sessions"
                            id="example-search-input">
                        <span class="input-group-append">
                            <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                                type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-sm-6 py-3">
                    <div class="dropdown d-inline ps-2">
                        <button class="btn btn-light dropdown-toggle shadow-sm" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-sort me-1"></i> Sort By: Upcoming
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#"><i class="fas fa-sort-numeric-down me-1"></i>  Patient First Name</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-sort-numeric-down-alt me-1"></i> Patient Last Name</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-clock me-1"></i>  Upcoming</a></li>
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
                            <p class="text-decoration-none d-inline fw-bolder">{{ session.session_time }}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12">
                            <h5 class="fw-normal">Client</h5>
                            <a href="#" class="text-decoration-none">{{ session.patient_name }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="row">
                        <div class="col-sm-12">
                            <h5 class="fw-normal">Start Session</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <button type="button" class="btn btn-sm btn-primary mt-2 me-1"><i class="fas fa-video me-1"></i> Secure Video Call</button>  
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="row">
                        <div class="col-sm-12">
                            <h5 class="fw-normal">Contact</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <a href="{{ client.client_number }}" class="text-decoration-none">{{ session.patient_phone }}</a> <span class="badge bg-secondary ms-1">Mobile</span>
                        </div>
                        <div class="col-sm-12">
                            <hr class="my-2">
                            <a href="mailto:{{ client.client_email }}" class="text-decoration-none">{{ session.patient_email }}</a> <a href="#" class="ps-2 text-decoration-none"> <div class="vr me-2"></div> <i class="fas fa-copy"></i></a>
                        </div>
                        <div class="col-sm-12">
                            <hr class="my-2">
                             <button type="button" class="btn btn-sm btn-light mt-2 shadow-sm"><i class="far fa-comment-alt me-2"></i>Message</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="row">
                        <div class="col-sm-12 d-flex justify-content-end">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle shadow-sm" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-cogs me-1"></i> Manage Session
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item text-danger" href="#"><i class="fas fa-ban me-1"></i> Cancel Session</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-clock me-1"></i> Change Date/Time</a></li>
                                </ul>
                            </div>
                        </div>
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