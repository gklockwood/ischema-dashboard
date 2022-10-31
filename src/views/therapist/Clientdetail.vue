<template>
    <div class="clientdetail">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-sm-12">
                    <div class="d-flex align-items-center">
                        <div class="col-sm d-flex align-items-center">
                            <h4 class="align-self-center m-0">Joe Schmo</h4>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row pt-3">

                <div class="col-sm">
                    <ul class="nav nav-tabs small" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="clientinfo-tab" data-bs-toggle="tab" data-bs-target="#clientinfo" type="button" role="tab" aria-controls="clientinfo" aria-selected="true">Client Info</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="appointments-tab" data-bs-toggle="tab" data-bs-target="#appointments" type="button" role="tab" aria-controls="appointments" aria-selected="false">Appointments</button>
                          </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="documentlibrary-tab" data-bs-toggle="tab" data-bs-target="#documentlibrary" type="button" role="tab" aria-controls="documentlibrary" aria-selected="false">Document Library</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="sentdocuments-tab" data-bs-toggle="tab" data-bs-target="#sentdocuments" type="button" role="tab" aria-controls="sentdocuments" aria-selected="false">Sent Documents</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="billing-tab" data-bs-toggle="tab" data-bs-target="#billing" type="button" role="tab" aria-controls="billing" aria-selected="false">Billing</button>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="clientinfo" role="tabpanel" aria-labelledby="clientinfo">
                            <div class="row pt-4 px-3">
                                <div class="col-md-6">
                                    <div class="row border-bottom">
                                        <div class="col-md-4 p-2">
                                            <span class="fw-bolder">Name</span>
                                        </div>
                                        <div class="col-md-8 p-2">
                                            <span>Joe Schmo</span>
                                        </div>
                                    </div>
                                    <div class="row border-bottom">
                                          <div class="col-md-4  p-2">
                                            <span class="fw-bolder">Email Address</span>
                                        </div>
                                        <div class="col-md-8 p-2">
                                            <span>joschmoy@gmail.com</span>
                                        </div>
                                    </div>
                                    <div class="row border-bottom">
                                          <div class="col-md-4 p-2">
                                            <span class="fw-bolder">Phone</span>
                                        </div>
                                        <div class="col-md-8 p-2">
                                            <span>1-222-222-2222</span>
                                        </div>
                                    </div>
                                    <div class="row border-bottom">
                                          <div class="col-md-4 p-2">
                                            <span class="fw-bolder">Address</span>
                                        </div>
                                        <div class="col-md-8 p-2">
                                            <span>1234 Example Lane</span>
                                        </div>
                                    </div>
                                    <div class="row border-bottom">
                                          <div class="col-md-4 p-2">
                                            <span class="fw-bolder">Zip</span>
                                        </div>
                                        <div class="col-md-8 p-2">
                                            <span>12345</span>
                                        </div>
                                    </div>
                                    <div class="row border-bottom">
                                          <div class="col-md-4 p-2">
                                            <span class="fw-bolder">City/State</span>
                                        </div>
                                        <div class="col-md-8 p-2">
                                            <span>Michigan</span>
                                        </div>
                                    </div>
                                    <div class="row border-bottom">
                                          <div class="col-md-4 p-2">
                                            <span class="fw-bolder">Status</span>
                                        </div>
                                        <div class="col-md-8 p-2">
                                            <span class="badge rounded-pill bg-success">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row py-4">
                                <div class="col-md-6">
                                  <button type="button" class="btn btn-outline-dark">Edit Information</button>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="appointments" role="tabpanel" aria-labelledby="appointments-tab">
                            <div class="col-sm-12 pt-4">
                                <label for="" class="fw-bold pb-2">Upcoming</label>
                                <ul class="list-group">
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">October 29, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">October 25, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">October 20, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">October 15, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-12 pt-4">
                                <label for="" class="fw-bold pb-2">Past</label>
                                <ul class="list-group">
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">October 10, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">October 5, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">September 29, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item"><a href=""><span class="fw-bold">September 25, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="documentlibrary" role="tabpanel" aria-labelledby="documentlibrary-tab">
                            Add document library here
                        </div>
                        <div class="tab-pane fade" id="sentdocuments" role="tabpanel" aria-labelledby="sentdocuments-tab">
                            Add sent documents here
                        </div>
                        <div class="tab-pane fade" id="billing" role="tabpanel" aria-labelledby="billing-tab">
                            Add billing details here
                        </div>
                      </div>
                </div>
            </div>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Progress Note</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-sm-8">
                                <div class="d-flex pb-4">
                                    <div class="d-flex-item pe-4">
                                        <span class="pe-2 fw-bolder">Patient:</span><span>Galen Lockwood</span>
                                    </div>
                                    <div class="d-flex-item">
                                        <span class="pe-2 fw-bolder">Time:</span><span>Sep 29, 2021</span>
                                        <div class="vr me-2 ms-2"></div><span>2:00 pm - 3:00 pm</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm">
                                        <select class="form-select my-2" aria-label="Default select example">
                                            <option selected>Simple Progress Note</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-sm">
                                        <button type="button" class="btn btn-outline-dark mt-2">
                                            Load Previous Note</button>
                                    </div>
                                </div>

                                <div class="row py-3">
                                    <div class="col">
                                        <label for="" class="pb-2 fw-bolder">Simple Progress Note</label>
                                        <textarea class="form-control" placeholder="Add Progress Note..."
                                            style="height: 100px"></textarea>
                                    </div>
                                    <div class="col-sm-12 text-end pt-2">
                                        <button type="button" class="btn btn-outline-dark mx-2">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                    </div>
                                </div>

                                <div class="row py-3">
                                    <div class="col-sm-12">
                                        <label for="" class="pb-2 fw-bolder">Psychotherapy Note</label>
                                        <textarea class="form-control" placeholder="Add Psychotherapy Note..."
                                            style="height: 100px"></textarea>
                                    </div>
                                    <div class="col-sm-12 text-end pt-2">
                                        <button type="button" class="btn btn-outline-dark mx-2">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                    </div>
                                </div>



                                <div class="d-flex pt-4">
                                    <button type="button" class="btn btn-outline-dark"><i
                                            class="fas fa-file-upload me-1"></i>
                                        Upload
                                        Progress Note</button>
                                </div>

                                <hr>

                                <div class="d-flex my-4 justify-content-center">
                                    <button type="button" class="btn btn-danger me-2" data-bs-dismiss="modal"><i
                                            class="fas fa-times me-1"></i> Cancel</button>
                                    <button type="button" class="btn btn-primary"><i class="fas fa-save me-1"></i>
                                        Save</button>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <h5>Appointment Info</h5>
                                <ul class="list-unstyled">
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                            <path
                                                d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Date:
                                        </span>
                                        <span class="ms-1">
                                            Dec 13, 2021 11:00am - 11:55am
                                        </span>
                                    </li>
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                                            <path
                                                d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z" />
                                            <path
                                                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Attendance:
                                        </span>
                                        <span class="ms-1">
                                            <span class="badge rounded-pill bg-primary">Show</span>
                                        </span>
                                    </li>
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Duration:
                                        </span>
                                        <span class="ms-1">
                                            55 Min
                                        </span>
                                    </li>
                                    <li class="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                        </svg>
                                        <span class="ms-1 fw-bolder">
                                            Video Type:
                                        </span>
                                        <span class="ms-1">
                                            Office
                                        </span>
                                    </li>
                                </ul>
                                <div class="pb-4">
                                    <button type="button" class="btn btn-outline-dark me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-pencil-square me-1" viewBox="0 0 16 16">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                        Edit Date & Time
                                    </button>
                                    <button type="button" class="btn btn-outline-dark">
                                        Open in Calendar
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="ms-1 bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </button>
                                </div>


                                <h5>Services</h5>
                                <div class="pb-4">
                                    <ul class="list-unstyled m-0">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                              </svg>
                                            <span class="ms-1 fw-bolder">
                                                Service Provided:
                                            </span>
                                            <span class="ms-1">
                                                Psychotherapy
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <h5>Next Appointment</h5>
                                <div class="pb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-event" viewBox="0 0 16 16">
                                        <path
                                            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>
                                    <span class="ms-1">
                                        Dec 18 2021, 1:30pm - 2:25pm
                                    </span>
                                </div>

                                <h5>Previous Appointment</h5>
                                <div class="pb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-event" viewBox="0 0 16 16">
                                        <path
                                            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>
                                    <span class="ms-1">
                                        Dec 13 2021, 1:30pm - 2:25pm
                                    </span>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>



    </div>
</template>