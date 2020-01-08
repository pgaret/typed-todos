import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskButton from './TaskButton';
import { Props } from './types';

function renderTaskButton(props: Partial<Props>) {
    const defaultProps: Props = {
        handleClick: () => {},
        value: false,
        text: ''
    }

    return render(
        <TaskButton {...defaultProps} {...props} />
    );
}

describe('TaskButton', () => {
    test('Should render component', () => {
        const { container, getByText } = renderTaskButton({ text: 'text' });
        expect(container.querySelector('button')).toBeInTheDocument();
        expect(getByText('text')).toBeInTheDocument();
    });

    test('Should trigger click function with value if it is specified', () => {
        const handleClick = jest.fn();
        const { getByText } = renderTaskButton({ value: 'test', text: 'Button Text', handleClick: handleClick });
        const button = getByText('Button Text');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledWith('test');
        expect(handleClick).toBeCalledTimes(1);
    });

    test('Should trigger click function without value if none is specified', () => {
        const handleClick = jest.fn();
        const { getByText } = renderTaskButton({ text: 'Button Text', handleClick: handleClick });
        const button = getByText('Button Text');
        fireEvent.click(button);
        expect(handleClick).toBeCalledTimes(1);
    });
});