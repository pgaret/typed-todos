import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskInput from './TaskInput';
import { Props } from './types';

function renderTaskInput(props: Partial<Props>) {
    const defaultProps: Props = {
        addTask: () => {}
    }

    return render(
        <TaskInput {...defaultProps} {...props} />
    );
}

describe('TaskInput', () => {
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