import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col} from "react-bootstrap";
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import {listProducts} from '../actions/productAction';

const HomeScreen = ({match}) => {
    const keyword = match.params.keyword
    
    const dispatch = useDispatch()
  
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList
  
    useEffect(() => {
      dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <div>
            {!keyword ? (
                <ProductCarousel />
            ) : (
                <Link to='/' className='btn btn-light'>
                Go Back
                </Link>
            )}
            <h1>Latest Products</h1>
            {loading?(<Loader/>):error?<Message variant='danger'>{error}</Message>:
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} lg={6} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>}
        </div>
    )
}

export default HomeScreen;
