import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap';
import Message from '../components/Message';
import {addToCart} from '../actions/cartAction';

const CartScreen = ({match,location,history}) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]):1

    const dispatch = useDispatch()

    const cart  = useSelector((state) => state.cart)
    const {cartItems} = cart
    
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])

    return (
        <Row>
            <Col md={8}>
                {cartItems === 0 ? (<Message>Your Cart is empty<Link className="btn btn-dark my-3" to='/'>Go Back
                </Link></Message>) : (
                <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image}/>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            </Col>
            <Col md={2}>
            
            </Col>
            <Col md={2}>
            
            </Col>
        </Row>
    )
}

export default CartScreen
