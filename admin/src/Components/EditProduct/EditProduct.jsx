import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    category: "",
    description: "",
    image: "",
    new_price: "",
    old_price: ""
  });

  const [imagePreview, setImagePreview] = useState("");

  // Load product data
  useEffect(() => {

    fetch("http://localhost:4000/allproducts")
      .then(res => res.json())
      .then(data => {

        const product = data.find(p => p.id === Number(id));

        if(product){
          setProductDetails(product);
          setImagePreview(product.image);
        }

      });

  }, [id]);

  // Handle input change
  const changeHandler = (e) => {

    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });

  };

  // Handle image change
  const imageHandler = (e) => {

    const file = e.target.files[0];

    setImagePreview(URL.createObjectURL(file));

    setProductDetails({
      ...productDetails,
      image: file
    });

  };

  // Update product
  const updateProduct = async () => {

    const formData = new FormData();

    formData.append("id", productDetails.id);
    formData.append("name", productDetails.name);
    formData.append("category", productDetails.category);
    formData.append("description", productDetails.description);
    formData.append("new_price", productDetails.new_price);
    formData.append("old_price", productDetails.old_price);
    formData.append("image", productDetails.image);

    const response = await fetch("http://localhost:4000/updateproduct", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if(data.success){

      alert("Product Updated Successfully");
      navigate("/listproduct");

    }else{
      alert("Update Failed");
    }

  };

  return (
    <div className="edit-product">

      <h1>Edit Product</h1>

      {/* Image Preview */}
      <div className="image-section">

        <img
          src={imagePreview}
          alt=""
          className="product-image-preview"
        />

        <label className="image-upload-btn">
          Update Image
          <input
            type="file"
            onChange={imageHandler}
            hidden
          />
        </label>

      </div>

      {/* Inputs */}
      <input
        type="text"
        name="name"
        value={productDetails.name}
        onChange={changeHandler}
        placeholder="Product Name"
      />

      <input
        type="text"
        name="category"
        value={productDetails.category}
        onChange={changeHandler}
        placeholder="Category"
      />

      <input
        type="number"
        name="old_price"
        value={productDetails.old_price}
        onChange={changeHandler}
        placeholder="Old Price"
      />

      <input
        type="number"
        name="new_price"
        value={productDetails.new_price}
        onChange={changeHandler}
        placeholder="New Price"
      />

      {/* Update Button */}
      <button
        className="update-btn"
        onClick={updateProduct}
      >
        Update Product
      </button>

    </div>
  );

};

export default EditProduct;