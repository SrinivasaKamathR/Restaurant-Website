import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHanlder = () => {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHanlder} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
