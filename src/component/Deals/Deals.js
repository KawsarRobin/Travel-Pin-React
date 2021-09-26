import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Deal from '../Deal/Deal';
import './Deals.css';

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./TourDB.json')
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  const handleCart = (deal) => {
    const newDeal = [...cart, deal];
    setCart(newDeal);
  };
  // console.log(cart);
  return (
    <div>
      <div className="row g-4 ms-5 my-5">
        <div className="col-md-9 deals">
          <div className="row g-4">
            {deals?.map((deal) => (
              <Deal key={deal.id} deal={deal} handleCart={handleCart}></Deal>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Deals;
