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
import UserEditScreen from "./pages/UserEditScreen";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
          <Route path='/payment' component={PaymentScreen}/>
          <Route path='/placeorder' component={PlaceOrder}/>
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/register' component={RegisterScreen}/>  
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
