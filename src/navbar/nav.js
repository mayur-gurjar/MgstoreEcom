import {  useState } from 'react';
import './nav.css'
import {Link} from 'react-router-dom'
import { Cartstate } from '../context/context';

function Navbar(){

    const {cart}= Cartstate()
    // const[serchquery,setserchquey]=useState('')

    // function handelsubmit(){
    //     if(serchquery.trim().length){
    //         onsearch(serchquery.trim())
    //     }
    //     setserchquey('')
    // }
  
return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-3">
  <div className="container ">
    <a className="navbar-brand fw-bold fs-4" href="#">MG StORE</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <Link className='link' to="/">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        </Link>
        <Link className='link' to='/'>
        <li className="nav-item">
          <a className="nav-link">Products</a>
        </li>
        </Link>
        <li className="nav-item">
          <a className="nav-link ">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Contact</a>
        </li>
      </ul>
      <div className="buttons " >
        <button className="btn btn-outline-dark mx-2" type="submit"><i class="bi bi-box-arrow-in-right"></i>Login</button>
        <button className="btn btn-outline-dark mx-2" type="submit">Register</button>
        <Link to="/cart">
        <button className="btn btn-outline-dark mx-2" type="submit">Cart <span className='text-danger fw-bold'>({cart.length})</span></button>
        </Link>
      </div>
    </div>
  </div>
</nav>
    </>
)
}

export default Navbar;