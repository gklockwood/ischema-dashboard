<template>
    <div class="adminaccountativity">
        <div class="container-fluid py-4">
            <h1>Account Activity</h1>
            <div class="row pt-4">
                <div class="col-sm">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <button class="nav-link active" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history" type="button" role="tab" aria-controls="nav-home" aria-selected="true">History</button>
                          <button class="nav-link" id="nav-signin-tab" data-bs-toggle="tab" data-bs-target="#nav-signin" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sign In Events</button>
                          <button class="nav-link" id="nav-hippa-tab" data-bs-toggle="tab" data-bs-target="#nav-hippa" type="button" role="tab" aria-controls="nav-hippa" aria-selected="false">HIPPAA Audit Log</button>
                        </div>
                      </nav>
                      <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-history" role="tabpanel" aria-labelledby="nav-history">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-4 py-3">
                                    <div class="input-group">
                                        <input class="form-control border-end-0 border rounded-pill" type="search"
                                            value="Search" id="example-search-input">
                                        <span class="input-group-append">
                                            <button
                                                class="btn btn-outline-dark bg-white border-bottom-0 border rounded-pill ms-n5"
                                                type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-4 py-3">
                                    <button class="btn btn-outline-dark me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                                            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                          </svg>
                                        All Events
                                    </button>
                                    <button class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                          </svg>
                                        All Time
                                    </button>
                                </div>
                            </div>
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Event</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">12/09/2021</th>
                                    <td>1:04 pm (EST)</td>
                                    <td>
                                        You confirmed an appointment on 01/07/2022 for George Lockwood
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                        <div class="tab-pane fade" id="nav-signin" role="tabpanel" aria-labelledby="nav-signin">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-4 py-3">
                                    <button class="btn btn-outline-dark me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                                            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                          </svg>
                                        All Events
                                    </button>
                                    <button class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                          </svg>
                                        All Time
                                    </button>
                                </div>
                            </div>
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Event</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">12/09/2021</th>
                                        <td>2:15 pm (EST)</td>
                                        <td>
                                            You signed out succesfully to eSchemaTherapy web app
                                        </td>
                                      </tr>
                                  <tr>
                                    <th scope="row">12/09/2021</th>
                                    <td>1:04 pm (EST)</td>
                                    <td>
                                        You signed in succesfully to eSchemaTherapy web app
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                        <div class="tab-pane fade" id="nav-hippa" role="tabpanel" aria-labelledby="nav-hippa">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-4 py-3">
                                    <div class="input-group">
                                        <input class="form-control border-end-0 border rounded-pill" type="search"
                                            value="Search" id="example-search-input">
                                        <span class="input-group-append">
                                            <button
                                                class="btn btn-outline-dark bg-white border-bottom-0 border rounded-pill ms-n5"
                                                type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-4 py-3">
                                    <button class="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                          </svg>
                                        All Time
                                    </button>
                                </div>
                            </div>
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Event</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">12/09/2021</th>
                                        <td>2:15 pm (EST)</td>
                                        <td>
                                            You viewed the overview page for Johny Johnson
                                        </td>
                                      </tr>
                                  <tr>
                                    <th scope="row">12/09/2021</th>
                                    <td>1:04 pm (EST)</td>
                                    <td>
                                        You viewed the overview page for Johny Johnson
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>