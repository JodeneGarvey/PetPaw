
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer'
import dog_banner from './Components/Assets/dog banner.jpg'
import cat_banner from './Components/Assets/cat banner.jpg'
import Checkout from './Pages/Checkout';


function App() {
  return (
   <div >
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/dogs' element={<ShopCategory banner={dog_banner} category="Dog"/>}/>
        <Route path='/cats' element={<ShopCategory banner={cat_banner} category="Cat"/>}/>
        
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
