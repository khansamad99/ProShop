import {Container} from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './pages/Homescreen';
function App() {
  return (
    <div>
      <Header/>
        <Container>
          <main className="py-3"><h1>Welcome To ProShop </h1></main>
          <Homescreen/>
        </Container>
      <Footer/>
    </div>
  );
}

export default App;
