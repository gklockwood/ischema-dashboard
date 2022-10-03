<template>
    <div class="therapistsubscriptioninformation">
        <div class="container py-4">
            <h1>Subscription Information</h1>

            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>
                            Plan
                        </th>
                        <th>
                            Monthly Fee
                        </th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Professional Plan</td>
                        <td>$59.00 USD</td>
                        <td>
                            <button class="btn text-primary"   @click="showplaninvoices">
                                View Invoices <i class="fas fa-file-invoice-dollar"></i>
                           </button> 
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="row">
                <div class="col-sm-12">
                    <button class="btn btn-outline-dark">
                        Change Subscription
                    </button>
                </div>
            </div>

            <dv class="row" v-if="planinvoices">
                <div class="col-sm-12">
                    <table class="table mt-4">
                        <thead>
                            <tr>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Amount
                                </th>
                                <th>
    
                                    Status
                                </th>
                                <th>
                                    Invoice
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>01/16/2022</span>
                                </td>
                                <td>
                                    <span>$71.50</span>
                                </td>
                                <td>
                                    <span class="badge bg-primary">
                                        Paid
                                    </span>
                                </td>
                                <td>
                                    <button class="btn text-primary" data-bs-toggle="modal" data-bs-target="#viewinvoicemodal">
                                         View Invoice <i class="fas fa-search-dollar"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </dv>


        </div>
    </div>





    <!-- Add Availability Modal Start -->
    <div class="modal fade" id="viewinvoicemodal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl" style="z-index:2000;position: relative;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Invoice 01/16/2022</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div class="row">
                  <div class="col-md-6">
                      <span class="fw-bolder d-block">eSchemaTherapy</span>
                      <span class="pt-3 d-block text-muted">Account:</span>
                      <span class="fw-bolder d-block">George Lockwood</span>
                      <span class="d-block">471 West South Street 41C</span>
                      <span>Kalamaz00, MI 49007</span>
                  </div>
                  <div class="col-md-6 text-end">
                      <div>
                          <span class="text-muted">Invoice #</span><span class="fw-bolder ms-2">9d1868F4-0022</span>
                      </div>
                      <div>
                        <span class="text-muted">Issued on</span><span class="fw-bolder ms-2">01/16/2022</span>
                    </div>
                  </div>
              </div>
              <table class="table">
                  <thead>
                      <tr>
                          <th>Description</th>
                          <th>
                              Qty
                          </th>
                          <th>
                              Price
                          </th>
                          <th>
                              Subtotal
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Professional Plan - Monthly</td>
                          <td>1</td>
                          <td>$59.00</td>
                          <td>$59.00</td>
                      </tr>
                  </tbody>
              </table>
              <div class="row">
                  <div class="col-sm">
                      <div>
                          <span>Subtotal</span><span class="fw-bolder ps-2">$59.00</span><br>
                          <span>Total</span><span class="fw-bolder ps-2">$59.00</span><br>
                          <span>Paid</span><span class="fw-bolder ps-2">($59.00)</span><br>
                          <span>Amount Due</span><span class="fw-bolder ps-2">$0.00</span><br>
                      </div>
                  </div>
              </div>
              <div class="row pt-4">
                  <div class="col-sm">
                    <span class="fw-bolder d-block">Payment</span>
                    <span class="text-muted">Subtotal</span><span class="fw-bolder ps-2">$59.00 Payment from MASTERCARD ****5107</span><br>
                    <span class="text-muted">Paid on</span><span class="fw-bolder ps-2">1/16/2022</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Availability Modal End -->





</template>


<script>
    import {
        ref
    } from 'vue';

    export default {
        setup() {
            const planinvoices = ref(false);

            function showplaninvoices () {
                planinvoices.value = !planinvoices.value;
            }

            return {
                planinvoices,
                showplaninvoices
            }
        }
    };
</script>