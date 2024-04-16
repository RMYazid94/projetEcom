import React from 'react'
import {
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react'



const Product = (Props) => (
<Card>
    <Image src={Props.Image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{Props.Name}</CardHeader>
      <CardDescription>
    {Props.Price}
      </CardDescription>
    </CardContent>
</Card>
)

export default Product ;