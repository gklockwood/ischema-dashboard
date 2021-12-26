<template>
    <div class="schedule">
        <div class="container">

            <div class="row my-3">
                <div class="col-sm py-3">
                    <div class="input-group">
                        <input class="form-control border-end-0 border rounded-pill" type="search" value="Search Therapists"
                            id="example-search-input">
                        <span class="input-group-append">
                            <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
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




            <div class="card p-3 my-3 shadow-sm" v-for="therapist in selectTherapist" :key="therapist.id"
                :therapist-name="therapist.first_name" :id="therapist.id">
                <div class="d-flex">
                    <div class="pa2">
                        <img class="profileImage"
                            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" />
                    </div>

                    <div class="text-left ps-3">
                        <h3>Dr {{ therapist.first_name }} {{ therapist.last_name }}</h3>

                        <button type="button" class="btn btn-primary" @click="showDialog = true">Profile <i
                                class="fas fa-arrow-right ms-1"></i></button>
                        <button type="button" class="btn btn-primary ms-2">Read Reviews <i
                                class="fas fa-book-reader ms-1"></i></button>
                        <button type="button" class="btn btn-primary ms-2" @click="selectTherapistSchedule">Schedule
                            Session <i class="fas fa-calendar-day ms-1"></i></button>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import therapistData from './../../data/therapists-data.js';
    import languagesData from './../../data/languages-data.js';
    import regionsData from './../../data/regions-data.js';
    import treatmentData from './../../data/treatment-data.js';


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