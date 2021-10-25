<template>
    <div class="clientdetail">
        <div class="container py-4">
            <h4>(Client Name Here) Detail</h4>
            <div class="card p-3 my-3 shadow-sm">
                <div class="row">
                    <div class="col-sm-12">
                        <textarea class="form-control" placeholder="Add a Chart Note.." id="floatingTextarea2" style="height: 100px"></textarea>
                    </div>
                    <div class="col-sm-12 text-end mt-3">
                        <button class="btn btn-primary align-self-center shadow-sm"><i class="fas fa-plus me-1"></i> Add
                            Progress Note</button>
                    </div>
                </div>
            </div>
            <div class="card p-3 my-3 shadow-sm" v-for="session in sessionsList" :key="session.id"
                :therapist-name="session.first_name" :id="session.id">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-sm-12">
                                <h5 class="fw-normal">Session</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="text-decoration-none d-inline">{{ session.session_date }}</p>
                                <div class="vr me-2 ms-2"></div>
                                <p class="text-decoration-none d-inline fw-bolder">{{ session.session_time }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 d-flex">
                        <button class="btn btn-light align-self-center shadow-sm"><i class="fas fa-edit"></i> Add
                            Progress Note</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sessionData from '../../data/session-data.js';



    export default {
        setup() {
            const sessionsList = sessionData;


            return {
                sessionsList
            }
        }
    };
</script>