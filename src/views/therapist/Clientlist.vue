<template>
    <div class="clientlist">
        <div class="container py-4">
            <h3>Clients & Contacts List</h3>
            
            <div class="row my-3">
                <div class="col-sm col-sm-6 py-3">
                    <div class="input-group">
                        <input class="form-control border-end-0 border rounded-pill" type="search" value="Search Clients"
                            id="example-search-input">
                        <span class="input-group-append">
                            <button class="btn btn-outline-primary bg-white border-bottom-0 border rounded-pill ms-n5"
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
            <div class="row">
                <div class="col-sm">
                    <ul class="list-group">
                        <li v-for="client in clientList" :key="client.id" :therapist-name="client.first_name" :id="client.id" class="py-2 list-group-item"><router-link to="/therapist/clientdetail" class="text-decoration-none"> {{ client.first_name }} {{ client.last_name }}</router-link></li>
                    </ul>
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