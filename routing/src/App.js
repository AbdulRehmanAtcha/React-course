// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Home from './Home';
import Header from './components/Header';
import Error from './components/Error';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
