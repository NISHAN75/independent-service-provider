import React from "react";
import { Link, useParams } from "react-router-dom";

const CheckOut = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="mx-auto w-50 mb-5">
      <h1 className="text-center mt-5">
        This is service number:{params.servicesId}
      </h1>
      <div className="checkout-info">
        <img
          src="https://images.unsplash.com/photo-1624953901718-e24ee7200b85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="img-fluid border"
        />
        <p className="mt-3">
          “Dreams don't work unless you take action.<br/> The surest way to make your
          dreams come true is to live them.”
        </p>

        <Link to='/booking' className="pe-auto text-decoration-none f-bold" >
        <button  className="btn btn-two mx-auto d-block mt-3">
          Booking
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
