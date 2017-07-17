import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import AddToCart from '../src/components/addToCart.jsx';

describe('AddToCart', () => {
  const id = 1;
  const name = 'sample';
  const price = 699;
  const cb = jest.fn();

  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(
      <AddToCart id={ id } name={ name } price={ price } cb={ cb } />,
    );
  });

  it('renders a button', () => {
    const wrapper = shallow(
      <AddToCart id={ id } name={ name } price={ price } cb={ cb } />,
    );
    expect(wrapper.find('button')).toHaveLength(1);
  });


  it('simulates a click on button', () => {
    const wrapper = shallow(
      <AddToCart id={ id } name={ name } price={ price } cb={ cb } />,
    );
    wrapper.find('button').simulate('click');
    expect(cb).toHaveBeenCalled();
  });
});
