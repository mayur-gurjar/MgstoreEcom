import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import { Cartstate } from "../../context/context"
import './cart.css'

function Cart() {
  
    const {cart,Removecart,changequntity,changequntityminus}=Cartstate()
    const[total,settotal]=useState()

    useEffect(()=>{
        settotal(cart.reduce((acc , crr)=> acc+Number(crr.tp),0))
        console.log(cart)
    },[cart])

    console.log(cart)
    return (
        <>  
            <div className="container shadow-sm border" >
                <div className="row">
                    <div className="col-lg-8 col-md-12 p-4">
                        <div className="d-flex justify-content-between px-3 ">
                            <h3 className="display-5 fs-5 fw-bold">Shoping Cart</h3>
                            <h3 className="display-5 fs-5 fw-bold"> Item({cart.length})</h3>
                        </div>
                        <hr />
                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col" className="display-6 fs-6">PRODUCT DETAILS</th>
                                    <th scope="col" className="display-6 fs-6">QUANTITY</th>
                                    <th scope="col" className="display-6 fs-6">PRICE</th>
                                    <th scope="col" className="display-6 fs-6">TOTAL PRICE</th>

                                </tr>
                            </thead>
                            <tbody className="scroll">
                                { 
                                cart.length=== 0 ?
                                <div className="text-center fs-4 m-4 text-danger display-6 text-lead">
                                    CART IS EMPTY...
                                </div>:
                                
                                cart.map((dat)=>(
                                <tr>

                                    <td className="w-50">
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <img height='130px' width='100px' src={dat.prod.image} alt="" />
                                            </div>
                                            <div className="my-auto ">
                                                <h6 className="fs-6">{dat.prod.title}</h6>
                                                <p className="text-danger">{dat.prod.category}</p>
                                                <p style={{ color: '#6f42c1', cursor: 'pointer' }} className="text-secondary " onClick={() => Removecart(dat.prod.id)}>Remove</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="my-auto">
                                            <button className="btn btn-outline-dark btn-sm me-1 px-2 py-0 " onClick={() =>changequntityminus(dat.prod.id)}>-</button>
                                            <input style={{height:'25px' , width:'30px',outline:'none',padding:'2px', border:'none'}} className="fw-bold mx-2 fs-5" value={dat.qty} />
                                            <button className="btn btn-outline-dark btn-sm ms-1 px-2 py-0" onClick={() =>changequntity(dat.prod.id)}>+</button>
                                        </div>
                                    </td>
                                    <td className="fw-bold my-auto">${dat.prod.price}</td>
                                    <td className="fw-bold my-auto">${(dat.prod.price) *dat.qty}</td>


                                </tr>
                               )) }
                            </tbody>

                        </table>

                    <NavLink style={{ textDecoration: 'none' }} to="/">
                        <div>
                            <h6 style={{ color: '#6f42c1', cursor: 'pointer' }}>⬅Shoping Page</h6>
                        </div>
                    </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-12 p-4">
                        <div>
                            <h3 className="display-5 fs-5 fw-bold">Order Summery</h3>
                        </div>
                        <hr />
                        <div>
                            <h5>
                                SHIPPING
                            </h5>
                            <p className="text-secondary px-3">
                                Standerd Shiping -$100
                            </p>
                        </div>
                        <div className="my-5">
                            <h5>
                                PROMO CODE
                            </h5>
                            <p className="text-secondary px-3">
                                Enter Your code
                            </p>
                        </div>
                        <button className="btn btn-danger">APPLY</button>
                        <hr />
                        <div className="d-flex justify-content-between my-3">
                            <h5>TOTAL COST</h5>
                            <h5>${total}</h5>
                        </div>
                        <button style={{ background: '#6f42c1', color: 'white', marginLeft: '100px' }} className="btn  btn-lg btn-block px-5 ">CHECKOUT</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export { Cart }