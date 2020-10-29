import React from 'react';
import Header from './header/Header';
import Message from './message/Message';
import Footer from './footer/Footer';
import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';

function App() {
  return (
      <div className="hidden-sn animated deep-purple-skin">
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
