import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Response from './Response'

describe('Response component', () => {
  afterAll(() => cleanup());

  it('renders Response', () => {
    const { asFragment } = render(<Response
      apiResponse={[
        {
          "_id": "5da237699734fdcb7bef8f56",
          "name": "Miles Shortman",
          "image": "https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639"
        },
        {
          "_id": "5da237699734fdcb7bef8f54",
          "name": "Mitzi",
          "image": "https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331"
        },
        {
          "_id": "5da237699734fdcb7bef8f55",
          "name": "Arnie",
          "image": "https://vignette.wikia.nocookie.net/heyarnold/images/4/42/Arnie.jpg/revision/latest/scale-to-width-down/310?cb=20110109195825"
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  })
});
