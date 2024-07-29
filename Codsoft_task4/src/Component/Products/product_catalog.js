import './products.css'
import {product_list} from '../Products/Products_list.js'
import { addToCart } from '../../actions/cartActions.js'
import { useDispatch } from 'react-redux';
const Products = () => {
    const dispatch = useDispatch();
    return(
        
          <div className='prods'>
            {product_list.map((item)=>(
                 <div className = 'card' key = {item.id}>
                 <div className='pro_image'>
                     <img src={item.image} alt={item.name}></img>
                 </div>
                 <div className='details'>
                     <p>{item.name}</p>
                     <span>${item.price}</span>
                 </div>
                 <div className='cartbutton'>
                         <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                 </div> </div>
            ))}
           
           
         </div>
    )
}

export default Products