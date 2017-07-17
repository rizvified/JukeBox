import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import CurrencyInput from 'react-currency-input';

const Summary = ({
  selected,
  currency = 'usd',
  style,
}) => {
  const items = selected.length;
  const totalCost = selected.reduce((total, item) => {
    if (item.quantity === 1) {
      total += item.price;
    } else {
      total += (item.price * item.quantity);
    }
    return total;
  }, 0);
  const convertCurr = () => {
    let parsed;
    switch (currency) {
      case currency === 'euro':
        parsed = (<CurrencyInput
          prefix='&#8364;'
          thousandSeparator='.'
          decimalSeparator=','
          value={ totalCost }
        />);
        break;
      case currency === 'gbp':
        parsed = (<CurrencyInput
          prefix='&#8356;'
          thousandSeparator=','
          decimalSeparator='.'
          value={ totalCost }
        />);
        break;
      case currency === 'inr':
        parsed = (<CurrencyInput
          prefix='&#8377;'
          thousandSeparator=','
          decimalSeparator='.'
          value={ totalCost }
        />);
        break;
      default:
        parsed = (<CurrencyInput
          prefix='&#36;'
          thousandSeparator=','
          decimalSeparator='.'
          value={ totalCost }
        />);
    }
    return parsed;
  };
  return (
    <div
      className='rc_smry'
      style={ style }
    >
      <div className='rc_smry__details'>
        <span className='rc_smry__icount'>
          {
            items > 1 ? `${items} Items` : `${items} Item`
          }
        </span>
        <br />
        <span className='rc_smry__amount'>
          { convertCurr }
        </span>
      </div>
    </div>
  );
};

Summary.propTypes = {
  selected: arrayOf(object).isRequired,
  currency: string,
  style: object,
};

export default Summary;
