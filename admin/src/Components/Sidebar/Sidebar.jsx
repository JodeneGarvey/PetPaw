import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/addproduct_icon.png'
import list_product_icon from '../../assets/listproduct_icon.png'
import orders from '../../assets/order_icon.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
        <Link to={'/allorders'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={orders} alt="" />
                <p>Orders</p>
            </div>
        </Link>

    </div>
  )
}

export default Sidebar