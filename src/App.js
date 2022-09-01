import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/app.css'

//Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Header from './components/Header';
import Shop from './pages/Shop';

import { DarkModeContext } from './context';

function App() {
  const { darkMode } = useContext(DarkModeContext)

  console.log('App', darkMode)
  return (
    <div className={darkMode ? `App App-dark` : `App App-light`}>
      <Header />
      <Routes>
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Product/:id' element={<Product />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
