import React from 'react';
import { shallow, render } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import CurrencyInput from 'react-currency-input';
import Summary from '../src/components/summary.jsx';

describe('Summary', () => {
  const props = {
    selected: [
      { id: 1, name: 'something', price: 699, quantity: 1 },
      { id: 2, name: 'someOtherThing', price: 899, quantity: 5 },
    ],
    currency: 'gbr',
  };

  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(
      <Summary { ...props } />,
    );
  });

  it('displays correct grammar', () => {
    const wrapper = render(<Summary { ...props } />);
    expect(wrapper.find('.rc_smry__icount').text()).toContain('2 Items');
  });
});
