import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseQuantity } from '../../actions/cartActions';
import './cart.css';
import plus from '../../Component/Images/plus.png'
import minus from '../Images/minus_2.png'
import bin from '../Images/bin.png'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
    };

    return (

        <div>
          <h1></h1>
        {cartItems.length === 0 ? (
             <p>Your cart is empty</p>
        ) : (
           <div>
                  <table className='tabs'>
                    <tr>Product</tr>
                    <tr>Name</tr>
                    <tr>Quantity</tr>
                    <tr>Price</tr>
                  </table>
                  <div className='items-all'>
                  {cartItems.map((item)=>(
                         <div className='total-details'>
                            <img src={item.image} alt={item.name} className='product_image'></img>
                            <p>{item.name}</p>
                            <div className='Quants'>
                                <img src={minus} onClick={() => dispatch(decreaseQuantity(item))}></img>
                                <span>{item.qty}</span>
                                <img src={plus} onClick={() => dispatch(addToCart(item))}></img>
                                
                            </div>
                            <p>${item.price*item.qty}</p>
                            <img src={bin} alt='bin' onClick={()=>dispatch(removeFromCart(item))} className='bin'></img>
                         </div>

                         
                  ))}
                   
                  </div>
                 <div className='total-price'>
                    <h1>Total:</h1>
                  <h3>${calculateTotal()}</h3>
                  </div>

              

                  
           </div>
           
        )}
        </div>
    );
};

export default Cart;
