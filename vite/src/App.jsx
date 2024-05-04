import React from "react";
import { Container } from "react-bootstrap";
import NavBarr from "./components/NavBarr";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";
import Succes from "./pages/Succes";

function App() {
  return (
    <CartProvider>
      <Container>
        <NavBarr></NavBarr>
        <Routes>
          <Route index Component={Shop} />
          <Route path="/success" Component={Succes} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
