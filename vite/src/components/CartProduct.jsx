import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { getProductData } from "../data/item";
import { CartContext } from "../context/CartContext";

function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  return (
    <>
      <p>{productData.title}</p>
      <p> تعداد :{quantity} </p>
      <p> قیمت :{quantity * productData.price} </p>
      <Button
        size="sm"
        className="mb-5 text-white"
        variant="btn btn-outline-secondary"
        onClick={() => cart.deleteFromCart(id)}
      >
        حذف
      </Button>
    </>
  );
}

export default CartProduct;
