<template>
    <div class="adminstaff">
        <div class="container py-4">

            <div class="row">
                <div class="col-sm-6 text-start">
                    <h1>Staff</h1>
                </div>
                <div class="col-sm-6  d-flex align-items-center justify-content-end">
                    <router-link to="/admin/Adminaddnewuser" class="btn btn-outline-dark mt-3 shadow-sm">
                        New User
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg ms-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                          </svg>
                    </router-link>
                </div>
            </div>
            <table class="table" style="table-layout: fixed;">
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Mobile Phone</th>
                        <th scope="col">Home Phone</th>
                        <th scope="col">Type of Clinician</th>
                        <th scope="col">License Exp</th>
                        <th scope="col">Roles</th>
                        <th scope="col">2FA</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><a href="" class="text-primary text-decoration-none fw-lighter">Davies,
                                Chris</a></th>
                        <td><a href="" class="text-primary text-decoration-none">(222) 222-2222</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Practive Admin</td>
                        <td>No</td>
                        <td>
                            <a href="" class="text-primary text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                  </svg>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><a href="" class="text-primary text-decoration-none fw-lighter">Lockwood,
                                Cameron</a></th>
                        <td><a href="" class="text-primary text-decoration-none">(222) 222-2222</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Practive Admin</td>
                        <td>No</td>
                        <td>
                            <a href="" class="text-primary text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                  </svg>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><a href="" class="text-primary text-decoration-none fw-lighter">Lockwood,
                                George</a></th>
                        <td><a href="" class="text-primary text-decoration-none">(222) 222-2222</a></td>
                        <td></td>
                        <td>Psychologist</td>
                        <td>5/30/2022</td>
                        <td>Practive Admin, Clinical Admin, Scheduler, Biller</td>
                        <td>Yes</td>
                        <td>
                            <a href="" class="text-primary text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                  </svg>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><a href="" class="text-primary text-decoration-none fw-lighter">Lockwood,
                                Juliana</a></th>
                        <td><a href="" class="text-primary text-decoration-none">(222) 222-2222</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Clinician</td>
                        <td>No</td>
                        <td>
                            <a href="" class="text-primary text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                  </svg>
                            </a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>