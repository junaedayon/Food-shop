import { useState } from 'react';
import { Fragment } from 'react-is';
import './App.css';
import Cart from './Components/Card/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [modalIsShow , setModalIsShow] =useState(false)

  const showHandler = () => {

    setModalIsShow(true);
  }

  const disableHandler = () => {
    setModalIsShow(false)
  }

  return (

   <CartProvider >

    { modalIsShow && <Cart onDisablePortal = {disableHandler} ></Cart> }

     <Header onShowPortal = {showHandler}></Header>

     <main>
       <Meals></Meals>
     </main>

   </CartProvider>
    
  );
}

export default App;
