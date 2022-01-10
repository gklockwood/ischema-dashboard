<template>
    <div class="staffmemberchangepassword">
        <div class="container py-4">
            <div class="row">
                <div class="col-md-4 offset-md-4 pt-2">
                    <h3>Change Your Password</h3>
                    <p>
                        Welcome to e-SCHEMATHERAPY.  Please create a new password, to replace your temporary password. Your  temporary password will only work for this one login.  
                    </p>
                    <p>
                        Your password must contain at least 10 characters consisting of at least:
                    </p>
                    <ul class="list-unstyled p-0">
                        <li>One uppercase letter (A-Z)</li>
                        <li>One lowercase letter (a-z)</li>
                        <li>One number (0-9)</li>
                        <li>One symbol (for example: #, !, %, &, *)</li>
                        <li>You may not reuse previous passwords</li>
                    </ul>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="New Password">
                      </div>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Confirm New Password">
                      </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm text-center pt-4">
                    <router-link to="/staffcontinue" class="btn btn-outline-dark">Change Password</router-link>
                </div>
            </div>
        </div>
    </div>
</template>