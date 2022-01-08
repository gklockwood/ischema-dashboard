<template>
    <div class="therapistemailreview">
        <div class="container-fluid pt-4">
            <h1>Confirmation Email</h1>
            <div class="row  mt-4">
                <div class="col-sm-12">
                    <span class="pb-2 d-block fw-bolder">Jamie's Email</span>
                    <div class="shadow-sm rounded-3 p-3 border">
                        <p>
                            Your appointment on Thursday, January 6th at 9:00 am (EST) with Gaorge Lockeood, Ph.D. has been confirmed.  Sign in to view your schedule.
                        </p>
                        <p>
                            {practive_client_portal_login_link}
                        </p>
                        <p>
                            Contact George Lockwood, Ph.D. via phone: (269) 267-1964
                        </p>
                        <p>
                            {client_video_link}
                        </p>
                        <p>
                            Add to your Calendar and your link to join the Telehealth appointment will be included
                        </p>
                    </div>
                    <router-link to="/therapist/Therapistemailreviewsend" class="btn btn-outline-dark mt-3 shadow-sm">
                        Continue to Review
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>