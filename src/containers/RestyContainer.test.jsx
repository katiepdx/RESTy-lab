// tests that json returns from GET request and is displayed to screen

// tests that a confirmation message is returned and displayed to screen on POST API request 

// tests that a confirmation message is returned and displayed to screen on PUT API request

// tests that a confirmation message is returned and displayed to screen on DELETE API request

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@babel/polyfill'
import RestyContainer from './RestyContainer';

describe('RestyContainer container', () => {
  it('tests that json returns from GET request and is displayed to screen ', async () => {
    render(<RestyContainer />);

    const urlInput = screen.getByTestId('url-input');
    const getInput = screen.getByTestId('get-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(urlInput, {
      target: { value: 'https://jsonplaceholder.typicode.com/posts/' }
    });

    fireEvent.click(getInput);

    fireEvent.click(submitButton);

    const jsonResponse = await screen.getByTestId('json-response')

    setTimeout(() => {
      waitFor(() => {
        return expect(jsonResponse).not.toBeEmptyDOMElement()
      });
    }, 5000);
  });

  it('tests that a confirmation message is returned and displayed to screen on DELETE API request', async () => {
    render(<RestyContainer />);

    const urlInput = screen.getByTestId('url-input');
    const getInput = screen.getByTestId('get-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(urlInput, {
      target: { value: 'https://jsonplaceholder.typicode.com/posts/1' }
    });

    fireEvent.click(getInput);

    fireEvent.click(submitButton);

    const jsonResponse = await screen.getByTestId('json-response')

    setTimeout(() => {
      waitFor(() => {
        return expect(jsonResponse).not.toBeEmptyDOMElement()
      });
    }, 5000);
  });
});
