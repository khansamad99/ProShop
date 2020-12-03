import React from 'react';
import {Row,Col,Image,Card,ListGroup,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Rating from "../components/Rating";
import products from '../products';

const ProductScreen = ({match}) => {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <div>
            <Link className="btn btn-dark my-3" to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>Price:${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description:{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
