<template>
    <div class="clientselecttime">
        <div class="container-fluid pt-4">
            <h1>Select Time</h1>
            <div class="px-3 pt-4">
                <div class="row">
                    <div class="col-sm-4 d-flex align-items-sm-center justify-content-center shadow-sm border rounded-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                              </svg>
                        </span>
                        <ul class="list-unstyled p-4 m-0">
                            <li><span class="fw-bolder">Service:</span></li>
                            <li><span>Psychiatric Diagnostic Evaluation</span></li>
                            <li><small class="text-muted">55 minutes</small></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <vue-cal class="vuecal--rounded-theme vuecal--green-theme m-auto rounded-3 shadow-sm border" :time="true"
                            :disable-views="['week']" hide-view-selector active-view="month" :min-date="minDate"
                            :max-date="maxDate" xsmall style="width: 100%;height: 300px">
                            <template v-slot:no-event="">Available</template>
                        </vue-cal>
                    </div>
                    <div class="col-sm-4 shadow-sm border rounded pt-3">
                        <div class="text-center">
                            <h4>Availability on Thur, Jan 06, 2022</h4>
                            <small class="text-muted px-2">Viewing in EST</small><button class="btn btn-outline-dark btn-sm">Change</button>
                        </div>
                        <div class="row pt-3">
                            <div class="col-sm-4 text-center"><span class="fw-bolder">Morning</span></div>
                            <div class="col-sm-4 text-center"><span class="fw-bolder">Afternoon</span></div>
                            <div class="col-sm-4 text-center"><span class="fw-bolder">Evening</span></div>
                        </div>
                        <div class="row pt-3">
                            <div class="col-sm-4 text-center"><span class="badge bg-primary">8:00 AM</span></div>
                            <div class="col-sm-4 text-center">----</div>
                            <div class="col-sm-4 text-center">----</div>
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
                start: '2021-12-06 11:00',
                end: '2021-12-06 12:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-12-07 11:00',
                end: '2021-12-07 12:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-12-09 11:00',
                end: '2021-12-09 12:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button data-bs-toggle="modal" data-bs-target="#secureCallModal" type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-12-10 11:00',
                end: '2021-12-10 12:00',
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
        padding: 0 !important;
        font-size: 15px !important;
    }
</style>