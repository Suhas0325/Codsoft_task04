import './nav.css'
import cart from '../Images/cart_image.png'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Nav = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    return(
        <div className = 'top'>
        <div>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <h1>Products</h1>
            </Link>
        </div>
        <div className='cart'>
        <Link to="/cart">
                    <img src={cart} alt='cart'></img>
                    <span>{cartItems.length}</span>
                </Link>
        </div>    
    </div>
    )
}

export default Nav