<template>
    <div class="demographicsform">
        <div class="container py-4">
            <h2 class="pb-3">Intake Form</h2>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2 fw-bolder">First Name *</label>
                            <input type="text" class="form-control" aria-label="First name">
                        </div>

                        <div class="col">
                            <label for="" class="pb-2 fw-bolder">Last Name *</label>
                            <input type="text" class="form-control" aria-label="Last name">
                        </div>
                    </div>

                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2 fw-bolder">Middle Name</label>
                            <input type="text" class="form-control" aria-label="Last name">
                        </div>
                        <div class="col">
                            <label for="" class="pb-2 fw-bolder">Prefered Name</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>


                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm">
                    <label class="fw-bolder pt-4 d-block">Phone *</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="(###) ###-####">
                        </div>
                        <div class="col-sm-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Mobile</option>
                                <option value="1">Personal</option>
                                <option value="1">Home</option>
                            </select>
                        </div>
                        <div class="col-sm-1">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Voice Messages Ok
                                </label>
                            </div>
                        </div>
                        <div class="px-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Text Messages Ok
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm pt-4">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                Add Number
                            </button>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label class="fw-bolder pt-4 d-block">Email *</label>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="Email...">
                        </div>
                        <div class="col-sm-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Personal Email</option>
                                <option value="1">Work Email</option>
                            </select>
                        </div>
                        <div class="col-sm-1">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    It is alright to send voice messages to this number
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm pt-4">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                Add Email
                            </button>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-sm pb-3">
                    <h4 class="pt-4">Address</h4>
                    <div class="row g-3 py-3">
                        <div class="col-sm-3">
                            <label for="" class="pb-2 fw-bolder">Address Line 1 *</label>
                            <input type="text" class="form-control" placeholder="Street Address">
                        </div>
                        <div class="col-sm-3">
                            <label for="" class="pb-2 fw-bolder">Address Line 2</label>
                            <input type="text" class="form-control" placeholder="Unit/Apt #">
                        </div>
                        <div class="col-sm-1">
                            <label for="" class="pb-2 fw-bolder">State *</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>CA</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                        <div class="col-sm-1">
                            <label for="" class="pb-2 fw-bolder">ZIP *</label>
                            <input type="text" class="form-control" placeholder="12345">
                        </div>
                        <div class="col-sm-1 pt-2">
                            <button type="button" class="btn btn-outline-dark mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
            <div class="row">
                <div class="col-sm py-3">
                    <label for="" class="pb-2 fw-bolder">Birth Date *</label>
                    <div class="d-flex">
                        <div>
                            <select class="form-select">
                                <option selected>MM</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                        <div class="px-1">
                            <select class="form-select">
                                <option selected>DD</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                        <div>
                            <select class="form-select">
                                <option selected>YYYY</option>
                                <option value="1">option</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>



            <div class="d-flex pt-4">
                <div class="pr-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Female
                        </label>
                    </div>
                </div>
                <div class="px-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Male
                        </label>
                    </div>
                </div>
                <div class="px-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label" for="flexCheckChecked">
                            Prefer not to say
                        </label>
                    </div>
                </div>
            </div>


            <div class="row g-3 py-3">
                <div class="col-sm-6">
                    <label for="" class="pb-2 fw-bolder">Gender Identity</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Provide your gender identity, pronouns, and/or any related information you would like to share."></textarea>
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

            <!-- <div class="row pt-3">
                <div class="col-sm">
                    <label class="fw-bolder d-block pb-3">Race & Ethnicity</label>
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
            </div> -->


            <div class="row g-3 py-3">
                <div class="col-sm-3">
                    <label class="pb-2 fw-bolder">Relationship Status</label>
                    <select class="form-select">
                        <option selected>Not Selected</option>
                        <option value="1">Single</option>
                        <option value="1">Married</option>
                        <option value="1">Divorced</option>
                        <option value="1">Domestic Partnership</option>
                        <option value="1">In Long-term Relationship</option>
                        <option value="1">Separated</option>
                        <option value="1">Widowed</option>
                    </select>
                </div>
            </div>

            <div class="row g-3 py-3">
                <div class="col-sm-3">
                    <label class="pb-2 fw-bolder">Employment Status</label>
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
            <hr>
            <div class="row py-3">
                <div class="col-sm">
                    <h4>Emergency Contact</h4>
                    <div class="row g-3 py-3">
                        <div class="col">
                            <label for="" class="pb-2 fw-bolder">First Name</label>
                            <input type="text" class="form-control" aria-label="First name">
                        </div>

                        <div class="col">
                            <label for="" class="pb-2 fw-bolder">Last Name</label>
                            <input type="text" class="form-control" aria-label="Last name">
                        </div>
                    </div>
                    <div class="row g-3 pb-3">
                        <div class="col-sm-3">
                            <label class="pb-2 fw-bolder">Relationship</label>
                            <select class="form-select">
                                <option selected>Not Selected</option>
                                <option value="1">Spouse</option>
                                <option value="1">Parent</option>
                                <option value="1">Gaurdian</option>
                                <option value="1">Friend</option>
                                <option value="1">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block">Phone</label>
                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" placeholder="(###) ###-####">
                                </div>
                                <div class="col-sm-2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Mobile</option>
                                        <option value="1">Personal</option>
                                        <option value="1">Home</option>
                                    </select>
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
                            <div class="d-flex">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Voice Messages Ok
                                        </label>
                                    </div>
                                </div>
                                <div class="px-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Text Messages Ok
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label class="fw-bolder pt-4 d-block">Email</label>
                            <div class="row g-3 py-3">
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" placeholder="Email...">
                                </div>
                                <div class="col-sm-2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Personal Email</option>
                                        <option value="1">Work Email</option>
                                    </select>
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
                            <div class="d-flex">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            It is alright to send voice messages to this number
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
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
</template>