import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Product(Props){
  return (
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={Props.Image}/>
<Card.Body>
<Card.Title>{Props.Name}</Card.Title>
<Card.Text>
    {Props.Price}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product ;