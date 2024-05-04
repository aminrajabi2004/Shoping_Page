import React, { useContext, useEffect, useState } from "react";
import { Navbar, Button, Modal, ModalHeader } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

function NavBarr() {
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  async function Checkout() {
    const response = await fetch("http://localhost:3000/apii", {
      method: "POST",
      headers: { "Content-Type": "application/json " },
      body: JSON.stringify({
        items: cart.items,
      }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.assign(data.url);
    }
  }
  return (
    <>
      <Navbar className="border-bottom border-secondary">
        <Navbar.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ({productCount}) <BsCart className="mx-1"></BsCart> سبد خرید
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <ModalHeader>
          <Modal.Body>
            {productCount > 0 ? (
              <>
                <h3 className="mb-4">سبد خرید</h3>
                {cart.items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  ></CartProduct>
                ))}
                <h3>مجموع قیمت:{cart.getTotalAmount()}</h3>
              </>
            ) : (
              <h3>سبد خرید خالی است</h3>
            )}
            <Button className="mt-4" variant="btn btn-light" onClick={Checkout}>
              ثبت سفارش
            </Button>
            <Button
              onClick={() => handleClose()}
              variant="btn btn-outline-secondary"
              className="mt-4 mx-3 text-white"
            >
              بستن
            </Button>
          </Modal.Body>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default NavBarr;
