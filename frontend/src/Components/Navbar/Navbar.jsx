import React, {useState, useContext} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '..//Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
   const [menuOpen, setMenuOpen] = useState(false);
   
   
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>PETPAW</p>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("dogs")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/dogs'>Dog</Link> {menu==="dogs"? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("cats")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/cats'>Cat</Link> {menu==="cats"? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?
        <>
        <span>Hello, {localStorage.getItem('username')}</span>
        <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        </>
      :<Link onClick={() => {setMenu("login")}} to="/login"><button>Login</button></Link>}
          <Link onClick={() => {setMenu("cart")}} to="/cart"><img src={cart_icon} alt=""/></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
export default Navbar