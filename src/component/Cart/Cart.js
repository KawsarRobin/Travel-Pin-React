import {
  faCartArrowDown,
  faCube,
  faHandHoldingUsd,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Selected from '../Selected/Selected';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;

  const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />;
  const totalIcon = <FontAwesomeIcon icon={faHandHoldingUsd} />;
  const selectedIcon = <FontAwesomeIcon icon={faCube} />;
  const bookIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  const totalCost = cart?.reduce(
    (prev, deal) => prev + parseFloat(deal.cost),
    0
  );

  return (
    <div className=" cart me-3 shadow-lg p-3">
      <h4 className="mb-4">{cartIcon} Selection Summary</h4>
      <h5>
        {selectedIcon} Packages Added: {cart.length}
      </h5>
      <h5>
        {totalIcon} Total Payable: ${totalCost}
      </h5>

      {cart.map((deal) => (
        <Selected key={Math.random()} deal={deal}></Selected>
      ))}

      <button className="btn btn-primary btn-sm rounded ">
        {bookIcon} Book Now
      </button>
    </div>
  );
};

export default Cart;
