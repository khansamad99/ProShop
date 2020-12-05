import React,{useState,useEffect} from 'react';
import {Row,Col} from "react-bootstrap";
import Product from '../components/Product';
import axios from "axios";
const HomeScreen = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');

            setProducts(data);
        }
        
        fetchProducts();
    },[])
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
