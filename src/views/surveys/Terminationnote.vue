<template>
    <div class="terminationnote">
        <div class="container py-4">
            <h3>Termination Note</h3>

            <div class="row">
                <div class="col-md-6 pt-4">
                    <table class="table border">
                        <tbody>
                            <tr>
                                <th scope="row">Clinician</th>
                                <td>John Hancock, Ph.D.</td>
                            </tr>
                            <tr>
                                <th scope="row">Patient</th>
                                <td>john Appleseed, DOB 11/13/67 </td>
                            </tr>
                            <tr>
                                <th scope="row">Date and Time</th>
                                <td>January 24th, 2022 12:13PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row pt-4">
                <div class="col-sm-4">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Reasons for Discharge</option>
                        <option value="3">Achieved treatment goals</option>
                        <option value="1">Client discontinued against therapist’s advice</option>
                        <option value="2">Client discontinued contact</option>
                        <option value="3">Client missed excessive appointments</option>
                        <option value="1">Insufficient progress</option>
                        <option value="2">Planned pause</option>
                        <option value="3">Planned pause</option>
                    </select>
                </div>
            </div>

            <div class="row pb-4">
                <div class="col-sm-12 pt-4">
                    <h4>Initial Diagnoses
                    </h4>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="Code">
                        </div>
                        <div class="col-sm-9">
                            <textarea class="form-control" placeholder="Description"  rows="1"></textarea>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="Code">
                        </div>
                        <div class="col-sm-9">
                            <textarea class="form-control" placeholder="Description"  rows="1"></textarea>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="Code">
                        </div>
                        <div class="col-sm-9">
                            <textarea class="form-control" placeholder="Description"  rows="1"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pb-4">
                <div class="col-sm-12 pt-4">
                    <h4>Current Diagnoses
                    </h4>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="Code">
                        </div>
                        <div class="col-sm-9">
                            <textarea class="form-control" placeholder="Description"  rows="1"></textarea>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="Code">
                        </div>
                        <div class="col-sm-9">
                            <textarea class="form-control" placeholder="Description"  rows="1"></textarea>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="Code">
                        </div>
                        <div class="col-sm-9">
                            <textarea class="form-control" placeholder="Description"  rows="1"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder">Treatment Goals and Outcome including current status of negative and positive schemas and modes
                            Problem(s)</label>
                        <textarea class="form-control" rows="3"></textarea>
                      </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder">
                            Psychiatric/Medical Status
                            Current medications and dosages. 
                            </label>
                        <textarea class="form-control" rows="3"></textarea>
                      </div>
                </div>
            </div>


            <div class="row">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder">Post-discharge Plan
                            Referrals, appointments or recommendations made? Client’s reactions.
                            </label>
                        <textarea class="form-control" rows="3"></textarea>
                      </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder">Client’s comments about the therapy and outcome
                            </label>
                        <textarea class="form-control" rows="3"></textarea>
                      </div>
                </div>
            </div>

            <div class="row pt-4 pb-4">
                <div class="col-sm-6">
                    <label class="form-label fw-bolded">[—] Sign this form: I, John Henry, Ph.D., Clinical Psychologist, declare this information is accurate and complete. </label>
                    <input type="text" class="form-control" placeholder="Sign Here...">
                </div>
            </div>

            <div class="row py-4">
                <div class="col-sm-12 text-center">
                  <button type="button" class="btn btn-danger m-2">Reset</button>
                  <button type="button" class="btn btn-primary m-2">Submit</button>
                </div>
              </div>



        </div>
    </div>
</template>