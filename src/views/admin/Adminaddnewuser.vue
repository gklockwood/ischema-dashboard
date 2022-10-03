<template>
    <div class="admincalender">
        <div class="container py-4">
            <h1>Add a New User</h1>



            <h3 class="pt-4">Roles:</h3>
            <p>
                Each user can have multiple roles.  A user's roles determine what they can access within eSchemaTherapy.
            </p>
            <h4 class="pt-3">Practice Administration</h4>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            <span class="fw-bolder">Practice Administrator </span><br>
                            <small class="text-muted">An eSchemaTherapy practice administrator can add and edit eSchemaTherapy users, change user roles, and set account access settings.</small>
                        </label>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            <span class="fw-bolder">Clinician Access </span><br>
                            <small class="text-muted">A Clinician can view and edit their own schedule and the notes and records of the patients assigned to them.</small>
                        </label>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            <span class="fw-bolder">Supervisor </span><br>
                            <small class="text-muted">A Supervisor can be assigned to the individual clinicians, granting them full access to the supervisee's assigned patients' notes, including the option to co-sign notes.</small>
                        </label>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            <span class="fw-bolder">Clinical Administrator </span><br>
                            <small class="text-muted">A clinical Administrator can access any patient's records, and can give other clinicians access to patient records.  This user must have the Clinician role.</small>
                        </label>
                    </div>
                </div>
                <h4 class="pt-3">Scheduling Access</h4>
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            <span class="fw-bolder">Practice Scheduler </span><br>
                            <small class="text-muted">A Schedular can schedule appointments for any clinician and add new patients.</small>
                        </label>
                    </div>
                </div>
                <h4 class="pt-3">Billing Access</h4>
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            <span class="fw-bolder">Practice Biller </span><br>
                            <small class="text-muted">User has full billing access to all patients in the practice.</small>
                        </label>
                    </div>
                </div>
            
            </div>
<hr>
            <h4 class="pt-4">User Information</h4>
            <div class="row">
                <div class="col-sm-6">

                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">Username</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">Name</label>
                            <input type="text" class="form-control" placeholder="First"
                                aria-label="First">
                        </div>
                        <div class="col pt-4">
                            <input type="text" class="form-control mt-2" placeholder="Last"
                            aria-label="Last">
                        </div>
                    </div>

                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">Email Address</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>


                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">Mobile Phone</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-sm-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                    checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Can receive text messages
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">Work Phone</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">Home Phone</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">Address 1</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-6">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">Address 2</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-6">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">Zip</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-2">
                            <input type="text" class="form-control" placeholder="Zip Code">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">City/State</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-2">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="d-block">Languages</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>English (Primary)</option>
                                <option value="1">Option</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row py-4">
                <div class="col-sm border-top pt-3">
                    <button type="button" class="btn btn-outline-dark">
                       Cancel
                     </button>
                    <button type="button" class="btn btn-outline-dark ms-2">
                       Save New User
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>