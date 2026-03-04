import { useState, useEffect } from 'react'
import React from 'react'
import './ListProduct.css'

const ListProduct = () => {
  
     const [products, setProducts] = useState([]);

    // Fetch products from backend
    const fetchProducts = async () => {
        await fetch('http://localhost:4000/allproducts')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // Remove product
    const removeProduct = async (id) => {

        await fetch('http://localhost:4000/removeproduct',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id:id})
        })

        fetchProducts();
    }

    return (
        <div className="product-list">
            <h1>All Products</h1>

            <div className="productlist-table">

                <div className="productlist-format-main">
                    <p>Image</p>
                    <p>Name</p>
                    <p>Category</p>
                    <p>New Price</p>
                    <p>Action</p>
                </div>

                <div className="productlist-allproducts">

                    {products.map((product,index)=>{

                        return (
                            <div key={index} className="productlist-format-main productlist-format">

                                <img src={product.image} alt="" className='productlist-product-icon'/>

                                <p>{product.name}</p>

                                <p>{product.category}</p>


                                <p>${product.new_price}</p>

                                <button
                                    onClick={()=>window.location.href=`/editproduct/${product.id}`}
                                    className="productlist-edit-btn"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={()=>removeProduct(product.id)}
                                    className="productlist-remove-btn"
                                >
                                    Remove
                                </button>

                            </div>
                        )

                    })}

                </div>

            </div>

        </div>
    )

}
  


export default ListProduct