<template>
    <div class="demographicsform">
        <div class="container py-4">
            <h2 class="pb-3">Demographics Form</h2>
            <div class="row">
                <div class="col-sm-12">
                    <label class="fw-bolder pt-4">Name</label>

                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">First Name</label>
                            <input type="text" class="form-control" placeholder="Client First Name"
                                aria-label="First name">
                        </div>
                        <div class="col">
                            <label for="" class="pb-2">Middle Name</label>
                            <input type="text" class="form-control" placeholder="Client Middle Name"
                                aria-label="Last name">
                        </div>
                    </div>

                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">Last Name</label>
                            <input type="text" class="form-control" placeholder="Client Last Name"
                                aria-label="Last name">
                        </div>
                        <div class="col">
                            <label for="" class="pb-2">Suffix</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2">Preferred Name</label>
                            <input type="text" class="form-control" aria-label="Last name">
                            <small class="text-muted">
                                Used in place of a first name.
                            </small>
                        </div>
                        <div class="col">
                        </div>
                    </div>

                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm">
                    <label class="fw-bolder pt-4 d-block">Phone</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="(269) 267-1964">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="fw-bolder pt-4 d-block">Email</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="glockwood@chartermi.net">
                        </div>
                        <div class="col-sm-1">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="fw-bolder pt-4">Address</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <label for="" class="pb-2">Street</label>
                            <input type="text" class="form-control" placeholder="123 Main St">
                        </div>
                        <div class="col-sm-1">
                            <label for="" class="pb-2">State</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>CA</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                        <div class="col-sm-1">
                            <label for="" class="pb-2">ZIP</label>
                            <input type="text" class="form-control" placeholder="12345">
                        </div>
                        <div class="col-sm-1 pt-2">
                            <button type="button" class="btn btn-outline-dark mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm">
                    <label for="" class="pb-2">Date of Birth</label>
                    <div class="d-flex">
                        <div>
                            <select class="form-select">
                                <option selected>March</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                        <div class="px-1">
                            <select class="form-select">
                                <option selected>7</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                        <div>
                            <select class="form-select">
                                <option selected>1991</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                    </div>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <label for="" class="pb-2">Sex</label>
                            <select class="form-select">
                                <option selected>Prefer not to say</option>
                                <option value="1">Male</option>
                                <option value="1">Female</option>
                                <option value="1">Intersex</option>
                                <option value="1">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row g-3 py-3">
                        <div class="col-sm-6">
                            <label for="" class="pb-2">Gender Identity</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <small class="text-muted">Add client's gender identity & pronouns.</small>
                        </div>
                    </div>


                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <label class="pb-2">Relationship Status</label>
                            <select class="form-select">
                                <option selected>Not Selected</option>
                                <option value="1">Single</option>
                                <option value="1">Married</option>
                                <option value="1">Divorced</option>
                                <option value="1">Partnership</option>
                                <option value="1">In Long-term Relationship</option>
                                <option value="1">Separated</option>
                                <option value="1">Widowed</option>
                            </select>
                        </div>
                        <div class="col-sm-3">
                            <label class="pb-2">Employment Status</label>
                            <select class="form-select">
                                <option selected>Not Selected</option>
                                <option value="1">Full-Time</option>
                                <option value="1">Part-Time</option>
                                <option value="1">Self-Employed</option>
                                <option value="1">Unamployed</option>
                                <option value="1">Full-time Student</option>
                                <option value="1">Part-time Student</option>
                                <option value="1">Retired</option>
                                <option value="1">Homemaker</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block pb-3">Race & Ethnicity</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    American Indian or Alaska Native
                                </label>
                            </div>
                            <div class="form-check py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Asian
                                </label>
                            </div>
                            <div class="form-check py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Black or African American
                                </label>
                            </div>
                            <div class="form-check py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Hispanic or Latinx
                                </label>
                            </div>
                            <div class="form-check py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Middle Eastern or North African
                                </label>
                            </div>
                            <div class="form-check py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Native Hawaiian or Other Pacific Islander
                                </label>
                            </div>
                            <div class="form-check py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    White
                                </label>
                            </div>
                            <div class="form-check py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Race or ethnicity not listed
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr>
                
                    <div class="row py-4">
                        <div class="col-sm">
                            <button type="button" class="btn btn-danger">
                                Cancel
                            </button>
                            <button type="button" class="btn btn-primary ms-2">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>