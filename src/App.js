import React, {useState} from 'react'
import Headers from './Component/Layout/Headers'
import Cart from './Component/Cart/Cart'
import Product from './Component/Product/Product'
import Footer from './Component/Footer/Footer'
import CartProvider from './Component/Store/CardProvider'
import { Routes, Route } from 'react-router-dom';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Headers onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Routes>
        <Route path="Product" element={<Product />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}


export default App
