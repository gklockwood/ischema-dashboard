<template>
    <div class="clientlist">
        <div class="container py-4">
            <h1>Client List</h1>
            

            <div class="row my-3">
                <div class="col-sm col-sm-6 py-3">
                    <div class="input-group">
                        <input class="form-control border-end-0 border rounded-pill" type="search" value="Search Clients"
                            id="example-search-input">
                        <span class="input-group-append">
                            <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                                type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-sm-6 py-3">
                    <div class="dropdown d-inline">
                        <button class="btn btn-light dropdown-toggle  shadow-sm" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-filter me-1"></i> Filter Clients
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#"><i class="fas fa-users me-1"></i> All Clients </a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-user-friends me-1"></i> Couples</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-user-slash me-1"></i> Inactive Clients</a></li>
                        </ul>
                    </div>
                    <div class="dropdown d-inline ps-2">
                        <button class="btn btn-light dropdown-toggle shadow-sm" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-sort me-1"></i> Sort By: Last Name
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#"><i class="fas fa-sort-numeric-down me-1"></i>  First Name</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-sort-numeric-down-alt me-1"></i> Last Name</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-clock me-1"></i>  Recently Added</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <div class="card p-3 my-3 shadow-sm" v-for="client in clientList" :key="client.id"
                :therapist-name="client.first_name" :id="client.id">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-sm-12">
                                <h5 class="fw-normal">Name</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <router-link to="/therapist/clientdetail" class="text-decoration-none"> {{ client.first_name }} {{ client.last_name }}</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-sm-12">
                                <h5 class="fw-normal">Contact</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <a href="{{ client.client_number }}" class="text-decoration-none">{{ client.client_number }}</a> <span class="badge bg-secondary ms-1">Mobile</span>
                            </div>
                            <div class="col-sm-12">
                                <hr class="my-2">
                                <a href="mailto:{{ client.client_email }}" class="text-decoration-none">{{ client.client_email }}</a> <a href="#" class="ps-2 text-decoration-none"> <div class="vr me-2"></div> <i class="fas fa-copy"></i></a>
                            </div>
                            <div class="col-sm-12">
                                <hr class="my-2">
                                <button type="button" class="btn btn-sm btn-light mt-2 shadow-sm"><i class="fas fa-comment-alt me-2"></i>Message</button>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6 d-flex justify-content-center">
                        <div class="row">
                            <div class="col-sm-12 d-flex">
                                <div class="dropdown d-flex">
                                    <button class="btn btn-light dropdown-toggle shadow-sm align-self-center" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-cogs me-1"></i> Manage
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-eye me-1"></i> Client Details</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-pencil-alt me-1"></i> Edit Client Details</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-puzzle-piece me-1"></i> Merge with Duplicate</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-user-friends me-1"></i> Add Client to Couple</a></li>
                                        <li><a class="dropdown-item text-danger" href="#"><i class="fas fa-user-slash me-1"></i> Make Inactive</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
</template>


<script>
    import clientData from '../../data/client-data.js';



    export default {
        setup() {
            const clientList = clientData;


            return {
                clientList
            }
        }
    };
</script>