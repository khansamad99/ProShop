import {Container} from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import LoginScreen from './pages/LoginScreen';
import CartScreen from './pages/CartScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfileScreen from './pages/ProfileScreen';
import ShippingScreen from './pages/ShippingScreen';
import PaymentScreen from './pages/PaymentScreen';
import OrderScreen from './pages/OrderScreen'
import PlaceOrder from './pages/PlaceOrder';
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from "./pages/UserEditScreen";
import PlaceOrderScreen from "./pages/PlaceOrder";
import ProductEditScreen from "./pages/ProductEditScreen";
import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
          <Route path='/payment' component={PaymentScreen}/>
          <Route path='/placeorder' component={PlaceOrder}/>
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/register' component={RegisterScreen}/>  
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/search/:keyword' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
