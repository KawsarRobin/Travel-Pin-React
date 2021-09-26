import React from 'react';
import Selected from '../Selected/Selected';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  const totalCost = cart?.reduce(
    (prev, deal) => prev + parseFloat(deal.cost),
    0
  );

  console.log(totalCost);
  return (
    <div>
      <h3>Packages Added: {cart.length}</h3>
      <h3>Total: {totalCost}</h3>
      {cart.map((deal) => (
        <Selected key={deal.id} deal={deal}></Selected>
      ))}

      <button className="btn btn-success">Book Now</button>
    </div>
  );
};

export default Cart;
