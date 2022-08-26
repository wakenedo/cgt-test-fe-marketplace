import React from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/app.css'

//Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Header from './components/Header';




function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Product/test' element={<Product />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
