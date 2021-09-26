import React from 'react';
import './Deal.css';

const Deal = (props) => {
  const { name, location, cost, type, duration, image, flight } = props.deal;
  return (
    <div className="col-md-4 ">
      <div className="card deal">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="text-secondary">
            <span className="fw-bold">Location:</span> {location}
          </p>
          <p>
            <span className="fw-bold"> Duraton:</span> {duration}
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
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
