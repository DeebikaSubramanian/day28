import React from 'react'
import {Link} from 'react-router-dom'

function Product() {
 
    const productarr=[
      {
          id:1,
          name:"Fridge",
          price:33000,
          category:"Electronics",
          offer:"10%",
          model:"A23"
      },
      {
        id:2,
        name:"Recliner",
        price:60000,
        category:"Furniture",
        offer:"20%",
        model:"F2345"
    },
    {
      id:3,
      name:"Coffeetable",
      price:20000,
      category:"Furniture",
      offer:"30%",
      model:"F123"
  },
      {
          id:4,
          name:"TV",
          price:200000,
          category:"Electronics",
          offer:"40%",
          model:"E1123"
      },
      {
          id:5,
          name:"Lamp",
          price:5000,
          category:"Eelectricals",
          offer:"5%",
          model:"LI2345"
      },
      {
          id:6,
          name:"DinningTable",
          price:50000,
          category:"Furniture",
          offer:"20%",
          model:"F12345"
      },
      {
          id:7,
          name:"Microwaveoven",
      price:80000,
      category:"Electronics",
      offer:"30%",
      model:"M1234"
      },
      {
          id:8,
          name:"Cutlery",
          price:7000,
          category:"KitchenAppliance",
          offer:"25%",
          model:"C23123"
      },
      {
          id:9,
          name:"WallClock",
          price:3000,
          category:"Electrical",
          offer:"10%",
          model:"C78123"
      },
      {
          id:10,
          name:"Walldecor",
          price:40000,
          category:"Decorations",
          offer:"30%",
          model:"F12333"
      },
  ]
return (
         <>
     <div class="container-fluid">
       <div class="row"> 
  <h1 class="col-sm-10 col-md-10 col-lg-10 col-xl-10 h3 mb-2 text-gray-800">Product</h1>
  <Link to="/Productform">
  <button class="button bg-primary">Create</button>
  </Link></div> 
  <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
      For more information about DataTables, please visit the <a target="_blank"
          href="https://datatables.net">official DataTables documentation</a>.</p>
          <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Product Details</h6>
                          </div>
                          <div class="card-body">
                              <div class="table-responsive">
                                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                      <thead>
                                          <tr>
                                          <th>ID</th>
                                              <th>Name</th>
                                              <th>Price</th>
                                              <th>Category</th>
                                              <th>Offer</th>
                                              <th>ModelNo</th>
                                              <th>Buttons</th>
                                          </tr>
                                      </thead>
                                      
                                      <tbody>
                                          {
                                              productarr.map((e)=>
                                              {
                                                  return(
                                              <tr>
                                              <td>{e.id}</td>
                                              <td>{e.name}</td>
                                              <td>Rs.{e.price}</td>
                                              <td>{e.category}</td>
                                              <td>{e.offer}</td>
                                              <td>{e.model}</td>
                                              <td><div class="d-grid gap-5 d-md-block">
                                              <button class="btn btn-primary" type="button">View</button>
                                               <button class="btn btn-success" type="button">Edit</button>
                                               <button class="btn btn-danger" type="button">Delete</button>
                                              </div></td>
                                              
                                          </tr>
                                                  );
                                              })
                                          }

</tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
  
                  </div>
    </>
)
}



export default Product;