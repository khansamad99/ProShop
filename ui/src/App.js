import {Container} from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './pages/Homescreen';
function App() {
  return (
    <div>
      <Header/>
        <Container>
          <Homescreen/>
        </Container>
      <Footer/>
    </div>
  );
}

export default App;
