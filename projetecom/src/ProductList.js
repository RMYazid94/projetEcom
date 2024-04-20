import React from 'react'
import Product from './Product';
import Products from './Products';


function ProductList() {
  return (
    <>
    <div className="d-flex justify-content ">
    {Products.map((Prd)=>(
    <Product
    Image={Prd.ImageUrl}
    Name={Prd.Name}
    Price={Prd.Price}
    />
   )) }
   </div>
    </>
  )
}

export default ProductList;

