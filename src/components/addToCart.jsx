import React from 'react';
import { number, string, object, func } from 'prop-types';

const AddToCart = ({
  id,
  name,
  price,
  style,
  cb,
  }) => {
  const selected = { id, name, price };
  const handleClick = () => {
    cb(selected);
  };
  return (
    <button
      className='rc_tc'
      style={ style }
      onClick={ handleClick }
    >
      <span className='rc_atc__txt'>
        Add to Cart
      </span>
    </button>
  );
};


AddToCart.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  style: object,
  cb: func.isRequired,
};

export default AddToCart;
