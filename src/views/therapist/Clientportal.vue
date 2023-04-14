<template>
    <div class="clientportal pb-4">
        <div class="container py-4">
            <h2>Document Library</h2>
            <div class="row">
                <div class="col-sm-12 col-md-6 py-3">
                    <h5 for="" class="fw-bolder">Core Documents</h5>
                    <ul class="list-group card shadow border-0 mt-4">
                        <li class="list-group-item card-title text-white bg-primary mb-0">Consent Documents</li>
                        <li class="list-group-item">
                            <a href="">Consent for Telehealth Consultation</a>       
                                <div class="btn-group ps-2 float-end">
                                    <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                    <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                                </div>
                        </li>
                        <li class="list-group-item"><a href="">Notice of Privacy Practices</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item"><a href="">Informed Consent for Psychotherapy</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                          <li class="list-group-item"><a href="">Practice Policies</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                
                    </ul>
                    <ul class="list-group card shadow border-0 mt-4">
                        <li class="list-group-item card-title text-white bg-primary mb-0">Intake Forms</li>
                        <li class="list-group-item">
                            <a href="">Intake Demographics</a>       
                                <div class="btn-group ps-2 float-end">
                                    <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                    <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                                </div>
                        </li>
                        <li class="list-group-item"><a href="">Intake Questionnaire, part 1</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="list-group card shadow border-0 mt-4">
                        <li class="list-group-item card-title text-white bg-primary mb-0">Assessments</li>
                        <li class="list-group-item"><a href="">YSQ</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item"><a href="">YPSQ</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item"><a href="">YPI-R3</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item"><a href="">PPSI</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item"><a href="">PHQ-9</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                        <li class="list-group-item"><a href="">GAD-7</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-12 col-md-6 py-3">
                    <div class="row">
                        <div class="col-sm-6">
                            <h5 for="" class="fw-bolder">My Uploads</h5>
                        </div>
                        <div class="col-sm-6 text-end">
                            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal">Upload Document</button>
                        </div>
                    </div>
                    <ul class="list-group card shadow border-0 mt-3">
                        <li class="list-group-item">
                            <a href="#">Custom Document Example</a>
                            <div class="btn-group ps-2 float-end">
                                <span class="btn btn-sm"><i class="fa fa-edit"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-print"></i></span>
                                <span class="btn btn-sm"> <i class="fa fa-download"></i></span>
                                <span class="btn btn-sm"><i class="fa fa-trash"></i></span>                      
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="row pt-4">
                <div class="col-sm">
                    <div class="row">
                        <div class="col-sm-6 text-start">
                            <h4>Consent Documents</h4>
                        </div>
                        <div class="col-sm-6 text-end">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                                    <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                  </svg>
                                Add Consent Document
                            </button>
                        </div>
                    </div>
                    <table class="table" style="table-layout: fixed;">
                        <thead>
                            <tr>
                                <th scope="col">Names</th>
                                <th scope="col">Default</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Conest for Telehealth Consultation</th>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Yes
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-v-rule d-flex">
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                                View
                                            </button>

                                        </span>
                                        <div class="vr"></div>
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
                                                </svg>
                                                Edit
                                            </button>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Notice of Privacy Practices</th>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Yes
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-v-rule d-flex">
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                                View
                                            </button>

                                        </span>
                                        <div class="vr"></div>
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
                                                </svg>
                                                Edit
                                            </button>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Informed Consent for Psychotherapy</th>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Yes
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-v-rule d-flex">
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                                View
                                            </button>

                                        </span>
                                        <div class="vr"></div>
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
                                                </svg>
                                                Edit
                                            </button>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Practive Policies</th>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Yes
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-v-rule d-flex">
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                                View
                                            </button>

                                        </span>
                                        <div class="vr"></div>
                                        <span class="mx-1">
                                            <button type="button" class="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
                                                </svg>
                                                Edit
                                            </button>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> -->
        </div>
    </div>
</template>