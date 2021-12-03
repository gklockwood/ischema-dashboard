<template>
    <div class="therapistcalendar">
        <div class="container py-4">

            <div class="row">
                <div class="col-sm-6">
                    <h1>Therapist Calendar</h1>
                </div>
                <div class="col-sm-6 text-end">
                    <button data-bs-toggle="modal" data-bs-target="#createSessionModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-plus me-1"></i> Add Session</button>
                </div>
            </div>


            
            <div style="height:1000px">
                <vue-cal class="vuecal--blue-theme shadow" :time="true" :disable-views="['years', 'year']"
                    active-view="month" :events="events">
                    <template v-slot:no-event="">Available</template>
                </vue-cal>
            </div>




            <!-- Modal - Edit Session -->
            <div class="modal fade" id="secureCallModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Patient Name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="d-flex pb-4">
                                <div class="d-flex-item pe-4">
                                    <button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i
                                            class="fas fa-video me-1"></i> Start Video Session</button>
                                </div>
                                <div class="d-flex-item">
                                    <button type="button" class="btn btn-sm btn-light mt-2 shadow-sm"><i
                                            class="fas fa-share me-1"></i> Share Video Link</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <select class="form-select my-2" aria-label="Default select example">
                                        <option selected>Show</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>


                            <div class="row pt-3">
                                <div class="col-sm-3">
                                    <input placeholder="12/06/2021" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <input placeholder="10:00 am" class="form-control" />
                                </div>
                                <div class="col-sm-2 d-flex align-items-center">
                                    <input placeholder="55" class="form-control" /><span class="ps-1">min</span>
                                </div>
                                <div class="col-sm-2 d-flex align-items-center">
                                    <div class="form-check align-self-center mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Repeats
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div class="row pt-4">
                                <div class="col-sm-6">
                                    <ul class="list-group">
                                        <li class="list-group-item"><span class="fw-bolder">Notes</span></li>
                                        <li class="list-group-item"><span><a href="">11/30/2021</a></span></li>
                                        <li class="list-group-item"><span><a href="">11/29/2021</a> </span></li>
                                    </ul>
                                    <div class=" d-flex justify-content-center">
                                        <button class="btn btn-light mt-2 shadow-sm"><i class="fas fa-plus me-1"></i>
                                            Add Note</button>
                                    </div>
                                </div>
                                <div class="col-sm-6">

                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <span class="fw-bolder">Billing type</span>
                                                </div>
                                                <div class="col-sm-6 border-start">
                                                    Self Pay
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <span class="fw-bolder">Appointment total</span>
                                                </div>
                                                <div class="col-sm-6 border-start">
                                                    $145
                                                </div>
                                            </div>
                                        </li>
                                    </ul>



                                </div>
                            </div>




                            <div class="row pt-4">
                                <div class="col-sm-6">
                                    <input placeholder="Psychotherapy, 60 min" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <input placeholder="$145" class="form-control" />
                                </div>
                                <div class="col-sm-3 d-flex align-items-center">
                                    <button class="btn"><i class="fas fa-plus me-1"></i> Add Service</button>
                                </div>
                            </div>

                            
                            <hr>
                            <div class="d-flex justify-content-end">
                                <button  data-bs-dismiss="modal" type="button" class="btn btn-light me-2"><i
                                    class="fas fa-times me-1"></i>Cancel</button>
                                <button type="button" class="btn btn-danger me-2"><i
                                        class="fas fa-trash me-1"></i>Delete</button>
                                <button type="button" class="btn btn-primary me-2"><i
                                        class="fas fa-check me-1"></i>Save</button>
                            
                            </div>


                        </div>

                    </div>
                </div>
            </div>



            <!-- Modal - Create Session -->
            <div class="modal fade" id="createSessionModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New Appointment</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row">
                                <div class="col-sm-6">
                                    <select class="form-select my-2" aria-label="Default select example">
                                        <option selected>Patient Name Here</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>


                            <div class="row pt-3">
                                <div class="col-sm-3">
                                    <input placeholder="12/06/2021" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <input placeholder="10:00 am" class="form-control" />
                                </div>
                                <div class="col-sm-2 d-flex align-items-center">
                                    <input placeholder="55" class="form-control" /><span class="ps-1">min</span>
                                </div>
                                <div class="col-sm-2 d-flex align-items-center">
                                    <div class="form-check align-self-center mb-0">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Repeats
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row pt-4">
                                <div class="col-sm-6">
                                    <input placeholder="Psychotherapy, 60 min" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <input placeholder="$145" class="form-control" />
                                </div>
                                <div class="col-sm-3 d-flex align-items-center">
                                    <button class="btn"><i class="fas fa-plus me-1"></i> Add Service</button>
                                </div>
                            </div>


                            <div class="col-sm-6 pt-4">

                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <span class="fw-bolder">Billing type</span>
                                            </div>
                                            <div class="col-sm-6 border-start">
                                                Self Pay
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <span class="fw-bolder">Appointment total</span>
                                            </div>
                                            <div class="col-sm-6 border-start">
                                                $145
                                            </div>
                                        </div>
                                    </li>
                                </ul>



                            </div>




                            <hr>
                            <div class="d-flex justify-content-end">
                                <button  data-bs-dismiss="modal" type="button" class="btn btn-light me-2"><i
                                        class="fas fa-times me-1"></i>Cancel</button>
                                <button type="button" class="btn btn-primary me-2"><i
                                        class="fas fa-check me-1"></i>Save</button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
    import VueCal from 'vue-cal'
    import 'vue-cal/dist/vuecal.css'
    import {
        reactive,
        computed
    } from 'vue';
    export default {
        components: {
            VueCal
        },
        setup() {
            const events = reactive([{
                start: '2021-11-27 11:00',
                end: '2021-11-27 12:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-11-28 18:00',
                end: '2021-11-28 19:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-11-20 18:30',
                end: '2021-11-20 20:30',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-11-21 11:00',
                end: '2021-11-21 12:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-11-21 19:00',
                end: '2021-11-21 20:00',
                title: 'Appointment'
            }, {
                start: '2021-11-30 19:00',
                end: '2021-11-30 20:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-8-19 12:00',
                end: '2021-8-19 13:00',
                title: "Appointment",
                class: "Appointment",
                background: true,
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: "2021-8-20 12:00",
                end: "2021-8-20 13:00",
                title: 'Appointment',
                class: 'Appointment',
                background: true,
                content: '<button data-bs-toggle="modal"  data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }]);

            function onEventClick(event, e) {
                this.selectedEvent = event
                this.showDialog = true

                // Prevent navigating to narrower view (default vue-cal behavior).
                e.stopPropagation()

            }

            const minDate = computed(function () {
                return new Date().subtractDays(10)
            });

            const maxDate = computed(function () {
                return new Date().addDays(10)
            });


            return {
                events,
                onEventClick,
                minDate,
                maxDate

            };
        }
    }


</script>

<style>
    .vuecal__cell-date {
        padding: 40px;
        font-size: 25px;
    }

    .vuecal {
        border-radius: 15px;
        overflow: hidden;
    }

    /* .vuecal {
    display: contents;
} */

    .vuecal__cell--selected.vuecal__cell--has-events {
        background-color: rgba(173, 216, 230, 0.5) !important;
        box-sizing: border-box;
        padding: 5px;
    }

    .vuecal--blue-theme .vuecal__cell-events-count,
    .vuecal--blue-theme .vuecal__menu {
        background: var(--secondary-bg-gradient-dark);
    }

    .vuecal--blue-theme .vuecal__title-bar {
        background-color: rgb(119 30 198 / 13%);
    }

    .vuecal__event.vuecal__event--focus {
        height: auto !important;
        padding:10px !important;
    }

    .vuecal__event {
        height: auto !important;
        padding:10px !important;
    }
</style>