import React, {useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import Checkout from '../../Pages/Checkout';
import { useNavigate } from 'react-router-dom';


const CartItems = () => {
  const {
    cartItems,
    all_product,
    addToCart,
    removeFromCart,
    deleteFromCart
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const getTotal = () => {
     let total = 0;

  for (const itemId in cartItems) {

    const cartItem = cartItems[itemId];

    if (cartItem?.quantity > 0) {

      const product = all_product.find(
        (p) => p.id === Number(itemId)
      );

      if(product){
        total += product.new_price * cartItem.quantity;
      }
    }
  }

  return total;
  };

  return (
    <div className="cart">

      <h1>Shopping Cart</h1>

      {/* HEADER */}
      <div className="cart-grid cart-header">
        <p>Product</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      
      {/* ITEMS */}
      
      {all_product.map((product) => {

  const cartItem = cartItems[product.id];

  if (cartItem && cartItem.quantity > 0) {

    return (
      <div key={product.id} className="cart-grid cart-row">

        <img src={product.image} alt="" />

        <p>{product.name}</p>

        <p>${product.new_price}</p>

        {/* Quantity controls */}
        <div className="cart-quantity">

          <button
            onClick={() => removeFromCart(product.id)}
          >
            −
          </button>

          <span>
            {cartItem.quantity}
          </span>

          <button
            onClick={() => addToCart(product.id, 1)}
          >
            +
          </button>

        </div>

        <p>
          ${product.new_price * cartItem.quantity}
        </p>

        {/* Remove */}
        <button
          className="cart-remove"
          onClick={() => deleteFromCart(product.id)}
        >
          X
        </button>

      </div>
    );
  }

  return null;
})}
      <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotal()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotal()}</h3>
                    </div>
                </div>
                <button onClick={()=> navigate("/checkout")}>PROCEED TO CHECKOUT</button>
            </div>

      </div>
  );
};
export default CartItems
