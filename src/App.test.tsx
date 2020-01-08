import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Should render component', () => {
      const { container } = render(
        <App />
      );

      expect(container.querySelector('.app')).toBeInTheDocument();
  });

  test ('Should execute functions', () => {
    const { container, getByPlaceholderText, getByText } = render(
        <App />
    );

    const input = getByPlaceholderText('Buy groceries');
    fireEvent.change(input, { target: { value: 'asdf' } });

    const submit = getByText('Add Task');
    fireEvent.click(submit);

    expect(getByText('asdf')).toBeInTheDocument();
    expect(getByText('Finish')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();
    
    const finish = getByText('Finish');
    fireEvent.click(finish);
    
    expect(getByText('Completed')).toBeInTheDocument();

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    expect(container.querySelectorAll('button').length).toEqual(1);

  })


})