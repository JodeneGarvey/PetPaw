import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);

    // ✅ Start with empty cart (NOT default cart)
    const [cartItems, setCartItems] = useState({});



    // ✅ Load products and cart on startup
    useEffect(() => {

        // Load all products
        fetch("http://localhost:4000/allproducts")
        .then((response) => response.json())
        .then((data) => setAll_Product(data));


        // Load cart from backend if logged in
        if (localStorage.getItem("auth-token")) {

            fetch("http://localhost:4000/getcart", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((data) => {

                if(data.success){

                    console.log("Cart loaded:", data.cartData);

                    setCartItems(data.cartData || {});

                }

            });

        }

    }, []);




    // ✅ ADD TO CART (Backend controls quantity)
    const addToCart = (itemId, quantity = 1) => {

        fetch("http://localhost:4000/addtocart", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                itemId,
                quantity,
            }),
        })
        .then((response) => response.json())
        .then((data) => {

            if(data.success){

                // Reload cart from backend
                fetchCart();

            }

        });

    };



    // ✅ REMOVE ONE QUANTITY
    const removeFromCart = (itemId) => {

        fetch("http://localhost:4000/removefromcart", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                itemId,
            }),
        })
        .then((response) => response.json())
        .then((data) => {

            if(data.success){

                // Reload cart from backend
                setCartItems(data.cartData || {});

            }

        });

    };



    // ✅ DELETE PRODUCT COMPLETELY
    const deleteFromCart = (itemId) => {

        fetch("http://localhost:4000/removefromcart", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                itemId,
            }),
        })
        .then((response) => response.json())
        .then((data) => {

            if(data.success){

                const updatedCart = {...data.cartData};

                delete updatedCart[itemId];

                setCartItems(updatedCart);

            }

        });

    };



    // ✅ Reload cart helper function
    const fetchCart = () => {

        fetch("http://localhost:4000/getcart", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {

            if(data.success){

                setCartItems(data.cartData || {});

            }

        });

    };



    // ✅ TOTAL DIFFERENT PRODUCTS COUNT
    const getTotalCartItems = () => {

        let total = 0;

        for (const item in cartItems) {

            if (cartItems[item]?.quantity > 0) {

                total += 1;

            }

        }

        return total;

    };



    // ✅ TOTAL QUANTITY COUNT (optional)
    const getTotalQuantity = () => {

        let total = 0;

        for (const item in cartItems) {

            total += cartItems[item]?.quantity || 0;

        }

        return total;

    };



    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartItems,
        getTotalQuantity,
    };



    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );

};

export default ShopContextProvider;