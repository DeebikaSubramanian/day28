import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Product from './Product';
import User from './User'
import Userform from './Userform';
import Productform from './Productform';
import {Routes,Route,BrowserRouter} from "react-router-dom";

function App() {
  
   
  return (
    <BrowserRouter> 
     <div id="wrapper">
       <Sidebar></Sidebar>
       <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
              <Topbar></Topbar>
               <div class="container-fluid">
            <Routes>
           
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/Product" element={<Product/>}></Route>
              <Route path='/User'element={<User />}></Route>
              <Route path="/Userform" element={<Userform/>}></Route>
              <Route path="/Productform" element={<Productform/>}></Route>
                          
              </Routes>
              </div>
     </div>
     </div>
            </div>
            </BrowserRouter>
  );
}

export default App;
