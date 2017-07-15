import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import AddToCart from '../src/components/addToCart.jsx';

describe('AddToCart', () => {
  const id = 1;
  const name = 'sample';
  const price = 699;
  const cb = jest.fn();
  const bstyles = {
    padding: '5px 10px',
    lineHeight: '1.5',
    fontSize: '12px',
    borderRadius: '0',
    color: '#fff',
    backgroundColor: '#008cba',
    borderColor: '#0079a1',
  };

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

  it('allows us to set style', () => {
    const wrapper = mount(
      <AddToCart id={ id } name={ name } price={ price } cb={ cb } style={ bstyles } />,
    );
    expect(wrapper.prop('style')).toEqual(bstyles);
  });

  it('simulates a click on button', () => {
    const wrapper = shallow(
      <AddToCart id={ id } name={ name } price={ price } cb={ cb } />,
    );
    wrapper.find('button').simulate('click');
    expect(cb).toHaveBeenCalled();
  });
});
