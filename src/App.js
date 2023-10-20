import React, { useContext ,useState} from 'react'
import Headers from './Component/Layout/Headers'
import Cart from './Component/Cart/Cart'
import Product from './Component/Product/Product'
import Footer from './Component/Footer/Footer'
import CartProvider from './Component/Store/CardProvider'
import { Routes ,Route} from 'react-router-dom'
import About from './About/About'
import Home from './Component/HomePage/Home'
import ContactUs from './Component/ContactUs-Page/ContactUs'
import AuthForm from './Authentication/AuthForm'
import AuthContext from './Component/Store/auth-Context'
// import ProfileForm from './Authentication/Profile/ProfileForm'
import UserProfile from './Authentication/Profile/UserProfile'


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx=useContext(AuthContext);
  

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Headers  onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Routes>
        { authCtx.isLonggedIn && (
          <Route path='Product' element={<Product/>}/>
        )}
        
      <Route path='about' element={<About/>}/>
      <Route path='Home'element={<Home/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      <Route path='/auth' element={<AuthForm/>}/>
      {authCtx.isLonggedIn && (
         <Route path='/profile' element={<UserProfile/>}/>
      )}
      
      <Route path='*' element={<Home />} /> {/* Default route */}
      </Routes>
      
      <Footer/>
    </CartProvider>
  )
}

export default App
