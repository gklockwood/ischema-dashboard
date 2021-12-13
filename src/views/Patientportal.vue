<template>
    <div class="patientportal">
        <div class="container py-4">
            <h2>George Lockwood, Ph.D.</h2>
            <div class="bg-light p-3 mt-4 border rounded">
                <h3 class="m-0">Documents, Inventories & Files</h3>
            </div>
            <!-- Nav tabs -->
            <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="appointments-tab" data-bs-toggle="tab" data-bs-target="#appointments"
                        type="button" role="tab" aria-controls="appointments" aria-selected="true">Appointments</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="documents-tab" data-bs-toggle="tab" data-bs-target="#documents"
                        type="button" role="tab" aria-controls="documents" aria-selected="false">Documents</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="billing-tab" data-bs-toggle="tab" data-bs-target="#billing"
                        type="button" role="tab" aria-controls="billing" aria-selected="false">Billing & Payments</button>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="appointments" role="tabpanel" aria-labelledby="appointments-tab">...</div>
                <div class="tab-pane pt-4" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                    <h3>Needs to be completed</h3>
                    <table class="table" style="table-layout: fixed;">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Date Received</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill me-2" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Contact Info</a>
                                </th>
                                <td>Dec 11, 2021</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill me-2" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Notice of Privacy Prctices</a>
                                </th>
                                <td>Nov 27, 2021</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill me-2" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Informed Consent for Pychotherapy</a>
                                </th>
                                <td>Nov 27, 2021</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill me-2" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Practive Policies</a>
                                </th>
                                <td>Nov 27, 2021</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill me-2" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Standard Intake Questionnaire Template</a>
                                </th>
                                <td>Nov 27, 2021</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill me-2" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Release of Information Consent</a>
                                </th>
                                <td>Nov 27, 2021</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill me-2" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Consent for Telehealth Consultation</a>
                                </th>
                                <td>Nov 24, 2021</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill me-2" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"/>
                                      </svg>
                                    <a href="" class="text-decoration-none">Credit Card Information</a>
                                </th>
                                <td>Oct 31, 2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane pt-4" id="billing" role="tabpanel" aria-labelledby="billing-tab">
                 <h3>Account History</h3>
                 <table class="table" style="table-layout: fixed;">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Charges</th>
                            <th scope="col">Payments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Dec 05, 2021
                            </th>
                            <td>
                                $145
                            </td>
                            <td>
                                --
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Nov 30, 2021
                            </th>
                            <td>
                                $145
                            </td>
                            <td>
                                $145
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Nov 22, 2021
                            </th>
                            <td>
                                $145
                            </td>
                            <td>
                                $145
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Oct 25, 2021
                            </th>
                            <td>
                                $145
                            </td>
                            <td>
                                $145
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Sep 25, 2021
                            </th>
                            <td>
                                $145
                            </td>
                            <td>
                                $145
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</template>