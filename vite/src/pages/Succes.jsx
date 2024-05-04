import React from "react";
import { Link } from "react-router-dom";

function Succes() {
  return (
    <div className="d-flex algin-item justify-content-center flex-column my-4">
      <h2>سفارش شما با موفقیت انجام شد</h2>
      <Link to="/" className="btn btn-light mt-2">
        بازگشت به فروشگاه
      </Link>
    </div>
  );
}

export default Succes;
