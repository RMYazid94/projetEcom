import React from 'react'
import Button from 'react-bootstrap/Button';

function DetailProduct({}) {
return (
<section className="d-flex flex-column">
<div className='d-flex align-items-center'>
  <div className="flex-shrink-0 ms-3 ">
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