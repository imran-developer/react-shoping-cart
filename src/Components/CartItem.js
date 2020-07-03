import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';

const CartItem = ({product, addInCart}) => {
return (
    <Card className="mt-2 mb-1">
        <CardImg 
        top
        height="250"
        width="100%"
        src={product.smallImage} 
        />
        <CardBody>
            <CardTitle>
                {product.productName}
            </CardTitle>
            <CardText className="secondary">Price: Rs {product.productPrice}</CardText>
            <Button
            color="success"
            onClick={() => addInCart(product)} >BuyNow</Button>
        </CardBody>
    </Card>
)
}

export default CartItem;
