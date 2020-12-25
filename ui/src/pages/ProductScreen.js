import React,{useState,useEffect} from 'react';
import {Row,Col,Image,Card,ListGroup,Button,Form} from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import Rating from "../components/Rating";
import Loader from '../components/Loader';
import Message from '../components/Message';
import {listProductDetail} from '../actions/productAction';

const ProductScreen = ({history,match}) => {

    const [qty,setQty] = useState(0);

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const {error,loading,product} = productDetails


    useEffect(() => {
        dispatch(listProductDetail(match.params.id))
    },[dispatch,match])
    
    const addToCart = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    return (
        <div>
            <Link className="btn btn-dark my-3" to='/'>
                Go Back
            </Link>
            {loading?(<Loader/>):error?<Message variant='danger'>{error}</Message>:
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
                        <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock>0?'In Stock':'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {product.countInStock>0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <Form.Control style={{padding:'10px'}}as='select' value={qty} onChange={(e) => 
                                            setQty(e.target.value)
                                        }>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                        <ListGroup.Item>
                            <Button onClick={addToCart} className="btn-block" type="button" disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                       </ListGroup> 
                    </Card>
                </Col>
            </Row>}
        </div>
    )
}

export default ProductScreen
