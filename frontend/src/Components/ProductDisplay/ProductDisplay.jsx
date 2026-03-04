import React, { useState, useContext, useEffect } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

 

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="productdisplay">

      {/* LEFT SIDE - IMAGE */}
      <div className="productdisplay-left">
        <img
          className="productdisplay-main-img"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* RIGHT SIDE - INFO */}
      <div className="productdisplay-right">

        <h1>{product.name}</h1>

        <div className="productdisplay-price">
          ${product.new_price}
        </div>
        <div className="productdisplay-oldprice">
            ${product.old_price}
        </div>

        <p className="productdisplay-description">
          {product.description}
        </p>

        {/* Quantity */}
        <div className="productdisplay-quantity">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        {/* Add to Cart */}
        <button onClick={()=>{addToCart(product.id, quantity)}} className="productdisplay-cart-btn">
          Add to Cart
        </button>

         <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>

        {/* Extra Info */}
        <div className="productdisplay-extra">
          <p><strong>Category:</strong> {product.category}</p>
          
        </div>

      </div>

    </div>
  );
};

export default ProductDisplay;