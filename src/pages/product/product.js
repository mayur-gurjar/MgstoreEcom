import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Fakestoreapi from "../../sevices/fakeapi"
import { Cartstate } from "../../context/context"

function Product(){
    const prodid = useParams()
    const id = prodid.productid
    const[prodc, setprodc]=useState('')
    const{Addcart}=Cartstate();
    const[loader,setloader]=useState(true)

    useEffect(()=>{
      
        const fetchproduct = async () => {
            setloader(true)
            const product =  await Fakestoreapi.fetchproductbyid(id) 
            setprodc(product)
            setloader(false)
        
        }
        fetchproduct().catch(console.log('error'))
   

    },[id])
   
    return(
        <>
        {
         loader ?
         <div class="d-flex justify-content-center align-items-center " style={{width:'100%',height:'100vh'}} >
         <div class="spinner-border" role="status">
           <span class="visually-hidden">Loading...</span>
         </div>
       </div> 
       : 

        <div className="container py-5">
        <div className="row py-5">
           
            <div className="col-lg-6 col-md-12">
               
                 <img src={prodc.image} alt="" height='400px' width='400px'/>
             </div>
              <div className="col-lg-6 col-md-12 my-sm-5">
                <h1 className="display-5">
                    {prodc.title}
                </h1>

                <h3 className="fw-bold my-4 display-6">{prodc.price}$</h3>
                <p className="lead">{prodc.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=>Addcart(prodc)}>
                     Add to Cart
                </button>
                <Link to="/cart">
                <button className="btn btn-dark ms-2 px-3 py-2">
                     Go to Cart
                </button>
                </Link>
              
              </div>
           
            
        </div>
        </div>
        }
        </>
    )
}

export {Product}