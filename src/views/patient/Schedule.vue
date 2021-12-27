<template>
    <div class="schedule">
        <div class="container">


            <!-- General Therapist View Start -->
            <div class="row" v-if="therapistsVisiblity">
                <div class="col-sm-12">
                    <div class="row pt-4">
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <select class="form-select" aria-label="Default select example">
                                <option value="" selected disabled>Select Your Region</option>
                                <option v-for="region in selectRegion" :key="region.id" :therapist-name="region.label"
                                    :id="region.id">{{ region.label }}</option>
                            </select>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <select class="form-select" aria-label="Default select example">
                                <option value="" selected disabled>Select a Language Preference</option>
                                <option v-for="language in selectLanguage" :key="language.id"
                                    :therapist-name="language.label" :id="language.id">{{ language.label }}</option>
                            </select>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <select class="form-select" aria-label="Default select example">
                                <option value="" selected disabled>Select Desired Treatment</option>
                                <option v-for="treatment in selectTreatment" :key="treatment.id"
                                    :therapist-name="treatment.label" :id="treatment.id">{{ treatment.label }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-sm py-3">
                            <div class="input-group">
                                <input class="form-control border-end-0 border rounded-pill" type="search"
                                    value="Search Therapists" id="example-search-input">
                                <span class="input-group-append">
                                    <button
                                        class="btn btn-outline-dark bg-white border-bottom-0 border rounded-pill ms-n5"
                                        type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm py-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label ps-1 fw-bold" for="inlineCheckbox1">Male Only</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label ps-1 fw-bold" for="inlineCheckbox2">Female Only</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card p-3 my-3 shadow-sm" v-for="therapist in selectTherapist"
                                :key="therapist.id" :therapist-name="therapist.first_name" :id="therapist.id">
                                <div class="d-flex">
                                    <div class="pa2">
                                        <img class="profileImage"
                                            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" />
                                    </div>

                                    <div class="text-left ps-3">
                                        <h3>Dr {{ therapist.first_name }} {{ therapist.last_name }}</h3>

                                        <button type="button" class="btn btn-primary" @click="showDialog = true">Profile
                                            <i class="fas fa-arrow-right ms-1"></i></button>
                                        <button type="button" class="btn btn-primary ms-2">Read Reviews <i
                                                class="fas fa-book-reader ms-1"></i></button>
                                        <button type="button" class="btn btn-primary ms-2"
                                            @click="selectTherapistSchedule">Schedule
                                            Session <i class="fas fa-calendar-day ms-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- General Therapist View End -->


            <!-- Select Therapist Start -->
            <div class="row" v-if="selectedTherapistBubble">
                <div class="col-sm-12">
                    <div class="pt-4p pb-4">
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <div class="alert alert-primary" role="alert">
                                    A simple primary alert—check it out!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Select Therapist End -->


            <!-- Scheduling View Start -->
            <div class="row" v-if="calendarVisiblity">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-1 text-center p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </div>
                        <div class="col-sm-10">
                            <div class="row">
                                <div class="col-sm-12 col-md-4 p-4">
                                    <button class="btn btn-outline-dark">
                                        30th Aug 2021 - 12th Sep 2021
                                    </button>
                                </div>
                                <div class="col-sm-12 col-md-4 p-4">
                                    <button class="btn btn-outline-dark">
                                        6th Sep 2021 - 12th Sep 2021
                                    </button>
                                </div>
                                <div class="col-sm-12 col-md-4 p-4">
                                    <button class="btn btn-outline-dark">
                                        13th Sep 2021 - 12th Sep 2021
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1 text-center p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="col-sm pt-4">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    <div class="row w-100">
                                        <div class="col-sm-4 text-start">
                                            <span class="text-primary">Monday 6th September 2021</span>
                                        </div>
                                        <div class="col-sm-8 text-start">
                                            <span>4 appointment slots</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    <div class="row w-100">
                                        <div class="col-sm-4 text-start">
                                            <span class="text-primary">Tuesday 7th September 2021</span>
                                        </div>
                                        <div class="col-sm-8 text-start">
                                            <span>4 appointment slots</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    <div class="row w-100">
                                        <div class="col-sm-4 text-start">
                                            <span class="text-primary">Wednesday 8th September 2021</span>
                                        </div>
                                        <div class="col-sm-8 text-start">
                                            <span>3 appointment slots</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    <div class="row w-100">
                                        <div class="col-sm-4 text-start">
                                            <span class="text-primary">Thursday 9th September 2021</span>
                                        </div>
                                        <div class="col-sm-8 text-start">
                                            <span>2 appointment slots</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    <div class="row w-100">
                                        <div class="col-sm-4 text-start">
                                            <span class="text-primary">Friday 10th September 2021</span>
                                        </div>
                                        <div class="col-sm-8 text-start">
                                            <span>0 appointment slots</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's
                                    accordion body. Nothing more exciting happening here in terms of content, but just
                                    filling up the space to make it look, at least at first glance, a bit more
                                    representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseSix">
                                    <div class="row w-100">
                                        <div class="col-sm-4 text-start">
                                            <span class="text-primary">Saturday 11th September 2021</span>
                                        </div>
                                        <div class="col-sm-8 text-start">
                                            <span>0 appointment slots</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's
                                    accordion body. Nothing more exciting happening here in terms of content, but just
                                    filling up the space to make it look, at least at first glance, a bit more
                                    representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                    aria-controls="flush-collapseSeven">
                                    <div class="row w-100">
                                        <div class="col-sm-4 text-start">
                                            <span class="text-primary">Sunday 12th September 2021</span>
                                        </div>
                                        <div class="col-sm-8 text-start">
                                            <span>2 appointment slots</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseSeven" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4 py-3">
                                            <span class="pe-2">07:00am - 08:30am</span>
                                        </div>
                                        <div class="col-sm-8 py-3">
                                            <button class="btn btn-outline-dark btn-sm" @click="showForm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Scheduling View End -->


        </div>

    </div>

</template>

<script>
    import therapistData from './../../data/therapists-data.js';
    import languagesData from './../../data/languages-data.js';
    import regionsData from './../../data/regions-data.js';
    import treatmentData from './../../data/treatment-data.js';
    import TreatmentData from './../../data/treatment-data.js';


    import {
        ref
    } from 'vue';


    export default {
        setup() {
            const selectTherapist = therapistData;
            const showDialog = ref(false);
            const dialogFullscreen = ref(false);
            const dialogPersistent = ref(false);
            const dialogPersistentNoAnimation = ref(false);

            const selectLanguage = languagesData;
            const selectRegion = regionsData;
            const selectTreatment = treatmentData;
            const calendarVisiblity = ref(false);
            const therapistsVisiblity = ref(true);

            function showCalendar() {
                calendarVisiblity.value = true
                therapistsVisiblity.value = false;
            }

            function showTherapists() {
                therapistsVisiblity.value = true;
                calendarVisiblity.value = false
            }

            const selectedTherapistBubble = ref(false);

            function selectTherapistSchedule() {
                calendarVisiblity.value = true
                therapistsVisiblity.value = false;
                selectedTherapistBubble.value = true;
                showFilters.value = false
            }

            function cancelSchedule() {
                calendarVisiblity.value = false
                therapistsVisiblity.value = true;
                selectedTherapistBubble.value = false;
                showFilters.value = true;
                userForm.value = false
            }

            const showFilters = ref(true)

            // Form related
            const patientGender = ref([{
                label: 'Male'
            }, {
                label: 'Female'
            }, {
                label: 'Non-Binary'
            }, {
                label: 'Gender-Neutral'
            }, {
                label: 'Gender-Fluid'
            }, {
                label: 'Gender-Queer'
            }])


            const patientTitle = ref([{
                label: 'Mr'
            }, {
                label: 'Mrs'
            }, {
                label: 'Ms'
            }, {
                label: 'Miss'
            }, {
                label: 'Mx'
            }])


            const userForm = ref(false)

            function showForm() {
                calendarVisiblity.value = false
                userForm.value = true
            }

            return {
                selectLanguage,
                selectTreatment,
                selectRegion,
                showCalendar,
                showTherapists,
                calendarVisiblity,
                therapistsVisiblity,
                selectTherapist,
                showDialog,
                dialogFullscreen,
                dialogPersistent,
                dialogPersistentNoAnimation,
                selectTherapistSchedule,
                cancelSchedule,
                selectedTherapistBubble,
                showFilters,
                patientGender,
                patientTitle,
                showForm,
                userForm

            }
        }
    };
</script>

<style lang="scss">
    .ms-n5 {
        margin-left: -40px;

        &:hover {
            color: initial;
        }
    }
</style>