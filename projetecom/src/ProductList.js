import React from 'react'
import Product from './Product';
import Products from './Products';


function ProductList() {
  return (
    <>
    {Products.map((Prd)=>(
    <Product
    Image={Prd.ImageUrl}
    Name={Prd.Name}
    Price={Prd.Price}
    />
   )) }
    </>
  )
}

export default ProductList;

