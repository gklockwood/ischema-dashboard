<template>
    <div class="psychotherapynote">
        <div class="container py-4">
            <h3>Psychotherapy Progress Note</h3>

            <div class="row">
                <div class="col-md-6 pt-4">
                    <table class="table border">
                        <tbody>
                            <tr>
                                <th scope="row">Clinician</th>
                                <td>George Lockwood, Ph.D.</td>
                            </tr>
                            <tr>
                                <th scope="row">Patient</th>
                                <td>john Appleseed, DOB 11/23/1953</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 pt-2">
                    <table class="table border">
                        <tbody>
                            <tr>
                                <th scope="row">Date and Time</th>
                                <td>January 3, 2022 8:00AM - 9:00AM</td>
                            </tr>
                            <tr>
                                <th scope="row">Duration</th>
                                <td>60 minutes</td>
                            </tr>
                            <tr>
                                <th scope="row">PaService Codetient</th>
                                <td>90837</td>
                            </tr>
                            <tr>
                                <th scope="row">Participants</th>
                                <td>Client only</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row pt-4">
                <div class="col-sm-12">
                    <label class="form-label fw-bolder">Risk Factors</label>
                    <div class="form-check pb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            None
                        </label>
                    </div>
                    <div class="form-check pb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Suicidal Ideation
                        </label>
                    </div>
                    <div class="form-check pb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Homicidal Ideation
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Other
                        </label>
                    </div>
                </div>
            </div>

            <div class="row pt-4">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder">Medication Update</label>
                        <textarea class="form-control mb-3" rows="3"  required></textarea>
                      </div>
                </div>
            </div>

            <div class="row py-4">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder"> Summary of main themes and content of session</label>
                        <textarea class="form-control mb-3" rows="3"  required></textarea>
                      </div>
                </div>
            </div>

            <h4>
                Interventions
            </h4>

            <div class="row">
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  @click="showmodefocused"> 
                        <label class="form-check-label" for="flexCheckDefault">
                          Default checkbox
                        </label>
                      </div>
                </div>
                <div class="col-sm-12" v-if="modefocused">
                    wqrubwufbeiufbewuij
                </div>
            </div>





        </div>
    </div>
</template>


<script>
    import {
        ref
    } from 'vue';

    export default {
        setup() {
            const modefocused = ref(false);

            function showmodefocused() {
                modefocused.value = !modefocused.value;
            }

            return {
                modefocused,
                showmodefocused

            }
        }
    };
</script>