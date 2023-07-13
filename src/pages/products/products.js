import { useEffect, useState } from 'react';
import Item from './../../item/item';
import Fakestoreapi from './../../sevices/fakeapi'
import './products.css'




function Products() {

    const [loader, setloader] = useState(true)
    const [produc, setproduct] = useState([])

    const [serchquer, setserchquey] = useState(null)

    useEffect(() => {
        const fetchproduct = async () => {
            setloader(true)
            const product = serchquer ? await Fakestoreapi.fetchproductbysearch(serchquer) : await Fakestoreapi.fetchallproduct();
            setproduct(product)
            console.log(produc)
            setloader(false)
        }
        fetchproduct().catch(console.log('error'))

        console.log(Fakestoreapi.fetchallproduct())


    }, [serchquer])
    return (

        <>
            <div class="card text-bg-dark px-0 border-0 container mt-1 ">
                <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1688191934~exp=1688192534~hmac=41cf4d9a03612c0621a68d9ed08c3b276436dfb4786c0204d68094f5adda0b78" class="card-img " style={{ height: "420px", objectFit: 'cover' }} alt="..." />
                <div class="card-img-overlay d-flex justify-content-center flex-column">
                    <h5 class="card-title fc-dark fw-bold fs-1 fc-dark display-3">NEW SEASION ARRIVELS</h5>
                    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>

                </div>
            </div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5 p-0'>
                        <h1 className='text-center display-6 fw-bolder'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='container buttons d-flex flex-wrap justify-content-center mb-5'>
                    <button className='btn btn-outline-dark  btn-sm-sm m-2' onClick={() => setserchquey(null)}>All</button>
                    <button className='btn btn-outline-dark  m-2' onClick={() => setserchquey("men's clothing")}>Men's Clothing </button>
                    <button className='btn btn-outline-dark  m-2' onClick={() => setserchquey("women's clothing")}>Woman's Clothing</button>
                    <button className='btn btn-outline-dark  m-2' onClick={() => setserchquey("jewelery")}>Jewllary's</button>
                    <button className='btn btn-outline-dark  m-2' onClick={() => setserchquey("electronics")}>Electronics</button>

                </div>
                <div className='row'>

                    {


                        loader ? 
                        <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                       </div> :
                        
                        
                        produc.map((prod) => (
                            <Item key={prod.id} id={prod.id} price={prod.price} image={prod.image} title={prod.title} />
                        ))
                            
                           
                    }
                </div>

            </div>
        </>
    )
}

export { Products }