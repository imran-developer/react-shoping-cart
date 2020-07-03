import React from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Button,
    Col,
    Row
} from 'reactstrap';

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    });

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img 
                                height={80}
                                src={item.tinyImage}
                                alt={item.productName} />
                            </Col>
                            <Col>
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>price:- {item.productPrice}</span>
                                <Button onClick={() => removeItem(item)}>
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    
                    
                ))}
            </ListGroup>
            
            {
                cartItem.length >= 1 ? (
                    <Card>
                    <CardHeader>
                        Grand Total 
                    </CardHeader>
                    <CardBody>
                        Your Amount for {cartItem.length} product is {amount}
                    </CardBody>
                    <CardFooter>
                        <Button color="success" onClick={buyNow}> pay here</Button>
                    </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">Cart is Empty</h1>
                )
            }
        </Container>
    )
}

export default Cart;