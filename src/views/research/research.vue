<template>
    <div class="research">
        <div class="container py-4">
            <h1>eSchemaTherapy<span class="text-muted">.Research</span></h1>
            <div class="row">
                <div class="col-sm-12 py-3">
                    <h5 for="" class="fw-bolder">Forms</h5>
                    <ul class="list-group pt-3">
                        <li class="list-group-item bg-light fw-bolder">Assessments</li>
                        <li class="list-group-item">
                            <span class="link-primary cursor-pointer" data-bs-toggle="modal"
                                data-bs-target="#formpreview">YSQ</span>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-link" data-bs-toggle="modal"
                                        data-bs-target="#sharesurvey"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-cog" data-bs-toggle="modal"
                                        data-bs-target="#surveysettings"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-chart-bar" data-bs-toggle="modal"
                                        data-bs-target="#surveysettings"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <span class="link-primary cursor-pointer" data-bs-toggle="modal"
                                data-bs-target="#formpreview">YSQ</span>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-link" data-bs-toggle="modal"
                                        data-bs-target="#sharesurvey"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-cog" data-bs-toggle="modal"
                                        data-bs-target="#surveysettings"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <span class="link-primary cursor-pointer" data-bs-toggle="modal"
                                data-bs-target="#formpreview">YSQ</span>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-link" data-bs-toggle="modal"
                                        data-bs-target="#sharesurvey"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-cog" data-bs-toggle="modal"
                                        data-bs-target="#surveysettings"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <span class="link-primary cursor-pointer" data-bs-toggle="modal"
                                data-bs-target="#formpreview">YSQ</span>

                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-link" data-bs-toggle="modal"
                                        data-bs-target="#sharesurvey"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-cog" data-bs-toggle="modal"
                                        data-bs-target="#surveysettings"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <span class="link-primary cursor-pointer" data-bs-toggle="modal"
                                data-bs-target="#formpreview">YSQ</span>

                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-link" data-bs-toggle="modal"
                                        data-bs-target="#sharesurvey"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-cog" data-bs-toggle="modal"
                                        data-bs-target="#surveysettings"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <span class="link-primary cursor-pointer" data-bs-toggle="modal"
                                data-bs-target="#formpreview">YSQ</span>

                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-link" data-bs-toggle="modal"
                                        data-bs-target="#sharesurvey"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-cog" data-bs-toggle="modal"
                                        data-bs-target="#surveysettings"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>




    <!-- Share Form Modal Start -->
    <div class="modal fade" id="sharesurvey" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Share Survey</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm">
                            <label for="" class="fw-bolder pb-2">Shareable link</label>
                            <div class="input-group">
                                <input type="text" class="form-control"
                                    placeholder="eschematherapy.com/eschemaresearch/examplesurvey">
                                <span class="input-group-text"><i class="fa fa-copy" data-bs-toggle="modal"
                                        data-bs-target="#sharesurvey"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Share Form Modal End -->



    <!-- Servey Settings Modal Start -->
    <div class="modal fade" id="surveysettings" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Survey Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <label for="" class="fw-bolder">Survey Start Date</label>
                            <input type="text" class="form-control" placeholder="Select survey start date">
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <label for="" class="fw-bolder">Survey End Date</label>
                            <input type="text" class="form-control" placeholder="Select survey end date">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Servey Settings Modal End -->




    <!-- Preview Form Modal Start -->
    <div class="modal fade" id="formpreview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl" style="z-index:2000;position: relative;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Form Preview</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container py-4">
                        <h3>Schema:Mode Conceptualization and Treatment Plan-2. Current Level of Functioning</h3>

                        <b class="d-block pt-4">Current Level of Functioning in Major Life Areas</b>
                        <p>
                            Rate the patient’s current functioning for each of the 10 life areas in the table below.
                            (1=Not
                            Functional/Very Low, 6=Very Good or Excellent Functioning). Below it you can clarify your
                            rationale for
                            each rating in behavioral terms. If the patient’s prior level of functioning was
                            significantly different
                            from the current level, it may be helpful to clarify this too. Information about how to rate
                            these areas
                            can be found in the accompanying guide.
                        </p>

                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Occupational or School Performance Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>

                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Intimate, Romantic, Longer-Term Relationships
                                Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>


                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Family Relationships Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>


                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Friends & Other Social Relationships Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>

                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Solitary Functioning & Time Alone Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>



                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Play/Hobbies/Creative Outlets Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>

                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Exercise Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>

                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Nutrition Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>


                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Sleep Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>

                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Mediation/Yoga/Contemplative Practice/Spirituality
                                Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>

                        <div class="col-sm-12 py-4">
                            <label class="form-label fw-bolder">Connection with Nature Rating:</label>
                            <form class="form cf">
                                <section class="plan cf ">
                                    <input type="radio" name="radio1" id="11" value="1"><label
                                        class="six col shadow-sm rounded-pill" for="11">1</label>
                                    <input type="radio" name="radio1" id="22" value="2"><label
                                        class="six col shadow-sm rounded-pill" for="22">2</label>
                                    <input type="radio" name="radio1" id="33" value="3"><label
                                        class="six col shadow-sm rounded-pill" for="33">3</label>
                                    <input type="radio" name="radio1" id="44" value="4"><label
                                        class="six col shadow-sm rounded-pill" for="44">4</label>
                                    <input type="radio" name="radio1" id="55" value="5"><label
                                        class="six col shadow-sm rounded-pill" for="55">5</label>
                                    <input type="radio" name="radio1" id="66" value="6"><label
                                        class="six col shadow-sm rounded-pill" for="66">6</label>
                                </section>
                            </form>
                            <div class="pt-3">
                                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
                            </div>
                        </div>

                    </div>

                    <div class="container my-4">
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <button type="button" class="btn btn-danger m-2">Reset</button>
                                <button type="button" class="btn btn-primary m-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Preview Form Modal End -->




</template>

<style scoped>
    .form label {
        font-size: 18px;
        background: white;
        border: solid 1px black;

    }

    .form label:hover {
        color: black !important;
    }
</style>