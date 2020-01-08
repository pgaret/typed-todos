import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskRow from './TaskRow';
import { Props } from './types';
import styles from './TaskRow.module.scss';

function renderTask(props: Partial<Props>) {
    const defaultProps: Props = {
        task: { id: 1, name: 'Test', status: false },
        deleteTask: () => {},
        finishTask: () => {}
    }

    return render(
        <TaskRow {...defaultProps} {...props} />
    );
}

describe('TaskRow', () => {
    test('Should render component with task details', () => {
        const { container, getByText } = renderTask({});
        expect(container.querySelector(`.${styles.row}`));
        expect(getByText('Test')).toBeInTheDocument();
        expect(getByText('Finish')).toBeInTheDocument();
        expect(getByText('Delete')).toBeInTheDocument();
    });

    test('Should show task as finished if finished', () => {
        const finishedTask = {
            id: 2, name: 'Example', status: true
        };

        const { container, getByText } = renderTask({ task: finishedTask });
        expect(getByText('Completed')).toBeInTheDocument();
    })

    test('Should trigger deleteTask on button click', () => {
        const deleteTask = jest.fn();

        const { container, getByText } = renderTask({ deleteTask: deleteTask });
        fireEvent.click(getByText('Delete'));
        expect(deleteTask).toHaveBeenCalledTimes(1);
        expect(deleteTask).toHaveBeenCalledWith(1);
    })
    
    test('Should trigger finishTask on button click', () => {
        const finishTask = jest.fn();

        const { container, getByText } = renderTask({ finishTask: finishTask });
        fireEvent.click(getByText('Finish'));
        expect(finishTask).toHaveBeenCalledTimes(1);
        expect(finishTask).toHaveBeenCalledWith(1);
    })
});