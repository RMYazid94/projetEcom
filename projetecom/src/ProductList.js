import React from 'react'
import Product from './Product';
import Products from './Products';
import { Link } from 'react-router-dom';



function ProductList() {
  return (
    <>
    <div className="d-flex justify-content ">
    {Products.map((Prd)=>(
                      <Link to={`/ProductList/${Prd.id}`} key={Prd.id}>
    <Product
    Image={Prd.ImageUrl}
    Name={Prd.Name}
    Price={Prd.Price}
    />
                    </Link>

   )) }
   </div>
    </>
  )
}

export default ProductList;

