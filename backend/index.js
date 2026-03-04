const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const Order = require("./models/Order");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB

mongoose.connect("mongodb+srv://User:Password@cluster0.vt8rdo6.mongodb.net/reactpetpaw");

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})

//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    console.log("Upload route hit");

    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})
//import order.js file 


// Schema for Creating Products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res) =>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        category:req.body.category,
        description:req.body.description,
        image:req.body.image,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for Deleting Product

app.post('/removeproduct',async (req,res) =>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// Creating API for getting all Products

app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Update Product API
app.post("/updateproduct", upload.single("image"), async (req, res) => {

  try {

    const {
      id,
      name,
      category,
      description,
      new_price,
      old_price
    } = req.body;

    let image;

    if (req.file) {
      image = `http://localhost:4000/images/${req.file.filename}`;
    }

    const updateFields = {
      name,
      category,
      description,
      new_price,
      old_price
    };

    // Only update image if new one selected
    if (image) {
      updateFields.image = image;
    }

    await Product.findOneAndUpdate(
      { id: Number(id) },
      updateFields
    );

    res.json({
      success: true,
      message: "Product updated"
    });

  } catch (error) {

    console.log(error);

    res.json({
      success: false,
      message: "Update failed"
    });

  }

});

const updateProduct = async () => {

  const formData = new FormData();

  formData.append("id", productDetails.id);
  formData.append("name", productDetails.name);
  formData.append("category", productDetails.category);
  formData.append("description", productDetails.description);
  formData.append("new_price", productDetails.new_price);
  formData.append("old_price", productDetails.old_price);

  // only append if file selected
  if (productDetails.image instanceof File) {
    formData.append("image", productDetails.image);
  }

  const response = await fetch("http://localhost:4000/updateproduct", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  console.log(data);

  if (data.success) {
    alert("Product Updated Successfully");
    navigate("/listproduct");
  } else {
    alert("Update Failed");
  }

};

// Shema for User Model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating Endpoint for Registering User
app.post('/signup',async(req,res)=>{

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:{},   // ✅ empty object
})
    
    await user.save();

    const data ={
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//Creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token,  username: user.name});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

// Creating endpoint for New Products
app.get('/newcollections',async (req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("Popular Products Fetched");
    res.send(newcollection);
})

//Creating endpoint for Cat Products
app.get('/popularincat',async(req,res)=>{
    let products = await Product.find({category:"Cat"});
    let popular_in_cat = products.slice(0,4);
    console.log("Popular in Cat Fetched")
    res.send(popular_in_cat);
})
//creating middleware to fetch user
const fetchUser = async (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"});
    }else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using a valid token"});
        }
    }

}
//Get Cart Data endpoint 
app.post('/getcart', fetchUser, async (req,res)=>{

    try{

        let userData = await Users.findOne({_id:req.user.id});

        res.json({
            success:true,
            cartData:userData.cartData
        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({
            success:false,
            message:"Error loading cart"
        });

    }

});
//creating endpoint for products in cartdata
app.post("/addtocart", fetchUser, async (req, res) => {
  try {

    const { itemId, quantity } = req.body;

    let userData = await Users.findOne({ _id: req.user.id });

    if (!userData.cartData) {
      userData.cartData = {};
    }

    // If product not in cart
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = { quantity: quantity };
    } 
    // If product already in cart
    else {
      userData.cartData[itemId].quantity += quantity;
    }

    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    res.json({
      success: true,
      cartData: userData.cartData,
    });

  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// creating endpoint to change product quantity from cartdata
app.post('/removefromcart',fetchUser, async (req,res) =>{
    try {

        const { itemId } = req.body;

        console.log("Removed itemId:", itemId);

        let userData = await Users.findOne({_id:req.user.id});

        // check if item exists
        if(userData.cartData[itemId]){

            // decrease quantity
            userData.cartData[itemId].quantity -= 1;

            // remove item completely if quantity <= 0
            if(userData.cartData[itemId].quantity <= 0){
                delete userData.cartData[itemId];
                console.log("Item completely removed");
            }

            // update database
            await Users.findOneAndUpdate(
                {_id:req.user.id},
                {cartData:userData.cartData}
            );

        }

        res.json({
            success:true,
            cartData:userData.cartData
        });

    } catch(error){

        console.log(error);

        res.status(500).json({
            success:false,
            message:"Server error"
        });

    }

});
//Creating endpoint to delete product from Cart
app.post('/deletefromcart', fetchUser, async (req, res) => {

    const userData = await Users.findOne({_id:req.user.id});

    delete userData.cartData[req.body.itemId]; // ✅ REMOVE COMPLETELY

    await Users.findOneAndUpdate(
        {_id:req.user.id},
        {cartData:userData.cartData}
    );

    res.json({success:true});

});
//create order endpoint 
app.post("/placeorder", fetchUser, async (req, res) => {
    try {

        const { deliveryDetails } = req.body;

        const userData = await Users.findOne({ _id: req.user.id });

        if (!userData.cartData || Object.keys(userData.cartData).length === 0) {
    return res.status(400).json({
        success: false,
        message: "Cart is empty"
    });
}

        // calculate total
        let totalAmount = 0;
        let orderItems = [];

        for (const item in userData.cartData) {

    const cartItem = userData.cartData[item];

    if (!cartItem || !cartItem.quantity) continue;

    const product = await Product.findOne({ id: Number(item) });

    if (product) {
        totalAmount += product.new_price * cartItem.quantity;
        orderItems.push({
                    productId: product.id,
                    name: product.name,
                    price: product.new_price,
                    quantity: cartItem.quantity
                });
    }
    
}

        // create new order
        const newOrder = new Order({
            userId: req.user.id,
            items: orderItems,
            amount: totalAmount,
            deliveryDetails
        });

        await newOrder.save();

        // 🧹 CLEAR CART
        await Users.findOneAndUpdate(
            { _id: req.user.id },
            { cartData: {} }
        );

        res.json({
            success: true,
            message: "Order placed successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }
});
//get all order endpoint
app.get("/allorders", async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json({
            success: true,
            orders
        });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});
//Update Order Status
app.post("/updateorderstatus", async (req, res) => {
    try {

        const { orderId, status } = req.body;

        await Order.findByIdAndUpdate(orderId, {
            status: status
        });

        res.json({ success: true });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }
});
// Get Single Order By ID
app.get("/vieworder/:id", async (req, res) => {
    try {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        res.json({
            success: true,
            order
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false
        });
    }
});

app.listen(port, (error)=>{
    if(!error){
        console.log("Server Running on Port " +port)
    }else{
        console.log("Error : "+error);
    }
})
