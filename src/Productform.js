import React from 'react'

function Productform() {
  return (
    <div class="container"><h2 class="text-primary fs-1 text-center fw-bolder">Enter the Fields</h2><form>
        <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">Name:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left" type="text" Placeholder="Enter the Name" required></input>
    </div>
    <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">Price:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left"type="text" Placeholder="Enter your Price" required></input>
   </div>
   <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">Category:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left"type="text" Placeholder="Enter your Category" required></input>
    </div>
    <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">Offer:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left"type="text" Placeholder="Enter your Offer" required></input>
    </div>
    <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">ModelNo:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left"type="text" Placeholder="Enter your ModelNo" required></input>
    </div>
    <div class="row">
        <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 text-center">
        <button>Submit</button></div>
    </div>
</form></div>
  )
}

export default Productform