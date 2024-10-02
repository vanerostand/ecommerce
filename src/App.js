import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Product from './Components/Product/Product';

export const ProductContext = createContext();

function App() {
  const [products, setProducts ] = useState([]);
  return (
    <ProductContext.Provider value={{products, setProducts}}>
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
    </ProductContext.Provider>
  );
}

export default App;
