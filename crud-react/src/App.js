
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SideBar from "./admin/components/SideBar";
import ProductCreate from "./admin/ProductCreate";
import ProductEdit from "./admin/ProductEdit";
import Products from "./admin/Products";
import Main from "./main/Main";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
       <Routes>
         <Route path="/" element={<Main/>}/>
         <Route path="/admin/products"  element={<Products/>}/>
         <Route path="/admin/products/create" element={<ProductCreate/>} />
         <Route path="/admin/products/:id/edit" element={<ProductEdit />} />
         
         <Route path="/components/sidebar" element={<SideBar />} />
       </Routes>
        


      </BrowserRouter>
    </div>
  );
}

export default App;
