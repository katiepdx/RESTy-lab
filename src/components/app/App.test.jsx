import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RestyContainer from '../../containers/RestyContainer';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<RestyContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
