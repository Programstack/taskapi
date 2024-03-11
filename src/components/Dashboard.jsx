/* eslint-disable no-unused-vars */
import React from 'react'

function Dashboard() {
  return <>
   <div className="container-fluid">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Order List</h1>
          
        
                    </div>
                    <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                           
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            {/* <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Title</div> */}
                                           
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">Medicine Billing</div>
                                        </div>
                                        <div className="col-auto">
                                            {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                        <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Take a note</label>
</div>
</div></div>
<br></br>
<label htmlFor="floatingTextarea">My Notes</label>
 <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Recently Viewed</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Product
        </h5>
        <p className="card-text">Name</p>
      </div>
      <div className="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">qty</h5>
        <p className="card-text">Number of quality</p>
      </div>
      <div className="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">Total</h5>
        <p className="card-text">Total amount of Product</p>
      </div>
      <div className="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
</div>

<div>
<div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div className="card-body">
        {/* <h5 className="card-title">qty</h5> */}
        <p className="card-text">SUBTOTAL</p>
      </div>
      <div className="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>


  <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div className="card-body">
        {/* <h5 className="card-title">qty</h5> */}
        <p className="card-text">TAX</p>
      </div>
      <div className="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>


  <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div className="card-body">
        {/* <h5 className="card-title">qty</h5> */}
        <p className="card-text">TOTAL</p>
      </div>
      <div className="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
</div>


<div className="container-fluid">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Terms & Conditions</h1>
             
</div>
</div>

<div className="container-fluid">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Address</h1>
             
</div>
</div>

</div>
</>
}

export default Dashboard