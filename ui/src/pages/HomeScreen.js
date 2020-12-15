import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col} from "react-bootstrap";
import Product from '../components/Product';
import {listProducts} from '../actions/productAction';
const HomeScreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading,error,products} = productList 
    
    useEffect(() => {
        dispatch(listProducts()) 
    },[dispatch])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id}sm={12} lg={6} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen;
