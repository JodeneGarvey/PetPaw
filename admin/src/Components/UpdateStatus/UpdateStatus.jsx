import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateStatus = () => {

    const { id } = useParams();
     const [status, setStatus] = useState("Pending");

    
   
    const updateStatus = async () => {

        const response = await fetch("http://localhost:4000/updateorderstatus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orderId: id,
                status: status
            })
        });

        const data = await response.json();

        if(data.success){
            alert("Status Updated Successfully");
        }
    };

    return (
        <div style={{padding:"30px"}}>
            
            
            <select onChange={(e)=>setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
            </select>

            <button onClick={updateStatus}>
                Save
            </button>
        </div>
    );
};

export default UpdateStatus;