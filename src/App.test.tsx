import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Should render component', () => {
    const { container } = render(
      <App />
    );

    expect(container.querySelector('.app')).toBeInTheDocument();
  });

  
})