
import { Link } from 'react-router-dom'

import './item.css'
function Item({ id, image, title, price }) {
    
    return (
      
        <div className='col-md-4 col-sm-12 col-lg-3 m-sm-6 mb-4'>
        <div class="card h-100 text-center p-4" >
            <img src={image} class="card-img-top " alt="..." height='250px' />
            <div class="card-body">
                <h5 class="card-title mb-0">{title.substring(0,12)}</h5>
                <p class="card-text lead fw-bold">{price}$</p>
                <Link to={`/product/${id}`}>
                <a  class="btn btn-outline-dark">BUY NOW</a>
                </Link>
            </div>
        </div>
        </div>
    )
}
export default Item;