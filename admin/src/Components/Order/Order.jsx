import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Order.css'
const Order = () => {
    
const [orders, setOrders] = useState([]);
const navigate = useNavigate();
 useEffect(() => {
        fetch("http://localhost:4000/allorders")
        .then(res => res.json())
        .then(data => {
            if(data.success){
                setOrders(data.orders);
            }
        });
    }, []);
const updateStatus = async (newStatus) => {

    const response = await fetch("http://localhost:4000/updateorderstatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderId: id,
        status: newStatus
      })
    });
    
    

   
    const data = await response.json();

    if (data.success) {
      alert("Status Updated");
      setOrder({ ...order, status: newStatus });
    }
  };


    
  return (
    <div className="order-list">
            <h1>All Products</h1>

            <div className="orderlist-table">

                <div className="orderlist-format-main">
                    <p>Customer Name</p>
                    <p>Delivery Address</p>
                    <p>Status</p>
                    <p>Action</p>
                </div>

                <div className="orderlist-allorders">

                    {orders.map((order)=>{

                        return (
                            <div key={order._id} className="orderlist-format-main orderlist-format">


                                <p>{order.deliveryDetails?.firstName} {order.deliveryDetails?.lastName}</p>

                                <p>{order.deliveryDetails?.address}</p>

                                <p>{order.status}</p>

                                <button
                                    onClick={()=> navigate(`/updatestatus/${order._id}`)}
                                    className="orderlist-edit-btn"
                                >
                                    Update
                                </button>

                                <button
                                    onClick={()=> navigate(`/vieworder/${order._id}`)}
                                    className="orderlist-viewitem-btn"
                                >
                                    Order
                                </button>

                            </div>
                        )

                    })}

                </div>

            </div>

        </div>
    
        
    )
}

export default Order