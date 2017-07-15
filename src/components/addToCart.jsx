import React from 'react';
import { number, string, object, func } from 'prop-types';

const bstyles = {
  padding: '5px 10px',
  lineHeight: '1.5',
  fontSize: '12px',
  borderRadius: '0',
  color: '#fff',
  backgroundColor: '#008cba',
  borderColor: '#0079a1',
};

const AddToCart = ({
  id,
  name,
  price,
  style = bstyles,
  cb,
  }) => {
  const selected = { id, name, price };
  const handleClick = () => {
    cb(selected);
  };
  return (
    <button
      style={ style }
      onClick={ handleClick }
    >
      <span>
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
