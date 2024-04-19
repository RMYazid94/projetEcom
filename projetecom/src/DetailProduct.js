import React from 'react'
import Product from './Product';

function DetailProduct({Products}) {
return (
<>
<div>
{Products.map((Product) =>(
<img src={Product.ImageUrl} />
<h1>{Product.Name}</h1>
<p>{Product.Price}</p>

))}
</div>
<input></input>
</>
    )
}

export default DetailProduct;