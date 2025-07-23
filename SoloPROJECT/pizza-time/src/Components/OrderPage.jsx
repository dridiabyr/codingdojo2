import React, { useState } from 'react';
import OrderForm from './OrderForm';
import OrderSummary from './OrderSummary';

const OrderPage = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrderSubmit = () => {
    // Here you can do form validation, send order to backend, etc.
    setOrderConfirmed(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      {!orderConfirmed ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Place Your Order</h1>
          <OrderForm onSubmit={handleOrderSubmit} />
        </>
      ) : (
        <OrderSummary />
      )}
    </div>
  );
};

export default OrderPage;
