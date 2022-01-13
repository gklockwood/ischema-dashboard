<template>
    <div class="adminbilling">
        <div class="container-fluid py-4">
            <h1>Transactions</h1>
            <div class="row pt-4">
                <div class="col-sm-12 col-md-6 col-lg-6 py-3">
                    <div class="dropdown d-inline me-2">
                        <button class="btn btn-outline-dark dropdown-toggle" type="button"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                              </svg>
                            11/28/2021 - 12/28/2021
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown d-inline me-2">
                        <button class="btn btn-outline-dark dropdown-toggle" type="button"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                                <path
                                    d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            All Types
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Date</th>
                            <th scope="col">Client</th>
                            <th scope="col">Type</th>
                            <th scope="col">Net</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Fee</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#payoutdetails">Details</button></th>
                            <td>12/12/2021</td>
                            <td></td>
                            <td>Payout</td>
                            <td class="text-muted">($378.19 CR) USD</td>
                            <td class="text-muted">(378.19 CR) USD</td>
                            <td></td>
                            <td><button class="btn btn-outline-dark">Refund</button></td>
                          </tr>
                          <tr>
                            <th scope="row"><button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#paymentdetails">Details</button></th>
                            <td>12/08/2021</td>
                            <td></td>
                            <td>
                                Charge<br>
                                <small class="text-muted">Visa (...3347)</small>
                            </td>
                            <td>($378.19 CR) USD</td>
                            <td>(390.00 CR) USD</td>
                            <td>11.81 USD</td>
                            <td><button class="btn btn-outline-dark">Refund</button></td>
                          </tr>
                          <tr>
                            <th scope="row"><button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#paymentdetails">Details</button></th>
                            <td>11/09/2021</td>
                            <td></td>
                            <td>
                                Charge<br>
                                <small class="text-muted">MasterCard (...2835)</small>
                            </td>
                            <td>($964.44 CR) USD</td>
                            <td>(994.07 CR) USD</td>
                            <td>2.02 USD</td>
                            <td><button class="btn btn-outline-dark">Refund</button></td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>



        <!-- Payment Details Modal -->
    <div class="modal fade" id="paymentdetails" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Transaction Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-sm">
                    <h4>Charge on 12/08/2021 for John Appleseed</h4>
                </div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Payment ID</span></div>
                <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Statement descriptor </span></div>
                <div class="col-sm-6"><span>GEORGE LOCKWOOD, PH.D.</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Amount </span></div>
                <div class="col-sm-6"><span> $390</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Fee </span></div>
                <div class="col-sm-6"><span>   $11.81 </span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Net </span></div>
                <div class="col-sm-6"><span>$378.19</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Date </span></div>
                <div class="col-sm-6"><span>12/08/2021 8:50 pm</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Payout  </span></div>
                <div class="col-sm-6"><span>12/12/2021 View Payout</span></div>
            </div>
            <div class="row">
                <div class="col-sm pt-4">
                    <h4>Card Details</h4>
                </div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Payment ID</span></div>
                <div class="col-sm-6"><span> card_1I41uAKgTRVBkzpcWZuPMm8e</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Payment ID</span></div>
                <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Name </span></div>
                <div class="col-sm-6"><span>John Appleseed</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Number </span></div>
                <div class="col-sm-6"><span>•••• 3347</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">CVC check </span></div>
                <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Not provided</span></div>
                <div class="col-sm-6"><span>py_1K4blpAKQ6vC73SAmhQkRjl2</span></div>
            </div>
            <div class="row py-2 border-bottom">
                <div class="col-sm-6"><span class="fw-bolder">Expires </span></div>
                <div class="col-sm-6"><span>2 / 2026</span></div>
            </div>
            <div class="row py-2">
                <div class="col-sm-6"><span class="fw-bolder">Type </span></div>
                <div class="col-sm-6"><span>Visa</span></div>
            </div>
        </div>
      </div>
    </div>
  </div>



  
        <!-- Payment Details Modal -->
        <div class="modal fade" id="payoutdetails" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:2000;position: relative;">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Transaction Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-6">
                        <h4>Payout on 12/11/2021</h4>
                    </div>
                    <div class="col-sm-6">
                        <span class="badge bg-success">Paid</span>
                    </div>
                </div>
                <div class="row py-2 border-bottom">
                    <div class="col-sm-6"><span class="fw-bolder">Payout ID</span></div>
                    <div class="col-sm-6"><span>po_1K5gpJAKQ6vC73SAkZh1uI8C</span></div>
                </div>
                <div class="row py-2 border-bottom">
                    <div class="col-sm-6"><span class="fw-bolder">Initiated  </span></div>
                    <div class="col-sm-6"><span>  12/11/2021 </span></div>
                </div>
                <div class="row py-2 border-bottom">
                    <div class="col-sm-6"><span class="fw-bolder">Est. Arrival   </span></div>
                    <div class="col-sm-6"><span> 12/12/2021 </span></div>
                </div>
                <div class="row py-2 border-bottom">
                    <div class="col-sm-6"><span class="fw-bolder">Description  </span></div>
                    <div class="col-sm-6"><span> Stripe payout</span></div>
                </div>
                <div class="row py-2 border-bottom">
                    <div class="col-sm-6"><span class="fw-bolder">Amount  </span></div>
                    <div class="col-sm-6"><span>$378.19 CR</span></div>
                </div>
                <div class="row py-2 border-bottom">
                    <div class="col-sm-6"><span class="fw-bolder"></span></div>
                    <div class="col-sm-6"><span><a href="">Transactions</a> </span></div>
                </div>
            </div>
          </div>
        </div>
      </div>


    </div>


</template>