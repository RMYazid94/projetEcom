import React from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Products from './Products';

function DetailProduct({}) {
    const {id}=useParams();
    const product=Products.find((prod)=>prod.id==id); 
return (
<section className="d-flex flex-column w-100">
<div className='d-flex justify-content-around w-100'>
  <div className="flex-shrink-0 ms-3  w-50">
    <img src="" alt="image"></img>
  </div>
  <div class="flex-grow-1 ms-3">
     <h2>Name Product</h2>
     <p>Price</p>
     <input placeholder='1'></input>
     <Button as="input" type="submit" value="Submit" />{' '}
  </div>
</div>
<div>
    <h4>About this Product</h4>
    <p>Description du produit</p>
    <Button variant="danger">Delete Product</Button>{' '}
    </div>
</section>
)
};

export default DetailProduct;