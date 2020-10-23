import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem'

describe('HistoryItem component', () => {
  afterAll(() => cleanup());

  it('renders HistoryItem', () => {
    const { asFragment } = render(<HistoryItem
      url="www.url.com"
      method="GET"
    />);
    expect(asFragment()).toMatchSnapshot();
  })
});
