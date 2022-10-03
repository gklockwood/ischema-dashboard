<template>
    <div class="staffmemberlogin">
        <div class="container py-4">
            <div class="row">
                <div class="col-sm  text-center">
                    <h1>Login to eSchemaTherapy</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 offset-md-4 pt-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username">
                      </div>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Password">
                      </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm text-center pt-4">
                    <router-link to="/staffmembertermsofservice" class="btn btn-outline-dark">Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>