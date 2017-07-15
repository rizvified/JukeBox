import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import Summary from '../src/components/summary.jsx';

describe('Summary', () => {
  const selected = [
    { id: 1, name: 'something', price: 699, quantity: 1 },
    { id: 2, name: 'someOtherThing', price: 899, quantity: 5 },
  ];

  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(
      <Summary selected={ selected } />,
    );
  });
});
