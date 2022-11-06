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
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="clientinfo-tab" data-bs-toggle="tab" data-bs-target="#clientinfo" type="button" role="tab" aria-controls="clientinfo" aria-selected="true">Client Info</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="appointments-tab" data-bs-toggle="tab" data-bs-target="#appointments" type="button" role="tab" aria-controls="appointments" aria-selected="false">Appointments</button>
                          </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="documents-tab" data-bs-toggle="tab" data-bs-target="#documents" type="button" role="tab" aria-controls="documents" aria-selected="false">Documents</button>
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
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">October 29, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">October 25, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">October 20, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">October 15, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-12 pt-4">
                                <label for="" class="fw-bold pb-2">Past</label>
                                <ul class="list-group">
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">October 10, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">October 5, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">September 29, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                    <li class="py-2 list-group-item text-primary cursor-pointer"><a  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fw-bold">September 25, 2022 5:00 PM - 5:55 PM,</span> 55 Min, 90837-George Lockwood</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                            <!-- Document Fitler Bar -->
                            <div class="row pt-3">
                                <div class="col-sm-12">
                                    <div class="row py-3">
                                        <div class="col-sm">
                                            <button type="button" class="btn btn-outline-dark" @click="toggleFilter"><i class="fas fa-filter me-1"></i> Filter Documents</button>
                                            <button type="button" class="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#uploaddocumentmodal"><i class="fas fa-file-upload me-1"></i> Upload Document</button>
                                            <button type="button" class="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#senddocumentmodal"><i class="fas fa-paper-plane"></i> Send Document</button>
                                        </div>
                                    </div>

          
                                        <div class="row small" v-if="showFilter">
                                            <div class="col-sm">
                                                <ul class="list-group pb-3">
                                                    <li class="list-group-item bg-light">
                                                        <label for="" class="fw-bolder">Document Cetegory</label>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check pt-2">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                            <label class="form-check-label" for="inlineCheckbox1">Consent Forms</label>
                                                        </div>
                                                        <ul class="list-group">
                                                            <li class="list-group-item border-0 pb-0">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                                    <label class="form-check-label" for="inlineCheckbox1">Consent for Telehealth Consultation</label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item border-0 pb-0">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                                    <label class="form-check-label" for="inlineCheckbox1">Notice of Privacy Practices</label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item border-0 pb-0">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                                    <label class="form-check-label" for="inlineCheckbox1">Informed Consent for Psychotherapy</label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item border-0 pb-0">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                                    <label class="form-check-label" for="inlineCheckbox1">Practice Policie</label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item border-0 pb-0">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                                    <label class="form-check-label" for="inlineCheckbox1">Notice of Privacy Practices</label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item border-0 pb-0">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                                    <label class="form-check-label" for="inlineCheckbox1">Release of Information</label>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item border-0 pb-0">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                                    <label class="form-check-label" for="inlineCheckbox1">Good Faith Estimate</label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked value="option1">
                                                            <label class="form-check-label" for="inlineCheckbox1">Intake Forms</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Assessments: Part 1</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Assessments: Part 2</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Notes</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Uploads</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm">
                                                <ul class="list-group pb-3 ">
                                                    <li class="list-group-item bg-light">
                                                        <label for="" class="fw-bolder">Types of Access</label>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Administrative</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Billing</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Clinical</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm">
                                                <ul class="list-group pb-3">
                                                    <li class="list-group-item bg-light">
                                                        <label for="" class="fw-bolder">Status of Document</label>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Pending Patient Signature</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Reviewed by Patient</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Pending Patient Submission</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Completed by Patient</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm">
                                                <ul class="list-group pb-3">
                                                    <li class="list-group-item bg-light">
                                                        <label for="" class="fw-bolder">Column selection</label>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Created</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Category</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Access</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Service</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Received</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item pb-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" checked value="option2">
                                                            <label class="form-check-label" for="inlineCheckbox2">Status</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-12 col-md-6 border-bottom py-3">
                                                <div class="row">
                                                    <div class="col-sm-12 text-center pb-2">
                                                        <label for="" class="fw-bolder">Date Range (Created)</label>
                                                    </div>
                                                    <div class="col-sm">
                                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Select start date">
                                                    </div>
                                                    <div class="col-sm">
                                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Select end date">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6 border-bottom py-3">
                                                <div class="row">
                                                    <div class="col-sm-12 text-center pb-2">
                                                        <label for="" class="fw-bolder">Date Range (Sent)</label>
                                                    </div>
                                                    <div class="col-sm">
                                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Select start date">
                                                    </div>
                                                    <div class="col-sm">
                                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Select end date">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 text-center border-bottom py-3">
                                                <button type="button" class="btn btn-outline-dark" @click="toggleFilter">Reset Filter</button>
                                            </div>
                                        </div>
                                   

                                    <div class="row py-3">
                                        <div class="col-sm-4 d-flex align-items-center">
                                            <div class="input-group">
                                                <input class="form-control border-end-0 border rounded-pill" type="search" value="Search Documents"
                                                    id="example-search-input">
                                                <span class="input-group-append">
                                                    <button class="btn btn-outline-dark bg-white border-bottom-0 border rounded-pill ms-n5"
                                                        type="button">
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                              
                               
                                
                                </div>
                                <div class="col-sm-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Created</th>
                                                <th>Category</th>
                                                <th>Author/Access</th>
                                                <th>Service</th>
                                                <th>Sent</th>
                                                <th>Received</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <!-- <tbody v-for="document in documentList" :key="document.id">
                                            <tr>
                                                <td><i class="fas fa-file-pdf"></i> {{ document.document_name }}</td>
                                                <td>{{ document.date_created }}</td>
                                                <td> {{ document.document_category }}</td>
                                                <td>{{ document.author_access }}</td>
                                                <td>{{ document.service_code }}</td>
                                                <td>{{ document.date_sent }}</td>
                                                <td>{{ document.date_received }}</td>
                                                <td>{{ document.document_status }}</td>
                                                <td></td>
                                            </tr>
                                        </tbody> -->
                                        <tbody>
                                            <tr>
                                                <td><i class="fas fa-file text-info"></i> In Love <small class="text-muted">(Word)</small></td>
                                                <td>11/2/2022</td>
                                                <td>Note</td>
                                                <td>Clinical</td>
                                                <td></td>
                                                <td>11/2/2022</td>
                                                <td>11/2/2022</td>
                                                <td>Pending Patient Signature</td>
                                                <td>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-edit"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-print"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"> <i class="fa fa-download"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-trash"></i></span>                       
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i class="fas fa-file-pdf text-pdf"></i> Notice of Privacy Practices <small class="text-muted">(PDF)</small></td>
                                                <td>11/2/2022</td>
                                                <td>Intake Form</td>
                                                <td>Administrative</td>
                                                <td></td>
                                                <td>11/2/2022</td>
                                                <td>11/2/2022</td>
                                                <td><span class="badge bg-success"><i class="fa fa-file-signature"></i> Completed by Patient</span></td>
                                                <td>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-edit"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-print"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"> <i class="fa fa-download"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-trash"></i></span>                       
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i class="fas fa-file-pdf text-pdf"></i> Good faith estimate model disclosure <small class="text-muted">(PDF)</small></td>
                                                <td>11/2/2022</td>
                                                <td>Intake Form</td>
                                                <td>Administrative</td>
                                                <td></td>
                                                <td>11/2/2022</td>
                                                <td>11/2/2022</td>
                                                <td>Reviewed by Patient</td>
                                                <td>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-edit"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-print"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"> <i class="fa fa-download"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-trash"></i></span>                                            
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i class="fas fa-file text-info"></i> Psychotherapy Progress Note <small class="text-muted">(Txt)</small></td>
                                                <td>10/31/2022</td>
                                                <td>Intake Form</td>
                                                <td>Administrative</td>
                                                <td>90834</td>
                                                <td></td>
                                                <td></td>
                                                <td>Pending Patient Signature</td>
                                                <td>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-edit"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-print"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"> <i class="fa fa-download"></i></span>
                                                    <span class="p-2 text-muted cursor-pointer"><i class="fa fa-trash"></i></span>                                          
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="billing" role="tabpanel" aria-labelledby="billing-tab">
                          
                                <div class="row pt-2">
                                    <div class="col-sm-3 d-flex align-items-center">
                                        <div class="input-group">
                                            <input class="form-control border-end-0 border rounded-pill" type="search" value="Search Transactions"
                                                id="example-search-input">
                                            <span class="input-group-append">
                                                <button class="btn btn-outline-dark bg-white border-bottom-0 border rounded-pill ms-n5"
                                                    type="button">
                                                    <i class="fa fa-search"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 py-3">
                                        <div class="dropdown d-inline me-2">
                                            <button class="btn btn-outline-dark dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                                  </svg>
                                                11/28/2021 - 12/28/2021
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown d-inline me-2">
                                            <button class="btn btn-outline-dark dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                                All Types
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <table class="table">
                                            <thead>
                                              <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Client</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Net</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Fee</th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th scope="row"><button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#payoutdetails">Details</button></th>
                                                <td>12/12/2021</td>
                                                <td></td>
                                                <td>Payout</td>
                                                <td class="text-muted">($378.19 CR) USD</td>
                                                <td class="text-muted">(378.19 CR) USD</td>
                                                <td></td>
                                                <td><button class="btn btn-outline-dark">Refund</button></td>
                                              </tr>
                                              <tr>
                                                <th scope="row"><button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#paymentdetails">Details</button></th>
                                                <td>12/08/2021</td>
                                                <td></td>
                                                <td>
                                                    Charge<br>
                                                    <small class="text-muted">Visa (...3347)</small>
                                                </td>
                                                <td>($378.19 CR) USD</td>
                                                <td>(390.00 CR) USD</td>
                                                <td>11.81 USD</td>
                                                <td><button class="btn btn-outline-dark">Refund</button></td>
                                              </tr>
                                              <tr>
                                                <th scope="row"><button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#paymentdetails">Details</button></th>
                                                <td>11/09/2021</td>
                                                <td></td>
                                                <td>
                                                    Charge<br>
                                                    <small class="text-muted">MasterCard (...2835)</small>
                                                </td>
                                                <td>($964.44 CR) USD</td>
                                                <td>(994.07 CR) USD</td>
                                                <td>2.02 USD</td>
                                                <td><button class="btn btn-outline-dark">Refund</button></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                    </div>
                                </div>
                            
                    
                    
                    
                            <!-- Payment Details Modal -->
                        <div class="modal fade" id="paymentdetails" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Transaction Details</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <h4>Charge on 12/08/2021 for John Appleseed</h4>
                                    </div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Payment ID</span></div>
                                    <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Statement descriptor </span></div>
                                    <div class="col-sm-6"><span>GEORGE LOCKWOOD, PH.D.</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Amount </span></div>
                                    <div class="col-sm-6"><span> $390</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Fee </span></div>
                                    <div class="col-sm-6"><span>   $11.81 </span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Net </span></div>
                                    <div class="col-sm-6"><span>$378.19</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Date </span></div>
                                    <div class="col-sm-6"><span>12/08/2021 8:50 pm</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Payout  </span></div>
                                    <div class="col-sm-6"><span>12/12/2021 View Payout</span></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm pt-4">
                                        <h4>Card Details</h4>
                                    </div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Payment ID</span></div>
                                    <div class="col-sm-6"><span> card_1I41uAKgTRVBkzpcWZuPMm8e</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Payment ID</span></div>
                                    <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Name </span></div>
                                    <div class="col-sm-6"><span>John Appleseed</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Number </span></div>
                                    <div class="col-sm-6"><span>•••• 3347</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">CVC check </span></div>
                                    <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Not provided</span></div>
                                    <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
                                </div>
                                <div class="row py-2 border-bottom">
                                    <div class="col-sm-6"><span class="fw-bolder">Expires </span></div>
                                    <div class="col-sm-6"><span>2 / 2026</span></div>
                                </div>
                                <div class="row py-2">
                                    <div class="col-sm-6"><span class="fw-bolder">Type </span></div>
                                    <div class="col-sm-6"><span>Visa</span></div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    
                    
                      
                            <!-- Payment Details Modal -->
                            <div class="modal fade" id="payoutdetails" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Transaction Details</h5>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h4>Payout on 12/11/2021</h4>
                                        </div>
                                        <div class="col-sm-6">
                                            <span class="badge bg-success">Paid</span>
                                        </div>
                                    </div>
                                    <div class="row py-2 border-bottom">
                                        <div class="col-sm-6"><span class="fw-bolder">Payout ID</span></div>
                                        <div class="col-sm-6"><span>po_1K5gpJAKQ6vC73SAkZh1uI8C</span></div>
                                    </div>
                                    <div class="row py-2 border-bottom">
                                        <div class="col-sm-6"><span class="fw-bolder">Initiated  </span></div>
                                        <div class="col-sm-6"><span>  12/11/2021 </span></div>
                                    </div>
                                    <div class="row py-2 border-bottom">
                                        <div class="col-sm-6"><span class="fw-bolder">Est. Arrival   </span></div>
                                        <div class="col-sm-6"><span> 12/12/2021 </span></div>
                                    </div>
                                    <div class="row py-2 border-bottom">
                                        <div class="col-sm-6"><span class="fw-bolder">Description  </span></div>
                                        <div class="col-sm-6"><span> Stripe payout</span></div>
                                    </div>
                                    <div class="row py-2 border-bottom">
                                        <div class="col-sm-6"><span class="fw-bolder">Amount  </span></div>
                                        <div class="col-sm-6"><span>$378.19 CR</span></div>
                                    </div>
                                    <div class="row py-2 border-bottom">
                                        <div class="col-sm-6"><span class="fw-bolder"></span></div>
                                        <div class="col-sm-6"><span><a href="">Transactions</a> </span></div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
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



        <!-- Upload Document Modal Start -->
        <div class="modal fade" id="uploaddocumentmodal" tabindex="-1" aria-labelledby="uploaddocumentmodal"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Document Upload</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <input class="form-control" type="file" id="formFile">
                  </div>
                <div class="image-upload-wrap text-center pt-4 px-4 pb-3 border">
                      <p>Drag and drop a files</p>
                </div>
  
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-success">Upload</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Upload Document Modal End -->



        <!-- Send Document Modal Start -->
        <div class="modal fade" id="senddocumentmodal" tabindex="-1" aria-labelledby="senddocumentmodal"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Send Document</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-6">
                        <label for="" class="fw-bolder">Preloaded Practice Documents</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label for="" class="fw-bolder">Custom Documents</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>  
                    </div>
                    <VSelect
                    v-model="selected"
                    :options="countries"
                  />
                </div>
                <div class="row pt-3">
                    <div class="col-sm">
                        <label for="" class="fw-bolder">Selected Documents:</label>
                        <ul class="list-group">
                            <li class="py-2 list-group-item"> Example Document  <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-x-lg"
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd"
                                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg></li>
                            <li class="py-2 list-group-item">Example Document <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-x-lg"
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd"
                                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg></li>
                        </ul>
                    </div>
                </div>
  
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-success">Send</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Send Document Modal End -->


</template>

<script>
    import documentData from '../../data/document-data.js';

    import {
        ref
    } from 'vue';

    export default {
        setup() {
            const documentList = documentData;
            const showFilter = ref(false);
            
            function toggleFilter() {
                showFilter.value = ! showFilter.value;
            }


            return {
                documentList,
                showFilter,
                toggleFilter
            }
        }
    };
</script>