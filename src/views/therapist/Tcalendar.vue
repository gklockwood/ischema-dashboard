<template>
    <div class="therapistcalendar">
        <div class="container py-4">
            <h1>Therapist Calendar</h1>
            <div style="height:1000px">
                <vue-cal class="vuecal--blue-theme shadow" :time="true" :disable-views="['years', 'year']" active-view="month"
                    :events="events">
                    <template v-slot:no-event="">Available</template>
                </vue-cal>
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
                content: '<button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-11-28 18:00',
                end: '2021-11-28 19:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-11-20 18:30',
                end: '2021-11-20 20:30',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-11-21 11:00',
                end: '2021-11-21 12:00',
                title: 'Appointment',
                background: true,
                class: 'Appointment',
                content: '<button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
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
                content: '<button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: '2021-8-19 12:00',
                end: '2021-8-19 13:00',
                title: "Appointment",
                class: "Appointment",
                background: true,
                content: '<button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
            }, {
                start: "2021-8-20 12:00",
                end: "2021-8-20 13:00",
                title: 'Appointment',
                class: 'Appointment',
                background: true,
                content: '<button type="button" class="btn btn-sm btn-primary mt-2 shadow-sm"><i class="fas fa-video me-1"></i> Secure Video Call</button>'
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

    .vuecal--blue-theme .vuecal__cell-events-count, .vuecal--blue-theme .vuecal__menu {
        background: var(--secondary-bg-gradient-dark);
    }
    .vuecal--blue-theme .vuecal__title-bar {
        background-color: rgb(119 30 198 / 13%);
    }
    .vuecal__event.vuecal__event--focus {
    height: auto !important;
    }
    .vuecal__event {
        height: auto !important;
    }

</style>