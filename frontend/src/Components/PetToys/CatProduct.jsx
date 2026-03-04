import React, {useState,useEffect} from 'react'
import './CatProduct'
import './CatProduct.css'
import Item from '../Item/Item'

const CatProduct = () => {
  const [catcategory,SetCatCategory] = useState([]);
  
    useEffect(()=>{
      fetch('http://localhost:4000/popularincat')
      .then((response)=>response.json())
      .then((data)=>SetCatCategory(data));
    },[])

  return (
    <div className='cat'>
        <h1>POPULAR PRODUCTS FOR CATS</h1>
        <hr/>
        <div className="products">
            {catcategory.map((item,i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

        </div>
    </div>
  )
}
export default CatProduct
