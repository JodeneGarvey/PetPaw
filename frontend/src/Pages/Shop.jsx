import React, {useEffect} from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newsletter from '../Components/NewsLetter/Newsletter'
import CatProduct from '../Components/PetToys/CatProduct'

const Shop = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <CatProduct />
      <Offers />
      <Popular />
      <Newsletter />
    </div>
  )
}

export default Shop
