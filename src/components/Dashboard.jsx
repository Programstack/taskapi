import React from 'react'

function Dashboard() {
  return <>
   <div class="container-fluid">
   <div class="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 class="h3 mb-0 text-gray-800">Add a Note</h1>
          
        
                    </div>
                    <div class="row">
                    <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            {/* <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Title</div> */}
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">Title</div>
                                        </div>
                                        <div class="col-auto">
                                            {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Take a note</label>
</div>
</div></div>
<br></br>
<label for="floatingTextarea">My Notes</label>
 <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Recently Viewed</div>

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">Feedbacks
        </h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">Weekly Tasks</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">Lyrics</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
</div>



</div>



   
  </>
}

export default Dashboard