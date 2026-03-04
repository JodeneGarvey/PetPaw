import React, { useContext, useState } from "react";
import "./CSS/Checkout.css";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const navigate = useNavigate();
  const { cartItems, all_product } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    parish: "",
    zip: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getTotal = () => {
    let total = 0;

    for (const item in cartItems) {
      const product = all_product.find(
        (p) => p.id === Number(item)
      );

      if (product && cartItems[item]?.quantity > 0) {
        total += product.new_price * cartItems[item].quantity;
      }
    }

    return total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!localStorage.getItem("auth-token")) {
        alert("Please login first");
        return;
    }

    const response = await fetch("http://localhost:4000/placeorder", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            deliveryDetails: formData
        })
    });

    const data = await response.json();

    if (data.success) {
        alert("Order placed successfully!");

        // Clear cart in context
        window.location.replace("/");
    }
};

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* LEFT FORM */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Details</h2>

          <div className="checkout-row">
            <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
          </div>

          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input type="text" name="address" placeholder="Street Address" required onChange={handleChange} />

          <div className="checkout-row">
            <input type="text" name="city" placeholder="City" required onChange={handleChange} />
            <input type="text" name="parish" placeholder="Parish" required onChange={handleChange} />
          </div>

          <input type="text" name="zip" placeholder="Zip Code" required onChange={handleChange} />

          <button type="submit" className="place-order-btn">
            PLACE ORDER
          </button>
        </form>


        {/* RIGHT SUMMARY */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {all_product.map((product) => {
            const cartItem = cartItems[product.id];

            if (cartItem && cartItem.quantity > 0) {
              return (
                <div key={product.id} className="summary-item">

                  <img src={product.image} alt={product.name} />

                  <div>
                    <p>{product.name}</p>
                    <p>
                      {cartItem.quantity} x ${product.new_price}
                    </p>
                  </div>

                </div>
              );
            }

            return null;
          })}

          <hr />

          <div className="summary-total">
            <p>Total:</p>
            <h3>${getTotal()}</h3>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;