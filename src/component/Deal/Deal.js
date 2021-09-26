import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Deal.css';

const Deal = (props) => {
  const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;

  const { name, location, cost, type, duration, image, flight } = props.deal;

  return (
    <div className="col-md-4 ">
      <div className="card shadow deal">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="">
            <span className="fw-bold">Location:</span> {location}
          </p>
          <p>
            <span className="fw-bold"> Duration:</span> {duration}
          </p>
          <p>
            <span className="fw-bold"> Fees: </span>${cost}
          </p>
          <p>
            <span className="fw-bold">Tour-Type:</span> {type}
          </p>
          <p>
            <span className="fw-bold">Flight:</span> {flight}
          </p>
          <button
            onClick={() => {
              props.handleCart(props.deal);
            }}
            className=" btn btn-outline-danger btn-sm rounded "
          >
            {cartIcon} Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
