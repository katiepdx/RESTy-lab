import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList'

describe('HistoryList component', () => {
  afterAll(() => cleanup());

  it('renders HistoryList', () => {
    const { asFragment } = render(<HistoryList
      history={[
        {
          url: "www.api1.com",
          method: "GET"
        }, {
          url: "www.api2.com",
          method: "PUT"
        }, {
          url: "www.api3.com",
          method: "GET"
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  })
});
