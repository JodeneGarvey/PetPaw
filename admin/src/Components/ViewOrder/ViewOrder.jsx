import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewOrder = () => {

    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:4000/vieworder/${id}`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                setOrder(data.order);
            }
        });
}, []);
    if(!order) return <h2>Loading...</h2>;

    return (
        <div style={{padding:"30px"}}>
            <h2>Order Items</h2>

            {order.items.map((item, index) => (
    <div key={index}>
        {item.quantity} - {item.name}
    </div>
))}
        

            <h3>Total: ${order.amount}</h3>
        </div>
    );
};

export default ViewOrder;