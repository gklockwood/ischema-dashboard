<template>
    <div class="clientappointmentconfirmation">
        <div class="container-fluid pt-4">
            <h1>Appointment Summary</h1>
            <div class="px-3 pt-4">
                <div class="row">
                    <div class="col-sm text-center">
                        <h3>Thank you, (Name goes here)</h3>
                        <small class="text-muted">We will send you a confirmation email after your appointment has been
                            confirmed.</small>
                    </div>
                </div>
                <div class="row pt-4">
                    <div class="col-sm-4 d-flex align-items-sm-center justify-content-center shadow-sm border rounded-3">
                        <ul class="list-unstyled p-4 m-0">
                            <li class="py-2">
                                <span class="fw-bolder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-check me-1" viewBox="0 0 16 16">
                                        <path
                                            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>
                                    When
                                </span>
                                <span class="d-block ms-4">Thur, Jan 06, 2022</span>
                                <span class="d-block ms-4">8:00 am - 8:55 am EST</span>
                            </li>
                            <li class="py-2">
                                <span class="fw-bolder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-check me-1" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                    With
                                </span>
                                <span class="d-block ms-4">Thur, Jan 06, 2022</span>
                                <span class="d-block ms-4">8:00 am - 8:55 am EST</span>
                            </li>
                            <li class="py-2">
                                <span class="fw-bolder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-check me-1" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    </svg>
                                    What
                                </span>
                                <span class="d-block ms-4">Thur, Jan 06, 2022</span>
                                <span class="d-block ms-4">8:00 am - 8:55 am EST</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-4 d-flex align-items-sm-center justify-content-center">
                        <div class="shadow-sm border rounded-3">
                            <ul class="list-unstyled p-4 m-0">
                                <li class="py-2">
                                    <span class="fw-bolder">
                                        <i class="fas fa-map-marker-alt me-2"></i>
                                        Where
                                    </span>
                                    <span class="d-block ms-4">Video Office</span>
                                    <span class="d-block ms-4">Vieo link will be emailed to you 10 minutes before</span>
                                    <span class="d-block ms-4">(222) 222-2222</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-sm-4 shadow-sm border rounded pt-3  d-flex align-items-sm-center justify-content-center">
                        <div class="text-center">
                            <button class="btn btn-outline-success">
                                Add to Calendar
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-plus ms-1" viewBox="0 0 16 16">
                                    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                  </svg>
                            </button>
                            <div class="row py-3">
                                <div class="col-sm">
                                    <button class="btn btn-outline-dark btn-sm">
                                        Google
                                    </button> 
                                    <button class="btn btn-outline-dark btn-sm mx-2">
                                        Apple
                                    </button> 
                                    <button class="btn btn-outline-dark btn-sm">
                                        Outlook
                                    </button> 
                                </div>
                            </div>
                            <button class="btn btn-outline-danger">
                               Cancel Appointment
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x ms-1" viewBox="0 0 16 16">
                                <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                              </svg>
                            </button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>