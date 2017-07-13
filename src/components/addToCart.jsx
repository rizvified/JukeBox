import React, { Component } from 'react';

class AddToCart extends Component {
  clickHandler = () => {
    const { id, name, price, quantity, cb } = this.props;
    const selected = {id, name, price, quantity};
    cb(selected);
  }

  render() {
    let text = this.props.text ? this.props.text : 'Add to Cart';
    return (
      <button onClick={ this.clickHandler }>
        {text}
      </button>
    );
  }
}

export default AddToCart;
