import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';
import { Props } from './types';

function renderTaskInput(props: Partial<Props>) {
    const defaultProps: Props = {
        addTask: () => {}
    }

    return render(
        <TaskForm {...defaultProps} {...props} />
    );
}

describe('TaskForm', () => {
    test('Should render component', () => {
        const { getByText } = renderTaskInput({});
        expect(getByText('Name'));
    });

    test('Should update text through input', () => {
        const addTask = jest.fn();
        const { getByPlaceholderText, getByText } = renderTaskInput({ addTask });
        const input = getByPlaceholderText('Buy groceries');
        fireEvent.change(input, { target: { value: 'Test' } });
        const button = getByText('Add Task');
        fireEvent.click(button);
        expect(addTask).toHaveBeenCalledWith('Test');
    });
});
