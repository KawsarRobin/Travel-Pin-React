import React from 'react';
import './Selected.css';

const Selected = (props) => {
  const { name, image } = props?.deal;

  console.log(name, image);
  return (
    <>
      <div className="d-flex  my-3">
        <img className="w-25 mx-2" src={image} alt="" />
        <h5>{name}</h5>
      </div>
    </>
  );
};

export default Selected;
