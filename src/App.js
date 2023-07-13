import {Route,Routes, createSearchParams, useNavigate} from 'react-router-dom'
import {Cart} from './pages/cart';
import {Notfound} from './pages/notfound';
import {Product} from './pages/product';
import {Products} from './pages/products';
import Navbar from './navbar/nav';
import { useState } from 'react';



function App() {
  const[cartid,setcartid]=useState('')
  function cartproduct(id){
   setcartid(id)
  }
const navigat = useNavigate();
const onsearch = (serchquery)=>{
  navigat(`/?${createSearchParams({q:serchquery})}`)
}


  return (
    <>
    <Navbar onsearch={onsearch} cartcounter={2}/>
     
    <Routes>
      <Route path='/' element={<Products/>}  ></Route>
      <Route path='/product/:productid' element={<Product cartproduct={cartproduct}/>}></Route>
      <Route path='/cart' element={<Cart id={cartid}/>}></Route>
      <Route path='*' element={<Notfound/>} ></Route>
    </Routes>
     

    </>
  );
}

export default App;
