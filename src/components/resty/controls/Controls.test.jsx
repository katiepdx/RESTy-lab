
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component', () => {
  afterEach(() => cleanup());

  it('renders Controls', () => {
    const { asFragment } = render(<Controls
      url="www.api1.com"
      method="POST"
      json="test json"
      onChange={() => {}}
      onClick={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
