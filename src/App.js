import { Route, Routes } from "react-router-dom";
import React, { useState, Suspense } from "react";

// PAGES IMPORTS
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Menu from "./components/pages/Menu";
import Checkout from "./components/pages/Checkout";
// lazy loading a page that is not so often used, so our page start faster at first
const ContactUs = React.lazy(() => import("./components/pages/ContactUs"));

const App = () => {
  const [cartIsActive, setCartIsActive] = useState(false);

  const showCart = () => {
    setCartIsActive(true);
  };

  const hideCart = () => {
    setCartIsActive(false);
  };

  return (
    <>
      <Header onShowCart={showCart} />
      <main>
        {cartIsActive && <Cart onHideCart={hideCart} />}
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Meals />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
