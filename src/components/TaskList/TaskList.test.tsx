import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList';
import { Props } from './types';

function renderTaskList(props: Partial<Props>) {
    const defaultProps: Props = {
        tasks: [],
        deleteTask: () => {},
        finishTask: () => {}
    }

    return render(
        <TaskList {...defaultProps} {...props} />
    );
}

describe('TaskList', () => {
    test('Should render component', () => {
        const { container } = renderTaskList({});
        expect(container.querySelector('.taskList'));
    });

    test('Should render tasks', () => {
        const tasks = [
            { id: 1, name: 'Example A', status: false }
        ]
        const { getByText } = renderTaskList({ tasks });
        expect('Example A');
    });
});