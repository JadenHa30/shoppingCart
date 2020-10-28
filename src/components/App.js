import React from 'react';
import Header from './header/Header';
import Products from './products/Products';
import Cart from './cart/Cart';
import Message from './message/Message';
import Footer from './footer/Footer';

function App() {
  return (
      <div className="hidden-sn animated deep-purple-skin">
        <Header />
        <main id="mainContainer">
          <div className="container">
            <Products />
            <Message />
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
